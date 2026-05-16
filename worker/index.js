/**
 * Goldsphere Form Relay — Cloudflare Worker
 *
 * Security layers:
 *   1. CORS origin allowlist         — only your whitelisted domains can call this
 *   2. X-API-Key header              — shared secret stored in Cloudflare, never in git
 *   3. Resend API key is server-side — never reaches the browser
 *   4. Honeypot field                — silent drop for bots
 *   5. Input validation              — required fields, email format, length caps
 *   6. Rate limiting                 — configured via Cloudflare dashboard rule
 *
 * Secrets to set via `wrangler secret put` or Cloudflare dashboard:
 *   RESEND_API_KEY   — from resend.com
 *   API_KEY          — random string you generate, also added to each client site
 *   ALLOWED_ORIGINS  — comma-separated, e.g. "bodyalignment.co.za,localhost:3000"
 *   FROM_EMAIL       — e.g. "forms@goldsphere.co.za"
 */

export default {
  async fetch(request, env) {

    const origin = request.headers.get("Origin") || "";

    // ── CORS preflight ──────────────────────────────────────────────────────
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      });
    }

    // ── Method guard ────────────────────────────────────────────────────────
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    // ── Origin check ────────────────────────────────────────────────────────
    const allowedOrigins = (env.ALLOWED_ORIGINS || "").split(",").map((o) => o.trim());
    const originAllowed = allowedOrigins.some(
      (allowed) => origin === allowed || origin.endsWith("." + allowed)
    );
    if (!originAllowed) {
      return json({ error: "Forbidden" }, 403, origin);
    }

    // ── API key check ───────────────────────────────────────────────────────
    const apiKey = request.headers.get("X-API-Key");
    if (!apiKey || apiKey !== env.API_KEY) {
      return json({ error: "Unauthorized" }, 401, origin);
    }

    // ── Parse body ──────────────────────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400, origin);
    }

    // ── Honeypot — silently succeed so bots think they submitted ────────────
    if (body._honey && body._honey.length > 0) {
      return json({ success: true }, 200, origin);
    }

    // ── Input validation ────────────────────────────────────────────────────
    const { to, name, email, message } = body;

    if (!to || !name || !email || !message) {
      return json({ error: "Missing required fields" }, 400, origin);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(to)) {
      return json({ error: "Invalid email address" }, 400, origin);
    }

    if (name.length > 120 || message.length > 5000) {
      return json({ error: "Input too long" }, 400, origin);
    }

    // ── Build email HTML ────────────────────────────────────────────────────
    const rows = [
      ["Name", name],
      ["Email", email],
      ["Phone", body.phone || "—"],
      body.intake ? ["Intake", body.intake] : null,
      body.subject ? ["Subject", body.subject] : null,
      ["Message", message.replace(/\n/g, "<br>")],
    ]
      .filter(Boolean)
      .map(([label, value]) => `<tr>
        <td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;white-space:nowrap">${label}</td>
        <td style="padding:6px 0">${value}</td>
      </tr>`)
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="margin-bottom:20px">New enquiry from ${name}</h2>
        <table style="border-collapse:collapse;width:100%">${rows}</table>
      </div>`;

    // ── Send via Resend ─────────────────────────────────────────────────────
    let resendRes;
    try {
      resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: [to],
          reply_to: email,
          subject: `New enquiry — ${name}`,
          html,
        }),
      });
    } catch {
      return json({ error: "Failed to reach mail service" }, 502, origin);
    }

    if (!resendRes.ok) {
      return json({ error: "Failed to send email" }, 500, origin);
    }

    return json({ success: true }, 200, origin);
  },
};

// ── Helpers ─────────────────────────────────────────────────────────────────

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-API-Key",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

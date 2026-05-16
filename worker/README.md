# Goldsphere Form Relay

Cloudflare Worker that securely forwards contact form submissions via Resend.
Deploy once — use for every client forever.

## One-time setup

### 1. Accounts needed
- [Cloudflare](https://cloudflare.com) — you already have this
- [Resend](https://resend.com) — free, 3 000 emails/month

### 2. Verify your sending domain in Resend
In the Resend dashboard add `goldsphere.co.za` and add the SPF/DKIM DNS records
it gives you. This makes emails land in inbox, not spam.

### 3. Install Wrangler (Cloudflare CLI)
```
npm install -g wrangler
wrangler login
```

### 4. Deploy the worker
```
cd worker
wrangler deploy
```

### 5. Set secrets (never committed to git)
```
wrangler secret put RESEND_API_KEY
# paste your Resend API key

wrangler secret put API_KEY
# paste any random string, e.g. output of: openssl rand -hex 32

wrangler secret put ALLOWED_ORIGINS
# paste comma-separated domains, e.g: bodyalignment.co.za,localhost:3000

wrangler secret put FROM_EMAIL
# paste: Website Forms <forms@goldsphere.co.za>
```

### 6. Add custom domain (optional but recommended)
In Cloudflare dashboard → Workers → your worker → Triggers → Custom Domain
Add: `forms.goldsphere.co.za`

### 7. Add a Rate Limiting rule
Cloudflare dashboard → your domain → Security → WAF → Rate Limiting Rules
- Name: Form relay throttle
- Path: `/` (or your worker route)
- Threshold: 5 requests per 10 minutes per IP
- Action: Block

## Per-client setup (30 seconds)

For each new client site, add two environment variables:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://forms.goldsphere.co.za
NEXT_PUBLIC_FORM_API_KEY=your-api-key-here
```

Add the client's domain to `ALLOWED_ORIGINS` in the Worker secrets:
```
wrangler secret put ALLOWED_ORIGINS
# newclient.co.za,bodyalignment.co.za,localhost:3000
```

That's it. The `to` email is set per-form in the code — no Worker changes needed.

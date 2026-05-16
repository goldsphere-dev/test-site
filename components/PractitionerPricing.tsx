import { getPricing } from "@/data/pricing";

function fmt(n: number): string {
  if (n >= 1000) {
    return `${Math.floor(n / 1000)} ${(n % 1000).toString().padStart(3, "0")}`;
  }
  return n.toString();
}

function CheckItem({ text, light }: { text: string; light?: boolean }) {
  return (
    <li className={`flex items-start gap-2 text-sm ${light ? "text-white/80" : "text-gray-dark"}`}>
      <svg
        className={`w-4 h-4 mt-0.5 shrink-0 ${light ? "text-white/60" : "text-brand-red"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  );
}

function WAButton({
  whatsapp,
  firstName,
  label,
  dark,
}: {
  whatsapp: string;
  firstName: string;
  label: string;
  dark?: boolean;
}) {
  const msg = encodeURIComponent(
    `Hi ${firstName}, I found you on the Body Alignment website. I'd like to book a session.`
  );
  return (
    <a
      href={`https://wa.me/${whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-auto flex items-center justify-center gap-2 w-full rounded-full py-3 text-sm font-semibold transition-all ${
        dark
          ? "bg-white text-charcoal hover:bg-white/90"
          : "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
      }`}
    >
      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.375l-.36-.214-3.727.977.995-3.632-.235-.373A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
      </svg>
      {label}
    </a>
  );
}

interface Props {
  slug: string;
  firstName: string;
  whatsapp?: string;
}

export default function PractitionerPricing({ slug, firstName, whatsapp }: Props) {
  if (!whatsapp) return null;

  const p = getPricing(slug);
  const savings = p.sessionPrice * p.packageSessions - p.packagePrice;

  const cards = [
    { id: "session", show: true },
    { id: "package", show: p.showPackage },
    { id: "voucher", show: p.showVoucher },
  ].filter((c) => c.show).length;

  const gridCols =
    cards === 1 ? "grid-cols-1 max-w-sm" : cards === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-2xl" : "grid-cols-1 sm:grid-cols-3 max-w-4xl";

  return (
    <section className="py-20 px-4 bg-offwhite">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal mb-3">Session Fees</h2>
          <p className="text-gray-mid text-sm">
            No hidden costs. Pay per session or save with a package. All sessions by appointment.
          </p>
        </div>

        <div className={`grid ${gridCols} gap-6 mx-auto`}>
          {/* ── Single Session ── */}
          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col shadow-sm">
            <h3 className="text-xl font-semibold text-charcoal text-center mb-4 font-serif italic">
              Single Session
            </h3>
            <div className="flex items-start justify-center gap-0.5 mb-1">
              <span className="text-sm font-bold text-charcoal mt-2 leading-none">R</span>
              <span className="text-6xl font-bold text-charcoal leading-none">{fmt(p.sessionPrice)}</span>
            </div>
            <p className="text-gray-mid text-xs text-center mb-6">
              per session · {p.sessionDuration}
            </p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {p.sessionFeatures.map((f) => (
                <CheckItem key={f} text={f} />
              ))}
            </ul>
            <WAButton whatsapp={whatsapp} firstName={firstName} label="Book Now" />
          </div>

          {/* ── Package ── */}
          {p.showPackage && (
            <div className="bg-charcoal rounded-2xl p-8 flex flex-col shadow-lg relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-semibold text-white text-center mb-4 font-serif italic">
                {p.packageSessions}-Session Package
              </h3>
              <div className="flex items-start justify-center gap-0.5 mb-1">
                <span className="text-sm font-bold text-white mt-2 leading-none">R</span>
                <span className="text-6xl font-bold text-white leading-none">{fmt(p.packagePrice)}</span>
              </div>
              {savings > 0 && (
                <p className="text-white/60 text-xs text-center mb-6">
                  save R{savings} · {p.packageSubtitle}
                </p>
              )}
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.packageFeatures.map((f) => (
                  <CheckItem key={f} text={f} light />
                ))}
              </ul>
              <WAButton whatsapp={whatsapp} firstName={firstName} label="Book Package" dark />
            </div>
          )}

          {/* ── Vouchers ── */}
          {p.showVoucher && (
            <div className="bg-white rounded-2xl border border-border p-8 flex flex-col shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal text-center mb-4 font-serif italic">
                Vouchers Available
              </h3>
              <div className="flex items-start justify-center gap-0.5 mb-1">
                <span className="text-sm font-bold text-charcoal mt-2 leading-none">R</span>
                <span className="text-6xl font-bold text-charcoal leading-none">{fmt(p.voucherPrice)}</span>
              </div>
              <p className="text-gray-mid text-xs text-center mb-4">per session voucher</p>

              {/* Gift card visual */}
              <div className="rounded-xl bg-charcoal text-white px-4 py-3 mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Gift Voucher</p>
                  <p className="text-sm font-bold text-white leading-tight">Body Alignment</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {p.voucherFeatures.map((f) => (
                  <CheckItem key={f} text={f} />
                ))}
              </ul>
              <WAButton whatsapp={whatsapp} firstName={firstName} label="Book Now" />
            </div>
          )}
        </div>

        {/* Footer nudge */}
        <p className="text-center text-sm text-gray-mid mt-10">
          Not sure which option suits you?{" "}
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi ${firstName}, I'd like to find out more about your Body Alignment session options.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-charcoal hover:text-brand-red transition-colors"
          >
            Ask {firstName} via WhatsApp
          </a>{" "}
          — no obligation, just a conversation.
        </p>
      </div>
    </section>
  );
}

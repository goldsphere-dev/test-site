import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practitioners } from "@/data/practitioners";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practitioners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = practitioners.find((pr) => pr.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `Book a Body Alignment session with ${p.name} in ${p.location}. Non-invasive pain relief — no medication, no surgery.`,
  };
}

const conditions = [
  { id: "back-pain", label: "Back Pain" },
  { id: "neck-shoulders", label: "Neck & Shoulders" },
  { id: "headaches", label: "Headaches" },
  { id: "sciatica", label: "Sciatica" },
  { id: "stress-fatigue", label: "Stress & Fatigue" },
  { id: "posture", label: "Poor Posture" },
];

export default async function PractitionerPage({ params }: Props) {
  const { slug } = await params;
  const p = practitioners.find((pr) => pr.slug === slug);
  if (!p) notFound();

  const firstName = p.name.split(" ")[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/practitioners"
            className="text-sm text-brand-red hover:underline underline-offset-4 font-medium inline-flex items-center gap-1 mb-8"
          >
            ← All Practitioners
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Image */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-light aspect-[4/3] lg:aspect-auto lg:h-[480px]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl text-gray-mid/30 font-bold">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                )}
                {p.isNew && (
                  <span className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    New
                  </span>
                )}
                {p.isRIP && (
                  <span className="absolute top-4 right-4 bg-gray-mid text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    In Memoriam
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <div className="flex gap-0.5 text-brand-red mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-mid ml-2 self-center">
                  Certified Practitioner
                </span>
              </div>

              <h1 className="text-3xl font-bold text-charcoal mb-1">
                {p.name}
              </h1>
              <p className="text-sm text-gray-mid mb-1">
                Body Alignment Practitioner
              </p>
              <div className="space-y-1 mb-6">
                <p className="text-sm text-gray-dark flex items-center gap-1">
                  <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {p.location}
                </p>
                {p.cell && (
                  <p className="text-sm text-gray-dark flex items-center gap-1">
                    <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {p.cell}
                  </p>
                )}
              </div>

              {/* Contact actions */}
              <div className="space-y-3">
                {p.whatsapp && !p.isRIP && (
                  <WhatsAppButton
                    number={p.whatsapp}
                    label={`WhatsApp ${firstName}`}
                    message={`Hi ${firstName}, I found you on the Body Alignment website. I'd like to book a session.`}
                  />
                )}
                {p.cell && (
                  <a
                    href={`tel:${p.cell.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 border-2 border-charcoal text-charcoal hover:bg-gray-light font-semibold rounded-xl px-5 py-3 transition-all text-sm w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call {firstName}
                  </a>
                )}
                {p.facebook && (
                  <a
                    href={p.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-dark hover:text-brand-red transition-colors justify-center py-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {!p.isRIP && (
        <section className="bg-[#2a2a2a] py-8 border-y border-white/10">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "45 to 60 min", label: "Session" },
              { value: "R750*", label: "Per Session" },
              { value: "100%", label: "Fully Clothed" },
              { value: "Non-Invasive", label: "Treatment" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className="w-6 h-0.5 bg-brand-red rounded-full mb-1" />
                <div className="text-white font-bold text-xl">
                  {s.value}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-[10px] mt-4">
            *Pricing may vary. Confirm with practitioner.
          </p>
        </section>
      )}

      {/* Bio */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              About {firstName}
            </h2>
            <div className="text-gray-dark leading-relaxed space-y-4">
              {p.bio.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conditions */}
      {!p.isRIP && (
        <section className="py-16 px-4 bg-gray-light">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                What {firstName} Can Help With
              </h2>
              <div className="flex flex-wrap gap-3">
                {conditions.map((c) => (
                  <Link
                    key={c.id}
                    href={`/conditions#${c.id}`}
                    className="bg-white border border-border hover:border-brand-red/30 hover:bg-red-light text-charcoal text-sm font-medium px-4 py-2.5 rounded-full transition-all"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* What to expect */}
      {!p.isRIP && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-charcoal mb-8">
                What to Expect in Your First Session
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Arrive & Consult",
                    body: `You'll have a brief conversation with ${firstName} about your symptoms, medical history, and what you hope to achieve.`,
                  },
                  {
                    step: "2",
                    title: "Assessment & Treatment",
                    body: `${firstName} will assess your posture and then apply gentle, targeted pressure to the muscles along your spine and affected areas. The treatment typically lasts 45 to 60 minutes.`,
                  },
                  {
                    step: "3",
                    title: "Post-Session",
                    body: "You may feel immediate relief, lightness, or increased mobility. Drink plenty of water and allow your body time to continue the healing process.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-red-light flex items-center justify-center text-brand-red font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-dark text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gray-light rounded-2xl p-5 border border-border">
                <p className="text-sm text-gray-dark text-center">
                  You remain fully clothed throughout. No oils, no cracking, no
                  pain.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Google Maps */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Location</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title={`${p.location} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(p.location + ", South Africa")}&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact form */}
      {!p.isRIP && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-charcoal mb-2 text-center">
                Book a Session with {firstName}
              </h2>
              <p className="text-gray-mid text-sm text-center mb-8">
                Fill in the form below and {firstName} will get back to you
                shortly.
              </p>
              <ContactForm
                practitionerName={p.name}
                defaultMessage={`Hi ${firstName}, I'd like to book a Body Alignment session.`}
              />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Sticky mobile bottom bar */}
      {!p.isRIP && p.whatsapp && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border px-4 py-3 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <a
            href={`https://wa.me/${p.whatsapp}?text=${encodeURIComponent(`Hi ${firstName}, I found you on the Body Alignment website. I'd like to book a session.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl py-3 text-sm text-center transition-all"
          >
            WhatsApp
          </a>
          {p.cell && (
            <a
              href={`tel:${p.cell.replace(/\s/g, "")}`}
              className="flex-1 bg-charcoal hover:bg-charcoal/90 text-white font-semibold rounded-xl py-3 text-sm text-center transition-all"
            >
              Call
            </a>
          )}
        </div>
      )}
    </>
  );
}

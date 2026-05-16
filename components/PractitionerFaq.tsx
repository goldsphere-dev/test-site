"use client";

import { useState } from "react";

interface Practitioner {
  name: string;
  whatsapp?: string;
  cell?: string;
  location: string;
}

function buildFaqs(p: Practitioner, firstName: string) {
  return [
    {
      question: `How do I book a session with ${firstName}?`,
      answer: `The easiest way to book is to send ${firstName} a WhatsApp message directly${p.whatsapp ? ` on ${p.cell ?? "the number listed above"}` : ""}. ${firstName} will confirm availability and arrange a time that works for you. Sessions typically run 45 to 60 minutes.`,
    },
    {
      question: `Where does ${firstName} practice?`,
      answer: `${firstName} is based in ${p.location}, South Africa. Please reach out directly to confirm the exact address and any parking or access details before your visit.`,
    },
    {
      question: `What happens during my first session with ${firstName}?`,
      answer: `${firstName} will begin with a brief consultation to understand your symptoms, medical history, and what you hope to achieve. This is followed by a postural assessment and then the treatment itself — gentle, sustained pressure applied to specific muscle groups along the spine and areas of tension. You remain fully clothed throughout. Most clients notice a difference after this very first visit.`,
    },
    {
      question: `Is the treatment with ${firstName} painful?`,
      answer: `No. Body Alignment as practised by ${firstName} is entirely non-invasive and gentle. There is no cracking, no forceful manipulation, and no pain. You may feel some tenderness in areas where muscles are particularly tight, but this is temporary and a normal part of the release process.`,
    },
    {
      question: `How much does a session with ${firstName} cost?`,
      answer: `As a general guide, sessions are priced from R500 upwards for a 45-minute treatment. Pricing may vary depending on the duration of your session and your specific needs. Please confirm ${firstName}'s current rates directly when you make your booking.`,
    },
    {
      question: `How many sessions will I need?`,
      answer: `This varies from person to person and depends on the nature and severity of your condition. Many of ${firstName}'s clients experience significant relief after just one or two sessions. For chronic or long-standing conditions, a series of sessions is often recommended. ${firstName} will discuss a treatment plan with you after your initial assessment.`,
    },
    {
      question: `Do I need to undress for the treatment?`,
      answer: `No. ${firstName} performs Body Alignment with you fully clothed. There are no oils, creams, or equipment involved. Simply wear comfortable, loose clothing that allows you to relax and move freely.`,
    },
    {
      question: `What conditions can ${firstName} help with?`,
      answer: `${firstName} works with a wide range of musculoskeletal and stress-related conditions including back and lower back pain, neck and shoulder tension, headaches and migraines, sciatica, poor posture, stress and fatigue, elbow and arm pain, and knee and ankle discomfort. The underlying principle is the same in every case: releasing the muscular tension that pulls the skeleton out of alignment.`,
    },
  ];
}

interface Props {
  practitioner: Practitioner;
}

export default function PractitionerFaq({ practitioner }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const firstName = practitioner.name.split(" ")[0];
  const faqs = buildFaqs(practitioner, firstName);

  const waMessage = encodeURIComponent(
    `Hi ${firstName}, I have a question about Body Alignment.`
  );
  const waHref = practitioner.whatsapp
    ? `https://wa.me/${practitioner.whatsapp}?text=${waMessage}`
    : null;

  return (
    <section className="py-20 px-4 bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-mid mb-4">
              Common Questions
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
              Everything you need to know before booking with {firstName}
            </h2>
            <p className="text-gray-dark leading-relaxed mb-8">
              Body Alignment is a gentle and accessible therapy for most people.
              Here are answers to the questions {firstName} is asked most often.
              If yours isn&apos;t here, simply reach out directly via WhatsApp.
            </p>
            {waHref && (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/80 text-white font-semibold rounded-xl px-6 py-3 transition-all text-sm"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask {firstName} directly
              </a>
            )}
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border border-border rounded-2xl bg-white transition-all hover:border-gray-mid/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-charcoal text-sm pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`w-6 h-6 shrink-0 flex items-center justify-center rounded-full border border-border text-gray-mid transition-transform duration-200 text-lg leading-none ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-dark text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

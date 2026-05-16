"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Body Alignment?",
    answer:
      "Body Alignment is a South African-developed complementary health technique that promotes the body's natural capacity to heal and realign itself, without medication, surgery or pain. Through gentle, targeted stimulation, muscles relax and release deep-held tension, allowing the skeletal system to naturally return to proper alignment.",
  },
  {
    question: "What should I expect during my first session?",
    answer:
      "Your first session begins with a thorough postural assessment and discussion about your symptoms. Your practitioner will then apply gentle, sustained pressure to specific muscle groups, focusing on the spinal column and areas of tension. You remain fully clothed throughout. Sessions typically last 45 to 60 minutes, and most clients notice a difference after the very first visit.",
  },
  {
    question: "Is Body Alignment painful?",
    answer:
      "No. Body Alignment is a gentle, non-invasive treatment. There is no cracking, no forceful manipulation, and no pain involved. You may feel some tenderness in areas where muscles are particularly tight, but this is temporary and part of the healing process.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on the nature and severity of your condition. Many clients experience significant relief after just one session. For chronic or long-standing issues, a series of sessions may be recommended. Your practitioner will discuss a treatment plan tailored to your specific needs.",
  },
  {
    question: "Do I need to undress for the treatment?",
    answer:
      "No. Body Alignment is performed fully clothed. There are no oils, creams, or lotions used. Simply wear comfortable clothing that allows you to relax.",
  },
  {
    question: "What conditions can Body Alignment help with?",
    answer:
      "Body Alignment is effective for a wide range of conditions including back pain, neck and shoulder tension, headaches and migraines, sciatica, poor posture, stress and fatigue, joint pain, sports injuries, and more. It addresses the root cause of your pain: muscular tension pulling the skeleton out of alignment, rather than simply masking symptoms.",
  },
  {
    question: "Is Body Alignment covered by medical aid?",
    answer:
      "Body Alignment is classified as a complementary therapy. While some medical aids may offer partial coverage under wellness benefits, this varies by provider. We recommend checking with your specific medical aid for details.",
  },
  {
    question: "How much does a session cost?",
    answer:
      "Session pricing varies by practitioner, area, and duration. As a general guide, you can expect to pay upwards of R500 for a 45-minute session. Please contact your chosen practitioner directly to confirm their current rates.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-2xl transition-all ${
              isOpen
                ? "border-brand-red/20 bg-red-light/30 shadow-sm"
                : "border-border bg-white hover:border-border"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-semibold text-charcoal text-sm pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 shrink-0 text-brand-red transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
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
  );
}

"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

// Fallback testimonials shown when a practitioner has none of their own yet
const fallbackTestimonials: Testimonial[] = [
  {
    quote: "After the very first session the difference was incredible. I walked in with a stiff neck and walked out standing straight. Absolutely remarkable.",
    author: "Jacques B.",
    location: "Western Cape",
  },
  {
    quote: "My sciatica is 90% better after just three sessions. I had suffered for over two years with no relief. Body Alignment changed my life.",
    author: "Local client",
    location: "Western Cape",
  },
  {
    quote: "No medication, no surgery, no side effects — just real relief. Body Alignment gave me my life back after years of suffering.",
    author: "Returning client",
    location: "Cape Town",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-red mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface Props {
  testimonials?: Testimonial[];
  firstName: string;
}

export default function PractitionerTestimonials({ testimonials, firstName }: Props) {
  const items = (testimonials && testimonials.length > 0) ? testimonials : fallbackTestimonials;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const t = items[index];

  return (
    <section className="py-16 px-4 bg-charcoal">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          What Clients Say About {firstName}
        </h2>

        <div className="relative">
          {/* Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[200px] flex flex-col">
            <Stars />
            <p className="text-gray-dark text-base leading-relaxed italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-charcoal font-semibold text-sm">{t.author}</p>
              {t.location && (
                <p className="text-gray-mid text-xs mt-0.5">{t.location}</p>
              )}
            </div>
          </div>

          {/* Arrows */}
          {items.length > 1 && (
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === index ? "bg-white w-5" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

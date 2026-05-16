"use client";

import { useEffect, useState } from "react";
import { getAllTestimonials } from "@/data/testimonials";

const allTestimonials = getAllTestimonials();

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function StarRating() {
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

export default function TestimonialsCarousel() {
  const [items, setItems] = useState(allTestimonials);

  useEffect(() => {
    setItems(shuffle(allTestimonials));
  }, []);

  const looped = [...items, ...items];

  return (
    <section className="bg-charcoal py-20 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 36s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Real Results from Real People
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto">
          Hear from clients whose lives have been changed by Body Alignment therapy.
        </p>
      </div>

      <div className="marquee-track flex gap-6" style={{ width: "max-content" }}>
        {looped.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-7 shadow-sm flex flex-col"
            style={{ width: "340px" }}
          >
            <StarRating />
            <p className="text-gray-dark text-sm leading-relaxed italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-charcoal font-semibold text-sm">{t.author}</p>
              <p className="text-gray-mid text-xs">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

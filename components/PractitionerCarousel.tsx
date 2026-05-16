"use client";

import { useState, useEffect, useRef } from "react";
import type { Practitioner } from "@/data/practitioners";
import PractitionerCard from "./PractitionerCard";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PractitionerCarousel({ practitioners }: { practitioners: Practitioner[] }) {
  const [shuffled, setShuffled] = useState(practitioners);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const perPage = 4;
  const total = shuffled.length;
  const totalPages = Math.ceil(total / perPage);

  useEffect(() => {
    setShuffled(shuffle(practitioners));
  }, []);

  // Auto-rotate every 4 seconds, loops back to start, pauses on hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => {
        const nextIndex = i + perPage;
        return nextIndex >= total ? 0 : nextIndex;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const canPrev = index > 0;
  const canNext = index + perPage < total;

  const prev = () => setIndex((i) => Math.max(0, i - perPage));
  const next = () => setIndex((i) => (i + perPage >= total ? 0 : i + perPage));

  const visible = shuffled.slice(index, index + perPage);
  const pageNum = Math.floor(index / perPage) + 1;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {visible.map((p) => (
          <PractitionerCard key={p.slug} p={p} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous practitioners"
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
            canPrev
              ? "border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-sm text-gray-mid">
          {pageNum} / {totalPages}
        </span>

        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next practitioners"
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
            canNext
              ? "border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

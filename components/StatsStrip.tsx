"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "23+", label: "Certified Practitioners" },
  { value: "100%", label: "Non-Invasive Treatment" },
  { value: "45 to 60 min", label: "Per Session" },
  { value: "South Africa", label: "Wide Network" },
];

export default function StatsStrip() {
  return (
    <section className="bg-charcoal py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-brand-red font-bold text-2xl sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

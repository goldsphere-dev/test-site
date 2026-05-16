import type { Metadata } from "next";
import Link from "next/link";
import { practitioners } from "@/data/practitioners";
import PractitionerCarousel from "@/components/PractitionerCarousel";
import StatsStrip from "@/components/StatsStrip";
import HowItWorks from "@/components/HowItWorks";
import ConditionCard from "@/components/ConditionCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import InstagramFeed from "@/components/InstagramFeed";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Body Alignment South Africa | Non-Invasive Pain Relief",
  description:
    "South Africa's leading network of certified Body Alignment practitioners. Restore balance, eliminate pain, and reclaim your life — naturally.",
};


const conditions = [
  {
    id: "back-pain",
    title: "Back & Lower Back Pain",
    description: "The most common reason people seek Body Alignment therapy.",
    icon: <img src="/52.png" alt="Back and hips" className="w-16 h-16 object-contain" />,
  },
  {
    id: "neck-shoulders",
    title: "Neck & Shoulder Tension",
    description: "Desk work, driving, and stress lock up your cervical spine.",
    icon: <img src="/51.png" alt="Neck and shoulder" className="w-16 h-16 object-contain" />,
  },
  {
    id: "headaches",
    title: "Headaches & Migraines",
    description: "Often rooted in muscular tension at the base of the skull.",
    icon: <img src="/50.png" alt="Headaches" className="w-16 h-16 object-contain" />,
  },
  {
    id: "sciatica",
    title: "Sciatica & Nerve Pain",
    description: "Burning, shooting pain down the leg, often dramatically relieved.",
    icon: <img src="/54.png" alt="Sciatica and nerve pain" className="w-16 h-16 object-contain" />,
  },
  {
    id: "stress-fatigue",
    title: "Stress & Fatigue",
    description: "Chronic stress stores itself physically in your muscles.",
    icon: <img src="/53.png" alt="Stress and fatigue" className="w-16 h-16 object-contain" />,
  },
  {
    id: "posture",
    title: "Poor Posture",
    description: "Uneven hips, rounded shoulders, forward head. All treatable.",
    icon: <img src="/55.png" alt="Poor posture" className="w-16 h-16 object-contain" />,
  },
  {
    id: "elbows-arms",
    title: "Elbows & Arms",
    description: "Tennis elbow, golfer's elbow, carpal tunnel — all linked to muscular tension.",
    icon: <img src="/51.png" alt="Elbows and arms" className="w-16 h-16 object-contain" />,
  },
  {
    id: "knees-ankles",
    title: "Knees & Ankles",
    description: "Knee and ankle pain often traces back to hip and pelvic misalignment.",
    icon: <img src="/54.png" alt="Knees and ankles" className="w-16 h-16 object-contain" />,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="min-h-screen bg-offwhite relative flex items-center overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, #3D3D3D08 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-light text-brand-red text-xs font-semibold rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Body Alignment Association of South Africa
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal mb-4">
              <span className="text-brand-red">BODY</span> ALIGNMENT
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-charcoal leading-tight mb-6">
              Restore Balance.
              <br />
              Ease Pain.
              <br />
              <span className="text-brand-red">Reclaim Your Life.</span>
            </h1>
            <p className="text-gray-dark text-lg leading-relaxed max-w-lg mb-8">
              South Africa&apos;s leading network of certified Body Alignment
              practitioners, helping you heal naturally without medication or
              surgery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/practitioners"
                className="bg-brand-red hover:bg-red-dark text-white font-semibold rounded-xl px-7 py-3.5 transition-all text-sm text-center"
              >
                Find a Practitioner →
              </Link>
              <Link
                href="#how-it-works"
                className="text-brand-red font-semibold hover:underline underline-offset-4 text-sm px-2 py-3.5 text-center"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-mid">
              <span>✓ {practitioners.filter(p => !p.isRIP).length}+ Practitioners</span>
              <span>✓ South Africa Wide</span>
              <span>✓ No Medication Required</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/NEW IG post size 1080 (3).png"
                alt="Body Alignment — spine and muscle anatomy"
                className="w-full h-auto"
              />
            </div>
            {/* Floating card — desktop only to avoid overflow on mobile */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-border max-w-[200px]">
              <div className="flex gap-0.5 text-brand-red mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal font-semibold text-xs">
                &ldquo;Life-changing treatment!&rdquo;
              </p>
              <p className="text-gray-mid text-[10px] mt-0.5">Client, Malmesbury</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <StatsStrip />

      {/* ───── SYMPTOM ENTRY ───── */}
      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-3">
              What are you experiencing?
            </h2>
            <p className="text-gray-mid text-center max-w-xl mx-auto mb-12">
              Body Alignment helps with a wide range of conditions. Find your
              symptoms below.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.08}>
                <ConditionCard
                  id={c.id}
                  icon={c.icon}
                  title={c.title}
                  description={c.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHAT IS BODY ALIGNMENT ───── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://bodyalignment.co.za/wp-content/uploads/2024/11/313396490_522109666596590_475694032180513047_n.jpg"
                alt="Body Alignment treatment session"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                What is Body Alignment?
              </h2>
              <div className="space-y-4 text-gray-dark leading-relaxed">
                <p>
                  In our fast-paced lifestyle, stress accumulates in the body
                  until it results in pain. Long hours at a computer, driving,
                  poor posture, and emotional trauma can cause muscles to develop
                  abnormal sustained contractions, known as{" "}
                  <strong className="text-charcoal">hypertonic spasms</strong>.
                </p>
                <p>
                  These hard muscles pull vertebrae and skeletal joints out of
                  alignment, compressing nerves and causing pain, numbness, and
                  reduced organ function. Drugs may mask the problem temporarily,
                  but the root cause remains.
                </p>
              </div>
              <div className="mt-6 border-l-4 border-brand-red pl-5 py-2">
                <p className="text-brand-red font-semibold text-lg leading-relaxed italic">
                  &ldquo;Body Alignment stimulates the muscles to relax, heal
                  and unravel the tension stored in deep layers of the
                  muscles.&rdquo;
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 text-brand-red font-semibold text-sm hover:underline underline-offset-4"
              >
                Read More About Body Alignment →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* ───── FEATURED PRACTITIONERS ───── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-3">
              Meet Our Practitioners
            </h2>
            <p className="text-gray-mid text-center max-w-xl mx-auto mb-12">
              {practitioners.filter(p => !p.isRIP).length} certified practitioners across South Africa. Find one near
              you.
            </p>
          </AnimatedSection>
          <PractitionerCarousel practitioners={practitioners.filter(p => !p.isRIP)} />
          <div className="text-center mt-10">
            <Link
              href="/practitioners"
              className="bg-brand-red hover:bg-red-dark text-white font-semibold rounded-xl px-7 py-3.5 transition-all text-sm inline-block"
            >
              Find a Practitioner Near You →
            </Link>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <TestimonialsCarousel />

      {/* ───── INSTAGRAM ───── */}
      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-3">
              Follow Our Journey
            </h2>
            <p className="text-gray-mid text-center max-w-xl mx-auto mb-12">
              @bodyalignment_association on Instagram
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <InstagramFeed />
          </AnimatedSection>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="bg-brand-red py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Feel the Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Find a certified Body Alignment practitioner in your area and book
            your first session today.
          </p>
          <Link
            href="/practitioners"
            className="bg-white text-brand-red hover:bg-red-light font-semibold rounded-xl px-8 py-3.5 transition-all text-sm inline-block"
          >
            Find a Practitioner Near You
          </Link>
        </div>
      </section>
    </>
  );
}

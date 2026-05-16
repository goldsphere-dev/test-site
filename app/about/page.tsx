import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { practitioners } from "@/data/practitioners";

const count = practitioners.filter((p) => !p.isRIP).length;

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Body Alignment is, how it works, and how it can help you live pain-free. Discover the Body Alignment Association of South Africa.",
};

const principles = [
  {
    title: "Root Cause",
    description:
      "We address the muscular holding patterns that cause skeletal misalignment, not just the symptoms.",
  },
  {
    title: "Non-Invasive",
    description:
      "No medication, no surgery, no cracking. Gentle, sustained pressure that encourages the body to heal itself.",
  },
  {
    title: "Whole Body",
    description:
      "Every system is connected. By restoring alignment, we improve nerve flow, circulation, and organ function.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=85&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="relative max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Body Alignment
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A balanced spine means a healthy body. Understanding the science
            behind South Africa&apos;s leading complementary therapy.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal mb-8">Our Story</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-gray-dark leading-relaxed">
              <p>
                In our ever increasing fast-paced and complex lifestyle,
                sometimes just getting through the day causes stress within the
                body that we are unaware of, until the accumulated buildup of
                stress results in the body feeling pain.
              </p>
              <p>
                Long hours behind a computer, driving a car, and often just
                worrying about life in general, may lead to the muscles becoming
                stiff, inflamed and painful. Sometimes the incorrect manner in
                which you exercise, bad posture, physical and/or emotional
                trauma, chemical pollution (food additives and polluted air) may
                cause the muscle to develop an abnormal and sustained contraction
                known as a <strong className="text-charcoal">hypertonic spasm</strong>.
              </p>
              <p>
                Since muscles comprise 2/3 of your body, a muscle in spasm will
                have a direct effect on the nervous and circulatory system and
                thus impact every function of your body. These hard muscles exert
                such a pull on the vertebrae and skeletal joints that the bones
                could subsequently become misaligned. They could also cause wear
                and tear on the cartilage in between the bones, causing disintegration,
                compressed and herniated discs.
              </p>
              <p>
                These misaligned and/or degenerated bones then adversely affect
                the nerves by pinching on them, causing pain and numbness. Pain
                wreaks havoc with our immune system, disrupting the balance
                within the body, undermining our health in general and affecting
                the holistic optimal functioning of the body.
              </p>
              <p>
                Drugs may alleviate the pain or possibly just mask the problem
                for only a while. But then you have to examine the root cause.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 border-l-4 border-brand-red pl-6 py-3">
              <p className="text-brand-red font-semibold text-xl leading-relaxed italic">
                &ldquo;The body keeps the score. By addressing root patterns
                rather than chasing symptoms, the body returns to alignment and
                ease.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BASA */}
      <section className="py-20 px-4 bg-gray-light">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal mb-8">
              The Body Alignment Association of South Africa
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-gray-dark leading-relaxed">
              <p>
                The Body Alignment Association of South Africa (BASA) connects
                trained practitioners across the country, ensuring consistent
                standards of care and ongoing professional development. Founded
                by Janet Yates, the association has grown to include {count}+
                certified practitioners serving communities from Cape Town to the
                Garden Route, the Winelands to the West Coast, and
                internationally in Western Australia.
              </p>
              <p>
                Every BASA-certified practitioner has completed a comprehensive
                3-month training programme covering the principles of Body
                Alignment, practical hands-on technique, and client management.
                This ensures that no matter which practitioner you visit, you
                receive the same high standard of care.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Our Approach
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <div className="bg-gray-light rounded-2xl p-8 border border-border text-center h-full">
                  <div className="w-12 h-12 bg-red-light rounded-full flex items-center justify-center text-brand-red font-bold text-xl mx-auto mb-5">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-gray-light">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              Body Alignment in Practice
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://bodyalignment.co.za/wp-content/uploads/2024/11/313409492_522109719929918_958326532651567349_n.jpg",
              "https://bodyalignment.co.za/wp-content/uploads/2024/11/279965250_5385755371457189_796099243356844957_n.jpg",
              "https://bodyalignment.co.za/wp-content/uploads/2024/11/317241330_538216218319268_2721070637639036423_n.jpg",
              "https://bodyalignment.co.za/wp-content/uploads/2024/11/317088280_538216131652610_6605356891445382573_n.jpg",
            ].map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-sm aspect-square">
                  <img
                    src={src}
                    alt="Body Alignment session"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-red">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practitioners"
              className="bg-white text-brand-red hover:bg-red-light font-semibold rounded-xl px-7 py-3.5 transition-all text-sm inline-block"
            >
              Find a Practitioner
            </Link>
            <Link
              href="/courses"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl px-7 py-3.5 transition-all text-sm inline-block"
            >
              Become a Practitioner
            </Link>
            <a
              href="https://www.instagram.com/bodyalignment_association/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl px-7 py-3.5 transition-all text-sm inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              Follow Us on Socials
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

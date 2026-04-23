import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Become a certified Body Alignment practitioner. 3-month training course — February and September intakes. R17,800. No previous experience required.",
};

const courseIncludes = [
  {
    title: "Principles of Body Alignment",
    description:
      "Theoretical foundation in musculoskeletal anatomy, the science of hypertonic spasms, and the Body Alignment philosophy of root-cause treatment.",
  },
  {
    title: "Practical Application",
    description:
      "Extensive hands-on technique training with real clients under direct supervision. You will develop the skill and confidence to treat independently.",
  },
  {
    title: "Client & Office Management",
    description:
      "Business setup, client communication, consultation processes, record-keeping, and practice management to launch your own successful practice.",
  },
];

const reasons = [
  {
    icon: "✓",
    title: "No Previous Experience Required",
    description:
      "The course is designed for complete beginners. You do not need a medical or healthcare background.",
  },
  {
    icon: "✓",
    title: "Expert Teaching & Guidance",
    description:
      "Learn directly from Janet Yates, founder and head trainer of the Body Alignment Association of South Africa.",
  },
  {
    icon: "✓",
    title: "Limited Places Per Course",
    description:
      "Small class sizes ensure an intimate, hands-on learning environment with personal attention from Janet.",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "url(https://bodyalignment.co.za/wp-content/uploads/2024/11/279965250_5385755371457189_796099243356844957_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              Body Alignment Association of South Africa
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Body Alignment
              <br />
              Practitioner Course
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Looking to start a career in holistic healthcare or interested in
              expanding your existing knowledge?
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://bodyalignment.co.za/wp-content/uploads/2024/11/Screenshot-2024-11-12-at-22.20.55.png"
                alt="Body Alignment practitioner course"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intake dates */}
      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
              Upcoming Intakes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { date: "February 2026", status: "Enrolling Now" },
              { date: "September 2026", status: "Enrolling Now" },
            ].map((intake) => (
              <AnimatedSection key={intake.date}>
                <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    {intake.status}
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    {intake.date}
                  </h3>
                  <p className="text-gray-mid text-sm mb-6">
                    3-month comprehensive practical course
                  </p>
                  <Link
                    href="#enquiry"
                    className="bg-brand-red hover:bg-red-dark text-white font-semibold rounded-xl px-6 py-3 transition-all text-sm inline-block"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Course details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Duration", value: "3 Months" },
                { label: "Course Fee", value: "R17,800" },
                { label: "Location", value: "Somerset West" },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="bg-gray-light rounded-2xl p-6 text-center border border-border"
                >
                  <p className="text-gray-mid text-xs uppercase tracking-wider font-semibold mb-1">
                    {detail.label}
                  </p>
                  <p className="text-charcoal font-bold text-2xl">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Course Includes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courseIncludes.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-gray-light rounded-2xl p-7 border border-border h-full">
                  <div className="w-10 h-10 rounded-full bg-red-light flex items-center justify-center text-brand-red font-bold text-lg mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-charcoal text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why become a practitioner */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">
              Why Become a Practitioner?
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-light flex items-center justify-center text-brand-red font-bold text-lg shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {r.title}
                    </h3>
                    <p className="text-gray-dark text-sm leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate testimonial */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex gap-0.5 justify-center text-brand-red mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-white text-lg leading-relaxed italic mb-4">
              &ldquo;Training with Janet changed my life. Within 3 months I had
              the skills and confidence to start my own practice. The practical
              training is exceptional. You treat real clients under supervision
              from day one.&rdquo;
            </blockquote>
            <p className="text-white/50 text-sm">Graduate, Somerset West</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal mb-2 text-center">
              Course Enquiry
            </h2>
            <p className="text-gray-mid text-sm text-center mb-8">
              Interested? Fill in the form below and Janet will get back to you
              with full course details.
            </p>
            <ContactForm showIntake />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-10 px-4 bg-gray-light">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-gray-mid mb-3">
            For immediate enquiries, contact Janet directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0826868291"
              className="text-charcoal font-medium text-sm hover:text-brand-red transition-colors"
            >
              082 686 8291
            </a>
            <a
              href="mailto:janet.bodyalignment@gmail.com"
              className="text-charcoal font-medium text-sm hover:text-brand-red transition-colors"
            >
              janet.bodyalignment@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

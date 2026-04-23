import type { Metadata } from "next"
import Link from "next/link"
import PractitionerCard from "@/components/PractitionerCard"
import { practitioners } from "@/data/practitioners"

export const metadata: Metadata = {
  title: "Body Alignment South Africa",
  description:
    "A balanced spine means a healthy body. Expert Body Alignment therapy across South Africa.",
}

const testimonials = [
  {
    quote:
      "I started going to body alignment with Janet because of shoulder and back pain from working at a PC for 40 years. Her treatments definitely helped to ease my pain and improved my posture and overall sense of well-being.",
    author: "Janet Yates client",
  },
  {
    quote: "Even after the first treatment I could feel a big change!",
    author: "Jacques Burger",
  },
]

export default function HomePage() {
  const featured = practitioners.filter((p) => !p.isRIP).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            A balanced spine means a healthy body
          </h1>
          <p className="text-emerald-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Body Alignment stimulates the muscles to relax, heal and unravel the tension stored
            in deep layers of the muscles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practitioners"
              className="bg-white text-emerald-800 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Find a Practitioner
            </Link>
            <Link
              href="/about"
              className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What is Body Alignment */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What is Body Alignment?
          </h2>
          <div className="prose prose-emerald max-w-none text-gray-600 space-y-4 text-base leading-relaxed">
            <p>
              In our ever increasing fast paced and complex lifestyle, sometimes just getting
              through the day causes stress within the body that we are unaware of — until the
              accumulated buildup of stress results in the body feeling pain.
            </p>
            <p>
              Long hours behind a computer, driving a car, and often just worrying about life in
              general, may lead to muscles becoming stiff, inflamed and painful. Incorrect
              exercise, bad posture, physical or emotional trauma, and chemical pollution may
              cause a muscle to develop an abnormal sustained contraction known as a{" "}
              <strong>hypertonic spasm</strong>.
            </p>
            <p>
              Since muscles comprise 2/3 of your body, a muscle in spasm will directly affect the
              nervous and circulatory system, impacting every function of your body. These hard
              muscles exert such a pull on the vertebrae and skeletal joints that the bones may
              become misaligned, causing pain, numbness, and wear on cartilage and discs.
            </p>
            <p className="text-emerald-800 font-semibold text-lg">
              Body Alignment stimulates the muscles to relax, heal and unravel the tension stored
              in deep layers of the muscles.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Read More About Body Alignment
            </Link>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Signs your body may be out of alignment
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Regular headaches",
              "Uneven hips or shoulders",
              "Fatigue without clear cause",
              "Back or neck pain",
              "Numbness or tingling",
              "Poor posture",
              "Joint stiffness",
              "Muscle spasms",
              "Reduced flexibility",
            ].map((symptom) => (
              <div
                key={symptom}
                className="bg-white rounded-lg px-4 py-3 text-sm text-gray-700 shadow-sm border border-emerald-100 flex items-center gap-2"
              >
                <span className="text-emerald-600 font-bold">▪</span>
                {symptom}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Practitioners */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Our Practitioners</h2>
            <Link
              href="/practitioners"
              className="text-emerald-700 hover:text-emerald-900 font-medium text-sm"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {featured.map((p) => (
              <PractitionerCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            What our clients say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 italic leading-relaxed">"{t.quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-emerald-700">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-emerald-800 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to feel the difference?</h2>
        <p className="text-emerald-200 mb-8 max-w-xl mx-auto">
          Find a practitioner near you and book your first session today.
        </p>
        <Link
          href="/practitioners"
          className="bg-white text-emerald-800 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors inline-block"
        >
          Find a Practitioner
        </Link>
      </section>
    </>
  )
}

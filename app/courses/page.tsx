import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Become a certified Body Alignment practitioner. Course info for September 2026.",
}

export default function CoursesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Practitioner</h1>
      <p className="text-gray-500 text-lg mb-10">
        Train with the Body Alignment Association of South Africa and join a growing network of
        certified practitioners helping people live pain-free.
      </p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-10">
        <div className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Next intake: September 2026
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Body Alignment Training Course</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our comprehensive training programme equips you with everything you need to start
          practising Body Alignment therapy. You will learn to identify muscular holding patterns,
          read postural imbalances, and apply the Body Alignment method to help clients return to
          a state of ease and alignment.
        </p>
        <ul className="space-y-2 text-sm text-gray-700 mb-6">
          {[
            "Theoretical foundation in musculoskeletal anatomy",
            "Practical hands-on Body Alignment technique",
            "Assessment and treatment planning",
            "Business setup and client management",
            "Ongoing mentorship from qualified trainers",
            "Certification from the Body Alignment Association of South Africa",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Enquire About the Course
        </Link>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Course enquiries</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          For full course details including fees, dates, and venue, please contact Janet Yates
          directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:0826868291"
            className="inline-flex items-center gap-2 text-sm text-emerald-700 font-medium hover:text-emerald-900"
          >
            📞 082 686 8291
          </a>
          <a
            href="mailto:janet.bodyalignment@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-emerald-700 font-medium hover:text-emerald-900"
          >
            ✉️ janet.bodyalignment@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

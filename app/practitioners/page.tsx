import type { Metadata } from "next"
import PractitionerCard from "@/components/PractitionerCard"
import { practitioners } from "@/data/practitioners"

export const metadata: Metadata = {
  title: "Practitioners",
  description:
    "Find a Body Alignment practitioner near you across South Africa.",
}

export default function PractitionersPage() {
  const active = practitioners.filter((p) => !p.isRIP)
  const inMemoriam = practitioners.filter((p) => p.isRIP)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Practitioners</h1>
      <p className="text-gray-500 mb-10">
        Find a Body Alignment practitioner near you. Click a profile to view contact details,
        location, and to get in touch directly.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {active.map((p) => (
          <PractitionerCard key={p.slug} p={p} />
        ))}
      </div>

      {inMemoriam.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-500 mb-6">In Memoriam</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {inMemoriam.map((p) => (
              <PractitionerCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { practitioners } from "@/data/practitioners"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactForm from "@/components/ContactForm"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return practitioners.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = practitioners.find((p) => p.slug === slug)
  if (!p) return {}
  return {
    title: p.name,
    description: `Book a Body Alignment session with ${p.name} in ${p.location}.`,
  }
}

export default async function PractitionerPage({ params }: Props) {
  const { slug } = await params
  const p = practitioners.find((p) => p.slug === slug)
  if (!p) notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/practitioners"
        className="text-sm text-emerald-700 hover:text-emerald-900 mb-8 inline-flex items-center gap-1"
      >
        ← All Practitioners
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
        {/* Profile */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-emerald-50 shadow-sm">
            {p.image ? (
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-7xl text-emerald-300">{p.name.charAt(0)}</span>
              </div>
            )}
            {p.isNew && (
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            )}
            {p.isRIP && (
              <span className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                In Memoriam
              </span>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">{p.name}</h1>
            <p className="text-emerald-700 font-medium text-sm mt-1">
              Body Alignment Practitioner
            </p>
            <p className="text-gray-500 text-sm mt-1">📍 {p.location}</p>
          </div>

          {/* Contact details */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">
            {p.cell && (
              <a
                href={`tel:${p.cell.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-700"
              >
                <span>📞</span> {p.cell}
              </a>
            )}
            {p.facebook && (
              <a
                href={p.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-700"
              >
                <span>👤</span> Facebook Profile
              </a>
            )}
          </div>

          {/* WhatsApp */}
          {p.whatsapp && !p.isRIP && (
            <WhatsAppButton
              number={p.whatsapp}
              label={`WhatsApp ${p.name.split(" ")[0]}`}
              message={`Hi ${p.name.split(" ")[0]}, I'd like to book a Body Alignment session.`}
            />
          )}
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
            <p className="text-gray-600 leading-relaxed">
              {p.isRIP
                ? `${p.name} was a dedicated Body Alignment practitioner based in ${p.location}. We honour their contribution to the Body Alignment community.`
                : `${p.name} is a certified Body Alignment practitioner based in ${p.location}. Book a session to experience the benefits of Body Alignment therapy.`}
            </p>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Location</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title={`${p.location} map`}
                src={`https://www.google.com/maps/embed/v1/place?key=GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(p.location + ", South Africa")}`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              * Add a Google Maps API key to enable the map.
            </p>
          </div>

          {/* Contact form */}
          {!p.isRIP && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Book a session with {p.name.split(" ")[0]}
              </h2>
              <ContactForm practitionerName={p.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

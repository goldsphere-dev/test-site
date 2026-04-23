import Link from "next/link"
import Image from "next/image"
import type { Practitioner } from "@/data/practitioners"

export default function PractitionerCard({ p }: { p: Practitioner }) {
  return (
    <Link
      href={`/practitioners/${p.slug}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col"
    >
      <div className="relative w-full aspect-square bg-emerald-50">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl text-emerald-300">
              {p.name.charAt(0)}
            </span>
          </div>
        )}
        {p.isNew && (
          <span className="absolute top-2 right-2 bg-emerald-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            New
          </span>
        )}
        {p.isRIP && (
          <span className="absolute top-2 right-2 bg-gray-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            In Memoriam
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
          {p.name}
        </h3>
        <p className="text-xs text-emerald-700 font-medium">Body Alignment Practitioner</p>
        <p className="text-sm text-gray-500 mt-1">{p.location}</p>
      </div>
    </Link>
  )
}

import Link from "next/link";
import type { Practitioner } from "@/data/practitioners";

export default function PractitionerCard({ p }: { p: Practitioner }) {
  return (
    <Link
      href={`/practitioners/${p.slug}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-border transition-all overflow-hidden flex flex-col"
    >
      <div className="relative w-full aspect-square bg-white overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl text-gray-mid/40 font-bold">
              {p.name.charAt(0)}
            </span>
          </div>
        )}
        {p.isNew && (
          <span className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
        {p.isRIP && (
          <span className="absolute top-3 right-3 bg-gray-mid text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            In Memoriam
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-semibold text-charcoal group-hover:text-brand-red transition-colors text-sm">
          {p.name}
        </h3>
        <p className="text-[11px] text-gray-mid flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {p.location}
        </p>
        {p.cell && (
          <p className="text-[11px] text-gray-mid">{p.cell}</p>
        )}
        <span className="mt-2 text-brand-red font-semibold text-xs group-hover:underline">
          View Profile →
        </span>
      </div>
    </Link>
  );
}

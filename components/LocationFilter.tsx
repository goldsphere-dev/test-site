"use client";

import { useState, useMemo, useEffect } from "react";
import { practitioners, regionLabels, type Region } from "@/data/practitioners";
import PractitionerCard from "./PractitionerCard";

const allRegions = Object.keys(regionLabels) as Region[];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function LocationFilter() {
  const [activeRegion, setActiveRegion] = useState<Region | "all">("all");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(() => practitioners.filter((p) => !p.isRIP && !p.isInactive));

  useEffect(() => {
    setActive(shuffle(practitioners.filter((p) => !p.isRIP && !p.isInactive)));
  }, []);

  const inMemoriam = useMemo(() => practitioners.filter((p) => p.isRIP), []);
  const inactive = useMemo(() => practitioners.filter((p) => p.isInactive), []);

  const filtered = useMemo(() => {
    let result = active;
    if (activeRegion !== "all") {
      result = result.filter((p) => p.region === activeRegion);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      );
    }
    return result;
  }, [active, activeRegion, search]);

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-offwhite/95 backdrop-blur-sm border-b border-border py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-mid"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by name or area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
            />
          </div>

          {/* Region pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveRegion("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeRegion === "all"
                  ? "bg-brand-red text-white"
                  : "bg-white border border-border text-gray-dark hover:border-brand-red/30"
              }`}
            >
              All Areas
            </button>
            {allRegions.map((region) => (
              <button
                key={region}
                onClick={() =>
                  setActiveRegion(activeRegion === region ? "all" : region)
                }
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeRegion === region
                    ? "bg-brand-red text-white"
                    : "bg-white border border-border text-gray-dark hover:border-brand-red/30"
                }`}
              >
                {regionLabels[region]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <PractitionerCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-mid text-lg">
            No practitioners found in this area.
          </p>
          <button
            onClick={() => {
              setActiveRegion("all");
              setSearch("");
            }}
            className="mt-3 text-brand-red font-semibold text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Currently Inactive */}
      {inactive.length > 0 && activeRegion === "all" && !search.trim() && (
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="text-xl font-semibold text-gray-mid mb-6">
            Currently Inactive
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {inactive.map((p) => (
              <div
                key={p.slug}
                className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden flex flex-col opacity-50 grayscale"
              >
                <div className="relative w-full aspect-square bg-white overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-5xl text-gray-mid/40 font-bold">{p.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="font-semibold text-charcoal text-sm">{p.name}</h3>
                  <p className="text-[11px] text-gray-mid flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

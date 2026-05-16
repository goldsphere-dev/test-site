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
  const [active, setActive] = useState(() => practitioners.filter((p) => !p.isRIP));

  useEffect(() => {
    setActive(shuffle(practitioners.filter((p) => !p.isRIP)));
  }, []);

  const inMemoriam = useMemo(() => practitioners.filter((p) => p.isRIP), []);

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

      {/* In Memoriam */}
      {inMemoriam.length > 0 && activeRegion === "all" && !search.trim() && (
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="text-xl font-semibold text-gray-mid mb-6">
            In Memoriam
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 opacity-75">
            {inMemoriam.map((p) => (
              <PractitionerCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

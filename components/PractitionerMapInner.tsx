"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { practitioners } from "@/data/practitioners";
import { practitionerCoords } from "@/data/practitionerCoords";

const allMapPractitioners = practitioners.filter(
  (p) => !p.isRIP && !p.isInactive && practitionerCoords[p.slug]
);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createPin(highlighted: boolean) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:22px;height:22px;
      background:${highlighted ? "#991b1b" : "#DC2626"};
      border:3px solid white;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      box-shadow:0 2px 8px rgba(0,0,0,0.35);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 22],
    popupAnchor: [0, -26],
  });
}

function FlyTo({ slug }: { slug: string | null }) {
  const map = useMap();
  useEffect(() => {
    if (!slug) return;
    const coords = practitionerCoords[slug];
    if (coords) map.flyTo(coords, 13, { duration: 0.8 });
  }, [slug, map]);
  return null;
}

export default function PractitionerMapInner() {
  const [selected, setSelected] = useState<string | null>(null);
  const [mapPractitioners, setMapPractitioners] = useState(allMapPractitioners);
  const markerRefs = useRef<Record<string, L.Marker>>({});
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMapPractitioners(shuffle(allMapPractitioners));
  }, []);

  function selectPractitioner(slug: string) {
    setSelected(slug);
    // Scroll sidebar to practitioner
    const el = listRef.current?.querySelector(`[data-slug="${slug}"]`) as HTMLElement;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    // Open marker popup after fly animation
    setTimeout(() => {
      markerRefs.current[slug]?.openPopup();
    }, 900);
  }

  return (
    <div className="flex h-[560px] rounded-2xl overflow-hidden border border-border shadow-sm">
      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={[-33.9, 18.9]}
          zoom={8}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <FlyTo slug={selected} />
          {mapPractitioners.map((p) => {
            const coords = practitionerCoords[p.slug]!;
            const firstName = p.name.split(" ")[0];
            return (
              <Marker
                key={p.slug}
                position={coords}
                icon={createPin(selected === p.slug)}
                ref={(ref) => {
                  if (ref) markerRefs.current[p.slug] = ref;
                }}
                eventHandlers={{ click: () => setSelected(p.slug) }}
              >
                <Popup>
                  <div className="w-52 p-1">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-28 object-cover rounded-lg mb-3"
                      />
                    )}
                    <p className="font-bold text-sm text-gray-900 mb-0.5">{p.name}</p>
                    <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                      <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {p.location}
                    </p>
                    <div className="flex flex-col gap-2">
                      {p.whatsapp && (
                        <a
                          href={`https://wa.me/${p.whatsapp}?text=${encodeURIComponent(`Hi ${firstName}, I found you on the Body Alignment website. I'd like to book a session.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold rounded-lg py-2 px-3 hover:bg-[#1ebe5d] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp {firstName}
                        </a>
                      )}
                      <Link
                        href={`/practitioners/${p.slug}`}
                        className="flex items-center justify-center gap-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg py-2 px-3 hover:bg-gray-700 transition-colors"
                      >
                        View Profile →
                      </Link>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Sidebar */}
      <div
        ref={listRef}
        className="w-72 bg-white border-l border-border overflow-y-auto flex-shrink-0"
      >
        <div className="sticky top-0 bg-white border-b border-border px-4 py-3 z-10">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {mapPractitioners.length} Practitioners
          </p>
        </div>
        {mapPractitioners.map((p) => (
          <button
            key={p.slug}
            data-slug={p.slug}
            onClick={() => selectPractitioner(p.slug)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b border-border/50 transition-colors ${
              selected === p.slug
                ? "bg-red-50 border-l-2 border-l-brand-red"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
              {p.image ? (
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-400">{p.name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-charcoal truncate">{p.name}</p>
              <p className="text-xs text-gray-500 truncate">{p.location}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

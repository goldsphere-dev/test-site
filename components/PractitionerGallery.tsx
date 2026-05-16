"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface Props {
  images: string[];
  name: string;
  portrait?: string;
  firstName?: string;
}

function shuffle(arr: string[]): string[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fill(arr: string[], min: number): string[] {
  let result = [...arr];
  while (result.length < min) result = [...result, ...arr];
  return result;
}

// Decorative dotted-circle portrait card matching the screenshot style
function PortraitCard({ image, firstName }: { image: string; firstName: string }) {
  const N = 40;
  const cx = 65, cy = 65, R = 55;

  const dots = Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
    const x = cx + R * Math.cos(a);
    const y = cy + R * Math.sin(a);
    const isRed = i % 10 === 0;
    const isMed = i % 5 === 0 && !isRed;
    return { x, y, r: isRed ? 4 : isMed ? 3.2 : 2.5, fill: isRed ? "#C41E1E" : "#1a1a1a" };
  });

  return (
    <div
      className="bg-white rounded-2xl shadow-sm shrink-0 flex flex-col items-center justify-center"
      style={{ width: "260px", height: "190px", gap: "4px" }}
    >
      <div className="relative" style={{ width: "130px", height: "130px" }}>
        {/* Decorative dot ring */}
        <svg viewBox="0 0 130 130" className="absolute inset-0 w-full h-full">
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.fill} opacity={0.9} />
          ))}
        </svg>
        {/* Circular portrait */}
        <div
          className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-md"
          style={{ top: 12, right: 12, bottom: 12, left: 12 }}
        >
          <img
            src={image}
            alt={firstName}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* Cursive name */}
      <span
        style={{
          fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
          fontSize: "22px",
          color: "#1a1a1a",
          lineHeight: 1,
        }}
      >
        {firstName}
      </span>
    </div>
  );
}

function ImageCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm shrink-0" style={{ width: "260px", height: "190px" }}>
      <img src={src} alt={`${name} gallery`} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

// Builds a row of nodes, inserting a portrait card at the given positions
function buildRow(
  items: string[],
  name: string,
  portrait: string | undefined,
  firstName: string | undefined,
  insertAt: Set<number>
): ReactNode[] {
  const nodes: ReactNode[] = [];
  items.forEach((src, i) => {
    if (portrait && firstName && insertAt.has(i)) {
      nodes.push(<PortraitCard key={`portrait-${i}`} image={portrait} firstName={firstName} />);
    }
    nodes.push(<ImageCard key={i} src={src} name={name} />);
  });
  return nodes;
}

export default function PractitionerGallery({ images, name, portrait, firstName }: Props) {
  const [row1, setRow1] = useState(images);
  const [row2, setRow2] = useState(images);

  useEffect(() => {
    setRow1(shuffle(images));
    setRow2(shuffle(images));
  }, [images]);

  const looped1 = [...fill(row1, 8), ...fill(row1, 8)];
  const looped2 = [...fill(row2, 8), ...fill(row2, 8)];

  const half1 = Math.floor(looped1.length / 2);
  const half2 = Math.floor(looped2.length / 2);

  // Insert portrait at position 2 in first half and again midway through second half
  const row1Nodes = buildRow(looped1, name, portrait, firstName, new Set([2, half1 + 3]));
  const row2Nodes = buildRow(looped2, name, portrait, firstName, new Set([4, half2 + 5]));

  return (
    <>
      <style>{`
        @keyframes pg-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pg-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .pg-left  { animation: pg-left  28s linear infinite; }
        .pg-right { animation: pg-right 28s linear infinite; }
        .pg-left:hover,
        .pg-right:hover { animation-play-state: paused; }
      `}</style>

      <div className="space-y-3 overflow-hidden">
        <div className="pg-left flex gap-3" style={{ width: "max-content" }}>
          {row1Nodes}
        </div>
        <div className="pg-right flex gap-3" style={{ width: "max-content" }}>
          {row2Nodes}
        </div>
      </div>
    </>
  );
}

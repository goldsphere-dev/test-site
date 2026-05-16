"use client";

import { useEffect, useState } from "react";

interface Props {
  images: string[];
  name: string;
}

function shuffle(arr: string[]): string[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Repeat array until we have at least `min` items for a seamless loop
function fill(arr: string[], min: number): string[] {
  let result = [...arr];
  while (result.length < min) result = [...result, ...arr];
  return result;
}

export default function PractitionerGallery({ images, name }: Props) {
  const [row1, setRow1] = useState(images);
  const [row2, setRow2] = useState(images);

  useEffect(() => {
    setRow1(shuffle(images));
    setRow2(shuffle(images));
  }, [images]);

  const looped1 = [...fill(row1, 8), ...fill(row1, 8)];
  const looped2 = [...fill(row2, 8), ...fill(row2, 8)];

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
          {looped1.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm shrink-0"
              style={{ width: "260px", height: "190px" }}
            >
              <img
                src={src}
                alt={`${name} gallery`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="pg-right flex gap-3" style={{ width: "max-content" }}>
          {looped2.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm shrink-0"
              style={{ width: "260px", height: "190px" }}
            >
              <img
                src={src}
                alt={`${name} gallery`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

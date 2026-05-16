"use client";

import { useEffect, useState } from "react";

const images = [
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/313409492_522109719929918_958326532651567349_n.jpg",
    alt: "Body Alignment training session",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/279965250_5385755371457189_796099243356844957_n.jpg",
    alt: "Body Alignment workshop",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/317241330_538216218319268_2721070637639036423_n.jpg",
    alt: "Practitioner training",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/317088280_538216131652610_6605356891445382573_n.jpg",
    alt: "Body Alignment outreach",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/316951890_538215728319317_833599577868475642_n.jpg",
    alt: "Body Alignment session",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/313396490_522109666596590_475694032180513047_n.jpg",
    alt: "Treatment in progress",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/15.png",
    alt: "Body Alignment technique",
  },
  {
    src: "https://bodyalignment.co.za/wp-content/uploads/2024/11/38.png",
    alt: "Practitioner at work",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GalleryMarquee() {
  const [row1, setRow1] = useState(images);
  const [row2, setRow2] = useState(images);

  useEffect(() => {
    setRow1(shuffle(images));
    setRow2(shuffle(images));
  }, []);

  const looped1 = [...row1, ...row1];
  const looped2 = [...row2, ...row2];

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .gallery-left {
          animation: marquee-left 30s linear infinite;
        }
        .gallery-right {
          animation: marquee-right 30s linear infinite;
        }
        .gallery-left:hover,
        .gallery-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-4 overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div className="gallery-left flex gap-4" style={{ width: "max-content" }}>
          {looped1.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm shrink-0"
              style={{ width: "280px", height: "200px" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="gallery-right flex gap-4" style={{ width: "max-content" }}>
          {looped2.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm shrink-0"
              style={{ width: "280px", height: "200px" }}
            >
              <img
                src={img.src}
                alt={img.alt}
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

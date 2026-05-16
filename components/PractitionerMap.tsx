"use client";

import dynamic from "next/dynamic";

const PractitionerMapInner = dynamic(
  () => import("./PractitionerMapInner"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[560px] rounded-2xl bg-gray-light border border-border flex items-center justify-center">
        <p className="text-gray-mid text-sm">Loading map…</p>
      </div>
    ),
  }
);

export default function PractitionerMap() {
  return <PractitionerMapInner />;
}

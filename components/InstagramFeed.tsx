"use client";

import Script from "next/script";

export default function InstagramFeed() {
  return (
    <div className="w-full">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-2b2e0e5e-79de-4714-a0aa-c720c6b4458b"
        data-elfsight-app-lazy
      />
    </div>
  );
}

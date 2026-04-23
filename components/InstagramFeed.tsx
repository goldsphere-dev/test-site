"use client";

import Script from "next/script";

export default function InstagramFeed() {
  return (
    <div className="w-full">
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
      {/* TODO: Replace REPLACE_WITH_WIDGET_ID with actual Elfsight widget ID.
          Steps:
          1. Go to elfsight.com and create a free account
          2. Create an Instagram Feed widget
          3. Connect @bodyalignment_association
          4. Copy the widget ID and paste it below */}
      <div
        className="elfsight-app-REPLACE_WITH_WIDGET_ID"
        data-elfsight-app-lazy
      />

      {/* Dev placeholder — remove when Elfsight widget ID is configured */}
      <div className="bg-gray-light rounded-2xl p-10 text-center border border-border">
        <div className="text-4xl mb-3">📸</div>
        <p className="font-semibold text-charcoal mb-1">Instagram Feed</p>
        <p className="text-gray-mid text-sm">@bodyalignment_association</p>
        <a
          href="https://www.instagram.com/bodyalignment_association/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-brand-red font-semibold text-sm hover:underline"
        >
          Follow on Instagram →
        </a>
        <p className="mt-4 text-xs text-gray-mid">
          Live feed will appear here once the Elfsight widget ID is configured.
        </p>
      </div>
    </div>
  );
}

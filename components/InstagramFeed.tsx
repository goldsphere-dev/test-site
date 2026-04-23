export default function InstagramFeed() {
  return (
    <div className="w-full">
      {/* Placeholder — replace with Elfsight widget once configured:
          1. Sign up at elfsight.com
          2. Create an Instagram Feed widget for @bodyalignment_association
          3. Copy the widget ID, add it to .env as NEXT_PUBLIC_ELFSIGHT_WIDGET_ID
          4. Replace this block with:
             <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
             <div className="elfsight-app-YOUR_WIDGET_ID" data-elfsight-app-lazy />
      */}
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

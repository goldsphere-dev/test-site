"use client";

const testimonials = [
  {
    quote: "After the very first session the difference was incredible. I walked in with a stiff neck and walked out standing straight. Absolutely remarkable.",
    author: "Jacques B.",
    location: "Malmesbury",
  },
  {
    quote: "My sciatica is 90% better after just 3 sessions. I had suffered for over two years with no relief. Body Alignment changed my life.",
    author: "Local client",
    location: "Malmesbury",
  },
  {
    quote: "Janet and her team have saved my life after almost suffering from daily headaches and neck spasms. Instant release after the very 1st session.",
    author: "Client",
    location: "Somerset West",
  },
  {
    quote: "I had chronic lower back pain for 6 years. After just two sessions with my practitioner I could finally sleep through the night without pain.",
    author: "Marié V.",
    location: "Stellenbosch",
  },
  {
    quote: "I was sceptical at first, but the results speak for themselves. My posture has improved dramatically and the constant tension in my shoulders is gone.",
    author: "Client",
    location: "Somerset West",
  },
  {
    quote: "No medication, no surgery, no side effects — just real relief. Body Alignment gave me my life back after years of suffering.",
    author: "Returning client",
    location: "Cape Town",
  },
];

const looped = [...testimonials, ...testimonials];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-brand-red mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="bg-charcoal py-20 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Real Results from Real People
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto">
          Hear from clients whose lives have been changed by Body Alignment therapy.
        </p>
      </div>

      <div className="marquee-track flex gap-6" style={{ width: "max-content" }}>
        {looped.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-7 shadow-sm flex flex-col"
            style={{ width: "340px" }}
          >
            <StarRating />
            <p className="text-gray-dark text-sm leading-relaxed italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-charcoal font-semibold text-sm">{t.author}</p>
              <p className="text-gray-mid text-xs">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

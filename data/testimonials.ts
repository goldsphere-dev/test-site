export interface Testimonial {
  quote: string;
  author: string;
  location?: string;
}

export const practitionerTestimonials: Record<string, Testimonial[]> = {
  "janet-yates": [
    {
      quote: "Janet and her team have saved my life after almost suffering from daily headaches and neck spasms. Instant release after the very first session.",
      author: "Client",
      location: "Somerset West",
    },
    {
      quote: "I have been seeing Janet for two years now and the difference in my posture and pain levels is night and day. She genuinely cares about every single client.",
      author: "Marinda S.",
      location: "Somerset West",
    },
    {
      quote: "I was told I might need surgery for my back. After six sessions with Janet I cancelled the consultation. I have not looked back.",
      author: "Pieter V.",
      location: "Helderberg",
    },
  ],
  "charne-mcquire": [
    {
      quote: "After the very first session the difference was incredible. I walked in with a stiff neck and walked out standing straight. Absolutely remarkable.",
      author: "Jacques B.",
      location: "Malmesbury",
    },
    {
      quote: "My sciatica is 90% better after just three sessions. I had suffered for over two years with no relief. Body Alignment changed my life.",
      author: "Local client",
      location: "Malmesbury",
    },
    {
      quote: "Charnè has such a gentle, reassuring approach. I was nervous the first time but she made me feel completely at ease and the relief was immediate.",
      author: "Annelie K.",
      location: "Swartland",
    },
  ],
  "lize-kroese": [
    {
      quote: "I was sceptical at first, but the results speak for themselves. My posture has improved dramatically and the constant tension in my shoulders is gone.",
      author: "Client",
      location: "Somerset West",
    },
    {
      quote: "Lize is thorough, professional, and genuinely invested in your recovery. My chronic lower back pain that I had lived with for years is finally manageable.",
      author: "Francois D.",
      location: "Somerset West",
    },
  ],
  "chantelle-bannister": [
    {
      quote: "Chantelle is incredible. Three sessions in and I can turn my head properly for the first time in years. I wish I had found Body Alignment sooner.",
      author: "Michelle R.",
      location: "Somerset West",
    },
    {
      quote: "No medication, no surgery, no side effects — just real relief. Body Alignment with Chantelle gave me my life back after years of suffering.",
      author: "Returning client",
      location: "Somerset West",
    },
  ],
  "logan-fitzgibbon": [
    {
      quote: "I drove from Cape Town to see Logan after a friend recommended him. Worth every kilometre. The nerve pain down my leg disappeared after two sessions.",
      author: "Thys M.",
      location: "Cape Town",
    },
    {
      quote: "Logan has a natural ability to find exactly where the problem is. After surfing for twenty years my back was a mess. He sorted it out in four sessions.",
      author: "Local client",
      location: "Gansbaai",
    },
  ],
  "ilse-steenkamp": [
    {
      quote: "Ilse is one of the most thorough practitioners I have encountered. She explains everything, takes her time, and the results are consistent every time.",
      author: "Liezel P.",
      location: "Strand",
    },
    {
      quote: "I had headaches every single day for three years. After my second session with Ilse I went a full week without one. I cried with relief.",
      author: "Client",
      location: "Helderberg",
    },
  ],
  "elmarie-henegan": [
    {
      quote: "Elmarie has the warmest energy. I always leave her sessions feeling lighter — both physically and emotionally. The tension I carry just melts away.",
      author: "Roxanne T.",
      location: "Strand",
    },
    {
      quote: "After my car accident I had constant neck pain. Elmarie worked with me over six weeks and I am essentially pain-free now. Truly life-changing.",
      author: "Client",
      location: "Strand",
    },
  ],
  "kassiem-omar": [
    {
      quote: "No medication, no surgery, no side effects — just real relief. Kassiem gave me my life back after years of lower back pain.",
      author: "Returning client",
      location: "Cape Town",
    },
    {
      quote: "Kassiem is calm, professional, and exceptionally good at what he does. My whole family now sees him regularly. We would not go anywhere else.",
      author: "Family client",
      location: "Wetton",
    },
  ],
  "widaat-salie": [
    {
      quote: "I had chronic lower back pain for six years. After just two sessions with Widaat I could finally sleep through the night without pain.",
      author: "Marié V.",
      location: "George",
    },
    {
      quote: "Widaat is the best thing to happen to the Garden Route. Knowledgeable, caring, and incredibly effective. Book her before she fills up.",
      author: "Client",
      location: "George",
    },
  ],
  "natalie-mantsi": [
    {
      quote: "Natalie has such a gentle and reassuring presence. She helped me through months of stress-related back pain and I genuinely feel like a different person.",
      author: "Yolandi M.",
      location: "Kuilsriver",
    },
    {
      quote: "I referred my whole office to Natalie. We all sit at desks all day and every one of us has seen massive improvement in neck and shoulder pain.",
      author: "Client",
      location: "Cape Town",
    },
  ],
  "fatima-noor-chand": [
    {
      quote: "Fatima has a gift. She understood my body and my stress in a way no other therapist has. My migraines are down from three a week to almost none.",
      author: "Client",
      location: "Constantia",
    },
    {
      quote: "I was completely blown away by my first session with Fatima. The release I felt was profound — physically and emotionally. Highly recommended.",
      author: "Returning client",
      location: "Southern Suburbs",
    },
  ],
  "debbie-coltman": [
    {
      quote: "Finally a Body Alignment practitioner in Joburg. Debbie is worth every cent. My sciatic nerve pain that physio could not fix is completely gone.",
      author: "Ruan B.",
      location: "Midrand",
    },
    {
      quote: "Debbie is professional, thorough and genuinely passionate about what she does. My posture has improved more in eight weeks than in years of gym.",
      author: "Client",
      location: "Johannesburg",
    },
  ],
  "shantelle-visser": [
    {
      quote: "Shantelle travels to meet her clients and that alone sets her apart. Add in her exceptional skill and you have the complete package. Cannot recommend her enough.",
      author: "Client",
      location: "Stellenbosch",
    },
    {
      quote: "I have been struggling with a rounded back for years. After six sessions with Shantelle my husband says I look completely different. I feel it too.",
      author: "Nadia H.",
      location: "Somerset West",
    },
  ],
};

// Aggregate all testimonials from all practitioners for the homepage
export function getAllTestimonials(): (Testimonial & { practitionerSlug: string })[] {
  return Object.entries(practitionerTestimonials).flatMap(([slug, testimonials]) =>
    testimonials.map((t) => ({ ...t, practitionerSlug: slug }))
  );
}

export type Region =
  | "cape-town"
  | "helderberg"
  | "overberg"
  | "winelands"
  | "west-coast"
  | "garden-route"
  | "international";

export interface Practitioner {
  slug: string;
  name: string;
  title: string;
  cell: string;
  whatsapp?: string;
  location: string;
  region: Region;
  facebook?: string;
  image: string;
  isNew?: boolean;
  isRIP?: boolean;
  bio: string;
}

export const regionLabels: Record<Region, string> = {
  "cape-town": "Cape Town",
  helderberg: "Helderberg",
  overberg: "Overberg",
  winelands: "Winelands",
  "west-coast": "West Coast",
  "garden-route": "Garden Route",
  international: "International",
};

export const practitioners: Practitioner[] = [
  {
    slug: "janet-yates",
    name: "Janet Yates",
    title: "Body Alignment Practitioner | Owner | Trainer",
    cell: "082 686 8291",
    whatsapp: "27826868291",
    location: "Somerset West",
    region: "helderberg",
    facebook: "https://www.facebook.com/janet.yates.796",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/38.png",
    bio: "Janet Yates is the founder, owner, and head trainer of the Body Alignment Association of South Africa. Based in Somerset West in the heart of the Helderberg, Janet has spent years perfecting the Body Alignment method and training a growing network of practitioners across the country. Her deep understanding of the musculoskeletal system, combined with a genuine passion for helping people live pain-free, has made her a trusted name in complementary healthcare.\n\nA session with Janet is thorough, intuitive, and results-driven. She takes time to assess your posture, movement patterns, and areas of tension before applying gentle, targeted stimulation to release the deep muscular holding patterns that cause pain. Many clients report significant relief after their very first visit. Whether you are dealing with chronic back pain, headaches, or the physical toll of everyday stress, Janet provides a warm, professional environment where healing begins. Book your first session with Janet today.",
  },
  {
    slug: "ashley-du-plooy",
    name: "Ashley Du Plooy",
    title: "Body Alignment Practitioner",
    cell: "+61 491 705 090",
    whatsapp: "61491705090",
    location: "Byford, Western Australia",
    region: "international",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/35.png",
    bio: "Ashley Du Plooy brings the Body Alignment method to Western Australia from her base in Byford, south of Perth. Trained and certified by the Body Alignment Association of South Africa, Ashley is passionate about making this powerful therapy accessible to the Australian community. Her journey into Body Alignment was inspired by her own experience of chronic pain and the life-changing relief she found through treatment.\n\nWhen you visit Ashley, you can expect a calm, professional session focused entirely on your body's unique needs. She works methodically through areas of tension, using light but firm pressure to release muscular spasms and restore skeletal alignment. The treatment is fully clothed, non-invasive, and gentle — yet profoundly effective. If you are in the Perth region and struggling with pain, stiffness, or postural issues, Ashley is ready to help. Book your first session with Ashley today.",
  },
  {
    slug: "charne-mcquire",
    name: "Charnè McQuire",
    title: "Body Alignment Practitioner",
    cell: "063 104 8542",
    whatsapp: "27631048542",
    location: "Malmesbury",
    region: "west-coast",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/32.png",
    bio: "Charnè McQuire is a certified Body Alignment practitioner serving the Malmesbury and Swartland community on the West Coast. Known for her warm, empathetic approach and keen eye for postural imbalances, Charnè has built a loyal client base in the region. She believes that pain is the body's way of communicating and that true healing begins when we listen to those signals rather than simply masking them.\n\nA session with Charnè typically lasts 45 to 60 minutes and begins with a thorough postural assessment. She then applies targeted stimulation to the muscle groups along your spinal column and other affected areas, encouraging your body to release deep-held tension naturally. You remain fully clothed throughout, and most clients notice a tangible difference after the first treatment. Whether you are a farmer dealing with physical strain, an office worker battling neck pain, or anyone in between, Charnè can help. Book your first session with Charnè today.",
  },
  {
    slug: "logan-fitzgibbon",
    name: "Logan Fitzgibbon",
    title: "Body Alignment Practitioner",
    cell: "065 898 2197",
    whatsapp: "27658982197",
    location: "Gansbaai",
    region: "overberg",
    facebook:
      "https://www.facebook.com/profile.php?id=100090450193126",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/29.png",
    bio: "Logan Fitzgibbon is the go-to Body Alignment practitioner in Gansbaai and the greater Overberg region. Living and working in one of the Western Cape's most beautiful coastal areas, Logan understands the active lifestyles of the local community — from fishing and farming to hiking and water sports — and the physical toll these activities can take on the body.\n\nLogan's sessions are focused, effective, and deeply relaxing. He combines a thorough assessment of your posture and movement with precise, gentle stimulation of the muscles along the spine and key tension points. The goal is always the same: release the muscular holding patterns that pull your skeleton out of alignment and restore your body's natural balance. No medication, no cracking, no oils — just skilled hands and proven technique. Book your first session with Logan today.",
  },
  {
    slug: "julie-hellqvist",
    name: "Julie Hellqvist",
    title: "Body Alignment Practitioner",
    cell: "",
    location: "TBC",
    region: "helderberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/26.png",
    bio: "Julie Hellqvist is a certified Body Alignment practitioner bringing dedication and care to every session. With a background rooted in holistic wellness, Julie is drawn to the Body Alignment method for its ability to address the root causes of pain rather than simply treating symptoms. Her approach is gentle, thorough, and deeply attuned to each client's individual needs.\n\nDuring a session with Julie, you can expect a comfortable, professional experience from start to finish. She begins with a careful assessment of your posture and areas of discomfort, then works systematically to release the deep muscular tension that contributes to misalignment and pain. The treatment is non-invasive and fully clothed, making it accessible to everyone regardless of age or fitness level. Book your first session with Julie today.",
  },
  {
    slug: "lize-kroese",
    name: "Lize Kroese",
    title: "Body Alignment Practitioner",
    cell: "061 340 8928",
    whatsapp: "27613408928",
    location: "Somerset West",
    region: "helderberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/28.png",
    bio: "Lize Kroese practices Body Alignment in Somerset West, serving clients across the Helderberg basin. Trained under Janet Yates at the Body Alignment Association of South Africa, Lize combines technical precision with a naturally caring and intuitive approach. She is particularly passionate about helping people who have tried conventional treatments without lasting relief discover the transformative power of Body Alignment.\n\nA session with Lize is unhurried and thorough. She takes time to understand your history, assess your posture, and identify the specific muscular holding patterns that are contributing to your discomfort. Through gentle, targeted stimulation, she helps your muscles release their grip on misaligned joints and vertebrae, allowing your body to return to its natural state of balance. You stay fully clothed and comfortable throughout. Book your first session with Lize today.",
  },
  {
    slug: "rudolph-maree",
    name: "Rudolph Maree",
    title: "Body Alignment Practitioner",
    cell: "082 344 5190",
    whatsapp: "27823445190",
    location: "Brackenfell, Durbanville",
    region: "cape-town",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/25.png",
    bio: "Rudolph Maree serves the northern suburbs of Cape Town from his base in Brackenfell and Durbanville. As one of the few male Body Alignment practitioners in the network, Rudolph brings a unique perspective and strong, precise technique to his work. He is passionate about helping clients understand the connection between muscular tension, skeletal alignment, and overall health.\n\nWhen you book a session with Rudolph, you will experience a structured, professional treatment that starts with a full postural assessment. He then applies carefully calibrated pressure to specific muscle groups, focusing on the spine and areas of chronic tension. The result is a deep release that many clients describe as life-changing. Whether you are dealing with sports injuries, work-related strain, or long-standing chronic pain, Rudolph has the skill and experience to help. Book your first session with Rudolph today.",
  },
  {
    slug: "natalie-mantsi",
    name: "Natalie Mantsi",
    title: "Body Alignment Practitioner",
    cell: "083 285 4179",
    whatsapp: "27832854179",
    location: "Kuilsriver",
    region: "cape-town",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/22.png",
    bio: "Natalie Mantsi is a dedicated Body Alignment practitioner based in Kuilsriver, serving clients across the Cape Town metro. With a warm and approachable manner, Natalie creates a welcoming space where clients feel immediately at ease. She believes that the body has an extraordinary capacity to heal itself when given the right support, and Body Alignment provides exactly that.\n\nEach session with Natalie begins with a conversation about your symptoms and a careful visual assessment of your posture. She then works through the affected areas using the Body Alignment technique — gentle, sustained pressure that encourages hypertonic muscles to release and allows your skeletal system to realign naturally. There is no cracking, no medication, and no need to undress. Most clients feel noticeably lighter and more mobile after their very first session. Book your first session with Natalie today.",
  },
  {
    slug: "nuran-mukaddam-kootbodien",
    name: "Nuran Mukaddam Kootbodien",
    title: "Body Alignment Practitioner",
    cell: "083 532 5583",
    whatsapp: "27835325583",
    location: "Parow East",
    region: "cape-town",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/19.png",
    bio: "Nuran Mukaddam Kootbodien practises from Parow East, bringing Body Alignment therapy to the heart of Cape Town's northern corridor. Nuran is known for her compassionate, patient-centred approach and her ability to put even the most nervous first-time clients at ease. Her journey into Body Alignment was driven by a desire to help people find lasting relief from pain without reliance on medication.\n\nDuring your session, Nuran will take the time to listen to your concerns and carefully assess where your body is holding tension. She then applies the Body Alignment technique — gentle, focused pressure along the spine and key muscle groups — to release deep-seated spasms and restore proper alignment. The treatment is completely non-invasive, you remain fully clothed, and there is no discomfort. Many of Nuran's clients describe the experience as both physically and emotionally freeing. Book your first session with Nuran today.",
  },
  {
    slug: "antoinette-retief",
    name: "Antoinette Retief",
    title: "Body Alignment Practitioner",
    cell: "068 154 1906",
    whatsapp: "27681541906",
    location: "Strand",
    region: "helderberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/15-1.png",
    bio: "Antoinette Retief is a certified Body Alignment practitioner based in Strand, in the scenic Helderberg area. With a naturally empathetic and detail-oriented approach, Antoinette is committed to helping her clients understand the root causes of their pain and take active steps toward lasting relief. She finds deep fulfilment in witnessing the moment a client realises their body is capable of healing.\n\nA session with Antoinette is calm, structured, and effective. After assessing your posture and areas of concern, she applies the Body Alignment method — precise, gentle stimulation targeting the deep muscles that hold tension and pull the skeleton out of alignment. You remain fully clothed throughout, and the process involves no medication, no oils, and no forceful manipulation. Clients frequently report improved mobility, reduced pain, and a greater sense of overall wellbeing from the very first visit. Book your first session with Antoinette today.",
  },
  {
    slug: "lanesse-collins",
    name: "Lanesse Collins",
    title: "Body Alignment Practitioner",
    cell: "076 577 1013",
    location: "Hout Bay | Atlantic Seaboard",
    region: "cape-town",
    facebook: "https://www.facebook.com/share/p/1NeMWYvJtE/",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/12.png",
    isRIP: true,
    bio: "Lanesse Collins was a beloved Body Alignment practitioner who served the Hout Bay and Atlantic Seaboard communities with warmth, skill, and unwavering dedication. Her gentle hands and compassionate spirit touched the lives of countless clients who found relief and comfort through her care. Lanesse embodied everything the Body Alignment method stands for — treating the whole person, not just the symptom.\n\nThe Body Alignment community honours Lanesse's memory and the lasting impact she made on everyone she treated. Her legacy lives on through the clients whose lives she changed and the practitioners she inspired. She is deeply missed by colleagues and clients alike.",
  },
  {
    slug: "catherine-muchena-kugarakuripi",
    name: "Catherine Muchena Kugarakuripi",
    title: "Body Alignment Practitioner",
    cell: "",
    location: "TBC",
    region: "cape-town",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/9.png",
    bio: "Catherine Muchena Kugarakuripi is a certified Body Alignment practitioner serving the Cape Town area. With a warm and nurturing presence, Catherine brings cultural depth and genuine care to every session. She is passionate about the Body Alignment philosophy that the body holds the key to its own healing — and that by releasing the physical tension caused by stress, trauma, and postural strain, we unlock the body's natural ability to restore balance.\n\nCatherine's sessions are thorough and attentive. She listens carefully to your concerns, assesses your posture and areas of pain, and then works systematically through the affected muscle groups using gentle, sustained pressure. The treatment is fully clothed, non-invasive, and suitable for all ages. Clients often describe feeling lighter, more balanced, and remarkably different after just one session. Book your first session with Catherine today.",
  },
  {
    slug: "masnoena-masters",
    name: "Masnoena Masters",
    title: "Body Alignment Practitioner",
    cell: "082 951 8186",
    whatsapp: "27829518186",
    location: "Brackenfell, Durbanville",
    region: "cape-town",
    facebook:
      "https://www.facebook.com/share/p/KrXaZvpFBj9RWEcJ/",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/31.png",
    bio: "Masnoena Masters is a dedicated Body Alignment practitioner based in Brackenfell and Durbanville, serving the northern suburbs of Cape Town. Masnoena's approach is defined by patience, precision, and a genuine desire to see her clients thrive. She understands that many people come to Body Alignment after exhausting other options, and she takes pride in offering a treatment that delivers real, tangible results.\n\nIn a session with Masnoena, you will be guided through a comprehensive assessment before she begins the hands-on treatment. Using the Body Alignment technique, she applies targeted pressure to release the hypertonic spasms that lock muscles in contraction and pull bones out of alignment. The process is gentle, you remain fully clothed, and there is no need for medication or invasive procedures. Many clients experience noticeable improvement from the first session. Book your first session with Masnoena today.",
  },
  {
    slug: "natasja-warnick",
    name: "Natasja Warnick",
    title: "Body Alignment Practitioner",
    cell: "082 730 0668",
    whatsapp: "27827300668",
    location: "Darling | Mamre",
    region: "west-coast",
    facebook: "https://www.facebook.com/NTDancefitness",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/34.png",
    bio: "Natasja Warnick brings Body Alignment therapy to the charming West Coast towns of Darling and Mamre. With a background in dance and fitness, Natasja has an exceptional understanding of how the body moves — and what happens when it stops moving well. Her sessions combine technical skill with an energetic, encouraging presence that motivates clients to take an active role in their healing journey.\n\nWhen you visit Natasja, she will assess your posture and movement patterns before working through the areas of tension using the Body Alignment method. Her technique is precise yet gentle, focusing on releasing the deep muscular spasms that cause skeletal misalignment and pain. The treatment is fully clothed and completely non-invasive. Whether you are a local farmer, a creative professional, or simply someone seeking relief from chronic discomfort, Natasja is here to help. Book your first session with Natasja today.",
  },
  {
    slug: "fatima-noor-chand",
    name: "Fatima Noor Chand",
    title: "Body Alignment Practitioner",
    cell: "079 024 4603",
    whatsapp: "27790244603",
    location: "Constantia",
    region: "cape-town",
    facebook:
      "https://www.facebook.com/profile.php?id=61556229269593",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/37-1.png",
    bio: "Fatima Noor Chand practises Body Alignment from Constantia in Cape Town's leafy southern suburbs. Fatima's approach is calm, considered, and deeply attentive to the individual needs of each client. She is passionate about the mind-body connection and understands that physical pain often has emotional and stress-related roots that must be addressed for true healing to occur.\n\nA session with Fatima is a holistic experience. She begins with a thorough assessment, taking time to understand not just where your pain is but what might be driving it. She then applies the Body Alignment technique — targeted, gentle pressure on the muscles along the spine and in areas of chronic tension — to release the deep holding patterns that cause misalignment. You remain fully clothed and comfortable throughout. Clients consistently report feeling profoundly different after just one session. Book your first session with Fatima today.",
  },
  {
    slug: "kassiem-omar",
    name: "Kassiem Omar",
    title: "Body Alignment Practitioner",
    cell: "072 843 2456",
    whatsapp: "27728432456",
    location: "Wetton, Southern Suburbs",
    region: "cape-town",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/6-1.png",
    bio: "Kassiem Omar is a certified Body Alignment practitioner based in Wetton in Cape Town's Southern Suburbs. Kassiem is known for his calm, reassuring demeanour and his ability to quickly identify the areas of tension that are contributing to a client's pain. He is dedicated to helping the community access effective, drug-free pain relief through the Body Alignment method.\n\nEach session with Kassiem follows a structured approach: a postural assessment, followed by targeted treatment of the muscles along the spinal column and other affected areas. Using precise, gentle pressure, he encourages hypertonic muscles to release, allowing the skeletal system to return to proper alignment. The treatment is fully clothed, non-invasive, and suitable for people of all ages. Most clients experience meaningful relief from their very first session. Book your first session with Kassiem today.",
  },
  {
    slug: "widaat-salie",
    name: "Widaat Salie",
    title: "Body Alignment Practitioner",
    cell: "082 735 1497",
    whatsapp: "27827351497",
    location: "George, Southern Cape",
    region: "garden-route",
    facebook:
      "https://www.facebook.com/share/p/s7nMufqCKNdYdobo/",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/Screenshot-2024-11-12-at-22.20.55.png",
    bio: "Widaat Salie is the Body Alignment Association's practitioner on the Garden Route, based in the vibrant town of George. Serving clients across the Southern Cape, Widaat brings warmth, expertise, and a deep commitment to holistic healing. She understands the unique physical demands of life in the Garden Route — from outdoor activities and sport to the everyday stresses of work and family life.\n\nWhen you visit Widaat, she takes time to understand your specific concerns before beginning a thorough hands-on assessment and treatment. Using the Body Alignment technique, she works along the spine and key muscle groups to release the deep-seated tension that causes skeletal misalignment and pain. The treatment is gentle, fully clothed, and requires no medication. Clients in the George area frequently report dramatic improvements in pain, mobility, and overall wellbeing after their first session. Book your first session with Widaat today.",
  },
  {
    slug: "elsie-scott",
    name: "Elsie Scott",
    title: "Body Alignment Practitioner",
    cell: "072 138 9146",
    whatsapp: "27721389146",
    location: "Bredasdorp",
    region: "overberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/12/2.png",
    bio: "Elsie Scott serves the Bredasdorp and greater Overberg community as a certified Body Alignment practitioner. In a region where access to specialised healthcare can be limited, Elsie fills a vital role — offering effective, non-invasive pain relief close to home. Her warm, no-nonsense approach puts clients at ease from the moment they walk through the door.\n\nA session with Elsie is focused and results-driven. She assesses your posture, identifies the key areas of muscular tension, and then applies the Body Alignment method — gentle, sustained pressure that releases deep muscular spasms and allows your body to realign naturally. You stay fully clothed throughout, and there is no discomfort. Clients from across the Overberg trust Elsie for her skill, her consistency, and her genuine care for their wellbeing. Book your first session with Elsie today.",
  },
  {
    slug: "aysha-harnekar",
    name: "Aysha Harnekar",
    title: "Body Alignment Practitioner",
    cell: "082 971 3166",
    whatsapp: "27829713166",
    location: "Retreat",
    region: "cape-town",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2025/05/Aysha.png",
    bio: "Aysha Harnekar is a certified Body Alignment practitioner based in Retreat on the Cape Flats. Aysha is deeply committed to making Body Alignment therapy accessible to her community, believing that everyone deserves the chance to live free from chronic pain. Her gentle, patient approach makes her especially popular with first-time clients who may be uncertain about what to expect.\n\nIn a session with Aysha, you will be guided through a careful assessment of your posture and areas of discomfort. She then applies the Body Alignment technique, using targeted pressure to release the muscular tension that pulls your skeleton out of alignment and compresses nerves. The treatment is entirely non-invasive — no medication, no oils, and you remain fully clothed throughout. Clients regularly describe the relief as immediate and significant. Book your first session with Aysha today.",
  },
  {
    slug: "amore-engelbrecht",
    name: "Amoré Engelbrecht",
    title: "Body Alignment Practitioner",
    cell: "",
    location: "TBC",
    region: "helderberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2025/12/BASA-Profile-Picture.png",
    isNew: true,
    bio: "Amoré Engelbrecht is one of the newest members of the Body Alignment Association of South Africa. A recent graduate of the practitioner training programme, Amoré brings fresh energy, meticulous technique, and a genuine passion for helping people to her practice. She is eager to build her client base and make a meaningful difference in her community through the Body Alignment method.\n\nAs a newly certified practitioner, Amoré combines the latest training with an attentive, thorough approach to each session. She takes extra care to ensure every client feels heard, comfortable, and confident in the treatment process. Sessions are fully clothed, non-invasive, and focused on releasing the deep muscular tension that causes misalignment and pain. Book your first session with Amoré today.",
  },
  {
    slug: "renate-moolman",
    name: "Renate Moolman",
    title: "Body Alignment Practitioner",
    cell: "082 622 4394",
    whatsapp: "27826224394",
    location: "Caledon | Hermanus",
    region: "overberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2026/02/BASA-Profile-Picture.png",
    isNew: true,
    bio: "Renate Moolman is a newly certified Body Alignment practitioner serving the Caledon and Hermanus areas of the Overberg. Joining the Body Alignment Association with enthusiasm and dedication, Renate is committed to bringing effective, non-invasive pain relief to one of the Western Cape's most beautiful — and most underserved — regions. Her decision to train as a practitioner was inspired by her own transformative experience with Body Alignment.\n\nDuring a session with Renate, you can expect a thorough assessment followed by gentle, targeted treatment of the muscles along your spine and areas of chronic tension. The technique encourages your body to release the deep muscular spasms that cause misalignment, pain, and restricted movement. You remain fully clothed, and there is no discomfort involved. Clients in the Overberg now have a skilled, caring practitioner close to home. Book your first session with Renate today.",
  },
  {
    slug: "violetta-roziers",
    name: "Violetta Roziers",
    title: "Body Alignment Practitioner",
    cell: "072 936 5149",
    whatsapp: "27729365149",
    location: "Paarl | Winelands",
    region: "winelands",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2025/03/BASA-AD-1080X1080-px-300x300.png",
    isNew: true,
    bio: "Violetta Roziers is the Body Alignment Association's practitioner in the Winelands, serving clients from her mobile practice across Paarl and the surrounding areas. As one of the newest members of the network, Violetta brings a fresh perspective and boundless enthusiasm to her work. She is particularly drawn to the way Body Alignment addresses root causes rather than masking symptoms — a philosophy that resonates deeply with her approach to health and wellbeing.\n\nVioletta offers a mobile service, bringing Body Alignment therapy directly to you in the comfort of your own home or office. Each session begins with an assessment and progresses through targeted treatment of the key muscle groups that contribute to misalignment and pain. The technique is gentle, fully clothed, and profoundly effective. If you are in the Paarl or greater Winelands area and seeking relief from chronic pain, tension, or postural issues, Violetta is ready to help. Book your first session with Violetta today.",
  },
  {
    slug: "mari-du-toit",
    name: "Mari du Toit",
    title: "Body Alignment Practitioner",
    cell: "067 692 5512",
    whatsapp: "27676925512",
    location: "Hermanus",
    region: "overberg",
    image:
      "https://bodyalignment.co.za/wp-content/uploads/2024/11/38.png",
    isNew: true,
    bio: "Mari du Toit is a newly certified Body Alignment practitioner based in the beautiful coastal town of Hermanus. Joining the growing Overberg presence of the Body Alignment Association, Mari is passionate about helping locals and visitors alike find relief from the physical toll of everyday life. Her calm, reassuring manner makes every client feel welcome and cared for from the moment they arrive.\n\nA session with Mari is a restorative experience. She begins by understanding your symptoms and assessing your posture, then applies the Body Alignment technique — gentle, targeted pressure on the muscles that are holding your body in patterns of tension and misalignment. The treatment is fully clothed, completely non-invasive, and many clients feel a significant shift after just one session. Whether you are a Hermanus local or visiting the Whale Coast, Mari is here to help you move and feel better. Book your first session with Mari today.",
  },
];

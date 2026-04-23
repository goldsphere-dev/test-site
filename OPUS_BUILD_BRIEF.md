# Body Alignment SA — Opus Build Brief
## Full Redesign Specification

---

## 1. CONTEXT — WHAT EXISTS

This is a Next.js 16 + TypeScript + Tailwind CSS v4 project (App Router, static export target).
Working directory: `C:\Users\Admin\BodyAlignment`
GitHub: `goldsphere-dev/test-site`
Current branch: `feature/scaffold` — basic scaffold exists but needs full redesign.
**Create a new branch `feature/redesign` off `feature/scaffold` and build everything there.**

Already built (REPLACE entirely with redesign):
- `app/layout.tsx` — root layout
- `app/globals.css` — styles
- `app/page.tsx` — home page
- `app/about/page.tsx`
- `app/practitioners/page.tsx`
- `app/practitioners/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/courses/page.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/PractitionerCard.tsx`
- `components/WhatsAppButton.tsx`
- `components/ContactForm.tsx`
- `data/practitioners.ts` — **UPDATE image URLs (see Section 6)**

**NEW pages to create:**
- `app/conditions/page.tsx`

**NEW components to create:**
- `components/StatsStrip.tsx`
- `components/ConditionCard.tsx`
- `components/HowItWorks.tsx`
- `components/TestimonialsCarousel.tsx`
- `components/LocationFilter.tsx`
- `components/FaqAccordion.tsx`
- `components/InstagramFeed.tsx`
- `components/FacebookFeed.tsx`
- `components/AnimatedSection.tsx` (Framer Motion wrapper)

---

## 2. DESIGN SYSTEM

### Brand Colors (from logo — NON-NEGOTIABLE)
```css
--ba-charcoal:     #3D3D3D   /* primary text, headers, nav */
--ba-red:          #CC2222   /* accent, CTAs, highlights, logo dot */
--ba-red-dark:     #A81B1B   /* hover state for red */
--ba-red-light:    #FFF0F0   /* subtle red tint backgrounds */
--ba-white:        #FFFFFF
--ba-offwhite:     #FAFAF9   /* page background */
--ba-gray-light:   #F5F4F2   /* alternate section backgrounds */
--ba-gray-mid:     #9CA3AF   /* secondary/meta text */
--ba-gray-dark:    #4B5563   /* body text */
--ba-border:       #E8E7E5   /* card borders, dividers */
```

In Tailwind v4 (uses `@theme` block in globals.css):
```css
@import "tailwindcss";

@theme {
  --color-charcoal:    #3D3D3D;
  --color-brand-red:   #CC2222;
  --color-red-dark:    #A81B1B;
  --color-red-light:   #FFF0F0;
  --color-offwhite:    #FAFAF9;
  --color-gray-light:  #F5F4F2;
  --color-gray-mid:    #9CA3AF;
  --color-gray-dark:   #4B5563;
  --color-border:      #E8E7E5;
}

body {
  background-color: #FAFAF9;
  color: #3D3D3D;
}
```

### Typography
- Font: **Inter** (Google Fonts) — import via `next/font/google`
- Fallback: system-ui, sans-serif
- Scale:
  - Display: 60px / 700 / charcoal / tight leading
  - H1: 48px / 700 / charcoal
  - H2: 36px / 700 / charcoal
  - H3: 24px / 600 / charcoal
  - H4: 18px / 600 / charcoal
  - Body: 16px / 400 / gray-dark / 1.7 leading
  - Small: 14px / 400 / gray-mid
  - Label/badge: 12px / 600 / uppercase / tracking-wider

### Spacing — 8px base grid
- xs: 8px | sm: 16px | md: 24px | lg: 40px | xl: 64px | 2xl: 96px | 3xl: 128px

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-xl` (12px)
- Inputs: `rounded-xl` (12px)
- Badges/tags: `rounded-full`
- Images: `rounded-2xl`

### Shadows
- Card default: `shadow-sm` + `border border-border`
- Card hover: `shadow-lg`
- Navbar: `shadow-sm`

### Button Styles
```
Primary:   bg-brand-red text-white hover:bg-red-dark rounded-xl px-6 py-3 font-semibold text-sm transition-all
Secondary: border-2 border-charcoal text-charcoal hover:bg-gray-light rounded-xl px-6 py-3 font-semibold text-sm
Ghost:     text-brand-red font-semibold hover:underline underline-offset-4 text-sm
```

### Design Feel
- Minimalist, premium wellness — NOT clinical, NOT spiritual
- Generous whitespace — sections breathe
- Soft asymmetric layouts (text left / image right alternating)
- Subtle accent: red used sparingly — dots, underlines, highlights, CTAs only
- Scroll animations: fade-up on section entry (Framer Motion, `initial={{ opacity:0, y:24 }}`, `animate={{ opacity:1, y:0 }}`, `transition={{ duration:0.5 }}`)
- Install Framer Motion: `npm install framer-motion`

---

## 3. IMAGE ASSETS

### WordPress Session/Gallery Images (use these directly)
```
HERO_1:      https://bodyalignment.co.za/wp-content/uploads/2024/11/316951890_538215728319317_833599577868475642_n.jpg
HERO_2:      https://bodyalignment.co.za/wp-content/uploads/2024/11/313396490_522109666596590_475694032180513047_n.jpg
SESSION_1:   https://bodyalignment.co.za/wp-content/uploads/2024/11/313409492_522109719929918_958326532651567349_n.jpg
SESSION_2:   https://bodyalignment.co.za/wp-content/uploads/2024/11/279965250_5385755371457189_796099243356844957_n.jpg
SESSION_3:   https://bodyalignment.co.za/wp-content/uploads/2024/11/317241330_538216218319268_2721070637639036423_n.jpg
SESSION_4:   https://bodyalignment.co.za/wp-content/uploads/2024/11/317088280_538216131652610_6605356891445382573_n.jpg
TEAM_1:      https://bodyalignment.co.za/wp-content/uploads/2024/11/WhatsApp-Image-2023-10-20-at-11.14.35.jpeg
TEAM_2:      https://bodyalignment.co.za/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-03-at-17.00.11-150x150.jpeg
COURSE_IMG:  https://bodyalignment.co.za/wp-content/uploads/2024/11/Screenshot-2024-11-12-at-22.20.55.png
NECK_ICON:   https://bodyalignment.co.za/wp-content/uploads/2024/11/15.png
```

### Unsplash Fill-in Images (real URLs, no placeholders)
```
HERO_BG:         https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=85&fit=crop
ABOUT_1:         https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85&fit=crop
ABOUT_2:         https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=85&fit=crop
CONDITIONS_BG:   https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=85&fit=crop
COURSE_BG:       https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85&fit=crop
TESTIMONIAL_BG:  https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=85&fit=crop
PRACTITIONER_FB: https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&fit=crop
```

### Practitioner Image URLs (WordPress — all confirmed)
Update `data/practitioners.ts` with these `image` values:
```
Janet Yates:             https://bodyalignment.co.za/wp-content/uploads/2024/11/38.png
Ashley Du Plooy:         https://bodyalignment.co.za/wp-content/uploads/2024/11/35.png
Charnè McQuire:          https://bodyalignment.co.za/wp-content/uploads/2024/11/32.png
Logan Fitzgibbon:        https://bodyalignment.co.za/wp-content/uploads/2024/11/29.png
Julie Hellqvist:         https://bodyalignment.co.za/wp-content/uploads/2024/11/26.png
Lize Kroese:             https://bodyalignment.co.za/wp-content/uploads/2024/11/28.png
Rudolph Maree:           https://bodyalignment.co.za/wp-content/uploads/2024/11/25.png
Natalie Mantsi:          https://bodyalignment.co.za/wp-content/uploads/2024/11/22.png
Nuran Mukaddam:          https://bodyalignment.co.za/wp-content/uploads/2024/11/19.png
Antoinette Retief:       https://bodyalignment.co.za/wp-content/uploads/2024/11/15-1.png
Lanesse Collins:         https://bodyalignment.co.za/wp-content/uploads/2024/11/12.png
Catherine Muchena:       https://bodyalignment.co.za/wp-content/uploads/2024/11/9.png
Masnoena Masters:        https://bodyalignment.co.za/wp-content/uploads/2024/11/31.png
Natasja Warnick:         https://bodyalignment.co.za/wp-content/uploads/2024/11/34.png
Fatima Noor Chand:       https://bodyalignment.co.za/wp-content/uploads/2024/11/37-1.png
Kassiem Omar:            https://bodyalignment.co.za/wp-content/uploads/2024/11/6-1.png
Widaat Salie:            https://bodyalignment.co.za/wp-content/uploads/2024/11/Screenshot-2024-11-12-at-22.20.55.png
Elsie Scott:             https://bodyalignment.co.za/wp-content/uploads/2024/12/2.png
Aysha Harnekar:          https://bodyalignment.co.za/wp-content/uploads/2025/05/Aysha.png
Amoré Engelbrecht:       https://bodyalignment.co.za/wp-content/uploads/2025/12/BASA-Profile-Picture.png
Renate Moolman:          https://bodyalignment.co.za/wp-content/uploads/2026/02/BASA-Profile-Picture.png
Violetta Roziers:        https://bodyalignment.co.za/wp-content/uploads/2025/03/BASA-AD-1080X1080-px-300x300.png
Mari du Toit:            https://bodyalignment.co.za/wp-content/uploads/2024/11/38.png
```

### Logo
Logo is saved at `public/logo.jpg` — use `<img>` tag (not next/image) in Navbar.
Logo colors: Charcoal `#3D3D3D` body + Red `#CC2222` accent dots and "I" in ALIGNMENT.
Tagline: "Facilitates pain relief"

### next.config.ts — required for external images + static export
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'bodyalignment.co.za' },
      { protocol: 'http', hostname: 'bodyalignment.co.za' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'truwellness.co.za' },
    ],
  },
  trailingSlash: true,
}

export default nextConfig
```

---

## 4. SITE STRUCTURE & NAVIGATION

```
/                    Home
/about               About Body Alignment
/conditions          Conditions We Treat (NEW)
/practitioners       Find a Practitioner
/practitioners/[slug] Individual Practitioner
/courses             Become a Practitioner
/contact             Contact
```

### Navbar spec
- Sticky, `position: fixed`, full width, z-50
- **Transparent with white text** when at top of hero pages (Home)
- **White background with charcoal text** on scroll (threshold: 80px) — use `useScrollY` hook
- Logo left (img tag, height 44px)
- Nav links center on desktop: Home | About | Conditions | Practitioners | Courses | Contact
- CTA button right: "Find a Practitioner" (red, small)
- Mobile: hamburger → full-screen slide-down menu with all links + WhatsApp CTA
- Active link: red underline dot below

### Footer spec
- 4-column grid (desktop), stacked (mobile)
- Col 1: Logo + tagline + social icons (Facebook, Instagram)
- Col 2: Quick Links
- Col 3: Practitioners (list 5 featured, "View All" link)
- Col 4: Contact details + WhatsApp link
- Bottom bar: copyright + "Built for Body Alignment Association of South Africa"
- Background: `#3D3D3D` charcoal, text white/gray-300

---

## 5. PAGE SPECIFICATIONS

---

### 5.1 HOME PAGE (`app/page.tsx`)

#### Section 1 — Hero
- Full viewport height (`min-h-screen`)
- Layout: 50/50 split on desktop (text left, image right), stacked on mobile
- Left side:
  - Small badge: red dot + "Body Alignment Association of South Africa"
  - H1: "Restore Balance. Eliminate Pain. **Reclaim Your Life.**" (last 3 words in red)
  - Subtext: "South Africa's leading network of certified Body Alignment practitioners — helping you heal naturally, without medication or surgery."
  - Two CTAs: `[Find a Practitioner →]` (red primary) + `[How It Works]` (ghost)
  - Trust micro-copy below CTAs: "✓ 23+ Practitioners  ✓ South Africa Wide  ✓ No Medication Required"
- Right side: `SESSION_1` image, rounded-2xl, slight shadow, subtle float animation
- Background: `#FAFAF9` with very subtle dot pattern (CSS radial-gradient dots, opacity 0.04)

#### Section 2 — Stats Strip
- Full-width charcoal (`#3D3D3D`) background
- 4 stats in a row (2x2 on mobile):
  - `23+` Certified Practitioners
  - `100%` Non-Invasive Treatment
  - `45–60 min` Per Session
  - `South Africa` Wide Network
- Each stat: large bold red number/value, small white label below
- Animate count-up on scroll enter (simple CSS animation)

#### Section 3 — What Are You Feeling? (Symptom Entry)
- Section heading: "What are you experiencing?"
- Subheading: "Body Alignment helps with a wide range of conditions. Find your symptoms below."
- 6 clickable cards in a 3x2 grid (2x3 on mobile), each links to `/conditions#[id]`:
  1. 🔴 **Back & Lower Back Pain** — "The most common reason people seek Body Alignment"
  2. 🔴 **Neck & Shoulder Tension** — "Desk work, driving and stress lock up your cervical spine"
  3. 🔴 **Headaches & Migraines** — "Often rooted in muscular tension at the base of the skull"
  4. 🔴 **Sciatica & Nerve Pain** — "Burning, shooting pain down the leg — often dramatically relieved"
  5. 🔴 **Stress & Fatigue** — "Chronic stress stores itself physically in your muscles"
  6. 🔴 **Poor Posture** — "Uneven hips, rounded shoulders, forward head — all treatable"
- Card style: white bg, border, red icon top-left, charcoal text, hover lifts with red border

#### Section 4 — What is Body Alignment?
- Alternate layout: image left, text right
- Image: `HERO_2` (session/treatment photo)
- Text:
  - H2: "What is Body Alignment?"
  - Body: Full explanation (from existing site content — hypertonic spasm, nervous system, skeletal misalignment)
  - Pull quote in red: *"Body Alignment stimulates the muscles to relax, heal and unravel the tension stored in deep layers of the muscles."*
  - CTA: "Read More About Body Alignment →" (ghost link to /about)

#### Section 5 — How It Works
- Background: `#F5F4F2` light gray
- H2: "How a Session Works"
- 3 numbered steps in a row (cards on mobile):
  1. **Assessment** — "Charné evaluates your posture, movement, and areas of tension to identify the root cause of your discomfort."
  2. **Targeted Stimulation** — "Light, firm pressure is applied to specific muscle groups concentrating on the spinal column."
  3. **Natural Realignment** — "As muscles relax, the skeleton realigns and nerve communication is restored throughout the body."
- Each step: large red step number (64px, bold), title, body text, subtle arrow connector between steps (desktop)

#### Section 6 — Featured Practitioners
- H2: "Meet Our Practitioners"
- Subtext: "23 certified practitioners across South Africa — find one near you."
- 4 practitioner cards (Janet Yates, Charnè McQuire, Logan Fitzgibbon, Fatima Noor Chand)
- Card spec: portrait image (aspect-square, object-cover), name, location, "View Profile →" red link
- "View All Practitioners →" button below grid (red primary)

#### Section 7 — Testimonials
- Background: charcoal `#3D3D3D`
- H2 in white: "Real Results from Real People"
- 3 testimonial cards (white bg, subtle shadow):
  1. "After the very first session the difference was incredible. I walked in with a stiff neck and walked out standing straight. Absolutely remarkable." — Jacques B., Malmesbury ★★★★★
  2. "My sciatica is 90% better after just 3 sessions. I had suffered for over two years with no relief — Body Alignment changed my life." — Local client ★★★★★
  3. "Janet and her team have saved my life after almost suffering from daily headaches and neck spasms. Instant release after the very 1st session." — Client, Somerset West ★★★★★
- On mobile: horizontal scroll carousel

#### Section 8 — Instagram Feed
- H2: "Follow Our Journey"
- Subtext: "@bodyalignment_association on Instagram"
- Elfsight Instagram Feed widget embed:
  ```tsx
  // components/InstagramFeed.tsx
  // Add this Elfsight script to layout or page head via next/script
  // <Script src="https://static.elfsight.com/platform/platform.js" defer />
  // <div className="elfsight-app-REPLACE_WITH_WIDGET_ID" data-elfsight-app-lazy />
  // TODO: Client to create account at elfsight.com, create Instagram Feed widget
  // for @bodyalignment_association, paste widget ID above
  ```
- Show a styled placeholder card in dev with the Instagram handle and "Live feed — configure Elfsight widget ID"

#### Section 9 — CTA Banner
- Full-width red (`#CC2222`) background
- H2 white: "Ready to Feel the Difference?"
- Sub white: "Find a certified Body Alignment practitioner in your area and book your first session today."
- Button: white bg, red text, hover bg-red-light: "Find a Practitioner Near You"

---

### 5.2 ABOUT PAGE (`app/about/page.tsx`)

- Page hero: H1 "About Body Alignment", sub tagline, `ABOUT_1` image background with overlay
- Section: "Our Story" — full narrative from site (hypertonic spasm, nervous system, root cause)
- Pull quote (red left border): *"The body keeps the score. By addressing root patterns rather than chasing symptoms, the body returns to alignment and ease."*
- Section: "The Body Alignment Association of South Africa" — what BASA is, standards, training
- Section: "Our Approach" — 3 principles side by side: Root Cause | Non-Invasive | Whole Body
- Gallery: 4 session images (SESSION_1, SESSION_2, SESSION_3, SESSION_4) in masonry-style grid
- CTA: "Become a Practitioner" + "Find a Practitioner"

---

### 5.3 CONDITIONS PAGE (`app/conditions/page.tsx`) — NEW

- Page hero: H1 "Conditions We Treat", sub, `CONDITIONS_BG` image
- Intro paragraph: "Body Alignment addresses the root cause of pain by releasing muscular tension that pulls the skeleton out of alignment. Here are the conditions that respond most powerfully to treatment."
- 6 full condition sections (anchor IDs for symptom entry cards):

```
id="back-pain"
Icon: spine/back SVG
Title: Back & Lower Back Pain
Sub: "The #1 reason people seek Body Alignment therapy"
Body: Misalignment in the lumbar spine leads to sciatica, sacroiliac joint pain, hip and knee problems, and even digestive or bladder discomfort. Overcompensation patterns in the lower back often mask deeper pelvic imbalances.
```

```
id="neck-shoulders"
Title: Neck & Shoulder Tension
Body: Misalignment in the cervical spine may contribute to chronic headaches, dizziness, migraines, facial pain, and tension in the neck and shoulder area. Long hours at a desk or behind a steering wheel are common triggers.
```

```
id="headaches"
Title: Headaches & Migraines
Body: Tension stored in the upper cervical muscles and the base of the skull is a common contributor to recurring headaches — often relieved significantly through realignment.
```

```
id="sciatica"
Title: Sciatica & Nerve Pain
Body: Pressure on the sciatic nerve from pelvic or lumbar misalignment causes pain, burning, and numbness radiating down the leg — often dramatically relieved with Body Alignment.
```

```
id="stress-fatigue"
Title: Stress & Fatigue
Body: Chronic stress stores itself physically in your muscles. Emotional trauma, anxiety, and prolonged stress create hypertonic spasms that restrict nerve flow, drain energy, and undermine overall wellbeing.
```

```
id="posture"
Title: Poor Posture & Spinal Alignment
Body: Uneven hips or shoulders, forward head posture, rounded back — these are structural imbalances that Body Alignment directly addresses. Also effective for sports injuries, joint pain, tennis elbow, and restless legs.
```

- Each section: alternating image left/right layout, condition image, bullet list of related symptoms, "Book a Session" CTA
- Bottom CTA: Find Practitioner button

---

### 5.4 PRACTITIONERS PAGE (`app/practitioners/page.tsx`)

- Page hero: H1 "Find a Practitioner Near You", sub
- **Location Filter bar** (sticky below navbar on scroll):
  - "All Areas" + region pills: Cape Town | Helderberg | Overberg | Winelands | West Coast | Garden Route | International
  - Filter logic: client-side, filters by practitioner location field
  - Search input: "Search by name or area..."
- Practitioner grid: responsive 2/3/4 col
- Card spec:
  - Portrait image (aspect-square, rounded-2xl, object-cover)
  - "NEW" badge (red) if `isNew: true`
  - "In Memoriam" badge (gray) if `isRIP: true`
  - Name (H3)
  - Location with pin icon
  - Cell number (clickable tel: link)
  - "View Profile" button (small, red outline)
- In Memoriam section at bottom with gray styling
- All 23 practitioners rendered

---

### 5.5 INDIVIDUAL PRACTITIONER PAGE (`app/practitioners/[slug]/page.tsx`)

This page is a **sales page** — it must make a compelling case to book a session. Every element should build trust and reduce friction.

#### Hero
- Split layout: profile image left (60% width, full bleed rounded-2xl), details right
- Name (H1), title, location
- Rating: "★★★★★ Body Alignment Certified Practitioner"
- WhatsApp button (green, prominent): `https://wa.me/{number}?text=Hi%20I%20found%20you%20on%20the%20Body%20Alignment%20website.%20I%27d%20like%20to%20book%20a%20session.`
- Phone call link
- Facebook link (if available)

#### Stats Bar
4 micro-stats in a charcoal strip:
- Session: 45–60 min | Price: R750* | Fully Clothed | Non-Invasive
- Small asterisk note: "*Pricing may vary. Confirm with practitioner."

#### AI-Generated Bio
Write a unique, persuasive 2-paragraph bio for EACH practitioner. Guidelines:
- Paragraph 1: Personal hook — who they are, their background, why they became a Body Alignment practitioner. Make it warm, human, specific to their location. Reference local context (e.g., "In the Winelands region...", "Serving the Constantia community...").
- Paragraph 2: What to expect in a session with them. Emphasize: gentle, non-invasive, fully clothed, results from first session. End with a call to action: "Book your first session with [FirstName] today."
- Tone: Warm, professional, confident — not clinical, not spiritual/woo.
- For the RIP practitioner (Lanesse Collins): Write a respectful tribute, no booking CTA.

Generate all 23 bios. Store them in `data/practitioners.ts` as a `bio` field on each practitioner object.

#### Conditions Treated
- H3: "What [FirstName] Can Help With"
- 6 condition pills/tags (same as conditions page): clickable links to /conditions#[id]

#### What to Expect in Your First Session
- 3-step timeline: Arrive & Consult → Assessment & Treatment → Post-Session
- Reassurance copy: "You remain fully clothed throughout. No oils, no cracking, no pain."

#### Google Maps Embed
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18...&q={location},+South+Africa"
  width="100%" height="300" style="border:0" allowfullscreen loading="lazy"
/>
```
Note: Use embed URL with `q=` parameter for each practitioner's location. No API key needed.

#### Contact Form
- H3: "Book a Session with [FirstName]"
- Fields: Name, Phone, Email, Message (pre-filled: "Hi [FirstName], I'd like to book a Body Alignment session.")
- Hidden field: practitioner name
- Submit: Formspree-ready (action URL placeholder: `https://formspree.io/f/FORM_ID`)
- Success state: green confirmation message

#### Sticky Mobile WhatsApp Bar
On mobile only: fixed bottom bar with WhatsApp button + "Call" button

---

### 5.6 COURSES PAGE (`app/courses/page.tsx`)

Design inspiration: the course flyer (teal/green gradient, bold typography, professional)

- Page hero: Dark gradient background (`#1B3A4B` to `#0D2B38`), white text
  - Badge: "Body Alignment Association of South Africa"
  - H1: "Body Alignment Practitioner Course"
  - Sub: "Looking to start a career in holistic healthcare or interested in expanding your existing knowledge?"
  - `COURSE_BG` image right side (practitioner teaching at anatomy board)

- Intake callout boxes (2 side by side):
  - February 2026 intake
  - September 2026 intake
  - Each: dark card with red accent, "Enroll Now" CTA

- Course Details section:
  - Duration: 3-month comprehensive practical course
  - Fee: **R17,800**
  - Location: Somerset West (contact for details)

- Course Includes (3 cards):
  1. Principles of Body Alignment — theoretical foundation in musculoskeletal anatomy
  2. Practical Application — hands-on technique training with real clients
  3. Client & Office Management — business setup, client communication, practice management

- Why Become a Practitioner (3 reasons):
  - No Previous Experience Required
  - Expert Teaching & Guidance from Janet Yates
  - Limited Places Per Course — intimate learning environment

- Testimonial from a graduate (AI-generated, realistic):
  > "Training with Janet changed my life. Within 3 months I had the skills and confidence to start my own practice. The practical training is exceptional — you treat real clients under supervision from day one." — Graduate, Somerset West

- Enquiry Form:
  - Fields: Name, Email, Phone, "Which intake are you interested in?" (dropdown: Feb 2026 / Sept 2026 / Future intake), Message
  - Formspree-ready

- Bottom: Contact details (janet.bodyalignment@gmail.com | 082 686 8291)

---

### 5.7 CONTACT PAGE (`app/contact/page.tsx`)

- Page hero: simple, H1 "Get in Touch"
- 2-column layout (desktop): form left, info + map right
- Form: Name, Email, Phone, Subject (dropdown: General Enquiry / Find a Practitioner / Course Enquiry / Other), Message
- Right column:
  - Contact details with icons
  - Facebook link: https://www.facebook.com/bodyalignmentbyjanet/
  - Instagram: https://www.instagram.com/bodyalignment_association/
  - Google Maps embed: Somerset West, Western Cape

---

## 6. DATA UPDATES — `data/practitioners.ts`

Add the following fields to the Practitioner interface:
```ts
interface Practitioner {
  slug: string
  name: string
  title: string
  cell: string
  whatsapp?: string
  location: string
  region: 'cape-town' | 'helderberg' | 'overberg' | 'winelands' | 'west-coast' | 'garden-route' | 'international'
  facebook?: string
  image: string         // REQUIRED — use WordPress URLs from Section 3
  isNew?: boolean
  isRIP?: boolean
  bio: string           // AI-generated bio per Section 5.5 guidelines
}
```

Region mapping for location filter:
```
Janet Yates (Somerset West)          → helderberg
Ashley Du Plooy (Byford, Australia)  → international
Charnè McQuire (Malmesbury)         → west-coast
Logan Fitzgibbon (Gansbaai)         → overberg
Julie Hellqvist                      → helderberg
Lize Kroese (Somerset West)          → helderberg
Rudolph Maree (Brackenfell)         → cape-town
Natalie Mantsi (Kuilsriver)         → cape-town
Nuran Mukaddam (Parow East)         → cape-town
Antoinette Retief (Strand)          → helderberg
Lanesse Collins (Hout Bay)          → cape-town
Catherine Muchena                   → cape-town
Masnoena Masters (Brackenfell)      → cape-town
Natasja Warnick (Darling/Mamre)     → west-coast
Fatima Noor Chand (Constantia)      → cape-town
Kassiem Omar (Wetton)               → cape-town
Widaat Salie (George)               → garden-route
Elsie Scott (Bredasdorp)            → overberg
Aysha Harnekar (Retreat)            → cape-town
Amoré Engelbrecht                   → helderberg
Renate Moolman (Caledon/Hermanus)   → overberg
Violetta Roziers (Paarl/Winelands)  → winelands
Mari du Toit (Hermanus)             → overberg
```

---

## 7. TECHNICAL CONFIGURATION

### Install dependencies
```bash
cd /c/Users/Admin/BodyAlignment
npm install framer-motion
```

### next.config.ts (replace existing)
See Section 3 — Image Assets for the full config.

### Animations — AnimatedSection component
```tsx
// components/AnimatedSection.tsx
"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AnimatedSection({ children, className, delay = 0 }: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### Instagram Feed — InstagramFeed component
```tsx
// components/InstagramFeed.tsx
"use client"
import Script from "next/script"

export default function InstagramFeed() {
  return (
    <div className="w-full">
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
      {/* TODO: Replace REPLACE_WITH_WIDGET_ID with actual Elfsight widget ID
          Steps: 1. Go to elfsight.com  2. Create free account  3. Create Instagram Feed widget
          4. Connect @bodyalignment_association  5. Copy widget ID here */}
      <div
        className="elfsight-app-REPLACE_WITH_WIDGET_ID"
        data-elfsight-app-lazy
      />
      {/* Dev placeholder — remove when widget ID is configured */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center text-gray-500 text-sm">
        <p className="font-semibold mb-1">Instagram Feed</p>
        <p>@bodyalignment_association</p>
        <p className="mt-2 text-xs">Configure Elfsight widget ID to display live feed</p>
      </div>
    </div>
  )
}
```

### WhatsApp URL format (CONFIRMED)
```
https://wa.me/{number}?text=Hi%20I%20found%20you%20on%20the%20Body%20Alignment%20website.%20I%27d%20like%20to%20book%20a%20session.
```
Number format: country code + number, no spaces (e.g., `27826868291`)

### Static Export & Cloudflare Pages
- `output: 'export'` in next.config.ts (see Section 3)
- All dynamic routes must have `generateStaticParams()`
- No `useSearchParams` without Suspense boundary
- Cloudflare Pages build command: `npm run build`
- Output directory: `out`

### Navbar scroll behavior
```tsx
"use client"
const [scrolled, setScrolled] = useState(false)
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 80)
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
}, [])
// Apply: scrolled ? 'bg-white shadow-sm text-charcoal' : 'bg-transparent text-white'
// Only transparent on Home page — all other pages: always white
```

---

## 8. REFERENCE SITES (studied and absorbed)

1. **https://leemcq.github.io/Body_Alignment/** — Charné McQuire's site (one of our practitioners)
   - Take: stats strip, conditions with icons, 3-step process, testimonial format, FAQ structure, pricing display
   - This is the single best design reference — replicate its quality and structure at the network level

2. **https://truwellness.co.za/body-alignment-ilse-steenkamp/** — Ilse Steenkamp's page
   - Take: emotional/psychological framing of Body Alignment in practitioner bios ("the body keeps the score")

3. **https://bodyalignment.co.za/** — current WordPress site (source of all content + images)

---

## 9. BUILD ORDER

Execute in this sequence to avoid import errors:

1. `npm install framer-motion`
2. Update `next.config.ts`
3. Update `app/globals.css` (design tokens)
4. Update `data/practitioners.ts` (image URLs, region, bio fields)
5. Build shared components: `AnimatedSection`, `Navbar`, `Footer`, `WhatsAppButton`, `ContactForm`
6. Build section components: `StatsStrip`, `HowItWorks`, `ConditionCard`, `TestimonialsCarousel`, `LocationFilter`, `FaqAccordion`, `InstagramFeed`
7. Update `app/layout.tsx`
8. Build pages in order: Home → About → Conditions → Practitioners → [slug] → Courses → Contact
9. Run `npm run build` — fix any type errors
10. Commit to `feature/redesign` branch, push to origin

---

## 10. QUALITY CHECKLIST

Before committing, verify:
- [ ] All 23 practitioner pages generate correctly (`generateStaticParams`)
- [ ] `npm run build` completes with `output: 'export'` — zero errors
- [ ] All external image URLs load (WordPress + Unsplash)
- [ ] WhatsApp links work on mobile
- [ ] Google Maps iframes render
- [ ] Mobile hamburger menu works
- [ ] Location filter on /practitioners works client-side
- [ ] Contact forms have Formspree placeholder action URL
- [ ] Framer Motion animations fire on scroll
- [ ] No TypeScript errors
- [ ] Navbar transparent→white scroll transition works on Home only
- [ ] All pages have correct `<Metadata>` title + description

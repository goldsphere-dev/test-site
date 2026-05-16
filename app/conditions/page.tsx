import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "Body Alignment effectively treats back pain, neck tension, headaches, sciatica, stress, poor posture, and more. Learn how it works.",
};

const conditions = [
  {
    id: "back-pain",
    title: "Back & Lower Back Pain",
    subtitle: "The #1 reason people seek Body Alignment therapy",
    body: "Misalignment in the lumbar spine leads to sciatica, sacroiliac joint pain, hip and knee problems, and even digestive or bladder discomfort. Overcompensation patterns in the lower back often mask deeper pelvic imbalances. Body Alignment releases the muscular tension that pulls vertebrae out of position, allowing the body to return to its natural alignment.",
    symptoms: [
      "Chronic lower back ache",
      "Shooting pain when bending",
      "Hip or pelvic imbalance",
      "Disc compression or herniation",
      "Stiffness after sitting",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/316951890_538215728319317_833599577868475642_n.jpg",
  },
  {
    id: "neck-shoulders",
    title: "Neck & Shoulder Tension",
    subtitle: "Desk work, driving, and stress lock up your cervical spine",
    body: "Misalignment in the cervical spine may contribute to chronic headaches, dizziness, migraines, facial pain, and tension in the neck and shoulder area. Long hours at a desk or behind a steering wheel are common triggers. Body Alignment targets the deep muscles in the upper back and neck to release the holding patterns that cause this tension.",
    symptoms: [
      "Stiff or painful neck",
      "Shoulder blade tightness",
      "Restricted head turning",
      "Pain radiating into arms",
      "Tension between shoulders",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/15.png",
  },
  {
    id: "headaches",
    title: "Headaches & Migraines",
    subtitle: "Often rooted in muscular tension, not medication deficiency",
    body: "Tension stored in the upper cervical muscles and the base of the skull is a common contributor to recurring headaches, often relieved significantly through realignment. Many clients who have suffered from headaches for years find lasting relief once the underlying muscular tension is addressed rather than masked with painkillers.",
    symptoms: [
      "Recurring tension headaches",
      "Migraine with aura",
      "Pressure at the base of the skull",
      "Dizziness or light-headedness",
      "Eye strain and facial pain",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/279965250_5385755371457189_796099243356844957_n.jpg",
  },
  {
    id: "sciatica",
    title: "Sciatica & Nerve Pain",
    subtitle: "Pain down the leg, often dramatically relieved",
    body: "Pressure on the sciatic nerve from pelvic or lumbar misalignment causes pain, burning, and numbness radiating down the leg. This is one of the most common and debilitating conditions we treat, and it often responds remarkably well to Body Alignment. By releasing the muscular tension in the lower back and pelvis, pressure is taken off the sciatic nerve.",
    symptoms: [
      "Shooting pain down one leg",
      "Burning sensation in buttock or thigh",
      "Numbness or tingling in foot",
      "Pain worse when sitting",
      "Difficulty standing or walking",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/317241330_538216218319268_2721070637639036423_n.jpg",
  },
  {
    id: "stress-fatigue",
    title: "Stress & Fatigue",
    subtitle: "Your body stores what your mind cannot process",
    body: "Chronic stress stores itself physically in your muscles. Emotional trauma, anxiety, and prolonged stress create hypertonic spasms that restrict nerve flow, drain energy, and undermine overall wellbeing. Body Alignment releases this physical tension, often producing a profound sense of emotional release alongside physical relief.",
    symptoms: [
      "Persistent exhaustion",
      "Muscle tension without clear cause",
      "Disrupted sleep",
      "Reduced concentration",
      "General sense of being unwell",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/317088280_538216131652610_6605356891445382573_n.jpg",
  },
  {
    id: "posture",
    title: "Poor Posture & Spinal Alignment",
    subtitle: "Structural imbalances that Body Alignment directly addresses",
    body: "Uneven hips or shoulders, forward head posture, rounded back. These are structural imbalances that Body Alignment directly addresses. Also effective for sports injuries, joint pain, tennis elbow, carpal tunnel, restless legs, and general joint stiffness. By releasing the muscles that hold the skeleton in dysfunctional patterns, your body can return to its natural, balanced state.",
    symptoms: [
      "Uneven shoulders or hips",
      "Forward head posture",
      "Rounded upper back",
      "Joint stiffness",
      "Sports injury recovery",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/313396490_522109666596590_475694032180513047_n.jpg",
  },
  {
    id: "elbows-arms",
    title: "Elbows & Arms",
    subtitle: "From tennis elbow to carpal tunnel — rooted in muscular tension",
    body: "Muscular tension in the upper back, shoulder, and neck can refer pain down the arm into the elbow, wrist, and hand. Conditions like tennis elbow, golfer's elbow, and carpal tunnel syndrome often have a strong postural component that Body Alignment addresses directly. By releasing the holding patterns in the shoulder girdle and cervical spine, referred pain and inflammation in the elbow and arm can resolve naturally without the need for cortisone injections or surgery.",
    symptoms: [
      "Tennis elbow or golfer's elbow",
      "Carpal tunnel syndrome",
      "Wrist or forearm pain",
      "Tingling or numbness in hands",
      "Restricted arm or elbow movement",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/15.png",
  },
  {
    id: "knees-ankles",
    title: "Knees & Ankles",
    subtitle: "Lower limb pain that begins in the pelvis and spine",
    body: "Knee and ankle pain are frequently caused by postural imbalances higher up the kinetic chain. Pelvic tilt, hip rotation, and lumbar misalignment all affect how load is distributed through the knees and ankles. Body Alignment targets these root causes rather than just the symptomatic joint, providing lasting relief by restoring balance throughout the entire musculoskeletal system.",
    symptoms: [
      "Chronic knee ache or stiffness",
      "Ankle instability or pain",
      "Pain on stairs or inclines",
      "Knee tracking issues",
      "Hip-to-knee referred pain",
    ],
    image: "https://bodyalignment.co.za/wp-content/uploads/2024/11/317241330_538216218319268_2721070637639036423_n.jpg",
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=85&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="relative max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Conditions We Treat
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Body Alignment addresses the root cause of pain by releasing muscular
            tension that pulls the skeleton out of alignment.
          </p>
        </div>
      </section>

      {/* Alignment intro */}
      <section className="py-14 px-4 bg-offwhite border-b border-border">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-gray-dark leading-relaxed">
            One of the most important things about body mechanics is alignment. Alignment refers to how the head, shoulders, spine, hips and feet line up, relate and communicate with each other, and thus enable the body to function to its maximum potential.
          </p>
          <p className="text-gray-dark leading-relaxed">
            Proper alignment puts less stress on supporting the body&apos;s posture and the body&apos;s mechanical movements.
          </p>
          <div>
            <p className="text-charcoal text-sm font-semibold uppercase tracking-wider mb-3">
              Improper alignment may be related to:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Headaches","Dizziness","Shoulder pain","Tennis elbow","Carpal tunnel",
                "Lower back pain","Sciatica","Knee and ankle pain","Bone degeneration",
                "Herniated discs","Hip pain","IBS","Sinus inflammation","Arthritic pain",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white border border-border text-charcoal text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          {conditions.map((c, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={c.id}
                id={c.id}
                className="scroll-mt-24"
              >
                <AnimatedSection>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                      imageLeft ? "" : "lg:[direction:rtl]"
                    }`}
                  >
                    <div className={imageLeft ? "" : "lg:[direction:ltr]"}>
                      <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="lg:[direction:ltr]">
                      <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-2">
                        {c.subtitle}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                        {c.title}
                      </h2>
                      <p className="text-gray-dark leading-relaxed mb-6">
                        {c.body}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-charcoal mb-3">
                          Common symptoms:
                        </h4>
                        <ul className="space-y-2">
                          {c.symptoms.map((s) => (
                            <li
                              key={s}
                              className="flex items-start gap-2 text-sm text-gray-dark"
                            >
                              <span className="text-brand-red mt-0.5 font-bold">
                                ▪
                              </span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href="/practitioners"
                        className="bg-brand-red hover:bg-red-dark text-white font-semibold rounded-xl px-6 py-3 transition-all text-sm inline-block"
                      >
                        Book a Session →
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-mid mb-4">
                  Common Questions
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
                  Everything you need to know before booking
                </h2>
                <p className="text-gray-dark leading-relaxed mb-8">
                  Body Alignment is a gentle and accessible therapy for most people. Here are answers to the questions we are asked most often. If yours isn&apos;t here, simply reach out via WhatsApp.
                </p>
                <a
                  href="https://wa.me/27826868291?text=Hi%20Janet%2C%20I%20have%20a%20question%20about%20Body%20Alignment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/80 text-white font-semibold rounded-xl px-6 py-3 transition-all text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask Janet directly
                </a>
              </div>

              {/* Right: accordion */}
              <div>
                <FaqAccordion />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-red">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t live with pain
          </h2>
          <p className="text-white/80 mb-8">
            Find a practitioner near you and experience the difference Body
            Alignment can make.
          </p>
          <Link
            href="/practitioners"
            className="bg-white text-brand-red hover:bg-red-light font-semibold rounded-xl px-8 py-3.5 transition-all text-sm inline-block"
          >
            Find a Practitioner Near You
          </Link>
        </div>
      </section>
    </>
  );
}

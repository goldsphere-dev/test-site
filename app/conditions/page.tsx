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
      <section className="py-20 px-4 bg-gray-light">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-charcoal text-center mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-mid text-center mb-12">
              Everything you need to know about Body Alignment therapy.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FaqAccordion />
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

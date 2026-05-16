"use client";

import { useState } from "react";

const conditionData: Record<string, {
  title: string;
  subtitle: string;
  body: string;
  symptoms: string[];
}> = {
  "back-pain": {
    title: "Back & Lower Back Pain",
    subtitle: "The #1 reason people seek Body Alignment therapy",
    body: "Misalignment in the lumbar spine leads to sciatica, sacroiliac joint pain, hip and knee problems, and even digestive or bladder discomfort. Overcompensation patterns in the lower back often mask deeper pelvic imbalances. Body Alignment releases the muscular tension that pulls vertebrae out of position, allowing the body to return to its natural alignment.",
    symptoms: ["Chronic lower back ache", "Shooting pain when bending", "Hip or pelvic imbalance", "Disc compression or herniation", "Stiffness after sitting"],
  },
  "neck-shoulders": {
    title: "Neck & Shoulder Tension",
    subtitle: "Desk work, driving, and stress lock up your cervical spine",
    body: "Misalignment in the cervical spine may contribute to chronic headaches, dizziness, migraines, facial pain, and tension in the neck and shoulder area. Long hours at a desk or behind a steering wheel are common triggers. Body Alignment targets the deep muscles in the upper back and neck to release the holding patterns that cause this tension.",
    symptoms: ["Stiff or painful neck", "Shoulder blade tightness", "Restricted head turning", "Pain radiating into arms", "Tension between shoulders"],
  },
  "headaches": {
    title: "Headaches & Migraines",
    subtitle: "Often rooted in muscular tension, not medication deficiency",
    body: "Tension stored in the upper cervical muscles and the base of the skull is a common contributor to recurring headaches, often relieved significantly through realignment. Many clients who have suffered from headaches for years find lasting relief once the underlying muscular tension is addressed rather than masked with painkillers.",
    symptoms: ["Recurring tension headaches", "Migraine with aura", "Pressure at the base of the skull", "Dizziness or light-headedness", "Eye strain and facial pain"],
  },
  "sciatica": {
    title: "Sciatica & Nerve Pain",
    subtitle: "Pain down the leg, often dramatically relieved",
    body: "Pressure on the sciatic nerve from pelvic or lumbar misalignment causes pain, burning, and numbness radiating down the leg. This is one of the most common and debilitating conditions we treat, and it often responds remarkably well to Body Alignment. By releasing the muscular tension in the lower back and pelvis, pressure is taken off the sciatic nerve.",
    symptoms: ["Shooting pain down one leg", "Burning sensation in buttock or thigh", "Numbness or tingling in foot", "Pain worse when sitting", "Difficulty standing or walking"],
  },
  "stress-fatigue": {
    title: "Stress & Fatigue",
    subtitle: "Your body stores what your mind cannot process",
    body: "Chronic stress stores itself physically in your muscles. Emotional trauma, anxiety, and prolonged stress create hypertonic spasms that restrict nerve flow, drain energy, and undermine overall wellbeing. Body Alignment releases this physical tension, often producing a profound sense of emotional release alongside physical relief.",
    symptoms: ["Persistent exhaustion", "Muscle tension without clear cause", "Disrupted sleep", "Reduced concentration", "General sense of being unwell"],
  },
  "posture": {
    title: "Poor Posture & Spinal Alignment",
    subtitle: "Structural imbalances that Body Alignment directly addresses",
    body: "Uneven hips or shoulders, forward head posture, rounded back. These are structural imbalances that Body Alignment directly addresses. Also effective for sports injuries, joint pain, tennis elbow, carpal tunnel, restless legs, and general joint stiffness. By releasing the muscles that hold the skeleton in dysfunctional patterns, your body can return to its natural, balanced state.",
    symptoms: ["Uneven shoulders or hips", "Forward head posture", "Rounded upper back", "Joint stiffness", "Sports injury recovery"],
  },
  "elbows-arms": {
    title: "Elbows & Arms",
    subtitle: "From tennis elbow to carpal tunnel — rooted in muscular tension",
    body: "Muscular tension in the upper back, shoulder, and neck can refer pain down the arm into the elbow, wrist, and hand. Conditions like tennis elbow, golfer's elbow, and carpal tunnel syndrome often have a strong postural component that Body Alignment addresses directly. By releasing the holding patterns in the shoulder girdle and cervical spine, referred pain and inflammation in the elbow and arm can resolve naturally.",
    symptoms: ["Tennis elbow or golfer's elbow", "Carpal tunnel syndrome", "Wrist or forearm pain", "Tingling or numbness in hands", "Restricted arm or elbow movement"],
  },
  "knees-ankles": {
    title: "Knees & Ankles",
    subtitle: "Lower limb pain that begins in the pelvis and spine",
    body: "Knee and ankle pain are frequently caused by postural imbalances higher up the kinetic chain. Pelvic tilt, hip rotation, and lumbar misalignment all affect how load is distributed through the knees and ankles. Body Alignment targets these root causes rather than just the symptomatic joint, providing lasting relief by restoring balance throughout the entire musculoskeletal system.",
    symptoms: ["Chronic knee ache or stiffness", "Ankle instability or pain", "Pain on stairs or inclines", "Knee tracking issues", "Hip-to-knee referred pain"],
  },
};

const pills = [
  { id: "back-pain", label: "Back & Lower Back Pain" },
  { id: "neck-shoulders", label: "Neck & Shoulder Tension" },
  { id: "headaches", label: "Headaches & Migraines" },
  { id: "sciatica", label: "Sciatica & Nerve Pain" },
  { id: "stress-fatigue", label: "Stress & Fatigue" },
  { id: "posture", label: "Poor Posture & Spinal Alignment" },
  { id: "elbows-arms", label: "Elbows & Arms" },
  { id: "knees-ankles", label: "Knees & Ankles" },
];

export default function ConditionPills() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const condition = activeId ? conditionData[activeId] : null;

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {pills.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className="bg-white border border-border hover:border-brand-red/30 hover:bg-red-light text-charcoal text-sm font-medium px-4 py-2.5 rounded-full transition-all text-left"
          >
            {c.label}
          </button>
        ))}
      </div>

      {activeId && condition && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setActiveId(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveId(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-light hover:bg-border transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-gray-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-2">
              {condition.subtitle}
            </p>
            <h3 className="text-xl font-bold text-charcoal mb-3 pr-8">
              {condition.title}
            </h3>
            <p className="text-gray-dark text-sm leading-relaxed mb-5">
              {condition.body}
            </p>

            <h4 className="text-sm font-semibold text-charcoal mb-3">Common symptoms:</h4>
            <ul className="space-y-2 mb-6">
              {condition.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-gray-dark">
                  <span className="text-brand-red mt-0.5 font-bold shrink-0">▪</span>
                  {s}
                </li>
              ))}
            </ul>

            <a
              href={`/conditions#${activeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-brand-red font-semibold hover:underline underline-offset-4"
            >
              Read full details →
            </a>
          </div>
        </div>
      )}
    </>
  );
}

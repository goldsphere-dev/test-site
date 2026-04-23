import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Body Alignment is, how it works, and how it can help you live pain-free.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Body Alignment</h1>
      <p className="text-emerald-700 font-medium text-lg mb-10">
        A balanced spine means a healthy body.
      </p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          In our ever increasing fast paced and complex lifestyle, sometimes just getting through
          the day causes stress within the body that we are unaware of. Until the accumulated
          buildup of stress results in the body feeling pain.
        </p>
        <p>
          Long hours behind a computer, driving a car, and often just worrying about life in
          general, may lead to the muscles becoming stiff, inflamed and painful. Sometimes the
          incorrect manner in which you exercise, bad posture, physical and/or emotional trauma,
          and chemical pollution (food additives and polluted air) may cause the muscle to develop
          an abnormal and sustained contraction known as a <strong>hypertonic spasm</strong>.
        </p>
        <p>
          Since muscles comprise 2/3 of your body, a muscle in spasm will have a direct effect on
          the nervous and circulatory system and thus impact every function of your body. These
          hard muscles exert such a pull on the vertebrae and skeletal joints that the bones could
          subsequently become misaligned. They could also cause wear and tear on the cartilage in
          between the bones (disintegration, compressed and herniated discs).
        </p>
        <p>
          These misaligned and/or degenerated bones then adversely affect the nerves by pinching
          on them, causing pain and numbness. Pain wrecks havoc with our immune system, disrupting
          the balance within the body, undermining our health in general and affecting the holistic
          optimal functioning of the body.
        </p>
        <p>
          Drugs may alleviate the pain or possibly just mask the problem for only a while. But
          then you have to examine the root cause.
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 pl-6 py-4 rounded-r-xl">
          <p className="text-emerald-800 font-semibold text-lg">
            Body Alignment stimulates the muscles to relax, heal and unravel the tension stored in
            deep layers of the muscles.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 pt-6">How Body Alignment Works</h2>
        <p>
          Pain is not something to be feared or silenced — it is one of the most direct ways your
          body asks for help. Body Alignment practitioners are trained to "read" the body's
          language, identifying how structural, energetic, and emotional imbalances interconnect.
          By addressing those root patterns — rather than chasing symptoms — the body can return
          to a state of alignment and ease.
        </p>
        <p>
          Lower back pain often hints at overcompensation, misalignment, or energy stagnation in
          the pelvic area. Headaches may trace back to tension patterns in the neck and shoulders.
          Each session works to release the underlying muscular holding patterns that drive your
          specific symptoms.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6">About the Association</h2>
        <p>
          The Body Alignment Association of South Africa (BASA) connects trained practitioners
          across the country, ensuring consistent standards of care and ongoing professional
          development. Our network spans from the Western Cape to the Southern Cape and beyond,
          with practitioners serving communities at fixed locations as well as mobile.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          href="/practitioners"
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
        >
          Find a Practitioner
        </Link>
        <Link
          href="/courses"
          className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-medium px-6 py-3 rounded-lg transition-colors text-center"
        >
          Become a Practitioner
        </Link>
      </div>
    </div>
  )
}

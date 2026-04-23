import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "1",
    title: "Assessment",
    body: "Your practitioner evaluates your posture, movement, and areas of tension to identify the root cause of your discomfort.",
  },
  {
    number: "2",
    title: "Targeted Stimulation",
    body: "Light, firm pressure is applied to specific muscle groups concentrating on the spinal column and areas of chronic tension.",
  },
  {
    number: "3",
    title: "Natural Realignment",
    body: "As muscles relax, the skeleton realigns and nerve communication is restored throughout the body.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-light py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-4">
            How a Session Works
          </h2>
          <p className="text-gray-dark font-medium text-center max-w-2xl mx-auto mb-14">
            A simple, proven process that delivers results from your very first
            visit.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative text-center">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-brand-red text-brand-red font-bold text-2xl shadow-sm mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-dark text-sm leading-relaxed max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import LocationFilter from "@/components/LocationFilter";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Find a Practitioner",
  description:
    "Find a certified Body Alignment practitioner near you. 23+ practitioners across South Africa — Cape Town, Helderberg, Overberg, Winelands, West Coast, Garden Route.",
};

export default function PractitionersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white py-28 px-4">
        <div className="max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find a Practitioner Near You
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            23 certified practitioners across South Africa. Browse by region,
            search by name, and book your first session.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <LocationFilter />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import LocationFilter from "@/components/LocationFilter";
import AnimatedSection from "@/components/AnimatedSection";
import PractitionerMap from "@/components/PractitionerMap";
import { practitioners } from "@/data/practitioners";

const count = practitioners.filter((p) => !p.isRIP).length;

export const metadata: Metadata = {
  title: "Find a Practitioner",
  description:
    "Find a certified Body Alignment practitioner near you. 23+ practitioners across South Africa — Cape Town, Helderberg, Overberg, Winelands, West Coast, Garden Route.",
};

export default function PractitionersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-28 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "url(https://bodyalignment.co.za/wp-content/uploads/2024/11/313409492_522109719929918_958326532651567349_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="relative max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find a Practitioner Near You
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {count} certified practitioners across South Africa. Browse by region,
            search by name, and book your first session.
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-offwhite border-b border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-charcoal mb-1">
                Practitioners Across South Africa
              </h2>
              <p className="text-sm text-gray-mid">
                Click any pin or name to view contact details and book directly.
              </p>
            </div>
            <PractitionerMap />
          </AnimatedSection>
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

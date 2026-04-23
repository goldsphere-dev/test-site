import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Body Alignment South Africa.",
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-12">
        Have a question or want to book a session? Reach out and we will get back to you shortly.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h2>
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in touch</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-0.5">📞</span>
                <a href="tel:0826868291" className="hover:text-emerald-700">
                  082 686 8291
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-0.5">✉️</span>
                <a href="mailto:janet.bodyalignment@gmail.com" className="hover:text-emerald-700">
                  janet.bodyalignment@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-0.5">📍</span>
                <span>Somerset West, Western Cape, South Africa</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Somerset West, Western Cape"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52878.27485393938!2d18.82!3d-34.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb56e4ee0e789%3A0x2a7aec0f4e8e7b5e!2sSomerset%20West%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

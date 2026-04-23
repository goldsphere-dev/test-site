"use client";

import { useState } from "react";

interface ContactFormProps {
  practitionerName?: string;
  defaultMessage?: string;
  showSubject?: boolean;
  showIntake?: boolean;
}

export default function ContactForm({
  practitionerName,
  defaultMessage,
  showSubject = false,
  showIntake = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire to Formspree — set form action to https://formspree.io/f/FORM_ID
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <p className="text-green-800 font-semibold text-lg">Thank you!</p>
        <p className="text-green-700 text-sm mt-1">
          We received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {practitionerName && (
        <input type="hidden" name="practitioner" value={practitionerName} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {showSubject && (
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
          >
            <option value="general">General Enquiry</option>
            <option value="practitioner">Find a Practitioner</option>
            <option value="course">Course Enquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      {showIntake && (
        <div>
          <label
            htmlFor="intake"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Which intake are you interested in?
          </label>
          <select
            id="intake"
            name="intake"
            className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors"
          >
            <option value="feb-2026">February 2026</option>
            <option value="sep-2026">September 2026</option>
            <option value="future">Future intake</option>
          </select>
        </div>
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-colors resize-none"
          placeholder="Tell us about your symptoms or what you'd like help with..."
          defaultValue={defaultMessage}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-red hover:bg-red-dark disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all text-sm"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SCCS NWI for 24/7 emergency restoration. Call (219) 464-2000 or fill out our contact form. Serving Porter, Lake, and La Porte counties.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              Get in touch
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              We answer the phone.
              <br />
              Day or night.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <div className="space-y-8">
                {/* Emergency */}
                <div className="rounded-2xl bg-safety-500 text-white p-8">
                  <Clock className="w-6 h-6 mb-4" />
                  <h2 className="text-xl font-bold">24/7 Emergency Line</h2>
                  <a
                    href="tel:+121****2000"
                    className="block mt-3 text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                  >
                    (219) 464-2000
                  </a>
                  <p className="mt-2 text-white/80 text-sm">
                    Call any time. A real person answers, not an answering
                    service.
                  </p>
                </div>

                {/* Regular contact */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-950/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-navy-950" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Phone</p>
                      <a
                        href="tel:+121****2000"
                        className="text-lg font-semibold text-navy-950 hover:text-safety-500 transition-colors"
                      >
                        (219) 464-2000
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-950/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-navy-950" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <a
                        href="mailto:info@sccsnwi.com"
                        className="text-lg font-semibold text-navy-950 hover:text-safety-500 transition-colors"
                      >
                        info@sccsnwi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-950/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-navy-950" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Address</p>
                      <p className="text-lg font-semibold text-navy-950">
                        Valparaiso, IN 46383
                      </p>
                      <p className="text-sm text-neutral-500 mt-1">
                        Serving Porter, Lake, and La Porte counties
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl bg-white shadow-soft p-8 lg:p-10">
              <h2 className="text-xl font-bold text-navy-950">
                Request a call back
              </h2>
              <p className="mt-2 text-sm text-neutral-700">
                Fill out the form and we will call you back, usually within 15
                minutes during business hours.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-950 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-navy-950/10 bg-neutral-50 text-navy-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-shadow text-sm"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy-950 mb-1.5"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-navy-950/10 bg-neutral-50 text-navy-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-shadow text-sm"
                    placeholder="(219) 555-0123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-navy-950 mb-1.5"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-navy-950/10 bg-neutral-50 text-navy-950 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-shadow text-sm"
                  >
                    <option value="">Select a service</option>
                    <option>Water Damage</option>
                    <option>Fire Damage</option>
                    <option>Mold Inspection</option>
                    <option>Mold Remediation</option>
                    <option>Smoke Damage</option>
                    <option>Trauma Cleanup</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-950 mb-1.5"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-navy-950/10 bg-neutral-50 text-navy-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-safety-500 focus:border-transparent transition-shadow text-sm resize-none"
                    placeholder="Tell us about the situation..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-safety-500 text-white font-semibold hover:bg-safety-400 transition-colors active:scale-[0.98]"
                >
                  Send request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

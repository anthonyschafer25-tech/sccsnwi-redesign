import Link from "next/link";
import { Phone, MapPin } from "@/components/Icons";

const FOOTER_LINKS = {
  Services: [
    { href: "/services", label: "All Services" },
    { href: "/water-damage-restoration", label: "Water Damage" },
    { href: "/fire-damage-restoration", label: "Fire Damage" },
    { href: "/mold-inspection-and-testing", label: "Mold Inspection" },
    { href: "/mold-remediation", label: "Mold Remediation" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/service-area", label: "Service Area" },
    { href: "/reviews", label: "Reviews" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight"
            >
              SCCS NWI
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
              Family-owned restoration company serving Northwest Indiana since
              2012. 24/7 emergency response for water, fire, mold, and trauma
              cleanup. IICRC certified.
            </p>
            <a
              href="tel:+12194642000"
              className="inline-flex items-center gap-2 mt-6 text-safety-400 hover:text-safety-300 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              (219) 464-2000
            </a>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; 2026 SCCS NWI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/50 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Body Alignment</h3>
            <p className="text-emerald-300 text-sm leading-relaxed">
              A balanced spine means a healthy body. Helping South Africans live pain-free through
              expert Body Alignment therapy.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/practitioners", label: "Find a Practitioner" },
                { href: "/courses", label: "Courses" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-emerald-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li>
                <a href="tel:0826868291" className="hover:text-white transition-colors">
                  082 686 8291
                </a>
              </li>
              <li>
                <a href="mailto:janet.bodyalignment@gmail.com" className="hover:text-white transition-colors">
                  janet.bodyalignment@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/bodyalignmentbyjanet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-6 text-center text-xs text-emerald-400">
          © {new Date().getFullYear()} Body Alignment South Africa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

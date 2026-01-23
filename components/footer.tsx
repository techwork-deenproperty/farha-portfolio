import { Globe,Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">FN</span>
              </div>
              <span className="font-semibold tracking-wide">Farha N Mirza</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Your trusted partner in discovering extraordinary properties across Dubai and the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Expertise","Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "https://deenpropertiesuae.com" },
                { icon: Instagram, href: "https://www.instagram.com/aliya_adean?igsh=MTUybXczOGRzMXNzdg==" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/farha-n-162477114" },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="p-2.5 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2026 Farha N Mirza. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

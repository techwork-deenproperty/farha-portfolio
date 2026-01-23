"use client"

import { useEffect, useRef } from "react"
import { Phone, MessageCircle, Instagram, Linkedin,Globe } from "lucide-react"

export function Hero() {
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 md:py-0">
          {/* Agent Image - Left Side */}
          <div ref={imageRef} className="flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl opacity-60"></div>

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-secondary/30 border border-secondary/50">
                <img
                  src="/farha.jpg"
                  alt="Farha n Mirza - Luxury Real Estate Agent"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-10 order-1 md:order-2">
            {/* Agent Name and Title */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
                  Luxury Real Estate Specialist
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-foreground leading-tight tracking-tighter">
                FARHA <span className="font-semibold text-accent">N MIRZA</span>
              </h1>
            </div>

            {/* Value Statement */}
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl font-light">
              Specializing in Dubai's most prestigious properties. I deliver expert guidance, integrity, and
              personalized service to help you find your perfect home.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+971503466464"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-center hover:shadow-lg hover:bg-primary/90 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/971503466464"
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-center hover:bg-primary/5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://www.instagram.com/aliya_adean?igsh=MTUybXczOGRzMXNzdg=="
                aria-label="Instagram"
                className="text-foreground/50 hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <Instagram size={20} />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/farha-n-162477114"
                aria-label="LinkedIn"
                className="text-foreground/50 hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://deenpropertiesuae.com"
                aria-label="WhatsApp Direct"
                className="text-foreground/50 hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

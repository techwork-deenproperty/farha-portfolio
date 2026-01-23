"use client"

import { MessageCircle  ,Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-primary leading-tight">
            Get In <span className="font-semibold">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-light mt-4 max-w-2xl">
            Reach out directly for a consultation about your property needs
          </p>
        </div>

        {/* Contact Options Grid */}
<div className="grid md:grid-cols-4 gap-6 md:gap-8">

  {/* Call Direct */}
  <a
    href="tel:+971503466464"
    className="group flex flex-col items-start p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/2 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
      <Phone className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-primary mb-1">Call Direct</h3>
    <p className="text-sm text-foreground/60 mb-4">
      Phone line available during business hours
    </p>
    <p className="text-base sm:text-lg font-semibold text-primary group-hover:text-accent transition-colors">
      +971 50 346 6464
    </p>
  </a>

  
  {/* Email */}
  <a
    href="mailto:f.mirza@deenpropertiesuae.com"
    className="group flex flex-col items-start p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/2 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
      <Mail className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
    <p className="text-sm text-foreground/60 mb-4">
      Send detailed inquiries
    </p>
    <p className="text-base sm:text-lg font-semibold text-primary group-hover:text-accent transition-colors break-all">
      f.mirza@deenpropertiesuae.com
    </p>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/971503466464"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-start p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/2 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
      <MessageCircle className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-primary mb-1">WhatsApp</h3>
    <p className="text-sm text-foreground/60 mb-4">
      Preferred method for quick responses
    </p>
    <p className="text-base sm:text-lg font-semibold text-primary group-hover:text-accent transition-colors">
      +971 50 346 6464
    </p>
  </a>


  {/* Deen Properties – Company Number */}
  <a
    href="tel:+971508858144"
    className="group flex flex-col items-start p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/2 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
      <Phone className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-primary mb-1">
      Deen Properties
    </h3>
    <p className="text-sm text-foreground/60 mb-4">
      Company contact number
    </p>
    <p className="text-base sm:text-lg font-semibold text-primary group-hover:text-accent transition-colors">
      +971 50 885 8144
    </p>
  </a>

</div>


        {/* Office Location */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Office Location</h3>
              <p className="text-foreground/75 font-light leading-relaxed">
                <span className="font-semibold">Deen Properties</span>
                <br className="hidden sm:block" />
                B2B Office Tower - Office Number -1513 - 1514 Marasi Dr - Business Bay - Dubai - United Arab Emirates
                <br className="hidden sm:block" />
                <span className="text-sm text-foreground/60 mt-2 block">Office: +971 50 885 8144</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

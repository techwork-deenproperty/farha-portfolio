"use client"
import React from 'react';
import { Phone, Mail, MessageCircle, Building2, ArrowUpRight } from 'lucide-react';

const contactMethods = [
  {
    title: "Call Direct",
    description: "Phone line available during business hours",
    info: "+971 50 346 6464",
    link: "tel:+971503466464",
    icon: <Phone size={24} strokeWidth={1.5} />,
  },
  {
    title: "Email",
    description: "Send detailed inquiries",
    info: "f.mirza@deenpropertiesuae.com",
    link: "mailto:f.mirza@deenpropertiesuae.com",
    icon: <Mail size={24} strokeWidth={1.5} />,
  },
  {
    title: "WhatsApp",
    description: "Preferred method for quick responses",
    info: "+971 50 346 6464",
    link: "https://wa.me/971503466464",
    icon: <MessageCircle size={24} strokeWidth={1.5} />,
  },
  {
    title: "Deen Properties",
    description: "Company contact number",
    info: "+971 50 885 8144",
    link: "tel:+971508858144",
    icon: <Building2 size={24} strokeWidth={1.5} />,
  }
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Top Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-600">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Direct consultation for your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">Property Needs</span>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {method.icon}
              </div>

              {/* Content */}
              <div className="flex-grow space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {method.title}
                  </h3>
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-slate-500 text-sm font-light">
                  {method.description}
                </p>
                <p className="text-slate-900 font-semibold pt-1">
                  {method.info}
                </p>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
export { ContactSection as Contact };

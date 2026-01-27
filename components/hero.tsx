"use client";
import React from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#f8fafc] px-6 py-20 overflow-hidden">
      {/* 2026 Modernist Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-50/50 to-teal-50/30 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-2%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-50/40 to-slate-100/50 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* CONTENT COLUMN - Asymmetric Layout */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative z-10 space-y-8">
              {/* Ultra-Modern Badge */}
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/80 border border-slate-200/60 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                  Luxury Real Estate Advisor
                </span>
              </div>

              {/* Typography with 2026 aesthetics */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[0.9]">
                  Farha N <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
                    Mirza
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium text-slate-600/90 italic">
                  Luxury Real Estate Advisor
                </p>
              </div>

              <p className="max-w-xl text-lg text-slate-500 leading-relaxed font-light">
                Redefining the luxury real estate experience in Dubai. From
                penthouse acquisitions to waterfront estates, we bridge the gap
                between visionary architecture and discerning ownership.
              </p>

              {/* Modern Glass CTA Row */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+971503466464"
                  className="group relative flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Phone size={18} className="relative z-10" />
                  <span className="relative z-10 font-medium">Call Now</span>
                </a>

                <a
                  href="https://wa.me/971503466464"
                  className="flex items-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-2xl text-slate-700 font-medium hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                >
                  <MessageCircle size={18} className="text-teal-500" />
                  <span>Direct Message</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
              </div>

              {/* Tech-Style Contact Row */}
              <div className="pt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-slate-200/60">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:farha@deenpropertiesuae.com"
                    className="text-sm font-medium text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    farha@deenpropertiesuae.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
                    Connect
                  </span>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/aliya_adean?igsh=MTUybXczOGRzMXNzdg=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram
                        size={18}
                        className="text-slate-400 hover:text-pink-500 cursor-pointer transition-colors"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/farha-n-162477114"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin
                        size={18}
                        className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors"
                      />
                    </a>

                    <a
                      href="https://deenpropertiesuae.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe
                        size={18}
                        className="text-slate-400 hover:text-indigo-500 cursor-pointer transition-colors"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN - Floating Card Aesthetic */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Layered Glass Panels */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-100/50 rounded-3xl -z-10 animate-bounce-slow" />
              <div className="absolute -bottom-10 -right-6 w-48 h-48 bg-teal-50/80 rounded-[4rem] -z-10 blur-2xl" />

              {/* Main Portrait Card */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border-[8px] border-white group">
                <Image
                  src="/farha.jpg" // Path to farha's photo
                  alt="farha AB Mirza"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
export { HeroSection as Hero };

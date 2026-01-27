"use client";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] border-t border-slate-200/60 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Identity Section */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Farha N <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">Mirza</span>
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Luxury Real Estate Advisor
            </p>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium text-slate-600">
            <a 
              href="tel:+971503466464" 
              className="hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
            >
              +971 50 346 6464
            </a>
            
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
            
            <a 
              href="mailto:farha@deenpropertiesuae.com" 
              className="hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
            >
              farha@deenpropertiesuae.com
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Copyright */}
          <div className="text-slate-400 text-xs font-light tracking-wide">
            <p>© {currentYear} Farha N Mirza. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
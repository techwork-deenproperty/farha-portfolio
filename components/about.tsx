"use client";
import React, { useEffect, useState } from "react";
import { ShieldCheck, Zap, Users, Trophy, Award, Sparkles } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

const StatCard = ({ label, value, suffix, icon }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
          {count}
          {suffix}
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">
          {label}
        </p>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const features = [
    { icon: <ShieldCheck size={18} />, title: "Absolute Discretion" },
    { icon: <Zap size={18} />, title: "Market Intelligence" },
    { icon: <Sparkles size={18} />, title: "Bespoke Portfolios" },
    { icon: <Users size={18} />, title: "Client-Centric Philosophy" },
  ];

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Background Consistency Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: Narrative */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                  The Advisor
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                A Legacy of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
                  Trust & Excellence
                </span>
              </h2>

              {/* <p className="text-lg text-slate-500 leading-relaxed font-light italic border-l-2 border-indigo-200 pl-6">
                &quot;Real estate isn&apos;t just about space; it&apos;s about the narrative of one&apos;s life. I specialize in finding the stage where your next chapter begins.&quot;
              </p> */}

              <p className="text-slate-500 leading-relaxed">
                With over a decade of navigating Dubai&apos;s most complex
                high-value transactions, Farha N Mirza has become the silent
                force behind some of the region&apos;s most significant
                residential acquisitions. Her approach blends modern data
                analytics with old-world boutique service.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group"
                >
                  <div className="text-indigo-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Decorative floating element */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-50/50 rounded-full blur-3xl -z-10" />

              <div className="space-y-6 pt-12">
                <StatCard
                  label="Properties Sold"
                  value={500}
                  suffix="+"
                  icon={<Trophy className="text-indigo-600" size={48} />}
                />
                <StatCard
                  label="Premium Listings"
                  value={100}
                  suffix="+"
                  icon={<Award className="text-teal-500" size={48} />}
                />
              </div>

              <div className="space-y-6">
                <StatCard
                  label="Years Experience"
                  value={12}
                  suffix="+"
                  icon={<Sparkles className="text-indigo-400" size={48} />}
                />
                <StatCard
                  label="Happy Clients"
                  value={1000}
                  suffix="+"
                  icon={<Users className="text-slate-400" size={48} />}
                />
              </div>

              {/* Bottom Decorative Glass Card */}
              <div className="sm:col-span-2 mt-6 p-8 rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1">
                    Ready to find your masterpiece?
                  </h3>
                  <p className="text-indigo-200/70 text-sm font-light">
                    Join our exclusive network of global investors.
                  </p>
                </div>

                <a
                  href="https://wa.me/971503466464?text=Hi%20I%20want%20to%20start%20a%20conversation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                >
                  <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-teal-400 hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                    Start Conversation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { AboutSection as About };

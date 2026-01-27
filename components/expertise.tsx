import React from 'react';
import { 
  Home, 
  Building2, 
  TrendingUp, 
  Waves, 
  Store, 
  Construction, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    id: '01',
    title: "Luxury Villas",
    description: "Premium villa properties with smart home technology and prime locations.",
    icon: <Home size={28} />,
  },
  {
    id: '02',
    title: "High-End Apartments",
    description: "Sophisticated apartment living in iconic towers with world-class amenities.",
    icon: <Building2 size={28} />,
  },
  {
    id: '03',
    title: "Investment Properties",
    description: "Strategic investment opportunities with strong ROI potential.",
    icon: <TrendingUp size={28} />,
  },
  {
    id: '04',
    title: "Waterfront Living",
    description: "Exclusive beachfront and waterfront properties with stunning views.",
    icon: <Waves size={28} />,
  },
  {
    id: '05',
    title: "Commercial Real Estate",
    description: "Prime commercial spaces and retail outlets in key business districts.",
    icon: <Store size={28} />,
  },
  {
    id: '06',
    title: "Off-Plan Projects",
    description: "Early-stage property developments with premium developer partnerships.",
    icon: <Construction size={28} />,
  }
];

export default function ExpertiseSection() {
  return (
    <section className="relative py-32 bg-[#f8fafc] overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[0.95]">
            Specialization in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
              Premium Properties
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-xl">
            Unrivaled access to Dubai&apos;s most prestigious addresses, backed by data-driven insights and absolute discretion.
          </p>
        </div>

        {/* Services Content - Clean Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative p-10 h-full flex flex-col justify-between rounded-[2rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Background Large Number Typography - Subtle & Readable */}
              <span className="absolute top-6 right-8 text-7xl font-bold text-slate-200/60 group-hover:text-indigo-600/20 transition-colors duration-500 select-none">
                {service.id}
              </span>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 mb-8 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 group-hover:text-teal-500 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-indigo-500/5 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-teal-500" />
                </h3>
                <p className="text-slate-500 leading-relaxed font-light text-base">
                  {service.description}
                </p>
              </div>

              {/* Bottom Decorative Element - Consistent Glow */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-indigo-600/5 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent group-hover:via-indigo-600/40 transition-all duration-500" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export { ExpertiseSection as Expertise };
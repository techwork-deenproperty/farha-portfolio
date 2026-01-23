"use client"

import { useEffect, useState } from "react"

export function Expertise() {
  const [visibleIndices, setVisibleIndices] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const newSet = new Set(visibleIndices)
          for (let i = 0; i < 6; i++) {
            newSet.add(i)
          }
          setVisibleIndices(newSet)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("expertise-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const expertise = [
    {
      title: "Luxury Villas",
      description: "Premium villa properties with smart home technology and prime locations",
    },
    {
      title: "High-End Apartments",
      description: "Sophisticated apartment living in iconic towers with world-class amenities",
    },
    {
      title: "Investment Properties",
      description: "Strategic investment opportunities with strong ROI potential",
    },
    {
      title: "Waterfront Living",
      description: "Exclusive beachfront and waterfront properties with stunning views",
    },
    {
      title: "Commercial Real Estate",
      description: "Prime commercial spaces and retail outlets in key business districts",
    },
    {
      title: "Off-Plan Projects",
      description: "Early-stage property developments with premium developer partnerships",
    },
  ]

  return (
    <section id="expertise-section" className="py-24 lg:py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-light text-primary mt-4 leading-tight">
            Specialization in Premium <span className="font-semibold">Properties</span>
          </h2>
        </div>

        {/* Grid - Added scroll reveal with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-xl border border-border hover:border-accent bg-background hover:shadow-lg transition-all duration-300 ${
                visibleIndices.has(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <span className="text-lg font-semibold">{String(idx + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

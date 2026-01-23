"use client"

import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Successful Deals", value: "500+" },
    { label: "Happy Clients", value: "300+" },
    { label: "Properties Sold", value: "450M AED" },
  ]

  return (
    <section id="about-section" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl lg:text-5xl font-light text-primary mt-4 leading-tight">
            Award-Winning Real Estate <span className="font-semibold">Professional</span>
          </h2>
          <p className="text-lg text-foreground/60 mt-6 leading-relaxed">
            With over a decade of expertise in Dubai's luxury real estate market, I've dedicated myself to understanding
            market dynamics and delivering exceptional results for my clients.
          </p>
        </div>

        {/* Stats Grid - Added scroll reveal animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="p-6 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 hover-lift">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm text-foreground/60 tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

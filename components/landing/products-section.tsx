"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "CharlseEmpire Pay",
    description: "Revolutionary fintech platform enabling seamless payments and financial services across Africa.",
    image: "/product-pay.jpg",
    features: ["Instant transfers", "Low fees", "Multi-currency"],
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Njangi Platform",
    description: "Community lending platform connecting savers and borrowers for collective financial growth.",
    image: "/product-njangi.jpg",
    features: ["Group lending", "Savings circles", "Financial inclusion"],
    color: "from-primary/15 to-primary/0",
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Intelligent automation and predictive analytics transforming African business operations.",
    image: "/product-ai.jpg",
    features: ["Smart predictions", "Automation", "Real-time insights"],
    color: "from-primary/10 to-primary/0",
    badge: "Coming Soon",
  },
];

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="products" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-32 lg:py-40 px-6 lg:px-12">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Section header */}
        <div 
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
            <span className="w-8 h-px bg-primary/50" />
            Our Products
          </span>
          <h2 className="text-5xl lg:text-7xl font-display leading-tight tracking-tight mb-6">
            <span className="block text-foreground">Transforming Africa</span>
            <span className="block gradient-text">One Solution at a Time</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            CharlseEmpire Tech builds world-class products that empower millions across Africa with financial access and intelligence.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl transition-all duration-500 ${
                hoveredId === product.id ? "ring-2 ring-primary/50" : "ring-1 ring-primary/20"
              }`} />

              {/* Border glow effect on hover */}
              {hoveredId === product.id && (
                <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-br from-primary/20 to-transparent" />
              )}

              {/* Card content */}
              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                {/* Badge */}
                {product.badge && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-primary/20 text-primary">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="mb-6 w-full h-40 rounded-lg overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title and description */}
                <h3 className="text-2xl lg:text-3xl font-display mb-3 text-foreground">
                  {product.title}
                </h3>
                <p className="text-base text-foreground/70 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/60">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-primary font-mono text-sm transition-all duration-300 group-hover:gap-3">
                  {product.badge ? "Coming Soon" : "Explore"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Hover animation background */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                hoveredId === product.id ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.1) 0%, transparent 80%)`,
              }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

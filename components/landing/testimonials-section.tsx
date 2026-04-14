"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amara Okonkwo",
    role: "Small Business Owner, Lagos",
    image: "🔵",
    rating: 5,
    text: "CharlseEmpire Pay has transformed how I run my business. No more waiting days for payments to clear. My customers love the instant transfers, and the low fees mean I keep more profit.",
  },
  {
    id: 2,
    name: "Kofi Mensah",
    role: "Njangi Circle Organizer, Accra",
    image: "🟡",
    rating: 5,
    text: "The Njangi Platform brought our savings circle online. We went from passing cash around the table to having transparent, secure transactions. It's amazing how technology can strengthen community bonds.",
  },
  {
    id: 3,
    name: "Zainab Hassan",
    role: "Entrepreneur, Nairobi",
    image: "🔴",
    rating: 5,
    text: "As a woman in tech, I love supporting African companies. CharlseEmpire Pay's AI features have actually helped me forecast my business cash flow better. This is the future of African fintech.",
  },
  {
    id: 4,
    name: "Samuel Adeyemi",
    role: "Student/Developer, Ibadan",
    image: "🟢",
    rating: 5,
    text: "The API documentation is incredible. I built a payment app for my university in just two weeks using CharlseEmpire's APIs. Support team is super responsive too!",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Loved by Users
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Trusted by thousands of Africans
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-xl border border-primary/20 bg-background hover:border-primary/50 transition-all duration-700 group cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6 line-clamp-4">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div
          className={`p-8 lg:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  )
                )}
              </div>
              <h3 className="text-2xl font-display tracking-tight mb-2">
                Featured Success Story
              </h3>
            </div>
          </div>

          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            &quot;{testimonials[activeIndex].text}&quot;
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
              {testimonials[activeIndex].image}
            </div>
            <div>
              <p className="font-semibold text-lg">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

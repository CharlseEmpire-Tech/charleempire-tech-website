"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Zap, Users, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "Pushing boundaries in African fintech with cutting-edge solutions"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built for and by Africans, solving real African problems"
  },
  {
    icon: Globe,
    title: "Pan-African",
    description: "Connecting 15+ countries with a unified financial platform"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Empowering individuals and businesses to create generational wealth"
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "CharlseEmpire Tech launched with a vision" },
  { year: "2021", title: "CharlseEmpire Pay", description: "First product launch - revolutionary payments" },
  { year: "2022", title: "500K Users", description: "Reached half a million users across Africa" },
  { year: "2023", title: "Njangi Platform", description: "Community lending platform released" },
  { year: "2024", title: "$50M+ Transactions", description: "Facilitated $50 million in transactions" },
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Our Story
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Building Africa&apos;s
            <br />
            <span className="gradient-text">Financial Future</span>
          </h2>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image */}
          <div
            className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10" />
            <Image
              src="/founder.jpeg"
              alt="CharlseEmpire Founder"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23daa520' width='400' height='500'/%3E%3C/svg%3E"
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">
              Charse Empire
            </h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founder & CEO
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              With over 15 years in fintech and a deep passion for African entrepreneurship, I founded CharlseEmpire Tech to democratize financial services across the continent. Our mission is simple: empower every African with world-class financial tools.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              What started as a vision in 2020 has grown into a movement. Today, hundreds of thousands of Africans trust CharlseEmpire for their financial needs. But we&apos;re just getting started. There&apos;s a multi-billion dollar opportunity to build financial infrastructure for 1.3 billion Africans, and we&apos;re committed to capturing it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-full group gold-glow-hover">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="px-8 h-12 rounded-full border-primary/30 hover:bg-primary/5 hover:border-primary/50"
              >
                Read Full Bio
              </Button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-12">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 group cursor-pointer ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-12">
            Our Journey
          </h3>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex gap-6 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-bold text-primary mb-4">
                    {index + 1}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary to-primary/20" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <p className="text-sm font-mono text-primary mb-1">{milestone.year}</p>
                  <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`p-8 lg:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-4">
            Join Us in Building the Future
          </h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We&apos;re hiring talented individuals passionate about fintech and Africa. If you want to be part of this revolution, let&apos;s talk.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-full gold-glow-hover">
            Explore Careers
          </Button>
        </div>
      </div>
    </section>
  );
}

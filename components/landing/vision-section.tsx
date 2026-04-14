"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VisionSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const visionPoints = [
    {
      title: "Financial Inclusion",
      description: "Bringing 1 billion Africans into the formal financial system.",
    },
    {
      title: "Tech Innovation",
      description: "Creating world-class tech solutions made for African challenges.",
    },
    {
      title: "Wealth Creation",
      description: "Enabling Africans to build, invest, and grow their own capital.",
    },
    {
      title: "Global Impact",
      description: "Building African champions that compete on the global stage.",
    },
  ];

  return (
    <section id="vision" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-32 lg:py-40 px-6 lg:px-12 particles-bg">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Main heading */}
        <div 
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Our Vision
          </span>
          <h2 className="text-5xl lg:text-7xl font-display leading-tight tracking-tight mb-8">
            <span className="block text-foreground">Building a</span>
            <span className="block gradient-text">Multi-Billion Dollar</span>
            <span className="block text-foreground">African Tech Empire</span>
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/70 max-w-3xl leading-relaxed">
            We&apos;re not just building products. We&apos;re building Africa&apos;s future—one innovation at a time. By 2030, CharlseEmpire Tech will be Africa&apos;s most valued tech company, serving millions and creating billions in value.
          </p>
        </div>

        {/* Vision grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {visionPoints.map((point, index) => (
            <div
              key={point.title}
              className={`group p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:bg-primary/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-display mb-3 text-foreground">{point.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div 
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 lg:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-display mb-2 text-foreground">
              Ready to Join the Revolution?
            </h3>
            <p className="text-foreground/70">
              Become part of Africa&apos;s biggest tech story
            </p>
          </div>
          <Button
            size="lg"
            className="mt-6 sm:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 group gold-glow-hover"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

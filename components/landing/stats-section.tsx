"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500000",
    label: "Active Users",
    suffix: "+",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    value: "50000000",
    label: "Total Transactions",
    prefix: "$",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Globe,
    value: "15",
    label: "Countries Served",
    suffix: "+",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Zap,
    value: "99.9",
    label: "Platform Uptime",
    suffix: "%",
    color: "from-primary/20 to-primary/5",
  },
];

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 60; // Animate over 60 frames
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="font-display text-5xl lg:text-6xl font-bold text-primary">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function StatsSection() {
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
      id="stats"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary/50" />
            By the Numbers
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Massive Impact.
            <br />
            <span className="gradient-text">Real Growth.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            CharlseEmpire Tech is changing how Africans manage money. Here&apos;s the proof.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const numericValue = parseInt(stat.value);

            return (
              <div
                key={index}
                className={`p-8 rounded-xl border border-primary/20 bg-gradient-to-br ${stat.color} hover:border-primary/50 transition-all duration-700 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />

                <AnimatedCounter
                  target={numericValue}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />

                <p className="text-muted-foreground mt-4 text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 lg:mt-24 p-8 lg:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-4">
            Ready to be part of this story?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of thousands of Africans building wealth with CharlseEmpire Tech.
          </p>
        </div>
      </div>
    </section>
  );
}

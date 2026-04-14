"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Products: [
    { name: "CharlseEmpire Pay", href: "#products" },
    { name: "Njangi Platform", href: "#products" },
    { name: "AI Solutions", href: "#products" },
    { name: "Pricing", href: "#vision" },
  ],
  Developers: [
    { name: "API Docs", href: "#developers" },
    { name: "Code Examples", href: "#developers" },
    { name: "Sandbox", href: "#" },
    { name: "Status", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-primary/20">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display gradient-text font-bold">CharlseEmpire</span>
                <span className="text-xs text-primary font-mono font-bold">Tech</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Building Africa&apos;s future with fintech, lending platforms, and AI-powered solutions. One innovation at a time.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CharlseEmpire Tech. Building Africa&apos;s future.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

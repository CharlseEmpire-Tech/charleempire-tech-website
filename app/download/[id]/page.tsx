"use client";

import { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  ShieldCheck,
  Smartphone,
  Monitor,
  Apple,
  Wind,
} from "lucide-react";
import { Product, Platform } from "@/lib/products";
import { fetchProductById } from "@/lib/api/products";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

interface DownloadPageProps {
  params: Promise<{
    id: string;
  }>;
}

const platformIcons: Record<string, React.ReactNode> = {
  ios: <Apple className="w-5 h-5" />,
  android: <Smartphone className="w-5 h-5" />,
  web: <Monitor className="w-5 h-5" />,
  windows: <Wind className="w-5 h-5" />,
  macos: <Apple className="w-5 h-5" />,
};

export default function DownloadPage({ params }: DownloadPageProps) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | undefined>();
  const [platform, setPlatform] = useState<Platform | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  // Resolve product + requested platform (via ?platform=<platformId> query param)
  useEffect(() => {
    let cancelled = false;
    fetchProductById(id).then((loadedProduct) => {
      if (cancelled) return;
      setProduct(loadedProduct);

      const requestedId = new URLSearchParams(window.location.search).get("platform");
      const platforms = loadedProduct?.platforms ?? [];
      const resolved =
        platforms.find((p) => p.id === requestedId && p.downloadLink && !p.comingSoon) ??
        platforms.find((p) => p.downloadLink && !p.comingSoon);

      setPlatform(resolved);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-trigger the actual file download shortly after the thank-you page appears
  useEffect(() => {
    if (isLoading || !platform?.downloadLink || downloadStarted) return;
    const timer = setTimeout(() => {
      downloadLinkRef.current?.click();
      setDownloadStarted(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, [isLoading, platform, downloadStarted]);

  if (isLoading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
            <p className="text-sm text-foreground/50 font-mono">Preparing your download...</p>
          </div>
        </main>
        <FooterSection />
      </>
    );
  }

  if (!product || !platform) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-display mb-4">Download unavailable</h1>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              We couldn&apos;t find that download. It may not be released yet, or the link is
              incorrect.
            </p>
            <Link
              href={product ? `/products/${product.id}` : "/products"}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {product ? `Back to ${product.name}` : "Back to products"}
            </Link>
          </div>
        </main>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background overflow-x-hidden particles-bg">
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            {/* Success state */}
            <div
              className={`text-center mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8 gold-glow">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>

              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4 justify-center">
                <span className="w-8 h-px bg-primary/50" />
                {downloadStarted ? "Download started" : "Almost there"}
              </span>

              <h1 className="text-4xl lg:text-5xl font-display tracking-tight mb-4 text-foreground">
                Thank you for choosing
                <br />
                <span className="gradient-text">{product.name}</span>
              </h1>

              <p className="text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">
                {downloadStarted
                  ? "Your download has started. If your browser asks you to confirm, go ahead and allow it — you're moments away from getting started."
                  : "Sit tight — your download is being prepared and will begin automatically in a moment."}
              </p>
            </div>

            {/* Download card */}
            <div
              className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/0 p-6 lg:p-8 mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-primary/20 flex-shrink-0">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-display text-foreground truncate">
                    {product.name}
                  </h2>
                  <p className="text-sm text-foreground/60">{product.categoryLabel}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-foreground/70 text-xs font-mono flex-shrink-0">
                  {platformIcons[platform.type]}
                  {platform.name}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <p className="text-lg font-semibold text-foreground">v{platform.version}</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mt-1">
                    Version
                  </p>
                </div>
                {platform.size && (
                  <div>
                    <p className="text-lg font-semibold text-foreground">{platform.size}</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mt-1">
                      Size
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-lg font-semibold text-foreground">{product.rating}★</p>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mt-1">
                    Rating
                  </p>
                </div>
              </div>

              <a
                ref={downloadLinkRef}
                href={platform.downloadLink}
                download
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
              >
                hidden download trigger
              </a>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 font-semibold gap-2 gold-glow-hover"
              >
                <a href={platform.downloadLink} download>
                  <Download className="w-4 h-4" />
                  {downloadStarted ? "Download again" : "Download now"}
                </a>
              </Button>

              {platform.requires && (
                <p className="text-xs text-foreground/50 mt-4 text-center">
                  Requires {platform.requires} • Free download
                </p>
              )}
            </div>

            {/* Install tip for sideloaded platforms */}
            {(platform.type === "android" || platform.type === "ios") && (
              <div
                className={`flex gap-3 p-5 rounded-xl border border-primary/10 bg-muted/30 mb-12 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Since {product.name} is installed directly rather than through an app store,
                  your device may show a security prompt during setup. This is expected — simply
                  allow installs from this source to continue.
                </p>
              </div>
            )}

            {/* Next steps */}
            <div
              className={`mb-12 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                What&apos;s next
              </h3>
              <div className="space-y-3">
                {[
                  "Install the app once your download completes",
                  "Create your account and personalize your experience",
                  "Explore everything " + product.name + " has to offer",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xs">{index + 1}</span>
                    </div>
                    <p className="text-sm text-foreground/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {product.name}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Explore more products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

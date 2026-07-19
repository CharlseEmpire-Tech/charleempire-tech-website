"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Download, Star, Smartphone, Monitor, Apple, Wind } from "lucide-react";
import { products, getProductById } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

interface ProductDetailPageProps {
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

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const product = getProductById(id);
  const [selectedPlatform, setSelectedPlatform] = useState(product?.platforms[0]);

  if (!product) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display mb-4">Product not found</h1>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to products
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
      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Header */}
        <section className="relative py-8 lg:py-12 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to products</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Product image and info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block text-xs font-mono text-primary uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                  {product.badge && (
                    <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-primary/20 text-primary">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl lg:text-5xl font-display mb-6 text-foreground">
                  {product.name}
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                    <p className="text-xs text-foreground/50">Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Download className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{product.downloads}</span>
                    </div>
                    <p className="text-xs text-foreground/50">Downloads</p>
                  </div>
                </div>
              </div>

              {/* Right: Product image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="relative py-16 lg:py-24 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-display mb-12 text-foreground">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-primary/20 bg-muted/30 hover:border-primary/50 hover:bg-muted/50 transition-all"
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-16 lg:py-24 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-display mb-12 text-foreground">Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.features.map((feature) => (
                <div key={feature} className="p-4 rounded-lg border border-primary/10 bg-card">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms & Downloads */}
        <section className="relative py-16 lg:py-24 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-display mb-12 text-foreground">Get {product.name}</h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Platform selector */}
              <div>
                <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                  Available on
                </p>
                <div className="space-y-2">
                  {product.platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`w-full px-4 py-3 rounded-lg transition-all text-left flex items-center gap-3 ${
                        selectedPlatform?.id === platform.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80 border border-primary/10"
                      }`}
                    >
                      {platformIcons[platform.type]}
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{platform.name}</div>
                        <div className="text-xs opacity-60">v{platform.version}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Platform details */}
              {selectedPlatform && (
                <div className="lg:col-span-2 border border-primary/20 rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-primary/0">
                  <h3 className="text-2xl font-display mb-6 text-foreground">{selectedPlatform.name}</h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                        Version
                      </p>
                      <p className="text-lg text-foreground">{selectedPlatform.version}</p>
                    </div>

                    {selectedPlatform.size && (
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                          App Size
                        </p>
                        <p className="text-lg text-foreground">{selectedPlatform.size}</p>
                      </div>
                    )}

                    {selectedPlatform.requires && (
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                          Requirements
                        </p>
                        <p className="text-lg text-foreground">{selectedPlatform.requires}</p>
                      </div>
                    )}
                  </div>

                  {product.comingSoon ? (
                    <>
                      <Button
                        disabled
                        className="w-full bg-muted text-foreground/60 rounded-lg py-3 font-semibold gap-2 cursor-not-allowed"
                      >
                        <Clock className="w-4 h-4" />
                        Coming Soon
                      </Button>

                      <p className="text-xs text-foreground/50 mt-4 text-center">
                        This product is launching soon. Stay tuned!
                      </p>
                    </>
                  ) : (
                    <>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 font-semibold gap-2 gold-glow-hover"
                      >
                        <a
                          href={selectedPlatform.downloadLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4" />
                          Download {selectedPlatform.name}
                        </a>
                      </Button>

                      <p className="text-xs text-foreground/50 mt-4 text-center">
                        Free download • No credit card required
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {products.length > 1 && (
          <section className="relative py-16 lg:py-24 border-b border-primary/10">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
              <h2 className="text-3xl font-display mb-12 text-foreground">Other Products</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {products
                  .filter((p) => p.id !== product.id)
                  .slice(0, 2)
                  .map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/product/${relatedProduct.id}`}
                      className="group relative p-6 rounded-xl border border-primary/20 bg-muted/30 hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-display text-foreground group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/70 mb-4">{relatedProduct.description}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        Learn more
                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="relative py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl lg:text-4xl font-display mb-6 text-foreground">
              Ready to get started?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              {product.comingSoon
                ? `${product.name} is launching soon. Browse our other products in the meantime.`
                : `Download ${product.name} today and join thousands of satisfied users across Africa.`}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {product.comingSoon ? (
                <Button
                  disabled
                  className="bg-muted text-foreground/60 px-8 py-3 rounded-lg cursor-not-allowed gap-2"
                >
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </Button>
              ) : (
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg gold-glow-hover"
                >
                  <a
                    href={product.platforms[0]?.downloadLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Now
                  </a>
                </Button>
              )}
              <Link
                href="/product"
                className="px-8 py-3 border border-primary/30 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Browse More Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

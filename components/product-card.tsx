"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Download, ArrowRight } from "lucide-react";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-background/50 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500 pointer-events-none" />

        {/* Card content */}
        <div className="relative p-6 lg:p-8 h-full flex flex-col">
          {/* Top section with rating and downloads */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm font-semibold">{product.rating}</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {product.downloads} downloads
            </span>
          </div>

          {/* Product Image */}
          <div className="mb-6 w-full h-48 rounded-lg overflow-hidden relative -mx-6 -mt-6 mb-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-mono rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                {product.badge}
              </span>
            )}
          </div>

          {/* Category badge */}
          <span className="inline-block text-xs font-mono text-primary uppercase tracking-wider mb-3">
            {product.categoryLabel}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-display mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-foreground/70 mb-5 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-6 space-y-2 flex-grow">
            {product.features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-xs text-foreground/60">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <p className="text-xs text-primary font-semibold">
                +{product.features.length - 3} more features
              </p>
            )}
          </div>

          {/* CTA Button */}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg gap-2 group/btn gold-glow-hover"
          >
            {product.comingSoon ? "Coming Soon" : "View Details"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </Link>
  );
}

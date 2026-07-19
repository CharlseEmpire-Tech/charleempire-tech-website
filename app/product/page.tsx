"use client";

import { useEffect, useState, Suspense } from "react";
import { Search, X } from "lucide-react";
import { products, categories, searchProducts, getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ProductsSkeletonLoader } from "@/components/products-skeleton";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Simulate loading delay for skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let results = products;

    // Apply category filter
    if (selectedCategory !== "all") {
      results = getProductsByCategory(selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    setFilteredProducts(results);
  }, [searchQuery, selectedCategory]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Hero section */}
        <section className="relative py-16 lg:py-24 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
                <span className="w-8 h-px bg-primary/50" />
                Browse Our Collection
              </span>
              <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
                <span className="block text-foreground">Our Complete</span>
                <span className="block gradient-text">Product Suite</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Explore all CharlseEmpire Tech products designed to transform African businesses and communities. Available on your favorite platforms.
              </p>
            </div>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary opacity-50" />
                <input
                  type="text"
                  placeholder="Search products, features, platforms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 lg:py-4 bg-card border border-primary/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-primary/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="relative py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            {isLoading ? (
              <ProductsSkeletonLoader />
            ) : filteredProducts.length > 0 ? (
              <div>
                {/* Results info */}
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-sm text-foreground/60">
                    Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of{" "}
                    <span className="font-semibold text-foreground">{products.length}</span> products
                  </p>
                  {searchQuery && (
                    <p className="text-sm text-foreground/60">
                      Search results for: <span className="font-semibold text-primary">{searchQuery}</span>
                    </p>
                  )}
                </div>

                {/* Products grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-in fade-in slide-in-from-bottom-4"
                      style={{
                        animationDelay: `${index * 75}ms`,
                      }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-foreground/60 mb-4">No products found</p>
                <p className="text-sm text-foreground/40 mb-8">
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}

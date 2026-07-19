export function ProductsSkeletonLoader() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Search bar skeleton */}
      <div className="max-w-2xl mx-auto">
        <div className="h-12 bg-gradient-to-r from-muted via-muted to-muted rounded-lg" />
      </div>

      {/* Filters skeleton */}
      <div className="flex gap-2 flex-wrap">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-24 bg-gradient-to-r from-muted via-muted to-muted rounded-lg" />
        ))}
      </div>

      {/* Products grid skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            {/* Card background */}
            <div className="aspect-video bg-gradient-to-r from-muted via-muted to-muted rounded-xl" />
            
            {/* Title */}
            <div className="h-6 bg-gradient-to-r from-muted via-muted to-muted rounded w-3/4" />
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gradient-to-r from-muted via-muted to-muted rounded w-full" />
              <div className="h-4 bg-gradient-to-r from-muted via-muted to-muted rounded w-5/6" />
            </div>

            {/* Features */}
            <div className="space-y-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-3 bg-gradient-to-r from-muted via-muted to-muted rounded w-full" />
              ))}
            </div>

            {/* Button */}
            <div className="h-10 bg-gradient-to-r from-muted via-muted to-muted rounded-lg w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: "pay" | "njangi" | "ai" | "music";
  categoryLabel: string;
  image: string;
  rating: number;
  downloads: string;
  platforms: Platform[];
  features: string[];
  keyBenefits: string[];
  color: string;
  comingSoon?: boolean;
  badge?: string;
}

export interface Platform {
  id: string;
  name: string;
  type: "ios" | "android" | "web" | "windows" | "macos";
  version: string;
  size?: string;
  requires?: string;
  downloadLink?: string;
  icon?: string;
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: "charlse-pay",
    name: "CharlseEmpire Pay",
    description: "Revolutionary fintech platform enabling seamless payments and financial services across Africa.",
    longDescription: "CharlseEmpire Pay is a comprehensive fintech solution that empowers millions of Africans with instant payments, money transfers, bill payments, and financial management tools. Available on mobile, web, and desktop platforms.",
    category: "pay",
    categoryLabel: "Fintech Platform",
    image: "/product-pay.jpg",
    rating: 4.8,
    downloads: "500K+",
    color: "from-primary/20 to-primary/5",
    comingSoon: true,
    badge: "Coming Soon",
    features: [
      "Instant transfers",
      "Low fees",
      "Multi-currency support",
      "Bill payments",
      "Mobile money integration",
      "Transaction history",
      "Secure authentication",
      "24/7 customer support",
    ],
    keyBenefits: [
      "Send money anywhere in Africa instantly",
      "Pay bills and buy airtime without leaving the app",
      "Manage multiple accounts in one place",
      "Bank-grade security and encryption",
    ],
    platforms: [
      {
        id: "pay-ios",
        name: "iOS",
        type: "ios",
        version: "2.1.0",
        size: "85 MB",
        requires: "iOS 13.0 or later",
        downloadLink: "#",
      },
      {
        id: "pay-android",
        name: "Android",
        type: "android",
        version: "2.1.0",
        size: "92 MB",
        requires: "Android 8.0 or later",
        downloadLink: "#",
      },
      {
        id: "pay-web",
        name: "Web App",
        type: "web",
        version: "2.1.0",
        requires: "Modern browser",
        downloadLink: "#",
      },
      {
        id: "pay-windows",
        name: "Windows Desktop",
        type: "windows",
        version: "2.1.0",
        size: "120 MB",
        requires: "Windows 10 or later",
        downloadLink: "#",
      },
      {
        id: "pay-macos",
        name: "macOS",
        type: "macos",
        version: "2.1.0",
        size: "115 MB",
        requires: "macOS 10.15 or later",
        downloadLink: "#",
      },
    ],
  },
  {
    id: "njangi-platform",
    name: "Njangi Platform",
    description: "Community lending platform connecting savers and borrowers for collective financial growth.",
    longDescription: "Njangi Platform digitizes traditional savings circles, enabling communities to organize group savings, lending, and investment activities. A perfect blend of cultural finance with modern technology.",
    category: "njangi",
    categoryLabel: "Community Finance",
    image: "/product-njangi.jpg",
    rating: 4.9,
    downloads: "250K+",
    color: "from-primary/15 to-primary/0",
    comingSoon: true,
    badge: "Coming Soon",
    features: [
      "Create savings circles",
      "Group lending",
      "Transparent tracking",
      "Automated disbursement",
      "Member management",
      "Financial reports",
      "Dispute resolution",
      "Microinsurance options",
    ],
    keyBenefits: [
      "Strengthen community bonds through finance",
      "Transparent and fair lending processes",
      "Build credit history for groups",
      "Access to larger loan amounts",
    ],
    platforms: [
      {
        id: "njangi-ios",
        name: "iOS",
        type: "ios",
        version: "1.5.2",
        size: "72 MB",
        requires: "iOS 13.0 or later",
        downloadLink: "#",
      },
      {
        id: "njangi-android",
        name: "Android",
        type: "android",
        version: "1.5.2",
        size: "78 MB",
        requires: "Android 8.0 or later",
        downloadLink: "#",
      },
      {
        id: "njangi-web",
        name: "Web App",
        type: "web",
        version: "1.5.2",
        requires: "Modern browser",
        downloadLink: "#",
      },
    ],
  },
  {
    id: "ai-solutions",
    name: "CharlseEmpire AI",
    description: "Intelligent automation and predictive analytics transforming African business operations.",
    longDescription: "CharlseEmpire AI provides advanced machine learning and automation tools designed specifically for African businesses. Predict trends, automate workflows, and make data-driven decisions.",
    category: "ai",
    categoryLabel: "AI & Analytics",
    image: "/product-ai.jpg",
    rating: 4.7,
    downloads: "50K+",
    color: "from-primary/10 to-primary/0",
    comingSoon: true,
    badge: "Coming Soon",
    features: [
      "Predictive analytics",
      "Business intelligence",
      "Workflow automation",
      "Real-time insights",
      "Custom dashboards",
      "Data visualization",
      "API access",
      "Machine learning models",
    ],
    keyBenefits: [
      "Forecast business trends accurately",
      "Automate repetitive tasks and save time",
      "Make data-driven business decisions",
      "Improve operational efficiency",
    ],
    platforms: [
      {
        id: "ai-web",
        name: "Web Platform",
        type: "web",
        version: "1.0.0",
        requires: "Modern browser",
        downloadLink: "#",
      },
      {
        id: "ai-api",
        name: "API & Integrations",
        type: "web",
        version: "1.0.0",
        requires: "Developer setup",
        downloadLink: "#",
      },
    ],
  },
  {
    id: "phonkdrift",
    name: "PhonkDrift",
    description:
      "Premium phonk music streaming experience with a vibrant real-time community, wrapped in a dark neon-inspired identity.",
    longDescription:
      "PhonkDrift is a premium music streaming app dedicated to phonk culture, available on Android and iOS. Discover trending tracks, build playlists, and enjoy a full-featured listening experience — then step into the live community where drifters hang out, react, and earn reputation through exclusive founding-member badges. All of it is wrapped in a sleek, dark, neon-accented design built to feel premium from the first tap.",
    category: "music",
    categoryLabel: "Music Streaming",
    image: "/product-phonk.png",
    rating: 4.9,
    downloads: "10K+",
    color: "from-primary/20 to-primary/5",
    badge: "New",
    features: [
      "Trending tracks & discovery",
      "Full-featured player with background audio",
      "Lock-screen controls & waveform seek bar",
      "Playlists, queue & repeat/loop",
      "Real-time community chat",
      "Reply threads & message reactions",
      "Founding-member (OG) badges",
      "Push notifications with smart routing",
      "Email/OTP verification",
      "Phonk-level onboarding quiz",
    ],
    keyBenefits: [
      "Stream and discover the best phonk tracks, anywhere",
      "Hang out with the drifter community in a live WhatsApp-style chat",
      "Earn reputation and OG status through join-order badges",
      "Enjoy a dark, neon red/purple premium experience built with Flutter",
    ],
    platforms: [
      {
        id: "phonkdrift-android",
        name: "Android",
        type: "android",
        version: "1.0.0",
        size: "55 MB",
        requires: "Android 8.0 or later",
        downloadLink: "#", // TODO: replace with the real Android download link
      },
      {
        id: "phonkdrift-ios",
        name: "iOS",
        type: "ios",
        version: "1.0.0",
        size: "74 MB",
        requires: "iOS 13.0 or later",
        comingSoon: true, // iOS version not released yet
      },
    ],
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "pay", label: "Fintech" },
  { id: "njangi", label: "Community Finance" },
  { id: "ai", label: "AI & Analytics" },
  { id: "music", label: "Music Streaming" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") return products;
  return products.filter((product) => product.category === categoryId);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.features.some((feature) =>
        feature.toLowerCase().includes(lowerQuery)
      )
  );
}

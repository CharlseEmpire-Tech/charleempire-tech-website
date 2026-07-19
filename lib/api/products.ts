import { Product, products as localProducts } from "@/lib/products";

/**
 * Products API layer.
 *
 * All product data flows through the fetchers below. Today they fall back to
 * the local catalog in `lib/products.ts`; to switch to a real backend (Go,
 * Java, Node — any stack), set NEXT_PUBLIC_PRODUCTS_API_URL and expose:
 *
 *   GET {base}/products      -> Product[]   (JSON, matching the Product type)
 *   GET {base}/products/{id} -> Product
 *
 * If the backend is unreachable, the fetchers gracefully fall back to the
 * local catalog so the site never renders empty.
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_PRODUCTS_API_URL;

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Products API request failed: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchProducts(): Promise<Product[]> {
  if (!API_BASE_URL) return localProducts;
  try {
    return await request<Product[]>("/products");
  } catch (error) {
    console.error("Falling back to local products:", error);
    return localProducts;
  }
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  if (!API_BASE_URL) {
    return localProducts.find((product) => product.id === id);
  }
  try {
    return await request<Product>(`/products/${id}`);
  } catch (error) {
    console.error("Falling back to local products:", error);
    return localProducts.find((product) => product.id === id);
  }
}

/** Available products first (e.g. PhonkDrift), coming-soon ones after. */
export function sortByAvailability(list: Product[]): Product[] {
  return [...list].sort(
    (a, b) => Number(Boolean(a.comingSoon)) - Number(Boolean(b.comingSoon))
  );
}

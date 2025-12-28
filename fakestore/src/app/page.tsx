// Update: app/page.tsx
"use client";

import { useProducts } from "@/app/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function HomePage() {
  // 🎯 ONE LINE TO GET ALL OUR DATA!
  const { data: products, isLoading, isError, error, refetch } = useProducts();
// OlD METHOD/
/*
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);


*/
  /*
  ===========================
   CHALLENGE 1: SEARCH BAR
  ===========================
   Goal: Allow the user to search products by name

  💡 HINTS:
  - You need a state to store what the user types (search term)
  - This state will be updated on every input change
  - Later, you will use this value to filter the products list
  - Think about: product.title.includes(searchTerm)
  */

  /*
  ===========================
  💰 CHALLENGE 2: PRICE FILTER
  ===========================
  👉 Goal: Filter products by price range (cheap / medium / expensive)

  💡 HINTS:
  - Create a state to store the selected price filter
  - Possible values: "all", "cheap", "medium", "expensive"
  - Decide the price ranges yourself (example: cheap < 50, etc.)
  - This filter will be applied together with the search filter
  */

  /*
 
  */
  const filterProducts = () => {
    // ❓ What should this function return?
    // ❓ How will search & price filters work together?
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-red-600 text-xl font-bold mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <Button
            onClick={() => refetch()}
            className="bg-pink-500 hover:bg-pink-600"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Success State
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          FakeStore Products
        </h1>
        <p className="text-gray-600">
          Beautiful products displayed with Next.js & TanStack Query
        </p>
      </div>

      {/*
      ===========================
    🔍 SEARCH UI (CHALLENGE 1)
      ===========================
      💡 HINTS:
      - Add an input here
      - Bind its value to the search state
      - Update state on every keystroke
      */}

      {/*
      ===========================
      💰 PRICE FILTER UI (CHALLENGE 2)
      ===========================
      💡 HINTS:
      - Buttons or a select dropdown work well
      - Each option should update the price filter state
      - Highlight the active filter for better UX
      */}

      {/* Stats and Refresh */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-700">
          Showing <span className="font-bold">{products?.length}</span> products
        </p>
        <Button onClick={() => refetch()} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Products
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Built with 💜 by our amazing class</p>
        <p className="mt-1">Data from fakestoreapi.com</p>
      </div>
    </div>
  );
}

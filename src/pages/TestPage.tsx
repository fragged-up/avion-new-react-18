import { useState } from "react";
import ProductCard from "@/components/new/ProductCard";
import { fetchFilteredProducts } from "@/features/products/productSlice";
import { useAppDispatch } from "@/features/store/hooks";

export default function TestPage() {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [filtersMeta, setFiltersMeta] = useState<any>(null);

  const handleFetchProducts = async () => {
    try {
      const result = await dispatch(
        fetchFilteredProducts({
          category: "chairs",
          sort: "price-asc",
          priceRanges: ["0-99", "100-199"],
        })
      ).unwrap();

      setProducts(result.products);
      setFiltersMeta(result.filtersMeta);
    } catch (error) {
      console.error(" Failed to fetch filtered products:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 p-6">
      <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleFetchProducts}>
        Fetch Filtered Products
      </button>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {(products ?? []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtersMeta && (
        <div className="mt-10 bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Filters Meta</h2>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">{JSON.stringify(filtersMeta, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

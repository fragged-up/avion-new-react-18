import ProductCard from "@/components/new/ProductCard";
import { fetchProducts } from "@/services/api";
import { useState } from "react";

export default function TestPage() {
  const [api, setApi] = useState<any[]>([]);

  const handleFetchProducts = async () => {
    const result = await fetchProducts();
    if (result) {
      setApi(result);
    }
  };

  return (
    <div className="w-full h-[500px] bg-slate-500">
      <button onClick={handleFetchProducts}>Fetch Products</button>
      <div className="grid grid-cols-3 bg-green-400 gap-4 mt-4">
        {api.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>
      <div>
      <img src="/assets/ProductsAssets/Chairs/chair1.jpg" />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  productImage: string;
  productPrice: number;
}

interface MaintancePageProps {
  category: string;
}

export default function MaintancePage({ category }: MaintancePageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(20);

  const getProductApi = async () => {
    const category = "chairs";
    try {
      const request = await fetch(
        `http://localhost:5001/products/${category}`,
        {
          method: "GET",
        },
      );
      const response = await request.json();
      const products = response.products;
      setProducts(products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductApi();
  }, [category]);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="w-full">
      <h1 className="text-center">Sh... Maintaining Here!</h1>
      <div className="mx-auto grid max-w-[90%] grid-cols-5 items-start justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.slice(0, visibleCount).map((prod: Product) => (
          <div key={prod.id} className="flex w-[156px] flex-col items-start">
            <div className="h-[192px] w-[156px]">
              <img
                className="h-full w-full object-cover"
                src={prod.productImage}
                alt={prod.name}
                width={156}
                height={192}
                loading="lazy"
              />
            </div>
            <h1 className="mt-2 font-clash text-xl font-light">{prod.name}</h1>
            <h1 className="font-satoshi font-extralight">
              £{prod.productPrice}
            </h1>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={loadMoreProducts}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

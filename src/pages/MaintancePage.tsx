import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

  const navigateToProductId = useNavigate();
  const handleNavigation = (product: Product) => {
    navigateToProductId(`/product/${product.id}`, { state: { product } });
  };

  const getProductApi = async () => {
    try {
      const request = await fetch(
        `http://localhost:5001/products/${category}`,
        {
          method: "GET",
        },
      );
      const response = await request.json();
      setProducts(response.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductApi();
  }, [category]);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <section className="mx-auto w-[90%]">
      <div className="w-auto">
        <h1 className="text-center">Sh... Maintaining Here!</h1>
        <div className="product-container">
          {products.slice(0, visibleCount).map((prod: Product) => (
            <div className="product-item" key={prod.id}>
              <div
                className="product-exc-image flex"
                onClick={() => handleNavigation(prod)}
              >
                <img
                  className="product-exc-image"
                  src={prod.productImage}
                  alt={prod.name}
                  loading="lazy"
                />
              </div>
              <div className="product-details">
                <h1 className="font-clash text-xl font-light">{prod.name}</h1>
                <h1 className="font-satoshi text-xl font-extralight">
                  £{prod.productPrice}
                </h1>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="mt-[2.5rem] flex justify-center md:mt-[3rem]">
            <button
              onClick={loadMoreProducts}
              className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
            >
              View Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

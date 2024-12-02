import { Product } from '@/types/products';

interface ProductProps {
  products: Product[] | any;
}

const ProductCard = ({ products }: ProductProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="product-container">
          {products.map((prod: Product | any) => (
            <div
              className="product-item"
              key={`${prod.category || 'product'}-${prod.id}-${prod.slug || prod.name}`}
            >
              <div
                className="inline-flex"
                // onClick={() => handleNavigation(prod)}
              >
                <img
                  className="product-exc-image"
                  src={prod.productImage}
                  alt={prod.name}
                  loading="lazy"
                />
              </div>

              <div className="product-details">
                <h1 className="text-wrap font-clash text-xl font-light">
                  {prod.name}
                </h1>
                <h1 className="text-wrap font-satoshi text-xl font-extralight">
                  £{prod.productPrice}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

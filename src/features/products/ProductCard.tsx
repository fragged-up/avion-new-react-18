import { AspectRatio } from '@/components/ui/AspectRatio';
import type { ProductCard as Product } from '@/types/products';
type ProductCardProps = {
  product: Product;
  onClick?: (event: any) => void;
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="product-item cursor-pointer" onClick={onClick}>
      {product.productImage && <AspectRatio className="" ratio={16 / 9} image={product.productImage} />}
      <div className="product-details">
        <h1 className="text-wrap font-clash text-xl font-light">{product.name}</h1>
        <h1 className="text-wrap font-satoshi text-xl font-extralight">£{product.productPrice}</h1>
      </div>
    </div>
  );
}

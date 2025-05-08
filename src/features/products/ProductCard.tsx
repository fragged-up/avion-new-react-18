import type { ProductCard as Product } from '@/types/products';
import { AspectRatio } from '@/components/ui/AspectRatio';
import { useNavigate } from 'react-router-dom';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const handleNavigation = () =>   navigate(`/products/${product.slug}`, { state: { product } });

  return (
    <div className="product-item cursor-pointer" onClick={handleNavigation}>
      <AspectRatio ratio={16 / 9} image={product.productImage} />
      <div className="product-details">
        <h1 className="text-wrap font-clash text-xl font-light">{product.name}</h1>
        <h1 className="text-wrap font-satoshi text-xl font-extralight">£{product.productPrice}</h1>
      </div>
    </div>
  );
}

import CatalogDataContainer from '@/features/products/CatalogData';
import ProductDetails from '../features/products/ProductDetails';
import UniqueSection from '@/sections/UniqueSection';
import { useLocation } from 'react-router-dom';

export const ProductOverview = () => {
  const location = useLocation();
  const productDetails = location.state?.product;

  if (!productDetails) {
    return <div>Product details not found.</div>;
  }

  return (
    <div className="">
      <ProductDetails product={productDetails} />
      <CatalogDataContainer />
      <UniqueSection />
    </div>
  );
};

export default ProductOverview;

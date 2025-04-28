import CatalogDataContainer from '@/features/products/CatalogData';
import ProductDetails from '../features/products/ProductDetails';
import UniqueSection from '@/sections/UniqueSection';
import { useLocation, useParams } from 'react-router-dom';

export const ProductOverview = () => {
  const location = useLocation();
  const {slug}=useParams()
  console.log(" ProductOverview ~ slug:", slug)
  const productDetails = location.state?.product;
  console.log("productDetails : ",productDetails);

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

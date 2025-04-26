import CatalogDataContainer from '@/features/products/CatalogData';
import ProductDetails from '../features/products/ProductDetails';
import UniqueSection from '@/sections/UniqueSection';



const api = {
  id:1,
  title: 'The Dandy Chair',
  price: '250',
  description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.',
  features: {
    material: 'Premium Material',
    craftsmanship: 'Handsome upholstery',
    quality: 'Quality timeless classic',
  },
  dimensions: {
    height: '110',
    width: '75',
    depth: '50',
  },
};


export const ProductOverview = () => {
  return (
    <div className="">
      <ProductDetails product={api} />
      <CatalogDataContainer /> {/* Needs to get a catalog props */}
      <UniqueSection />
    </div>
  );
};

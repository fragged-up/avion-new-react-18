
import CatalogDataContainer from '@/features/products/CatalogData';
import Unique from '@/sections/UniqueSection';
import ProductDetails from '../features/products/ProductDetails';
import UniqueSection from '@/sections/UniqueSection';

const titleValue = 'The Dandy Chair';
const dctValue = 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.';


export const ProductOverview = () => {
  return (
    <div className="">

      <ProductDetails
        product={{
          title: titleValue,
          price: '250',
          description: dctValue,
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
        }}
      />

      <CatalogDataContainer />
      <UniqueSection />
    </div>
  );
};

import { CatalogCard } from '@/features/products/CatalogCard';
import { BaseProducts } from '@/services/api/base';
import SortFilterModal from '@/components/ui/SortFilterModal';

export default function ProductSection() {
  return (
      <div className=''>
        <div className='hero-section'>
          <div className='all-products-hero'>
            <p className={'all-products-hero-logo'}>All Products</p>
          </div>

         <div className='py-8'>
          <SortFilterModal />
          </div>
        </div>

        <section>
          <div className="flex justify-center px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {BaseProducts.map((product: any) => (
                <div key={product.id} className="max-w-[375px] w-full">
                  <CatalogCard image={product.image} title={product.title} price={product.price.toString()} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className='w-full py-8 flex justify-center items-center'>
            <button className='border-none cursor-pointer bg-[#f9f9f9] py-5 px-12 font-satoshi text-center color-[#2a254b]'>Load More</button>
        </div>

      </div>
  );
}

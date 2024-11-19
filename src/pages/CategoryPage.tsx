import { useEffect, useState } from 'react';
import allFS from '@/assets/icons/allFS.svg';
import { useNavigate, useParams } from 'react-router-dom';
import SelectDropDown from '@/components/SelectDropDown';
import SFModal from './SFModal';

interface Product {
  id: number;
  name: string;
  slug?: string;
  productImage: string;
  productPrice: number;
}

export default function CategoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0); // Offset is initially 0
  const [closeModal, setCloseModal] = useState<boolean>(false);

  const { category } = useParams();
  const navigateToProductId = useNavigate();
  const initialLimit = 20; // Load 20 products initially
  const loadMoreLimit = 12; // Load 12 more products when the user clicks 'Load More'
  const [openTheModal, setOpenTheModal] = useState<boolean>(false);

  // const closeModal = () => setTheOpenModal(false);

  const propagateEvent = (event: any) => (event = true);
  const handleOpenModal = () => {
    setOpenTheModal(!openTheModal);
  };

  const handleNavigation = (product: Product) => {
    if (product.slug) {
      navigateToProductId(`/${category}/${product.slug}`, {
        state: { product },
      });
    } else {
      console.warn('No slug found for product:', product);
    }
  };

  const getProductApi = async (offset: number, limit: number) => {
    try {
      const url = category
        ? `http://localhost:5001/products/${category}?limit=${limit}&offset=${offset}`
        : `http://localhost:5001/?limit=${limit}&offset=${offset}`;
      // `http://localhost:5001/products/?limit=${limit}&offset=${offset}`;
      const request = await fetch(url, {
        method: 'GET',
      });
      const response = await request.json();
      // If offset is 0, we reset the product list (new category or first load)
      setProducts((prevProducts) => (offset === 0 ? response.products : [...prevProducts, ...response.products]));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Every time the category changes, reset the products and offset
    setProducts([]); // Reset products when category changes
    setOffset(0); // Reset offset
    getProductApi(0, initialLimit); // Load first 20 products for the new category
  }, [category]);

  const loadMoreProducts = () => {
    const newOffset = offset + loadMoreLimit;
    setOffset(newOffset);
    getProductApi(newOffset, loadMoreLimit); // Fetch 12 more products
  };

  return (
    <>
      <div className="sort-and-filter-section w-full">
        <div className="w-[85%] flex items-center mx-auto gap-4 py-12">
          <SFModal isModalVisible={openTheModal} toggleVisibility={handleOpenModal} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="product-container">
          {products.map((prod: Product | any, index) => (
            <div
              className="product-item"
              key={`${category || 'product'}-${prod.id}-${index}-${prod.slug || prod.name}`}
            >
              <div className="inline-flex" onClick={() => handleNavigation(prod)}>
                <img className="product-exc-image" src={prod.productImage} alt={prod.name} loading="lazy" />
              </div>

              <div className="product-details">
                <h1 className="text-wrap font-clash text-xl font-light">{prod.name}</h1>
                <h1 className="text-wrap font-satoshi text-xl font-extralight">£{prod.productPrice}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {products.length > 0 && (
        <div className="mt-[2.5rem] flex justify-center py-12 md:mt-[3rem]">
          <button
            onClick={loadMoreProducts}
            className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
          >
            View Collection
          </button>
        </div>
      )}
    </>
  );
}

{
  /* <SelectDropDown label={'Sort By'} options={['hey', 'bye', 'lie']} onSelect={handleCloseModal} />
<SelectDropDown label={'category'} options={['hey', 'bye', 'lie']} onSelect={handleCloseModal} />
<SelectDropDown label={'category'} options={['hey', 'bye', 'lie']} onSelect={handleCloseModal} /> */
}

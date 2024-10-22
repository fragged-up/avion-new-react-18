import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Filter from "@/components/Filter";
import Sort from "@/components/Sort";
import FilterSort from "@/components/FilterSort";
import {
  setCategoryFilter,
  setBrandFilter,
  setSortOption,
  loadMoreProducts,
  setProducts,
} from "@/redux/slices/productSlice";
import {
  selectFilteredProducts,
  selectAllProducts,
} from "@/redux/slices/productSlice";

interface Product {
  id: number;
  name: string;
  slug?: string;
  productImage: string;
  productPrice: number;
}

export default function Test() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts) || [];
  const allProducts = useSelector(selectAllProducts) || [];

  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showFilterAndSort, setShowFilterAndSort] = useState(false);

  const { category } = useParams();
  const navigateToProductId = useNavigate();

  const handleNavigation = (product: Product) => {
    if (product.slug) {
      navigateToProductId(`/${category}/${product.slug}`, {
        state: { product },
      });
    } else {
      console.warn("No slug found for product:", product);
    }
  };

  const initialLimit = 20;
  const loadMoreLimit = 12;

  const categories = ["Ceramics", "Chairs", "Lights", "Plants", "Tables"];
  const brands = ["Brand A", "Brand B", "Brand C"];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
  ];

  // Fetch products from the API and dispatch them to Redux
  const getProductApi = async (offset: number, limit: number) => {
    setLoading(true);
    try {
      const url = category
        ? `http://localhost:5001/${category}?limit=${limit}&offset=${offset}`
        : `http://localhost:5001/products?limit=${limit}&offset=${offset}`;

      const response = await fetch(url);
      const data = await response.json();

      // Handle the products coming from the "products" key in the response
      if (data.products) {
        if (offset === 0) {
          dispatch(setProducts(data.products)); // Set products for the first load
        } else {
          dispatch(loadMoreProducts(data.products)); // Load more products for pagination
        }
      } else {
        console.error("API did not return a valid array of products:", data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // const getProductApi = async (offset: number, limit: number) => {
  //   try {
  //     const url = category
  //       ? `http://localhost:5001/${category}?limit=${limit}&offset=${offset}`
  //       : `http://localhost:5001/products?limit=${limit}&offset=${offset}`;
  //     const request = await fetch(url, {
  //       method: "GET",
  //     });
  //     const response = await request.json();
  //     // If offset is 0, we reset the product list (new category or first load)
  //     setProducts((prevProducts) =>
  //       offset === 0
  //         ? response.products
  //         : [...prevProducts, ...response.products],
  //     );
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // Initial product fetch
  useEffect(() => {
    dispatch(setProducts([])); // Reset products when category changes
    setOffset(0); // Reset offset
    getProductApi(0, initialLimit);
    setLoading(false); // Load the first batch of products
  }, [category, dispatch]);

  // Load more products
  const loadMoreProductsHandler = () => {
    const newOffset = offset + loadMoreLimit;
    setOffset(newOffset);
    getProductApi(newOffset, loadMoreLimit); // Fetch additional products
  };

  // Apply filters and sorting
  const handleApplyFiltersAndSort = (filters: any) => {
    if (filters.category) {
      dispatch(setCategoryFilter(filters.category));
    }
    if (filters.brand) {
      dispatch(setBrandFilter(filters.brand));
    }
    if (filters.sortOption) {
      dispatch(setSortOption(filters.sortOption));
    }

    // Re-fetch products based on filters and sort
    getProductApi(0, initialLimit);
    setOffset(0); // Reset offset

    // Close modals after applying filters and sort
    setShowFilter(false);
    setShowSort(false);
    setShowFilterAndSort(false);
  };

  return (
    <>
      {/* Filter and Sort Buttons */}
      <div className="flex justify-center gap-4 py-4">
        <button
          className="rounded-lg bg-[#f9f9f9] px-4 py-2 font-satoshi font-normal text-black"
          onClick={() => setShowFilter(true)}
        >
          Filter
        </button>
        <button
          className="rounded-lg bg-[#f9f9f9] px-4 py-2 font-satoshi font-normal text-black"
          onClick={() => setShowSort(true)}
        >
          Sort
        </button>
        <button
          className="rounded-lg bg-[#f9f9f9] px-4 py-2 font-satoshi font-normal text-black"
          onClick={() => setShowFilterAndSort(true)}
        >
          All Filters & Sorting
        </button>
      </div>

      {/* Render Products */}
      <div className="flex justify-center">
        <div className="product-container">
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            products.map((prod: Product, index: number) => (
              <div
                className="product-item"
                key={`${category || "products"}-${prod.id}-${index}-${prod.slug || prod.name}`}
              >
                <div
                  className="inline-flex"
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
                  <h1 className="text-wrap font-clash text-xl font-light">
                    {prod.name}
                  </h1>
                  <h1 className="text-wrap font-satoshi text-xl font-extralight">
                    £{prod.productPrice}
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      {/* Load More Button */}
      {allProducts.length > 0 && (
        <div className="mt-[2.5rem] flex justify-center py-12 md:mt-[3rem]">
          <button
            onClick={loadMoreProductsHandler}
            className="rounded-lg bg-[#F9F9F9] px-4 py-2 font-satoshi text-base text-[#2A254B]"
          >
            View Collection
          </button>
        </div>
      )}

      {/* Render Filter Modal */}
      {showFilter && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex h-[50vh] items-center justify-center bg-[#bcbcbc]">
          <div className="w-full max-w-lg rounded-lg bg-[#bcbcbc] p-8">
            <Filter
              categories={categories}
              brands={brands}
              onApplyFilters={handleApplyFiltersAndSort}
              onClose={() => setShowFilter(false)}
            />
          </div>
        </div>
      )}

      {/* Render Sort Modal */}
      {showSort && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-full max-w-lg rounded-lg bg-white p-8">
            <Sort
              sortOptions={sortOptions}
              onApplySort={handleApplyFiltersAndSort}
              onClose={() => setShowSort(false)}
            />
          </div>
        </div>
      )}

      {/* Render All Filters & Sorting Modal */}
      {showFilterAndSort && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <FilterSort
            categories={categories}
            brands={brands}
            sortOptions={sortOptions}
            onApplyFiltersAndSort={handleApplyFiltersAndSort}
          />
        </div>
      )}
    </>
  );
}

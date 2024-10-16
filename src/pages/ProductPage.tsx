import { useLocation } from "react-router-dom";
import WhatsMake from "@/components/WhatsMake";
import ProductIdDetails from "@/components/ProductIdDetails";
import CatalogDataContainer from "@/components/CatalogData";
export type ProductIdProps = {
  id: number;
  name?: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
  productDescription?: {
    main?: string;
    descOne?: string;
    descTwo?: string;
    descThree?: string;
  };
  productDimensions?: {
    height?: string;
    weight?: string;
    depth?: string;
  };
};

export default function ProductPage() {
  const location = useLocation();
  const product = location.state?.product as ProductIdProps;

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-between">
        <div className="flex max-h-[23.75rem] w-full md:h-full">
          <img
            src={product.productImage}
            alt={product.name}
            className="w-full md:h-full"
          />
        </div>
        <div className="w-full">
          <ProductIdDetails product={product} />
        </div>
      </div>
      <div className="div">
        <CatalogDataContainer />
      </div>
      <div className="whats-make-container">
        <WhatsMake />
      </div>
    </div>
  );
}

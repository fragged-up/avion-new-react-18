import { useLocation } from "react-router-dom";
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

    productDimensions?: {
      height?: string;
      weight?: string;
      depth?: string;
    };
  };
};

export default function ProductPage() {
  const location = useLocation();
  const product = location.state?.product as ProductIdProps;

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="h-[600px] w-[600px] bg-black text-white">
      <p>Hey, I am product {product.id}</p>
      <img src={product.productImage} alt={product.productTitle} />
      <p>{product.productTitle}</p>
      <p>£{product.productPrice}</p>
    </div>
  );
}

{
  // Tommrow  10/10/2024  this the product id page already ready just finish your adjustments and get it done ..
  /* <InspectPage /> */
}

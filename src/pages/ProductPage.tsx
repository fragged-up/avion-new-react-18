import { useLocation } from "react-router-dom";
import InspectPage from "./InspectPage";
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
    <div className="w-full">
      <div className="flex max-h-[23.75rem] w-full">
        <img src={product.productImage} alt={product.name} className="w-full" />
      </div>

      <section className="mx-auto w-[calc(100%-3rem)]">
        <div className="div mt-[1.75rem] flex flex-col gap-[.8rem]">
          <p className="font-clash text-2xl font-normal text-[#2A254B]">
            {product.name}
          </p>
          <p className="font-clash text-xl font-normal text-[#2A254B]">
            £{product.productPrice}
          </p>
        </div>
        <div className="product-description mt-[2.75rem]">
          <h2 className="font-clash text-base font-normal text-[#2A254B]">
            Product Description
          </h2>
          <p className="font-satoshi text-sm font-normal text-[#2A254B]">
            {product.productDescription?.main}
          </p>
          <div className="mt-[1.75rem] flex flex-col">
            <p className="font-clash text-base font-normal text-[#2A254B]">
              Dimensions
            </p>
            <div className="dimensions-group">
              <div className="dimensions-item">
                <p className="font-clash text-sm font-normal text-[#2A254B]">
                  Height
                </p>
                <p className="font-satoshi text-sm font-normal text-[#2A254B]">
                  {product.productDimensions?.height}
                </p>
              </div>
              <div className="dimensions-item">
                <p className="font-clash text-sm font-normal text-[#2A254B]">
                  Weight
                </p>
                <p className="font-satoshi text-sm font-normal text-[#2A254B]">
                  {product.productDimensions?.weight}
                </p>
              </div>
              <div className="dimensions-item">
                <p className="font-clash text-sm font-normal text-[#2A254B]">
                  Depth
                </p>
                <p className="font-satoshi text-sm font-normal text-[#2A254B]">
                  {product.productDimensions?.depth}
                </p>
              </div>
            </div>
            <div className="quantity flex w-full flex-col">
              <p className="text-normal font-clash text-base text-[#2A254B]">
                Quantity
              </p>
              <p className="text-center font-satoshi text-base font-normal text-[#2A254B]">
                1
              </p>
            </div>
            <div className="favorites mt-[2rem] flex w-full flex-col">
              <button className="bg-white py-4 text-center font-satoshi text-base font-normal text-[#2A254B]">
                Save to Favorites
              </button>
              <button className="bg-[#2A254B] py-4 text-center font-satoshi text-base font-normal text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  // Tommrow  10/10/2024  this the product id page already ready just finish your adjustments and get it done ..
  /* <InspectPage /> */
}

// return (
// <div className="">
{
  /* <p>Hey, I am product {product.id}</p>
    <img src={product.productImage} alt={product.productTitle} />
    <p>{product.productTitle}</p>
    <p>£{product.productPrice}</p> */
}
{
  /* <InspectPage /> */
}
{
  /* </div> */
}
// );

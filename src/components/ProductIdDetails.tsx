import { ProductIdProps } from "@/pages/ProductPage";
type SemiProductProps = {
  product: ProductIdProps;
};

export default function ProductIdDetails({ product }: SemiProductProps) {
  return (
    <div className="product-id-container">
      <section className="image-id-section">
        <img src={product.productImage} alt={product.name} />
      </section>
      <section className="details-id-section">
        <div className="details-id-wrapper">
          <div className="mt-[1.75rem] flex flex-col gap-[.8rem]">
            <p className="font-clash text-2xl font-normal text-[#2A254B]">
              {product.name}
            </p>
            <p className="font-clash text-xl font-normal text-[#2A254B]">
              £{product.productPrice}
            </p>
          </div>
          <div className="product-description">
            <div className="flex flex-col gap-[1em] py-[1.5em]">
              <h2 className="font-clash text-base font-normal text-[#2A254B]">
                Product Description
              </h2>
              <p className="font-satoshi font-normal text-[#2A254B] text-[1.em]">
                {product.productDescription?.main}
              </p>
              <ul className="description-list-container">
                <li className="description-list">
                  {product.productDescription?.descOne}
                </li>
                <li className="description-list">
                  {product.productDescription?.descTwo}
                </li>
                <li className="description-list">
                  {product.productDescription?.descThree}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[1em]">
              <p className="font-clash text-base font-normal text-[#2A254B]">
                Dimensions
              </p>
              <div className="dimensions-group text-center">
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
              <div className="quantity flex w-full flex-col gap-[1em] py-[1.5em] md:pb-0 md:pt-[3em]">
                <p className="text-normal font-clash text-base text-[#2A254B]">
                  Quantity
                </p>
                <button className="bg-[#f9f9f9] p-3.5 text-center font-satoshi text-base font-normal text-[#2A254B]">
                  1
                </button>
                <button className="bg-[#2A254B] p-3.5 text-center font-satoshi text-base font-normal text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

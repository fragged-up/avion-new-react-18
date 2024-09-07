// import styles from "/@/ShoppingCart.module.css";
import styles from "@/CSSModules/ShoppingCart.module.css";
import pr1 from "@/assets/images/shop-image-1.svg";
import pr2 from "@/assets/images/shop-image2.svg";
// import {
//   ProductCart,
//   CheckOutM,
// } from "../ProductList/mobile/ProductListMobile";

// import { useContext } from "react";
// import { ProductDetails } from "./ContentM";
import { ProductCart, CheckOutM } from "@/components/Mobile/ProductListMobile";

// type productCard = {
//   prImg: string;
//   prTitle: string;
//   prDesc: any;
//   prprice: string;
// };
function ShoppingCart() {
  // const theData = useContext(ProductDetails);
  // console.log(theData);

  const desc1 = `A timeless ceramic vase with a tri color grey glaze.`;
  const desc2 = `Beautiful and simple this is one for the classics`;
  return (
    <div className={styles["shopping-cart-w"]}>
      <div className={styles["shopping-cart-sb-c"]}>
        <h1 className={styles["shopping-cart-sb"]}>Your Shopping Cart</h1>
      </div>

      <div className={styles["shopping-cart-c"]}>
        <ProductCart
          prImg={pr1}
          prTitle={"Graystone vase"}
          prDesc={desc1}
          prPrice={"85"}
        />
      </div>

      <div className={styles["shopping-cart-c"]}>
        <ProductCart
          prImg={pr2}
          prTitle={"Graystone vase"}
          prDesc={desc2}
          prPrice={"85"}
        />
      </div>
      <div className={styles["shopping-cart-s"]}>
        <CheckOutM total={"654"} />
      </div>
    </div>
  );
}

export default ShoppingCart;

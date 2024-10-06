import lucyCatalog from "@/assets/images/lucy-catalog.svg";
import silkyCatalog from "@/assets/images/silky-catalog.svg";
import rusticCatalog from "@/assets/images/rustic-catalog.svg";
import dandyCatalog from "@/assets/images/dandy-catalog.svg";

// import dDandy from "@/assets/deskProduct/DANDY.svg";
// import dRustic from "@/assets/deskProduct/RUSTIC.svg";
// import dSilky from "@/assets/deskProduct/SILKY.svg";
// import dLucy from "@/assets/deskProduct/LUCY.svg";
// import dFlights from "@/assets/deskProduct/FLIGHTS.svg";
// import dVase from "@/assets/deskProduct/VASE.svg";
// import dSm from "@/assets/deskProduct/SMALLCHR.svg";
// import dOrangeLucy from "@/assets/deskProduct/ORANGELUCY.svg";

type Product = {
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

// type ProductCatalogApi = {
//   getProductList: () => Promise<Product[]>;
//   getProductById: (id: number) => Promise<Product>;
//   products: Product[];
// };
// const productCatalogApi = {
//   getProductList: async () => {
//     return productCatalogApi.getProductList;
//   },
//   getProductById: async (id: number) => {
//     const product = productCatalogApi.products.find((p) => p.id === p);
//     if (!product) throw new Error("Product not found");
//     return product;
//   },
export const productsAPI: Product[] = [
  {
    id: 1,
    name: "Dandy Chair",
    productImage: dandyCatalog,
    productTitle: "The Dandy Chair",
    productPrice: 250,
    productDescription: {
      main: "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
      descOne: "Premium Material",
      descTwo: "Handsome upholstery",
      descThree: "Quality timeless classic",
    },
    productDimensions: {
      height: "110cm",
      weight: "7kg",
      depth: "50cm",
    },
  },
  {
    id: 2,
    name: "Lucy Chair",
    productImage: lucyCatalog,
    productTitle: "The Lucy Chair",
    productPrice: 250,
    productDescription: {
      main: "The Lucy Chair is a stylish, modern accent chair featuring a soft velvet fabric and gold-toned metal legs. Its contemporary design fits perfectly in living rooms, bedrooms, or as a statement piece in office spaces. The padded seat and backrest provide comfort without compromising on aesthetics.",
      descOne: "Premium Material",
      descTwo: "Versatile Design",
      descThree: "Compact and Stylish",
    },
    productDimensions: {
      height: "80cm",
      weight: "6kg",
      depth: "55cm",
    },
  },
  {
    id: 3,
    name: "Silky Chair",
    productImage: silkyCatalog,
    productTitle: "The Silky Chair",
    productPrice: 250,
    productDescription: {
      main: "The Silky Chair boasts a smooth leather finish with an ergonomic shape that enhances both comfort and style. Its sleek profile makes it ideal for office use or as a chic dining chair. The chair includes an adjustable swivel base, adding functionality to its minimalist design.",
      descOne: "Ergonomic Comfort",
      descTwo: "Sleek and Professional",
      descThree: "Durable and Functional",
    },
    productDimensions: {
      height: "110cm",
      weight: "10kg",
      depth: "60",
    },
  },
  {
    id: 4,
    name: "Rustic Chair",
    productImage: rusticCatalog,
    productTitle: "The Rustic Chair",
    productPrice: 250,
    productDescription: {
      main: "The Rustic Chair is crafted from reclaimed wood, with a rugged and charming design that brings a touch of countryside warmth to any space. With its solid construction and natural wood grain, this chair is perfect for farmhouse-style dining rooms or casual settings",
      descOne: "Handcrafted Appeal",
      descTwo: "Sturdy and Reliable",
      descThree: "Timeless Charm",
    },
    productDimensions: {
      height: "90cm",
      weight: "7.5kg",
      depth: "50cm",
    },
  },
];

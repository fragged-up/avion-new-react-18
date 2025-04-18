import { createBrowserRouter } from "react-router-dom";
import {ProductOverview} from "@/routes/ProductOverview";
import Layout from "@/routes/Layout";
import Home from "@/routes/Home";
import About from "@/routes/About";
import Products from "@/routes/Products";
import ProductDetails from "@/routes/ProductDetails";
import Category from "@/routes/Category";
import Listing from "@/routes/Listing";
import Basket from "@/routes/Basket";
import Sort from "@/routes/Sort";
import Test from "@/routes/Test";
import NotFound from "@/routes/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "all", element: <Sort /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "listing", element: <Listing /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: ":category", element: <Category /> },
      { path: "old-products", element: <ProductOverview /> },
      { path: "basket", element: <Basket /> },
      { path: "test", element: <Test /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

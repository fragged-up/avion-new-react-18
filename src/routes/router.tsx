import { createBrowserRouter } from "react-router-dom";
import Layout from "@/routes/layout";
import Home from "@/routes/Home";
import About from "@/routes/About";
import Products from "@/routes/Products";
import Category from "@/routes/Category";
import Listing from "@/routes/Listing";
import Basket from "@/routes/Basket";
import Inspect from "@/routes/Inspect";
import Sort from "@/routes/Sort";
import Test from "@/routes/Test";
import NotFound from "@/routes/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "listing", element: <Listing /> },
      { path: "basket", element: <Basket /> },
      { path: "old-products", element: <Inspect /> },
      { path: "sort", element: <Sort /> },
      { path: "test", element: <Test /> },
      { path: ":category", element: <Category /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

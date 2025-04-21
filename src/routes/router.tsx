import { createBrowserRouter } from "react-router-dom";
import {ProductOverview} from "@/routes/ProductOverview";
import Layout from "@/routes/Layout";
import Home from "@/routes/Home";
import About from "@/routes/About";
import Products from "@/routes/Products";
import ProductDetails from "@/routes/ProductDetails";
import Category from "@/routes/Category";
import OldPrd from "@/routes/OldPrd";
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
      { path: "products/:id", element: <ProductDetails /> },
      { path: ":category", element: <Category /> },


      { path: "test", element: <Test /> },
      { path: "old-products", element: <ProductOverview /> },
      { path: "oldPrD", element: <OldPrd /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

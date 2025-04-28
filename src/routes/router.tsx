import { createBrowserRouter } from "react-router-dom";
import Layout from "@/routes/Layout";
import Home from "@/routes/Home";
import About from "@/routes/About";
import Products from "@/routes/Products";
import Test from "@/routes/Test";
import NotFound from "@/routes/NotFound";
import ProductOverview from "@/routes/ProductOverview";
import ErrorPage from "./ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "products/:slug", element: <ProductOverview /> },
      { path: "test", element: <Test /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

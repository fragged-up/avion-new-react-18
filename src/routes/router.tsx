import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Test from "./Test";
import NotFound from "./NotFound";
import ProductOverview from "./ProductOverview";
import ErrorPage from "./ErrorPage";


export const routes = [
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
];
export const router =createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import NotFound from "./NotFound";
import ProductOverview from "./ProductOverview";
import ErrorPage from "./ErrorPage";
import Category from "./Category";
import Checkout from "./Checkout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const routes:RouteObject[] = [{
  path: "/",
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Home /> },
    { path:"login", element: <SignIn /> },
    { path:"signup", element: <SignUp /> },
    { path: "about", element: <About /> },
    { path: "products", element: <Products /> },
    { path: "products/:slug", element: <ProductOverview /> },
    { path: "/:category", element: <Category /> },
    { path: "checkout", element: <Checkout /> },
    { path: "*", element: <NotFound /> },
  ],
}];


export const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    }
});



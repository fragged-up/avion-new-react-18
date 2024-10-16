import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import BasketPage from "./pages/BasketPage";
import InspectPage from "./pages/InspectPage";
import NotFoundPage from "./pages/NotFound";
import SortPage from "@/pages/SortPage";
import MaintancePage from "@/pages/MaintancePage";
import ProductPage from "./pages/ProductPage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/listing-page"
            element={
              <Layout>
                <ListingPage />
              </Layout>
            }
          />
          <Route
            path="/Products"
            element={
              <Layout>
                <InspectPage />
              </Layout>
            }
          />
          <Route
            path="/About"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/basket-page"
            element={
              <Layout>
                <BasketPage />
              </Layout>
            }
          />
          <Route
            path="/sort"
            element={
              <Layout>
                <SortPage />
              </Layout>
            }
          />
          <Route
            path="/:category"
            element={
              <Layout>
                <MaintancePage />
              </Layout>
            }
          />
          <Route
            path="/:category/:slug"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

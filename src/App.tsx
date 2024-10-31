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
// import Test from "./pages/Test";
import ErrorBoundary from "./components/ErrorBoundary";
import Ack from "./pages/ack";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            {/* <Route
              path="/Test"
              element={
                <Layout>
                  <Test />
                </Layout>
              }
            /> */}
            <Route
              element={
                <Layout>
                  <Ack />
                </Layout>
              }
              path="/ss"
            />
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
              path="/old-products"
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
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

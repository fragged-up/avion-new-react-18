import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import BasketPage from './pages/BasketPage';
import InspectPage from './pages/InspectPage';
import NotFoundPage from './pages/NotFound';
import SortPage from '@/pages/SortPage';
import ProductPage from './pages/ProductPage';
import SFModal from './components/modals/SFModal';
import ApiCheck from './Temp/Checks/ApiCheck';
import RealPage from './pages/RealPage';
import ModalCheck from './components/FiltersGroups/ModalCheck';
import Cc from './components/FiltersGroups/Cc';
import CategoryPage from './pages/CategoryPage';
import TestPage from './pages/TestPage';
// import KafkaRoute from './Temp/Checks/KafkaRoute';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col bg-black min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Routes>
        <Route
            path="/test"
            element={
              <Layout>
                <TestPage />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route
            path="/ac"
            element={
              <Layout>
                <Cc />
              </Layout>
            }
          />

          <Route
            path="/filters"
            element={
              <Layout>
                <ModalCheck />
              </Layout>
            }
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
          {/* <Route
              path="/old-sf"
              element={
                <Layout>
                  <OldModal />
                </Layout>
              }
            /> */}

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
            path="/real"
            element={
              <Layout>
                <RealPage />
              </Layout>
            }
          />
          <Route
            path="/:category"
            element={
              <Layout>
                <CategoryPage />
              </Layout>
            }
          />

          {/* <Route
              path="/:category/:slug"
              element={
                <Layout>
                  <ProductPage />
                </Layout>
              }
            /> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

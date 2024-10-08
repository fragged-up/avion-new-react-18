import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import BasketPage from "./pages/BasketPage";
import InspectPage from "./pages/InspectPage";
import NotFoundPage from "./pages/NotFound";
import SortPage from "@/pages/SortPage";
import MaintancePage from "@/pages/MaintancePage";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing-page" element={<ListingPage />} />
          <Route path="/Products" element={<InspectPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/basket-page" element={<BasketPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="sort" element={<SortPage />} />
          <Route path="Maintance" element={<MaintancePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import Error404 from "../components/404/Error404.jsx";
import Product from "../pages/Product/Product.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import ProductsData from "../utils/ProductsData.js";
import we from "../pages/we/we.jsx";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/producto/:productId" element={<ProductDetail />} />
        <Route path="/nosotros" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import Error404 from "../components/404/Error404.jsx";
import Product from "../pages/Product/Product.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import ProductsData from "../utils/ProductsData.js";
import Service from "../pages/Service/Service.jsx";
import ServiceDetails from "../pages/ServiceDetail/SeviceDetails.jsx";
import ServicesData from "../utils/ServicesData.js";
import Nosotros from "../pages/we/Nosotros.jsx"
import Ecommerce from "../pages/Ecommerce/Ecommerce.jsx";
import Register from "../pages/Forms/Register.jsx";
import Invoice from "../pages/Forms/Invoice.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/producto/:productId" element={<ProductDetail />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/servicio/:serviceId" element={<ServiceDetails />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/factura" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

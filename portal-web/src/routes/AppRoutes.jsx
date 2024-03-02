import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import Error404 from "../components/404/Error404.jsx";
import Product from "../pages/Product/Product.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import ProductsData from "../utils/ProductsData.js";
import Service from "../pages/Service/Service.jsx";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail.jsx";
import Nosotros from "../pages/we/Nosotros.jsx"
import Ecommerce from "../pages/Ecommerce/Ecommerce.jsx";
import UserHome from "../pages/UserHome/UserHome.jsx"
import UserService from "../pages/UserService/UserS.jsx"
import UserFact from "../pages/UserFact/UserFact.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserFact />} />
        <Route path="/UserService" element={<UserService />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/producto/:productId" element={<ProductDetail />} />
        <Route path="/carrito" element={<Ecommerce />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

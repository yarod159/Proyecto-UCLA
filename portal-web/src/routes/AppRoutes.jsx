import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import Error404 from "../components/404/Error404.jsx";
import Product from "../pages/Product/Product.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import UserHome from "../pages/UserHome/UserHome.jsx"
import UserService from "../pages/UserService/UserS.jsx"
import UserFact from "../pages/UserFact/UserFact.jsx";
import Service from "../pages/Service/Service.jsx";
import ServiceDetails from "../pages/ServiceDetail/SeviceDetails.jsx"
import Nosotros from "../pages/we/Nosotros.jsx"
import Register from "../pages/Forms/Register.jsx"
import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import FormServ from "../pages/FormServicio/FormServ.jsx";
import FormPagos from "../pages/FormPagos/FormPagos.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/FormPagos" element={<FormPagos />} />
        <Route path="/FormServ" element={<FormServ />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserFact" element={<UserFact />} />
        <Route path="/UserService" element={<UserService />} />
        <Route path="/" element={<UserHome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/producto/:productId" element={<ProductDetail />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/servicio/:serviceId" element={<ServiceDetails />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/registrarse" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

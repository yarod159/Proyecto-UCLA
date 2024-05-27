import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import RegisterPage from "../pages/login/RegisterPage.jsx";
import Home from "../pages/Home/Home.jsx";
import Error404 from "../components/404/Error404.jsx";
import Product from "../pages/Product/Product.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import UserHome from "../pages/UserHome/UserHome.jsx";
import UserService from "../pages/UserService/UserS.jsx";
import UserFact from "../pages/UserFact/UserFact.jsx";
import Service from "../pages/Service/Service.jsx";
import ServiceDetails from "../pages/ServiceDetail/SeviceDetails.jsx";
import Nosotros from "../pages/we/Nosotros.jsx";
import Register from "../pages/Forms/Register.jsx";
import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import FormServ from "../pages/FormServicio/FormServ.jsx";
import FormPagos from "../pages/FormPagos/FormPagos.jsx";
import Reporte from "../pages/ServicioalCliente/Reporte/reporte.jsx";
import ServCliente from "../pages/ServicioalCliente/servCliente.jsx";
import Garantía from "../pages/ServicioalCliente/Reporte/garantía.jsx";
import FaqSeccion from "../pages/ServicioalCliente/faqSeccion.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";
import { ProtectedRoutes } from "./ProtectedRoute.jsx";

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/productos" element={<Product />} />
          <Route path="/producto/:productId" element={<ProductDetail />} />
          <Route path="/nosotros" element={<Nosotros />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/AtencionAlCliente" element={<ServCliente />} />
            <Route path="/newReport" element={<Reporte />} />
            <Route path="/FormPagos" element={<FormPagos />} />
            <Route path="/FormServ" element={<FormServ />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/UserFact" element={<UserFact />} />
            <Route path="/servicios" element={<UserService />} />
            <Route path="/userHome" element={<UserHome />} />
            <Route path="/solGarant" element={<Garantía />} />
            <Route path="/faqSeccion" element={<FaqSeccion />} />

           
            <Route path="/servicio/:serviceId" element={<ServiceDetails />} />
            <Route path="/registrarse" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;

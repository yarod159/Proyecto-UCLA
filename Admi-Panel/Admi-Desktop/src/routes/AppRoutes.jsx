import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/Home.jsx";
import UserList from "../pages/userList/UserList.jsx";
import User from "../pages/user/User.jsx";
import ProductList from "../pages/productList/ProductList.jsx";
import Product from "../pages/product/Product.jsx";
import NewProduct from "../pages/newProduct/NewProduct.jsx";
import Transactions from "../pages/transactionsList/Transactions.jsx";
import SolicitudList from "../pages/solicitudList/SolicitudList.jsx";
import EmpleadosList from "../pages/EmpladoList/EmpleadosList.jsx";
import CrearEmpleado from "../pages/CrearEmpleado/CrearEmpleado.jsx";
import Ajustes from "../pages/AjustesDelSistemas/Ajustes.jsx";
import Instalacion from "../pages/instalacion/Instalacion.jsx";
import InformacionGeneral from "../pages/AjustesDelSistemas/InformacionGeneral.jsx";
import InformacionEmpresa from "../pages/AjustesDelSistemas/informacionEmpresa.jsx";
import MetodosPago from "../pages/AjustesDelSistemas/MetodosPago.jsx";
import ComponenteSistema from "../pages/AjustesDelSistemas/componenteSistema.jsx";
import Faq from "../pages/AjustesDelSistemas/Faq.jsx";
import ReporteClienteList from "../pages/ServicioAlCliente/ReporteClienteList.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reports" element={<ReporteClienteList />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/transacciones" element={<Transactions />} />
        <Route path="/solicitudes" element={<SolicitudList />} />
        <Route path="/empleados" element={<EmpleadosList />} />
        <Route path="/crearEmpleado" element={<CrearEmpleado />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/InformacionGeneral" element={<InformacionGeneral />} />
        <Route path="/InformacionEmpresa" element={<InformacionEmpresa />} />
        <Route path="/MetodosPago" element={<MetodosPago />} />
        <Route path="/ComponenteSistema" element={<ComponenteSistema />} />
      </Routes>
    </BrowserRouter>
  );
}



import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/Home.jsx";
import UserList from "../pages/userList/UserList.jsx";
import User from "../pages/user/User.jsx";
import ProductList from "../pages/productList/ProductList.jsx";
import Product from "../pages/product/Product.jsx";
import NewProduct from "../pages/newProduct/NewProduct.jsx";
import Transactions from "../pages/transactionsList/Transactions.jsx";
import SolicitudList from "../pages/solicitudList/SolicitudList.jsx";
import EmpleadosList from "../pages/EmpladoList/EmpleadosList.jsx";
import CrearEmpleado from "../pages/CrearEmpleado/CrearEmpleado.jsx";
import Ajustes from "../pages/AjustesDelSistemas/Ajustes.jsx";
import Instalacion from "../pages/instalacion/Instalacion.jsx";
import InformacionGeneral from "../pages/AjustesDelSistemas/InformacionGeneral.jsx";
import InformacionEmpresa from "../pages/AjustesDelSistemas/informacionEmpresa.jsx";
import MetodosPago from "../pages/AjustesDelSistemas/MetodosPago.jsx";
import ComponenteSistema from "../pages/AjustesDelSistemas/componenteSistema.jsx";
import InformacionGeneralList from "../pages/AjustesDelSistemas/informacionGeneralList.jsx";
import Login from "../pages/login/login.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/transacciones" element={<Transactions />} />
        <Route path="/solicitudes" element={<SolicitudList />} />
        <Route path="/empleados" element={<EmpleadosList />} />
        <Route path="/crearEmpleado" element={<CrearEmpleado />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/InformacionGeneral" element={<InformacionGeneral />} />
        <Route path="/InformacionEmpresa" element={<InformacionEmpresa />} />
        <Route path="/MetodosPago" element={<MetodosPago />} />
        <Route path="/ComponenteSistema" element={<ComponenteSistema />} />
        <Route path="/InformacionGeneralList" element={<InformacionGeneralList />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
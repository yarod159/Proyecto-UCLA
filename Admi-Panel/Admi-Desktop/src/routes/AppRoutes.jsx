import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/Home.jsx";
import UserList from "../pages/userList/UserList.jsx";
import User from "../pages/user/User.jsx";
import ProductList from "../pages/productList/ProductList.jsx";
import Product from "../pages/product/Product.jsx";
import NewProduct from "../pages/newProduct/NewProduct.jsx";
import Transactions from "../pages/transactionsList/Transactions.jsx";
import SolicitudList from "../pages/solicitudList/SolicitudList.jsx";


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

       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

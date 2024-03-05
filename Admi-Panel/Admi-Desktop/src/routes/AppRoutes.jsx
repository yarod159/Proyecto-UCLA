import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/Home.jsx";
import UserList from "../pages/userList/UserList.jsx";
import User from "../pages/user/User.jsx";
import ProductList from "../pages/productList/ProductList.jsx";
import Product from "../pages/product/Product.jsx";
import NewProduct from "../pages/newProduct/NewProduct.jsx";


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
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

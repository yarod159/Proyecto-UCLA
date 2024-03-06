import { Link, useParams } from "react-router-dom";
import "./product.css";

import { productData } from "../../data";

import ProductData from "../../utils/ProductData";
import PublishIcon from "@mui/icons-material/Publish";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import { useNavigate } from "react-router-dom";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ProductMes from "../../utils/ProductMes";

const mes = [
  {
    "month": "Enero",
    "id": 1,
    "cantidad": 10
   
  },
  {
    "month": "Febrero",
    "id": 1,
    "cantidad": 15
   
  },
  {
    "month": "Marzo",
    "id": 1,
    "cantidad": 10
   
  },
  {
    "month": "Febrero",
    "id": 2,
    "cantidad": 18
   
  },
  {
    "month": "Marzo",
    "id": 2,
    "cantidad": 11
   
  },
  {
    "month": "Abril",
    "id": 2,
    "cantidad": 10
   
  },
  {
    "month": "Marzo",
    "id": 3,
    "cantidad": 140
  
  },
  {
    "month": "Abril",
    "id": 3,
    "cantidad": 8
   
  },
  {
    "month": "Mayo",
    "id": 3,
    "cantidad": 18
   
  }
];

export default function Product() {
  const { productId } = useParams();
  
  const filteredData = ProductMes.filter((prod) => prod.id === Number(productId));
  
  const thisProduct = ProductData.find((prod) => prod.id === productId);
 
  return (
    <div>
      <Topbar />
      

      <div className="container">
        <Sidebar />

        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Producto</h1>
            <Link to="/newproduct">
              <button className="productAddButton">Crear</button>
            </Link>
            
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={filteredData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="cantidad"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={thisProduct.foto} alt="" className="productInfoImg" />
                <span className="productName"> {thisProduct.name} </span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{thisProduct.id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Caracteristicas: </span>
                  <span className="productInfoValue">
                    {thisProduct.categoria}
                  </span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Precio:</span>
                  <span className="productInfoValue">
                    {thisProduct.precio}$
                  </span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Color:</span>
                  <span className="productInfoValue">{thisProduct.color}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Cantidad: </span>
                  <span className="productInfoValue">
                    {thisProduct.cantidad}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Nombre de Producto</label>
                <input type="text" placeholder={thisProduct.nombre} />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src={thisProduct.foto}
                    alt=""
                    className="productUploadImg"
                  />
                  <label htmlFor="file">
                    <PublishIcon />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

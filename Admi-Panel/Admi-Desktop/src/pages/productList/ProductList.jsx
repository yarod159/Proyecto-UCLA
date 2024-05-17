import "./productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import ProductData from "../../utils/ProductData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/material";

export default function ProductList() {
  const [data, setData] = useState(ProductData);  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { name: "id", label: "ID", width: 90 },
    {
      name: "product",
      label: "Nombre del Producto",
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.foto} alt="" />
            {params.row.nombre}
          </div>
        );
      },
    },
   
    {
      name: "cantidad",
      label: "Cantidad",
 
    },
    {
      name: "caracteristicas",
      label: "Caracteristicas",
 
    },
    {
      name: "color",
      label: "Color",
 
    },
    {
      name: "precio",
      label: "Precio",

    },
    {
      name: "foto",
      label: "Foto",
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <a href={params.row.foto} target="_blank">
              <img src={params.row.foto} alt="Product Photo" style={{width:"100px"}} />
            </a>
          </div>
        );
      },
    },
    {
      name: "categoria",
      label: "Categoria",
      width: 150,
    },
    {
      name: "action",
      label: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
     
      <div className="container">
        <SidebarMui/>
      <div className="productList">
          <Link to={"/#"}>
            <div className="empleado-button-crear">
              <button>Registrar un Producto</button>
            </div>
          </Link>
        
          <Box>
           <MUIDataTable
            data={data}
            title="Productos"
            columns={columns}
          /></Box>
      </div>
      </div>
    </div>
  );
}

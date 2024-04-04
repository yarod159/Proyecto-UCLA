import "./productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import ProductData from "../../utils/ProductData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";

export default function ProductList() {
  const [data, setData] = useState(ProductData);  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Nombre del Producto",
      width: 200,
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
      field: "cantidad",
      headerName: "Cantidad",
      width: 100,
    },
    {
      field: "caracteristicas",
      headerName: "Caracteristicas",
      width: 200,
    },
    {
      field: "color",
      headerName: "Color",
      width: 100,
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 100,
    },
    {
      field: "foto",
      headerName: "Foto",
     
      width: 100,
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
      field: "categoria",
      headerName: "Categoria",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/newEmpleado" }>
              <button className="productListEdit">Ver</button>
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
      <Topbar />
      <div className="container">
        <Sidebar/>
      <div className="productList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
      </div>
    </div>
  );
}

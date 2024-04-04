import "../productList/productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import TrasaccionesList from "../../utils/TrasaccionesList";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";

export default function Transactions() {
  const [data, setData] = useState(TrasaccionesList);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "id del producto",
      headerName: "id del producto",
      width: 100,
    },
    {
      field: "Nombre del Producto",
      headerName: "Nombre del Producto",
      width: 200,
    },

    {
      field: "fecha",
      headerName: "Fecha",
      width: 100,
    },
    {
      field: "cantidad",
      headerName: "Cantidad",
      width: 100,
    },
    {
      field: "Delivery",
      headerName: "Delivery",
      width: 150,
    },
    {
      field: "Metodo de Pago",
      headerName: "Metodo de Pago",
      width: 150,
    },
    {
      field: "Estatus de la trasacccion",
      headerName: "Estatus de la trasacccion ",
      width: 150,
      renderCell: (params) => {
        // Determina el color de fondo basado en el valor de la celda
        const backgroundColor = params.value === 'Completado' ? '#65B741' : 
                                 params.value === 'En proceso' ? '#5FBDFF' : 'transparent';
    
        // Retorna un elemento con el estilo aplicado
        return <div style={{ backgroundColor: backgroundColor, color: 'white', borderRadius: '5px' , padding:'5px', width:'90px' }}>
                 {params.value}
               </div>;
     }
    },
    {
      field: "Estatus del delivery",
      headerName: "Estatus del delivery ",
      width: 150,
      renderCell: (params) => {
        // Determina el color de fondo basado en el valor de la celda
        const backgroundColor = params.value === 'Entregado' ? '#65B741' : 
                                 params.value === 'En camino' ? '#5FBDFF' : 'transparent';
    
        // Retorna un elemento con el estilo aplicado
        return <div style={{ backgroundColor: backgroundColor, color: 'white', borderRadius: '5px' , padding:'5px', width:'90px' }}>
                 {params.value}
               </div>;
     }
      
    },
  ];

  return (
    <div>
     
      <div className="container">
        <SidebarMui />
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

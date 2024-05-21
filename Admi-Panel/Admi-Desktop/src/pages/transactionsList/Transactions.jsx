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
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/material";

export default function Transactions() {
  const [data, setData] = useState(TrasaccionesList);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { name: "id", label: "ID" },
    {
      name: "id del producto",
      label: "id del producto",
    },
    {
      name: "Nombre del Producto",
      label: "Nombre del Producto",
    },

    {
      name: "fecha",
      label: "Fecha",
    },
    {
      name: "cantidad",
      label: "Cantidad",
    },
    {
      name: "Delivery",
      label: "Delivery"
    },
    {
      name: "Metodo de Pago",
      label: "Metodo de Pago",
    },
    {
      name: "Estatus de la trasacccion",
      label: "Estatus de la trasacccion ",
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
      name: "Estatus del delivery",
      label: "Estatus del delivery ",
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
        
          <Box>
           <MUIDataTable
            data={data}
            title="Transacciones"
            columns={columns}
          /></Box>
        </div>
      </div>
    </div>
  );
}

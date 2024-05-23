import "../productList/productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import SolicitudMantenimientos from "../../utils/SolicitudMantenimiento";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function Transactions() {
  const [data, setData] = useState(SolicitudMantenimientos);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { name: "id", label: "ID", width: 80 },
    { name: "id_solicitud", label: "Id Solicitud", width: 80 },
    { name: "nombre_cliente", label: "Nombre del Usuario", width: 110 },
    { name: "apellido_cliente", label: "Apellido", width: 120 },
    { name: "telefono", label: "Telefono", width: 150 },
    { name: "fecha", label: "Fecha", width: 150 },
    { name: "numero_referencia", label: "Numero de Referencia", width: 150 },
    { name: "monto", label: "Monto", width: 150 },

    
   
    {
        name: "action",
        label: "Acciones",
        options: {
           customBodyRender: (value, tableMeta, updateRow) => (
            <div style={{ display: 'flex', alignItems: 'center'  }}>
            <CheckIcon
              style={{ color: '#6EF51C', cursor: 'pointer', marginLeft:"40" }} // Add cursor: 'pointer'
              onClick={() => handleCheckIcon(tableMeta.rowData._id)} // Add handleCheckIcon function
              onMouseEnter={() => handleHoverInCheckIcon(tableMeta.rowData._id)} // Add handleHoverInCheckIcon function
              onMouseLeave={() => handleHoverOutCheckIcon(tableMeta.rowData._id)} // Add handleHoverOutCheckIcon function
            />
           
          </div>
           ),
        },
     },
   
  ];
  

  return (
    <Box>
      
      <Box className="container">
        <SidebarMui />
        <Box className="productList">
        <Box>
           <MUIDataTable
            data={data}
            title="Transacciones"
            columns={columns}
            options={{
                responsiveMode: "vertical",
              }}
          />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

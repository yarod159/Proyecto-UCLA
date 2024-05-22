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

export default function SolicitudMantenimiento() {
  const [data, setData] = useState(SolicitudMantenimientos);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { name: "id", label: "ID", width: 80 },
    { name: "nombre", label: "Nombre", width: 110 },
    { name: "apellido", label: "Apellido", width: 120 },
    { name: "telefono", label: "Telefono", width: 150 },
    { name: "estado", label: "Estado", width: 150 },
    { name: "domicilio", label: "Domicilio", width: 150 },
    { name: "tipoServicios", label: "Tipo Servicios", width: 150 },
    { name: "descripcionProblema", label: "Descripcion del Problema", width: 250 },
    { name: "producto", label: "Producto", width: 150 },
    { name: "marca", label: "Marca", width: 150 },
    { name: "modelo", label: "Modelo", width: 150 },
    {
        name: "action",
        label: "Acciones",
        options: {
           customBodyRender: (value, tableMeta, updateRow) => (
            <div style={{ display: 'flex', alignItems: 'center'  }}>
            <CheckIcon
              style={{ color: '#6EF51C', cursor: 'pointer', gap:"10" }} // Add cursor: 'pointer'
              onClick={() => handleCheckIcon(tableMeta.rowData._id)} // Add handleCheckIcon function
              onMouseEnter={() => handleHoverInCheckIcon(tableMeta.rowData._id)} // Add handleHoverInCheckIcon function
              onMouseLeave={() => handleHoverOutCheckIcon(tableMeta.rowData._id)} // Add handleHoverOutCheckIcon function
            />
            <DeleteOutlineIcon
              style={{ color: '#E30D06', cursor: 'pointer', marginLeft:"15" }} // Add cursor: 'pointer'
              onClick={() => handleDelete(tableMeta.rowData._id)} // Replace with your handleDelete function
              onMouseEnter={() => handleHoverInDeleteIcon(tableMeta.rowData._id)} // Add handleHoverInDeleteIcon function
              onMouseLeave={() => handleHoverOutDeleteIcon(tableMeta.rowData._id)} // Add handleHoverOutDeleteIcon function
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
            title="Solicitud de Mantenimiento Y Reparaciones"
            columns={columns}
            options={{
                responsiveMode: "vertical",
              }}
          /></Box>
        </Box>
      </Box>
    </Box>
  );
}

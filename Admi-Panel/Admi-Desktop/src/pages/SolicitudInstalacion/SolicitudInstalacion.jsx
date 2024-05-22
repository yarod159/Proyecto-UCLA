import "../productList/productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import SolicitudInstalaciones from "../../utils/SolicitudInstalacion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";
import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import CheckIcon from '@mui/icons-material/Check';

export default function SolicitudInstalacion() {
  const [data, setData] = useState(SolicitudInstalaciones);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { name: "id", label: "ID", width: 80 },
    { name: "nombre", label: "Nombre", width: 110 },
    { name: "apellido", label: "Apellido", width: 120 },
    { name: "telefono", label: "Telefono", width: 150 },
    { name: "estado", label: "Estado", width: 150 },
    { name: "municipio", label: "Municipio", width: 150 },
    { name: "direccionDeLaInstalacion", label: "Direccion De La Instalacion", width: 150 },
    { name: "tipoDeServicios", label: "Tipo de Servicios", width: 150 },
    { name: "tipoDeVivienda", label: "Tipo De Vivienda", width: 150 },
    { name: "precio", label: "precio", width: 150 },
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
    <div>
      
      <div className="container">
        <SidebarMui />
        <div className="productList">
        <Box>
           <MUIDataTable
            data={data}
            title="Solicitud de Instalacion"
            columns={columns}
            options={{
                responsiveMode: "vertical",
              }}
          /></Box>
     
        </div>
      </div>
    </div>
  );
}

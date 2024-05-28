import "../productList/productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { getSolicitudDeServiciosRequest } from "../../api/solicitudDeServicios";

export default function SolicitudMantenimiento() {
  
  const [data, setData] = useState([]);
  

  const handleDelete = (id) => {
    // Implementar la lógica para eliminar el empleado por ID
    console.log("Eliminar empleado con ID:", id);
 };
   


  

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getSolicitudDeServiciosRequest(); 
      console.log(response)
      const data = response.data.data.map((item) => {
        return {
          _id: item._id,
          estado: item.estado ,
          municipios:  item.municipios ,
          codigoPostal:  item.codigoPostal,
          Direccion: item.Direccion ,
          servicio: item.servicio,
          marcaEquipo: item.marcaEquipo ,
          modeloEquipo:  item.modeloEquipo ,
          numeroSerie:  item.numeroSerie ,
          descripcion: item.descripcion,
          estatus: item.estatus ,
          name: item.profile ? item.profile.name: "",
          apellido: item.profile ? item.profile.apellido: "",
          cedula: item.profile ? item.profile.cedula: "",
          telefono: item.profile ? item.profile.telefono: "",
        };
      }).filter((item) => item.servicio !== 'Instalación');
      setData(data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  fetchData();
}, []);



  const columns = [
    { name: "_id", label: "ID", width: 80 },
    { name: "name", label: "Nombre", width: 110 },
    { name: "apellido", label: "Apellido", width: 120 },
    { name: "telefono", label: "Telefono", width: 150 },
    { name: "estado", label: "Estado", width: 150 },
    { name: "municipios", label: "Municipio", width: 150 },
    { name: "Direccion", label: "Direccion", width: 150 },
    { name: "servicio", label: "Tipo Servicios", width: 150 },
    { name: "descripcion", label: "Descripcion del Problema", width: 250 },
    { name: "marcaEquipo", label: "Marca del Equipo", width: 150 },
    { name: "modeloEquipo", label: "Modelo", width: 150 },
    { name: "numeroSerie", label: "Numero de Serie", width: 150 },
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

import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import "./empleadosList.css";
import SidebarMui from "../../components/sideBar/SidebarMui";
import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { getEmpleadosRequest } from "../../api/tableEmpleados";



export default function EmpleadosList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    // Implementar la lógica para eliminar el empleado por ID
    console.log("Eliminar empleado con ID:", id);
 };
   

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getEmpleadosRequest(); // Utiliza la función específica aquí
      if (response.data.success) {
        setData(response.data.data);
      } else {
        console.error("Error al obtener los Empleados:", response.data.message);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  fetchData();
}, []);


  const columns = [
      { name: "_id", label: "ID",width: 80  },
      {
        name: "cedula",label: "Cedula", width: 80   },
      {
        name: "nombre", label: "Nombre",width: 80 },
      {
        name: "apellido",
        label: "Apellido",width: 80 
       
      },
      {
        name: "telefono",
        label: "Telefono",width: 80 
       
      },
      {
        name: "direccion",
        label: "Direccion",width: 80 
        
      },
      {
        name: "ocupacion",
        label: "Ocupacion",
        width: 80 
      },
      {
        name: "dateCumple",
        label: "Fecha de Nacimiento",
        width: 80 
      },
      {
        name: "estatus",
        label: "Estatus",
        width: 80 
      },
      
  ];

  return (
    <Box >
      
    <Box className="container">
      <SidebarMui />
      <Box className="productList">
        
      <div className="empleado-button-container">
      <div className="empleado-button-crear">
                <button>Registrar un Empleado</button>
              </div>
           </div>
      <Box>
           <MUIDataTable
            data={data}
            title="Transacciones "
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

/** <Link to={"/crearEmpleado/"}>
             


                <div className="empleado-button-container">
           
          </div>
            </Link> */
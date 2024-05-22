import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import "./empleadosList.css";
import SidebarMui from "../../components/sideBar/SidebarMui";
import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";

export default function EmpleadosList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    // Implementar la lógica para eliminar el empleado por ID
    console.log("Eliminar empleado con ID:", id);
 };
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/empleado/get-empleado"
        );
       
        if (response.data.success) {
          setData(response.data.data);
        } else {
          console.error(
            "Error al obtener los Empleados:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []); // El array vacío como segundo argumento asegura que la función solo se ejecute una vez al montar el componente

  const columns = [
      { name: "_id", label: "ID" },
      {
        name: "cedula",label: "Cedula",   },
      {
        name: "nombre", label: "Nombre",},
      {
        name: "apellido",
        label: "Apellido",
       
      },
      {
        name: "telefono",
        label: "Telefono",
       
      },
      {
        name: "direccion",
        label: "Direccion",
        
      },
      {
        name: "ocupacion",
        label: "Ocupacion",
       
      },
      {
        name: "dateCumple",
        label: "Fecha de Nacimiento",
       
      },
      {
        name: "estatus",
        label: "Estatus",
       
      },
      
  ];

  return (
    <div>
      
      <div className="container">
        <SidebarMui />
        <div className="userList">
          <div className="empleado-button-container">
            <Link to={"/crearEmpleado/"}>
              <div className="empleado-button-crear">
                <button>Registrar un Empleado</button>
              </div>
            </Link>
          </div>
         <Box>
           <MUIDataTable
            data={data}
            title="Empleados"
            columns={columns}
          /></Box>
         
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import "./empleadosList.css";
import SidebarMui from "../../components/sideBar/SidebarMui";
import { Box, Switch } from "@mui/material";
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
      console.log('holaaa,',response)
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
        name: "email",
        label: "Email",
        width: 150,
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            const rowMeta = tableMeta.rowMeta;
            if (rowMeta && rowMeta.rowData) {
              const user = rowMeta.rowData.find((item) => item.hasOwnProperty("user"));
              return user ? data.user.email : "";
            }
            return "";
          },
        },
      },
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
        width: 80 ,
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return new Date(value).toLocaleDateString();
          },
        },
      },
      {
        name: "estatus",
        label: "Estatus",
        width: 80,
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            const id = tableMeta.rowData[0]; // Access the _id from the rowData
    
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to={`/user/${id}`} >
                  <button className="userListEdit">Editar</button>
                </Link>
                <DeleteOutlineIcon
                  className="userListDelete"
                  onClick={() => handleDelete(id)}
                />
              </div>
            );
          },
        },
      }
      
  ];

  return (
    <Box >
      
    <Box className="container">
      <SidebarMui />
      <Box className="productList">
        
     
     
      <Box>
           <MUIDataTable
            data={data}
            title="Empleados "
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
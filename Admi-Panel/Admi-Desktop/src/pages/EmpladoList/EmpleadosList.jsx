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
import { ConstructionOutlined } from "@mui/icons-material";



export default function EmpleadosList() {
  const [data, setData] = useState([]);
  

  const handleDelete = (id) => {
    // Implementar la lógica para eliminar el empleado por ID
    console.log("Eliminar empleado con ID:", id);
 };
   


 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getEmpleadosRequest(); 
      console.log(response)
      const data = response.data.data.map((item) => {
        return {
          _id: item._id,
          cedula: item.profile ? item.profile.cedula : "",
          nombre:  item.profile ? item.profile.name: "",
          apellido:  item.profile ? item.profile.apellido: "",
          telefono: item.profile ? item.profile.telefono: "",
          direccion: item.profile ? item.profile.direccion: "",
          ocupacion:  item.profile ? item.profile.ocupacion: "",
          dateCumple:  item.profile ? item.profile.dateCumple: "",
          estatus: item.estatus,
          email: item.user ? item.user.email : "",
          userId: item.user ? item.user._id: "",
        };
        
      });
      setData(data);
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
        width: 200,
        
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
        width: 80 
      },
      {
        name: "estatus",
        label: "Ver más",
        width: 80,
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            // Extracting userId from the current row's data
            const userId = tableMeta.rowData.userId;
            
            // Constructing the URL with the userId
            const url = `/user/${userId}`;
      
            console.log('aquii:', userId);
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Updated Link to include the constructed URL */}
                <Link to={url}>
                  <button className="userListEdit">Editar</button>
                </Link>
                <DeleteOutlineIcon
                  className="userListDelete"
                  onClick={() => handleDelete(userId)}
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
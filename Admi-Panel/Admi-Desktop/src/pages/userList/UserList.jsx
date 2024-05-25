import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import axios from "axios";
import React from "react";
import SidebarMui from "../../components/sideBar/SidebarMui";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/material";
import { getUsuariosRequest,getUserAllRequest } from "../../api/tablaUsuario";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsuariosRequest();
       console.log(response)
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
  }, []);

  

  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { name: "_id", label: "ID", width: 90 },
    { name: "email", label: "Email", width: 250 },
    {
      name: "acciones",
      label: "Acciones",
      width: 150,
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
    },
  ];
  
  return (
    <Box >
      <Box className="container" >
        <SidebarMui />
        <Box className="productList" sx={{ flexGrow: 1, overflowX: "auto", padding: 2, marginTop: 8 }}>
          <Box >
            <MUIDataTable
              data={data}
              title="Usuarios"
              columns={columns}
             
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

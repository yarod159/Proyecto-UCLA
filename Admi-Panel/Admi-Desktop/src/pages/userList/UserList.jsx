import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import axios from 'axios';
import React, {  useEffect } from 'react';

function generarIdAleatorio() {
  var longitud = 8,
      caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = caracteres.length; i < longitud; ++i) {
      retVal += caracteres.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get('http://localhost:3000/get-users');
         if (response.data.success) {
           setData(response.data.data);
         } else {
           console.error("Error al obtener los usuarios:", response.data.message);
         }
       } catch (error) {
         console.error("Error al realizar la solicitud:", error);
       }
     };
 
     fetchData();
  }, []); // El array vacío como segundo argumento asegura que la función solo se ejecute una vez al montar el componente
 
  const handleDelete = (id) => {
     setData(data.filter((item) => item.id !== id));
  };
 

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    { field: "email", headerName: "Email", width: 250 },
   
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userList">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </div>
      </div>
    </div>
  );
}

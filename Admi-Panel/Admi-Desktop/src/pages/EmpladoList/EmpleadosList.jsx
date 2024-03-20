import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import "./empleadosList.css";

export default function EmpleadosList() {
  const [data, setData] = useState([]);

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
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "cedula",
      headerName: "Cedula",
      width: 100,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 100,
    },
    {
      field: "apellido",
      headerName: "Apellido",
      width: 100,
    },
    {
      field: "telefono",
      headerName: "Telefono",
      width: 150,
    },
    {
      field: "direccion",
      headerName: "Direccion",
      width: 200,
    },
    {
      field: "dateCumple",
      headerName: "Fecha de Nacimiento",
      width: 105,
    },

    {
      field: "ocupacion",
      headerName: "Ocupacion",
      width: 200,
    },

    {
      field: "estatus",
      headerName: "Estatus",
      width: 100,
    },

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
          <div className="empleado-button-container">
            <Link to={"/crearEmpleado/"}>
              <div className="empleado-button-crear">
                <button>Registrar un Empleado</button>
              </div>
            </Link>
          </div>

          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
            getRowId={(row) => row._id}
            autoHeight={true}
          />
        </div>
      </div>
    </div>
  );
}

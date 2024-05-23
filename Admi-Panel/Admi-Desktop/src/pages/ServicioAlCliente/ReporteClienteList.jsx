import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './reporteClienteList.css';
import Topbar from '../../components/topBar/TopBar';
import Sidebar from '../../components/sideBar/SideBar';
import SidebarMui from '../../components/sideBar/SidebarMui';

function generarIdAleatorio() {
  var longitud = 8,
      caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = caracteres.length; i < longitud; ++i) {
      retVal += caracteres.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export default function ReporteClienteList() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/ServCliente/get-reporteCliente');
        if (response.data.success) {
          setData(response.data.data);
        } else {
          console.error("Error al obtener los reportes:", response.data.message);
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id!== id));
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    { field: "tituloProblema", headerName: "Titulo", width: 350 },
    { field: "descripcionProblema", headerName: "Descripción", width: 380 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
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
      <div className="container">
        <SidebarMui />
        <div className="userList">
          <TextField
            label="Buscar"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <DataGrid
            rows={filteredData}
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

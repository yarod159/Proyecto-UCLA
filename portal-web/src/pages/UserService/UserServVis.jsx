import { Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar.jsx";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './UserS.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const SerVis = () => {
    const [data, setData] = useState([]);

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
    }, []); // El array vacío como segundo argumento asegura que la función solo se ejecute una vez al montar el componente
 
    const handleDelete = (id) => {
     setData(data.filter((item) => item.id !== id));
    };
     //Consulta a la BD por Solicitudes
     const [data2, setData2] = useState([]);

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/ServCliente/get-reporteCliente');
                if (response.data.success) {
                setData2(response.data.data);
                } else {
                console.error("Error al obtener los reportes:", response.data.message);
                }
            } catch (error) {
                    console.error("Error al realizar la solicitud:", error);
            }
        };
    
        fetchDatos();
    }, []); // El array vacío como segundo argumento asegura que la función solo se ejecute una vez al montar el componente
 
    const handleDelete2 = (id) => {
     setData2(data2.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "_id", headerName: "ID", width: 120 },
        {
            field: "fecha",
            headerName: "Fecha de al solicitud o reclamo",
            width: 350,
        },
        { field: "message", headerName: "Descripción de la solicitud o reclamo", width: 380 },
    ];
    const columns3 = [
        { field: "_id", headerName: "ID", width: 120 },
        {
            field: "fecha",
            headerName: "Fecha de garantía",
            width: 350,
        },
        { field: "message", headerName: "Descripción de la garantía", width: 380 },
    ];
    const columns2 = [
        { field: "Nro", headerName: "Nro Solicitud", width: 120 },
        { field: "_idEmple", headerName: "Empleado", width: 120 },
        { field: "_idServ", headerName: "Servicio", width: 120 },
        { field: "fecha",headerName: "Fecha de solicitud", width: 350},
        { field: "TipoServ", headerName: "Tipo de Servicio", width: 350},
        { field: "_idPago", headerName: "Metodo de Pago", width: 120 },
        { field: "_idRef", headerName: "Referencia", width: 120 },
        { field: "_idModa", headerName: "Modalidad", width: 120 },
        { field: "_idEstatus", headerName: "Estatus", width: 120 },
   
        {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
            <>
                <Link to={"/user/" + params.row._id}>
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
    
    <div className="container-servicio-cliente">
      
      <UserNavBar />
      <div className="wrapper-servicio-vis">
        <h1 style={{color: '#18a0a6'}}>Mis Solicitudes</h1>

        <div>
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns2}
            pageSize={10}
            checkboxSelection
            getRowId={(row) => row._id}
            autoHeight={true}
            sx={{maxWidth: '100%', margin:4}}
            />
        </div>


      </div>
      <div className="wrapper-servicio-cliente">
        <h1 style={{color: '#18a0a6', marginTop:30}}>Atención al Cliente</h1>
        <div>
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
            getRowId={(row) => row._id}
            autoHeight={true}
            sx={{maxWidth: '100%', margin:4}}
            />
        </div>

        <div style={{flexDirection: "row"}}>
            <Button variant="contained" type="submit" 
            sx={{ marginTop: 2, marginBottom: 4, color: '#fff', bgcolor: '#18a0a6', 
                    ":hover": { bgcolor: '#fff', color: '#18a0a6' }}} href="/newReport">
                Nueva solicitud
            </Button>
            <Button variant="contained" type="submit" 
            sx={{ marginTop: 2, marginBottom: 4, marginLeft: 4, marginRight: 4, color: '#fff', bgcolor: '#18a0a6', 
                    ":hover": { bgcolor: '#fff', color: '#18a0a6' }}} href="/solGarant">
                Solicitar garantía
            </Button>
            <Button variant="contained" type="submit" 
            sx={{ marginTop: 2, marginBottom: 4, color: '#fff', bgcolor: '#18a0a6', 
                    ":hover": { bgcolor: '#fff', color: '#18a0a6' }}} href="/faqSeccion">
                Preguntas Frecuentes
            </Button>
        </div>
 
      </div>

      <div className="wrapper-servicio-vis">
        <h1 style={{color: '#18a0a6'}}>Mis Garantías</h1>

        <div>
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns3}
            pageSize={10}
            checkboxSelection
            getRowId={(row) => row._id}
            autoHeight={true}
            sx={{maxWidth: '100%', margin:4}}
            />
        </div>


      </div>
      <Footer />
    </div>
  );

};

export default SerVis;
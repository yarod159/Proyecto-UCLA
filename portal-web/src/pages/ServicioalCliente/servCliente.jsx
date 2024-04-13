import { Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar.jsx";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './servCliente.css'
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


const ServCliente = () => {
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
 
    const columns = [
        { field: "_id", headerName: "ID", width: 120 },
        {
            field: "tituloProblema",
            headerName: "Titulo",
            width: 350,
        },
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
    
    <div className="container-servicio-cliente">
      
      <UserNavBar />

      <div className="wrapper-servicio-cliente">
        <div>
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

        <div>
            <Button variant="contained" type="submit" 
            sx={{ marginTop: 4, color: '#fff', bgcolor: '#18a0a6', 
                    ":hover": { bgcolor: '#fff', color: '#18a0a6' }}} href="/newReport">
                Enviar
            </Button>
        </div>
 
      </div>
      <Footer />
    </div>
  );

};

export default ServCliente;
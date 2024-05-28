import { Button,Box, Stack, CardActionArea, Card, CardMedia, CardContent, Typography } from "@mui/material";
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
import IMG1 from "../../assets/UserHome/faq.png";
import IMG2 from "../../assets/UserHome/contacto.png";
import IMG3 from "../../assets/UserHome/garantia.png";



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
            field: "fecha",
            headerName: "Fecha de al solicitud o reclamo",
            width: 350,
        },
        { field: "message", headerName: "Descripción de la solicitud o reclamo", width: 380 },
   
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
     
      <div>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "80px",
          flexWrap: "wrap",
        }}
      >
        <Stack
          direction="column"
          spacing={0}
          sx={{ marginBottom: "8px", marginTop: "0px", marginBottom: "60px",display:'flex',flexWrap:'wrap', alignItems:'center', justifyContent:'center' ,gap:'20px'}}
        >
              <CardActionArea href="/serviciosVis">
                <Card sx={{ display: 'flex', bgcolor: '#18a0a6', color: '#fff', height: 240, alignItems: "center", padding: 4, borderRadius: 8 }}>
                    
                    <CardMedia
                            component="img"
                            sx={{ width: 200, height: 200, display: "flex" }}
                            image={IMG1}
                            alt="Live from space album cover"
                          />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      
                      <CardContent sx={{ flex: '1 0 auto', padding: 4 }}>
                        <Typography component="div" variant="h5">
                          ¿Tienes Preguntas?
                        </Typography>
                        <Typography variant="subtitle1" color="#fff" component="div">
                            En esta sección podrás encontrar respuesta a las preguntas realizadas frecuentemente por los usuarios.
                        </Typography>
                      </CardContent>
                    </Box>
                    

                  </Card>

                </CardActionArea>

                <CardActionArea href="/faqSeccion">
                    <Card sx={{ display: 'flex', color: '#18a0a6', height: 240, alignItems: "center", padding: 4, borderRadius: 8, }}>
                      

                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        
                        <CardContent sx={{ flex: '1 0 auto', padding: 4 }}>
                          <Typography component="div" variant="h5">
                           ¡Contactanos!
                          </Typography>
                          <Typography variant="subtitle1" color="#454545" component="div">
                              ¿Necesitas contactarnos? A través de este formulario podremos contactarte y atender tu solicitud.
                          </Typography>
                        </CardContent>
                      </Box>

                      <CardMedia
                              component="img"
                              sx={{ width: 200, height: 200, display: "flex" }}
                              image={IMG2}
                              alt="Live from space album cover"
                      />
                      

                    </Card>

                </CardActionArea>

                
                <CardActionArea href="/solGarant">
                  <Card sx={{ display: 'flex', bgcolor: '#70decd', color: '#454545', height: 240, alignItems: "center", padding: 4, borderRadius: 8 }}>
                    
                    <CardMedia
                            component="img"
                            sx={{ width: 200, height: 200, display: "flex" }}
                            image={IMG3}
                            alt="Live from space album cover"
                          />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      
                      <CardContent sx={{ flex: '1 0 auto', padding: 4 }}>
                        <Typography component="div" variant="h5">
                          Garantías
                        </Typography>
                        <Typography variant="subtitle1" color="#454545" component="div">
                            Aquí podras encontrar la información sobre las garantías que ofrecemos y además solicitar el uso de la misma.
                        </Typography>
                      </CardContent>
                    </Box>
                    

                  </Card>

                </CardActionArea>

        </Stack>
      </Box>

      



      </div>





      <Footer />
    </div>
  );

};

export default ServCliente;
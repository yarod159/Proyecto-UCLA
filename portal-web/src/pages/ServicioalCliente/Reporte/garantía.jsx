import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import UserNavBar from "../../../components/UserNavBar/UserNavBar.jsx";
import Footer from "../../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './reporte.css'
import { Box} from '@mui/material';
import { useState } from "react";
import axios from 'axios';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const garantía = () => {

     
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fecha, setFecha] = useState("");
    const [message, setMessage] = useState("");

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reporteData = {
            name, email, phone, fecha, message
      };
        try {
            const response = await axios.post('http://localhost:3000/ServCliente/post-reporteCliente', reporteData);
    
            console.log(response.data); // Puedes ver la respuesta del servidor aquí
    
            // Limpiar el formulario después de enviar los datos
          
    
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrando un mensaje de éxito
            // handleClickOpen(); // Si esta función es para mostrar un mensaje, asegúrate de que esté definida
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            // Aquí puedes manejar errores, por ejemplo, mostrando un mensaje de error
        }
    };
   

  return (
    
    <div className="container-reporte-cliente">
      
      <UserNavBar />

      <div className="wrapper-reporte-cliente">

      <Box sx={{ margin: 0, flexGrow: 1, padding: { xs: 4, sm: 4, md: 6 }, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={12} md={12}>
                    <Item sx={{ padding: 4, borderRadius: '12px', maxWidth: '700px', alignContent: "center" }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" gutterBottom>Solicitud de Garantía</Typography>
                            <Typography variant="h8" gutterBottom>Por favor rellene los datos</Typography>
                            <hr />
                            <br />
                            
                            <div className="form-titulo-descripcion">
                                <TextField
                                    fullWidth
                                    label="Nombre completo"
                                    name="nombreCompleto"
                                    variant="standard"
                                    value={name}
                                    placeholder="Ingrese sus nombres y apellidos"
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ marginTop: 2, width: '100%' }}
                                />

                                <TextField
                                    fullWidth
                                    label="Correo Electrónico"
                                    name="email"
                                    variant="standard"
                                    value={email}
                                    placeholder="Ingrese su correo. Ej: kinetica@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ marginTop: 2, width: '100%' }}
                                />

                                <TextField
                                    fullWidth
                                    label="Numero de teléfono"
                                    name="phone"
                                    variant="standard"
                                    value={phone}
                                    placeholder="Ingrese un teléfono de contacto. Ej. 04245555555"
                                    onChange={(e) => setPhone(e.target.value)}
                                    sx={{ marginTop: 2, width: '100%' }}
                                />

                                <TextField
                                    fullWidth
                                    label="Fecha"
                                    name="fecha"
                                    variant="standard"
                                    value={fecha}
                                    placeholder="Ingrese la fecha de realización del servicio"
                                    onChange={(e) => setFecha(e.target.value)}
                                    sx={{ marginTop: 2, width: '100%' }}
                                />

                                <TextField
                                    fullWidth
                                    label="Describa su problema"
                                    name="message"
                                    variant="standard"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    multiline
                                    placeholder="Breve descripción del problema"
                                    maxRows={10}
                                    sx={{ marginTop: 4, width: '100%' }}
                                />
                            </div>

                            <Button variant="contained" type="submit" 
                                    sx={{ marginTop: 4, color: '#fff', bgcolor: '#18a0a6', 
                                    ":hover": { bgcolor: '#fff', color: '#18a0a6' }}}>
                                        Enviar
                            </Button>
                        </form>
                    </Item>
                </Grid>
            </Grid>
        </Box>

        
            
        
        
      
      




       
      </div>
      <Footer />
    </div>
  );

};

export default garantía;
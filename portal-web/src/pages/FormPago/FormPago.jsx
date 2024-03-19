import React from "react";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './FormPago.css'
import { Box, Select, Radio, RadioGroup, FormLabel, FormGroup } from '@mui/material';
import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const FormPago = () => {

    const [formData, setFormData] = useState({
        direccion: "",
        estado: "",
        codigoPostal: "",
        tipoPared: "",
    });
  
    const handleDireccionChange = (event) => {
        setFormData({ ...formData, direccion: event.target.value });
      };
      
      const handleEstadoChange = (event) => {
        setFormData({ ...formData, estado: event.target.value });
      };
      
      const handleCodigoPostalChange = (event) => {
        setFormData({ ...formData, codigoPostal: event.target.value });
      };
      
      const handleTipoParedChange = (event) => {
        setFormData({ ...formData, tipoPared: event.target.value });
      };

    

    const [selectedOption, setSelectedOption] = useState('');
    const [value, setvalue] = useState('');
    

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });}

  return (
    
    <div className="container-user-profile">
      <UserNavBar />

      <div className="wrapper-user-profile">

        <Box sx={{margin: 8}}>
            <Grid container spacing={2} >
                <Grid item  md={80} >
                    <Item sx={{padding:4, borderRadius: '12px'}}>
                        <form>
                            <Typography variant="h5" >SOLICITUD DE SERVICIOS</Typography>
                            <Typography variant="h8" gutterBottom>Por favor rellene los datos</Typography>
                            <hr/>
                            <FormControl fullWidth variant="standard" sx={{marginTop: 4, marginBottom: 4}}>
                                <InputLabel>Selecciona un servicio</InputLabel>
                                <Select value={selectedOption} onChange={handleOptionChange}>
                                    <MenuItem value="">Selecciona una opción</MenuItem>
                                    <MenuItem value="Instalación">Instalación</MenuItem>
                                    <MenuItem value="Mantemimiento">Mantenimiento</MenuItem>
                                    
                                </Select>
                            </FormControl>
                            
                           
                           

                            {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />*/}
                            
                            {selectedOption === "Instalación" && (

                                <div>
                                    
                                    <FormLabel>Datos de Dirección</FormLabel>

                                    <FormControl fullWidth variant="standard" sx={{marginTop: 0}}>
                                    <InputLabel>Tipo de servicio</InputLabel>
                                    <Select value={value} onChange={handleOptionChange}>
                                        <MenuItem value="">Selecciona una opción</MenuItem>
                                        <MenuItem value="Inst1">Internet y televisión por cable</MenuItem>
                                        <MenuItem value="Inst2">Internet</MenuItem>
                                        <MenuItem value="Inst3">Televisión por cable</MenuItem>
                                        
                                    </Select>
                                    </FormControl>

                                    <TextField
                                    fullWidth
                                    label="Nombre completo"
                                    name="nombre"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2}}
                                    />

                                    <TextField
                                    fullWidth
                                    label="Teléfono de contacto - Ejemplo: +584126202525"
                                    name="telf"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2}}
                                    />

                                    <TextField
                                    fullWidth
                                    label="Dirección de instalación"
                                    name="dir"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2}}
                                    
                                    />

                                    <FormControl fullWidth variant="standard" sx={{marginTop: 2}}>
                                    <InputLabel>Tipo de vivienda</InputLabel>
                                    <Select value={value} onChange={handleOptionChange}>
                                        <MenuItem value="">Selecciona una opción</MenuItem>
                                        <MenuItem value="Casa">Casa</MenuItem>
                                        <MenuItem value="Apartamento">Apartamento</MenuItem>
                                                                                
                                    </Select>
                                    </FormControl>

                                    
                                    <Button variant="contained" onClick={() => console.log(formData)} sx={{marginTop:4}}>
                                        Contratar 
                                    </Button>


                                </div>

                            )}

                            {selectedOption === "Mantemimiento" && (
                                <TextField
                                fullWidth
                                label="Mantenimiento"
                                name="campo2"
                                variant="outlined"
                                onChange={handleInputChange}
                                />
                            )}

                            
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

export default FormPago;
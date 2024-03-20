import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './FormServ.css'
import { Box, Select, FormLabel,} from '@mui/material';
import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const FormServ = () => {

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
                            <Typography variant="h5" gutterBottom >SOLICITUD DE SERVICIOS</Typography>
                            <Typography variant="h8" sx={{marginBottom: 4}}>Por favor rellene los datos</Typography>
                            <hr/>
                            <FormControl fullWidth variant="standard" sx={{marginTop: 4, marginBottom: 4}}>
                                <InputLabel>Selecciona un Servicio</InputLabel>
                                <Select value={selectedOption} onChange={handleOptionChange}>
                                    <MenuItem value="">Selecciona una opción</MenuItem>
                                    <MenuItem value="Instalación">Instalación</MenuItem>
                                    <MenuItem value="Mantemimiento">Mantenimiento</MenuItem>
                                    <MenuItem value="Reparación">Reparación</MenuItem>
                                    
                                </Select>
                            </FormControl>
                            
                           
                           

                            {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />*/}
                            
                            {selectedOption === "Instalación" && (

                                
                                <div className="form-instalacion">
                                    
                                    <FormLabel>Datos Generales</FormLabel>
                                    <div className="form-nombre-apellido">
                                        <TextField
                                        fullWidth
                                        label="Nombre"
                                        name="nombre"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 300}}
                                        />

                                        <TextField
                                        fullWidth
                                        label="Apellido"
                                        name="apellido"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 300}}
                                        />

                                    </div>
                                    
                                    <div className="Form-telefono-correo">
                                    <TextField
                                    
                                    label="Teléfono de contacto - Ejemplo: +584126202525"
                                    name="telf"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    />

                                    <TextField
                                    
                                    label="Correo electrónico"
                                    name="correo"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    />
                                    </div>

                                    <div className="Form-estado-municipio">
                                    <FormControl variant="standard" sx={{marginTop: 2, width: 310}}>
                                        <InputLabel>Estado</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Lara">Lara</MenuItem>
                                            <MenuItem value="Otro">Otro</MenuItem>
                                                                                    
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="standard" sx={{marginTop: 2, width: 310}}>
                                        <InputLabel>Municipio</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Andrés Eloy Blanco">Andrés Eloy Blanco</MenuItem>
                                            <MenuItem value="Crespo">Crespo</MenuItem>
                                            <MenuItem value="Iribarren">Iribarren</MenuItem>
                                            <MenuItem value="Jiménez">Jiménez</MenuItem>
                                            <MenuItem value="Morán">Morán</MenuItem>
                                            <MenuItem value="Palavecino">Palavecino</MenuItem>
                                            <MenuItem value="Simón Planas">Simón Planas</MenuItem>
                                            <MenuItem value="Torres">Torres</MenuItem>
                                            <MenuItem value="Urdaneta">Urdaneta</MenuItem>
                                                                                    
                                        </Select>
                                    </FormControl>
                                    </div>
                                    
                                    <TextField
                                    fullWidth
                                    label="Código Postal"
                                    name="codPostal"
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
                                    sx={{marginTop: 2, marginBottom: 4}}
                                    
                                    />


                                    <FormLabel sx={{marginTop: 4}}>Datos para la instalación</FormLabel>
                                    
                                    <div className="form-tipInstalacion-tipVivienda">
                                        <FormControl variant="standard" sx={{marginTop: 2, width: 320}}>
                                        <InputLabel>Tipo de servicio</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Inst1">Internet y televisión por cable</MenuItem>
                                            <MenuItem value="Inst2">Internet</MenuItem>
                                            <MenuItem value="Inst3">Televisión por cable</MenuItem>
                                            
                                        </Select>
                                        </FormControl>

                                        <FormControl variant="standard" sx={{marginTop: 2, marginBottom: 4, width: 310}}>
                                        <InputLabel>Tipo de vivienda</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Casa">Casa</MenuItem>
                                            <MenuItem value="Apartamento">Apartamento</MenuItem>
                                                                                    
                                        </Select>
                                        </FormControl>
                                    </div>
                                   
                                    <Button variant="contained" onClick={() => console.log(formData)} href="/FormPagos" 
                                    sx={{marginTop:4, color:'#fff', bgcolor:'#18a0a6', 
                                    ":hover":{bgcolor:'#fff', color:'#18a0a6'}}}>
                                        Contratar 
                                    </Button>


                                </div>

                            )}

                            {selectedOption === "Mantemimiento" && (
                                
                                <div className="form-mantenimiento">
                                    
                                    <FormLabel>Datos Generales</FormLabel>
                                    <div className="form-nombre-apellido">
                                        <TextField
                                        fullWidth
                                        label="Nombre"
                                        name="nombre"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 300}}
                                        />

                                        <TextField
                                        fullWidth
                                        label="Apellido"
                                        name="apellido"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 300}}
                                        />

                                    </div>
                                    
                                    <div className="Form-telefono-correo">
                                    <TextField
                                    
                                    label="Teléfono de contacto - Ejemplo: +584126202525"
                                    name="telf"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    />

                                    <TextField
                                    
                                    label="Correo electrónico"
                                    name="correo"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    />
                                    </div>

                                    <div className="Form-estado-municipio">
                                    <FormControl variant="standard" sx={{marginTop: 2, width: 310}}>
                                        <InputLabel>Estado</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Lara">Lara</MenuItem>
                                            <MenuItem value="Otro">Otro</MenuItem>
                                                                                    
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="standard" sx={{marginTop: 2, width: 310}}>
                                        <InputLabel>Municipio</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Andrés Eloy Blanco">Andrés Eloy Blanco</MenuItem>
                                            <MenuItem value="Crespo">Crespo</MenuItem>
                                            <MenuItem value="Iribarren">Iribarren</MenuItem>
                                            <MenuItem value="Jiménez">Jiménez</MenuItem>
                                            <MenuItem value="Morán">Morán</MenuItem>
                                            <MenuItem value="Palavecino">Palavecino</MenuItem>
                                            <MenuItem value="Simón Planas">Simón Planas</MenuItem>
                                            <MenuItem value="Torres">Torres</MenuItem>
                                            <MenuItem value="Urdaneta">Urdaneta</MenuItem>
                                                                                    
                                        </Select>
                                    </FormControl>
                                    </div>
                                    
                                    <TextField
                                    fullWidth
                                    label="Código Postal"
                                    name="codPostal"
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
                                    sx={{marginTop: 2, marginBottom: 4}}
                                    
                                    />

                                    <FormLabel>Datos para el Mantenimiento</FormLabel>
                                    <div className="form-datos">
                                    <TextField
                                    fullWidth
                                    label="Marca del Equipo"
                                    name="Marca"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />

                                    <TextField
                                    fullWidth
                                    label="Modelo del Equipo"
                                    name="modelo"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />

                                    <TextField
                                    fullWidth
                                    label="Numero de serie del equipo"
                                    name="numSerie"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />

                                    <TextField
                                    fullWidth
                                    label="Descripción del problema"
                                    name="descr"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />
                                    </div>
                                    
                                  
                                    <Button variant="contained" onClick={() => console.log(formData)} href="/FormPagos"
                                    sx={{marginTop:4, color:'#fff', bgcolor:'#18a0a6', 
                                    ":hover":{bgcolor:'#fff', color:'#18a0a6'}}}>
                                        Contratar 
                                    </Button>


                                </div>

                            )}

                            {selectedOption === "Reparación" && (
                                
                                <div className="form-reparacion">
                                    
                                    <FormLabel>Datos Generales</FormLabel>

                                    <div className="form-nombre-apellido">
                                        <TextField
                                        fullWidth
                                        label="Nombre"
                                        name="nombre"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 300}}
                                        />

                                        <TextField
                                        fullWidth
                                        label="Apellido"
                                        name="apellido"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 300}}
                                        />

                                    </div>
                                    
                                    <div className="Form-telefono-correo">
                                    <TextField
                                    
                                    label="Teléfono de contacto - Ejemplo: +584126202525"
                                    name="telf"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    />

                                    <TextField
                                    
                                    label="Correo electrónico"
                                    name="correo"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    />
                                    </div>

                                    <div className="Form-estado-municipio">
                                    <FormControl variant="standard" sx={{marginTop: 2, width: 310}}>
                                        <InputLabel>Estado</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Lara">Lara</MenuItem>
                                            <MenuItem value="Otro">Otro</MenuItem>
                                                                                    
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="standard" sx={{marginTop: 2, width: 310}}>
                                        <InputLabel>Municipio</InputLabel>
                                        <Select value={value} onChange={handleOptionChange}>
                                            <MenuItem value="">Selecciona una opción</MenuItem>
                                            <MenuItem value="Andrés Eloy Blanco">Andrés Eloy Blanco</MenuItem>
                                            <MenuItem value="Crespo">Crespo</MenuItem>
                                            <MenuItem value="Iribarren">Iribarren</MenuItem>
                                            <MenuItem value="Jiménez">Jiménez</MenuItem>
                                            <MenuItem value="Morán">Morán</MenuItem>
                                            <MenuItem value="Palavecino">Palavecino</MenuItem>
                                            <MenuItem value="Simón Planas">Simón Planas</MenuItem>
                                            <MenuItem value="Torres">Torres</MenuItem>
                                            <MenuItem value="Urdaneta">Urdaneta</MenuItem>
                                                                                    
                                        </Select>
                                    </FormControl>
                                    </div>
                                    
                                    <TextField
                                    fullWidth
                                    label="Código Postal"
                                    name="codPostal"
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
                                    sx={{marginTop: 2, marginBottom: 4}}
                                    
                                    />

                                    <FormLabel>Datos para la Reparación</FormLabel>
                                    <div className="form-datos">
                                    <TextField
                                    fullWidth
                                    label="Marca del Equipo"
                                    name="Marca"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />

                                    <TextField
                                    fullWidth
                                    label="Modelo del Equipo"
                                    name="modelo"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />

                                    <TextField
                                    fullWidth
                                    label="Numero de serie del equipo"
                                    name="numSerie"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />

                                    <TextField
                                    fullWidth
                                    label="Descripción del problema"
                                    name="descr"
                                    variant="standard"
                                    onChange={handleInputChange}
                                    sx={{marginTop: 2, width: 310}}
                                    
                                    />
                                    </div>
                                    
                                  
                                    <Button variant="contained" onClick={() => console.log(formData)} href="/FormPagos" 
                                    sx={{marginTop:4, color:'#fff', bgcolor:'#18a0a6', 
                                    ":hover":{bgcolor:'#fff', color:'#18a0a6'}}}>
                                        Contratar 
                                    </Button>


                                </div>

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

export default FormServ;
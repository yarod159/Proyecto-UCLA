import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './FormPagos.css'
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


const FormPagos = () => {

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
                            <Typography variant="h5" gutterBottom >Formulario de pagos</Typography>
                            <Typography variant="h8" sx={{marginBottom: 4}}>Por favor rellene los datos</Typography>
                            <hr/>
                            <FormControl fullWidth variant="standard" sx={{marginTop: 4}}>
                                <InputLabel>Selecciona un método de pago</InputLabel>
                                <Select value={selectedOption} onChange={handleOptionChange}>
                                    <MenuItem value="">Selecciona una opción</MenuItem>
                                    <MenuItem value="TrMisBanc">Transferencia mismo banco</MenuItem>
                                    <MenuItem value="TrOtrBanc">Transferencia otros bancos</MenuItem>
                                    <MenuItem value="Págo móvil">Págo móvil</MenuItem>
                                    
                                </Select>
                            </FormControl>
                                                         
                                <div className="form-pagos">
                                    
                                       <div className="form-datos-de-pago">
                                        <TextField
                                        fullWidth
                                        label="Cédula del emisor"
                                        name="cedula"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 310}}
                                        />

                                        <TextField
                                        fullWidth
                                        label="Referencia"
                                        name="Ref"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 310}}
                                        />

                                    
                                        <TextField
                                        
                                        label="Monto"
                                        name="monto"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 310}}
                                        />

                                        <TextField
                                        
                                        label="Fecha"
                                        name="fech"
                                        variant="standard"
                                        onChange={handleInputChange}
                                        sx={{marginTop: 2, width: 310}}
                                        />
                                    </div>
                                 
                                    <Button variant="contained" onClick={() => console.log(formData)} href="/" 
                                    sx={{marginTop:4, color:'#fff', bgcolor:'#18a0a6', 
                                    ":hover":{bgcolor:'#fff', color:'#18a0a6'}}}>
                                        Enviar
                                    </Button>


                                </div>

                            


                            
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

export default FormPagos;
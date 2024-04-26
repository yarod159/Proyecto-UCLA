import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
    TextField,
    Button,
    Box,
    Grid,
    Snackbar,
    Alert,
    InputLabel,
   } from "@mui/material";
   import { styled } from "@mui/system";
   import SidebarMui from "../../components/sideBar/SidebarMui";
   import "./informacionGeneral.css";
   
   const StyledButton = styled(Button)({
    margin: "10px",
   });

const InformacionGeneralList = () => {
 const [infoGet, setInfoGet] = useState({ _id:"",nombreEmpresa: "", rifEmpresa:"", telefono:"",correo:"",
                                                      linkFacebook:"", linkInstagram:"",ubicacion:"" });
 const [message, setMessage] = useState(""); // Estado para el mensaje
 const { register, handleSubmit, setValue } = useForm();

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/informacionGeneral/get-infoGeneral');
        const data = response.data.data;
        if (data && data.length > 0) {
            const firstCompany = data[0];
            setInfoGet(firstCompany);
            // Establecer los valores iniciales del formulario
            setValue("_id", firstCompany._id);
            setValue("nombreEmpresa", firstCompany.nombreEmpresa);
            setValue("rifEmpresa", firstCompany.rifEmpresa);
            setValue("telefono", firstCompany.telefono);
            setValue("ubicacion", firstCompany.ubicacion);
            setValue("correo", firstCompany.correo);
            setValue("linkFacebook", firstCompany.linkFacebook);
            setValue("linkInstagram", firstCompany.linkInstagram);
        } else {
            console.log("No data found in response");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
 }, [setValue]);

 const actualizarDatos = async (data) => {
    try {
      const response = await axios.patch(`http://localhost:3000/informacionGeneral/patch-infoGeneral/${infoGet._id}`, data);
      console.log(response.data);
      // Manejar la respuesta, por ejemplo, actualizando el estado o mostrando un mensaje de éxito
      setMessage("Datos actualizados con éxito.");
      setInfoGet(data); // Actualizar el estado con los datos actualizados
    } catch (error) {
      console.error("Error updating data:", error);
      setMessage("Error al actualizar los datos.");
    }
 };

 const onSubmit = (data) => {
    // Enviar los datos actualizados a tu API
    actualizarDatos(data);
 };

 return (
  <div>
  <div className="container">
     <SidebarMui />
     <div className="newProduct">
       <h1 className="informacionGeneral-h1">Información General</h1>
       {message && <div>{message}</div>} {/* Mostrar el mensaje si existe */}
       <form onSubmit={handleSubmit(onSubmit)}>
         <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
           <Grid container spacing={2}>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="Nombre de la Empresa"
                 name="nombreEmpresa"
                 defaultValue={infoGet.nombreEmpresa}
                 fullWidth
                 {...register("nombreEmpresa")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="RIF"
                 name="rifEmpresa"
                 defaultValue={infoGet.rifEmpresa}
                 fullWidth
                 {...register("rifEmpresa")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="Teléfono"
                 name="telefono"
                 defaultValue={infoGet.telefono}
                 fullWidth
                 {...register("telefono")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="Ubicación"
                 name="ubicacion"
                 defaultValue={infoGet.ubicacion}
                 fullWidth
                 {...register("ubicacion")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="Correo"
                 name="correo"
                 defaultValue={infoGet.correo}
                 fullWidth
                 {...register("correo")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="Facebook"
                 name="linkFacebook"
                 defaultValue={infoGet.linkFacebook}
                 fullWidth
                 {...register("linkFacebook")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12} sm={6} md={6}>
               <TextField
                 label="Instagram"
                 name="linkInstagram"
                 defaultValue={infoGet.linkInstagram}
                 fullWidth
                 {...register("linkInstagram")}
                 InputLabelProps={{
                  shrink: true,
                 }}
               />
             </Grid>
             <Grid item xs={12}>
               <Button type="submit" variant="contained" color="primary">
                 Guardar Cambios
               </Button>
             </Grid>
           </Grid>
         </Box>
       </form>
     </div>
  </div>
 </div>
 
 );
};

export default InformacionGeneralList;

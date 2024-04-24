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
        <label>Nombre de la Empresa:</label>
        <input {...register("nombreEmpresa")} defaultValue={infoGet.nombreEmpresa} />
        <label>RIF:</label>
        <input {...register("rifEmpresa")} defaultValue={infoGet.rifEmpresa} />
        <label>Teléfono:</label>
        <input {...register("telefono")} defaultValue={infoGet.telefono} />
        <label>Ubicación:</label>
        <input {...register("ubicacion")} defaultValue={infoGet.ubicacion} />
        <label>Correo:</label>
        <input {...register("correo")} defaultValue={infoGet.correo} />
        <label>Facebook:</label>
        <input {...register("linkFacebook")} defaultValue={infoGet.linkFacebook} />
        <label>Instagram:</label>
        <input {...register("linkInstagram")} defaultValue={infoGet.linkInstagram} />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
    </div>
    </div>
 );
};

export default InformacionGeneralList;

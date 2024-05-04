/*
import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
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

export default function InformacionGeneral() {
 const [formData, setFormData] = useState({
    nombreEmpresa: "",
    rifEmpresa: "",
    telefono: "",
    correo: "",
    ubicacion: "",
    linkFacebook: "",
    linkInstagram: "",
 });

 const [errors, setErrors] = useState({});
 const [open, setOpen] = useState(false);
 const [message, setMessage] = useState('');
 const [severity, setSeverity] = useState('success');

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar si todos los campos están llenos
    const newErrors = {};
    for (const key in formData) {
       if (!formData[key]) {
         newErrors[key] = 'Este campo es requerido';
       }
    }

    // Si hay errores, actualizar el estado y no enviar los datos
    if (Object.keys(newErrors).length > 0) {
       setErrors(newErrors);
       return; // No enviar los datos
    }

    // Si no hay errores, proceder con el envío de los datos
    try {
      const response = await axios.post("http://localhost:3000/informacionGeneral/post-infoGeneral", formData);
      console.log('Form data submitted successfully:', response.data);
      setMessage('Datos guardados con éxito');
      setSeverity('success');
      setOpen(true);
      setErrors({}); // Limpiar los errores después de un envío exitoso
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setMessage('Error al guardar los datos');
      setSeverity('error');
      setOpen(true);
    }
 };

 const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
 };

 return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Información General</h1>

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Nombre de la Empresa"
                    name="nombreEmpresa"
                    value={formData.nombreEmpresa}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.nombreEmpresa}
                    helperText={errors.nombreEmpresa}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Rif de la empresa"
                    name="rifEmpresa"
                    value={formData.rifEmpresa}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.rifEmpresa}
                    helperText={errors.rifEmpresa}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Numero de Telefono"
                    name="telefono"
                    value={formData.telefono}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.telefono}
                    helperText={errors.telefono}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Ubicacion"
                    name="ubicacion"
                    value={formData.ubicacion}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    multiline
                    error={!!errors.ubicacion}
                    helperText={errors.ubicacion}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Correo electronico"
                    name="correo"
                    value={formData.correo}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.correo}
                    helperText={errors.correo}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Link de Facebook"
                    name="linkFacebook"
                    value={formData.linkFacebook}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.linkFacebook}
                    helperText={errors.linkFacebook}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Link de Instagram"
                    name="linkInstagram"
                    value={formData.linkInstagram}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.linkInstagram}
                    helperText={errors.linkInstagram}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <StyledButton type="submit">Guardar</StyledButton>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <Link to="/InformacionGeneralList">
                   <StyledButton variant="contained" component="span">
                     Consultar Información General
                   </StyledButton>
                 </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
 );
}
*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
 TextField,
 Button,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogActions,
 TableContainer,
 Table,
 TableHead,
 TableRow,
 TableCell,
 TableBody,
} from "@mui/material";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";

const InformacionGeneralList = () => {
 const [infoGet, setInfoGet] = useState([]);
 const [selectedInfo, setSelectedInfo] = useState(null);
 const [openModal, setOpenModal] = useState(false);
 const [editForm, setEditForm] = useState({
 nombreEmpresa: '',
 rifEmpresa: '',
 telefono: '',
 ubicacion: '',
 correo: '',
 linkFacebook: '',
 linkInstagram: '',
 });

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/informacionGeneral/get-infoGeneral');
        const data = response.data.data;
        setInfoGet(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
 }, []);

 const actualizarDatos = async (data) => {
    try {
      const response = await axios.patch(`http://localhost:3000/informacionGeneral/patch-infoGeneral/${selectedInfo._id}`, data);
      console.log(response.data);
      // Actualizar la lista de datos después de la actualización exitosa
      const updatedInfoGet = infoGet.map(item => item._id === selectedInfo._id ? { ...item, ...data } : item);
      setInfoGet(updatedInfoGet);
    } catch (error) {
      console.error("Error updating data:", error);
    }
 };

 const handleEdit = (info) => {
    setSelectedInfo(info);
    // Actualizar el estado editForm con los datos del elemento seleccionado
    setEditForm(info);
    setOpenModal(true);
 };

 const handleDelete = async (id) => {
  try {
     await axios.delete(`http://localhost:3000/informacionGeneral/delete-infoGeneral/${id}`);
     // Filtrar el registro eliminado de la lista
     const updatedInfoGet = infoGet.filter(item => item._id !== id);
     setInfoGet(updatedInfoGet);
     // Opcional: Mostrar un mensaje de éxito
     console.log("Registro eliminado con éxito.");
  } catch (error) {
     console.error("Error al eliminar el registro:", error);
     // Opcional: Mostrar un mensaje de error
     console.log("Error al eliminar el registro.");
  }
 };

 const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prevState => ({
       ...prevState,
       [name]: value,
    }));
 };

 const handleEditSubmit = (e) => {
    e.preventDefault();
    actualizarDatos(editForm);
 };

 const handleCloseModal = () => {
    setOpenModal(false);
 };

 return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Información General</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                 <TableCell>Nombre de la Empresa</TableCell>
                 <TableCell>RIF</TableCell>
                 <TableCell>Teléfono</TableCell>
                 <TableCell>Ubicación</TableCell>
                 <TableCell>Correo</TableCell>
                 <TableCell>Facebook</TableCell>
                 <TableCell>Instagram</TableCell>
                 <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {infoGet.map((info, index) => (
                 <TableRow key={index}>
                    <TableCell>{info.nombreEmpresa}</TableCell>
                    <TableCell>{info.rifEmpresa}</TableCell>
                    <TableCell>{info.telefono}</TableCell>
                    <TableCell>{info.ubicacion}</TableCell>
                    <TableCell>{info.correo}</TableCell>
                    <TableCell>{info.linkFacebook}</TableCell>
                    <TableCell>{info.linkInstagram}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(info)}>Editar</Button>
                      <Button onClick={() => handleDelete(info._id)}>Eliminar</Button>
                    </TableCell>
                 </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Editar Información de la Empresa</DialogTitle>
        <DialogContent>
          {selectedInfo && (
            <form onSubmit={handleEditSubmit}>
              <TextField
                name="nombreEmpresa"
                label="Nombre de la Empresa"
                value={editForm.nombreEmpresa}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                name="rifEmpresa"
                label="RIF"
                value={editForm.rifEmpresa}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                name="telefono"
                label="Teléfono"
                value={editForm.telefono}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                name="ubicacion"
                label="Ubicación"
                value={editForm.ubicacion}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                name="correo"
                label="Correo"
                value={editForm.correo}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                name="linkFacebook"
                label="Facebook"
                value={editForm.linkFacebook}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                name="linkInstagram"
                label="Instagram"
                value={editForm.linkInstagram}
                onChange={handleEditChange}
                fullWidth
              />
              <Button type="submit">Guardar Cambios</Button>
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
 );
};

export default InformacionGeneralList;
 */

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



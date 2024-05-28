import React, { useState } from "react";
import {
 TextField,
 Button,
 Box,
 FormControl,
 InputLabel,
 Select,
 MenuItem,
 Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css"
import {  useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from 'axios';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const StyledButton = styled(Button)({
 margin: "10px",
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

export default function MetodosPago() {
 const [logo, setLogo] = useState(null);
 const [formData, setFormData] = useState({
    companyName: "",
    rif: "",
    mission: "",
    vision: "",
    corporateColor: "",
    banco: "", // Añade el estado para el banco
 });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  }

  const [Banco, setBanco] = useState("");
  const [Identificacion, setIdentificacion] = useState("");
  const [Beneficiario, setBeneficiario] = useState("");
  const [NumeroTelefono, setNumeroTelefono] = useState("");
  const [NumeroCuenta, setNumeroCuenta] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
  
    // Verificar que el campo Beneficiario no esté vacío y solo contenga letras
    if (!/^[A-Za-z\s]*$/.test(Beneficiario) ||!Beneficiario.trim()) {
      tempErrors.Beneficiario = "El campo beneficiario debe contener solo letras y no estar vacío.";
    }
  
    // Verificar que el campo Identificacion solo contenga números y no esté vacío
    if (!/^[\d]+$/.test(Identificacion) ||!Identificacion.trim()) {
      tempErrors.Identificacion = "El campo identificación debe contener solo números y no estar vacío.";
    }
  
    // Verificar que el campo NumeroTelefono solo contenga números y no esté vacío
    if (!/^[\d]+$/.test(NumeroTelefono) ||!NumeroTelefono.trim()) {
      tempErrors.NumeroTelefono = "El campo teléfono debe contener solo números y no estar vacío.";
    }
  
    // Verificar que el campo NumeroCuenta solo contenga números y no esté vacío
    if (!/^[\d]+$/.test(NumeroCuenta) ||!NumeroCuenta.trim()) {
      tempErrors.NumeroCuenta = "El campo cuenta debe contener solo números y no estar vacío.";
    }
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // No proceder si hay errores
    }
    const metPagoData = {
      Banco,
      Identificacion,
      Beneficiario, 
      NumeroTelefono, 
      NumeroCuenta
    };

    try {
      await axios
        .post("http://localhost:3000/instalador/post-metodoPago", metPagoData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error.response.data);
        });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }

    handleClose();
  };


 const [data, setData] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/instalador/get-metodoPago');
        if (response.data.success) {
          setData(response.data.data);
        } else {
          console.error("Error al obtener los usuarios:", response.data.message);
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
   { field: "_id", headerName: "ID", width: 90 },
   {
     field: "Banco",
     headerName: "Banco",
     width: 160,
   },
   { field: "Identificacion", headerName: "Cedula / Rif", width: 100 },

   { field: "Beneficiario", headerName: "Beneficiario", width: 180 },

   { field: "NumeroTelefono", headerName: "Numero de telefono", width: 120 },
  
   { field: "NumeroCuenta", headerName: "Numero de cuenta", width: 200 },
   
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
    <div>
      <div >
       
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">MÉTODOS DE PAGO REGISTRADOS</h1>

          <DataGrid
           rows={data}
           disableSelectionOnClick
           columns={columns}
           pageSize={10}
           checkboxSelection
           getRowId={(row) => row._id}
           autoHeight={true}
          />    

          <Button variant="contained" onClick={handleOpen} 
            sx={{ marginTop: 4, color: '#fff', bgcolor: '#18a0a6', 
                ":hover": { bgcolor: '#fff', color: '#18a0a6' }}}>
            Registrar nuevo método de pago
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h1 className="informacionGeneral-h1">NUEVO METODO DE PAGO</h1>
              <form onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{marginTop:2}} item xs={12} sm={6} md={6}>
                        <Select
                          value={Banco}
                          label="Seleccione un Banco"
                          name="banco"
                          placeholder="Seleccione un Banco"
                          onChange={(e) => setBanco(e.target.value)}
                          fullWidth
                        >
                          <MenuItem value="">
                            <em>--</em>
                          </MenuItem>
                          <MenuItem value={"Banco de Venezuela"}>Banco de Venezuela</MenuItem>
                          <MenuItem value={"Banesco"}>Banesco</MenuItem>
                          <MenuItem value={"BBVA Provincial"}>BBVA Provincial</MenuItem>
                        </Select>
                    
                    </Grid>
                    <Grid  item xs={12} sm={6} md={6}>
                    <TextField
                      label="Ingrese Cedula o Rif"
                      name="Identificacion"
                      fullWidth
                      margin="normal"
                      value={Identificacion}
                      onChange={(e) => setIdentificacion(e.target.value)}
                      pattern="\d*"
                    />
                    {errors.Identificacion && <p>{errors.Identificacion}</p>}
                    </Grid>
                    <Grid  item xs={12} sm={6} md={6}>
                    <TextField
                      label="Ingrese el nombre del beneficiario"
                      name="Beneficiario"
                      fullWidth
                      margin="normal"
                      value={Beneficiario}
                      onChange={(e) => setBeneficiario(e.target.value)}
                      pattern="[A-Za-z\s]*"
                    />
                    {errors.Beneficiario && <p>{errors.Beneficiario}</p>}
                    </Grid>
                    <Grid  item xs={12} sm={6} md={6}>
                    <TextField
                      label="Ingrese el número de teléfono"
                      name="telefono"
                      fullWidth
                      margin="normal"
                      value={NumeroTelefono}
                      onChange={(e) => setNumeroTelefono(e.target.value)}
                      pattern="\d*"
                    />
                    {errors.NumeroTelefono && <p>{errors.NumeroTelefono}</p>}
                    
                    </Grid>
                    <Grid  item xs={12} sm={12} md={12}>
                    <TextField
                      label="Ingrese el numero de cuenta"
                      name="cuenta"
                      fullWidth
                      margin="normal"
                      value={NumeroCuenta}
                      onChange={(e) => setNumeroCuenta(e.target.value)}
                      pattern="\d*"
                    />
                    {errors.NumeroCuenta && <p>{errors.NumeroCuenta}</p>}
                    </Grid>
                    
                    <Grid  item xs={12} sm={6} md={6}>
                      

                      <Button variant="contained" type="submit"
                        sx={{ marginTop: 4, color: '#fff', bgcolor: '#18a0a6', 
                              ":hover": { bgcolor: '#fff', color: '#18a0a6' }}}>
                        Guardar
                      </Button>

                    </Grid>
                  </Grid>
                </Box>
          </form>
        </Box>
      </Modal>



        </div>
      </div>
    </div>
 );
}

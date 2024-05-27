import axios from "axios";
import React, { useState, useEffect  } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";
import FaqWeb from "../../../../../portal-web/src/pages/Home/components/FAQ/Faq";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Modal from "@mui/material/Modal";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";


const isDesktopAdminPanel = true;

export default function servicioOfrecido() {

  const [open, setOpen] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
   const [deleteOfre,setDeleteOfre] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo.trim() ||!descripcion.trim() || !precio.trim()) {
      alert("Por favor, llene todos los campos.");
      return;
    }
    const servOfrecidoData = {
      titulo,
      descripcion,
      precio
    };

    try {
      await axios
       .post("http://localhost:3000/instalador/post-servOfrecido", servOfrecidoData)
       .then((response) => {
          console.log(response.data);
          setTitulo("");
          setDescripcion("");
          setPrecio("");
          setOpen(true); // Abre el modal de éxito
          setServicios(updatedServices);
        })
       .catch((error) => {
          console.error("Error al enviar la solicitud:", error.response.data);
        });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const fetchAndSetServices = async () => {
    try {
      const response = await axios.get("http://localhost:3000/instalador/get-servOfrecido");
      const dataArray = Array.isArray(response.data.data)? response.data.data : [];
      setServicios(dataArray);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setError('Hubo un error al cargar los datos.');
      setLoading(false);
    }
  };

  const handleDelete = async (Deleteid) => {
    try {
      await axios.delete(`http://localhost:3000/instalador/delete-servOfrecido/${Deleteid}`);
      
      const updatedServices = servicios.filter(service => service._id!== Deleteid);
      setServicios(updatedServices);
    } catch (error) {
      console.error("Error al eliminar el servicio:", error);
    }
  };
  

  const handleAccordionClick = (Deleteid) => {
    setDeleteOfre(Deleteid);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "titulo",
      headerName: "titulo",
      width: 220,
    },
    { field: "descripcion", headerName: "Descripción", width: 280 },

    { field: "precio", headerName: "Precio del servicio", width: 180 },
 
    {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <>
          <div>
            
            <button className="userListDelete" onClick={(event) => {
                event.stopPropagation();
                handleDelete(params.id); 
            }}>
              Delete
            </button>
          </div>
        </>
      );
    },
  }
  ];

  useEffect(() => { // Efecto secundario para cargar los datos al montar el componente
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/instalador/get-servOfrecido");
        const dataArray = Array.isArray(response.data.data)? response.data.data : [];
        setServicios(dataArray);
        setLoading(false); // Indica que la carga ha finalizado
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError('Hubo un error al cargar los datos.');
        setLoading(false); // Indica que la carga ha finalizado, incluso si hubo un error
      }
    };
    fetchData();
  }, []); // Dependencias vacías indican que este efecto solo se ejecuta al montar el componente

  if (loading) {
    return <div>Cargando...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
       
        <div className="newProduct">
          <h1 className="informacionGeneral-h1"> Crear una servicio de instalación</h1>

          <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 }, boxShadow: 2, borderRadius:"15px"}}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese el título del servicio"
                    name="titulo"
                    fullWidth
                    value={titulo}
                    margin="normal"
                    onChange={(e) => setTitulo(e.target.value)}
                    sx={{
                      fontWeight: "bold", // Aumenta el peso de la fuente aquí
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la descripción del servicio."
                    name="descripcion"
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    sx={{
                      fontWeight: "bold", // Aumenta el peso de la fuente aquí
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese el precio del servicio."
                    name="precio"
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    sx={{
                      fontWeight: "bold", // Aumenta el peso de la fuente aquí
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <button className="addProductButton" type="submit">
                    Guardar
                  </button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>

        <DataGrid
           rows={servicios}
           columns={columns}
           disableRowSelectionOnClick
           pageSize={10}
           checkboxSelection
           getRowId={(row) => row._id}
           autoHeight={true}
          />    



      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            p: 2,
            mx: "auto",
            my: "20%",
            borderRadius: 1,
          }}
        >
          <h2 id="modal-title">Guardado con éxito</h2>
          <p id="modal-description">
            El servicio ha sido guardada con éxito.
          </p>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
}

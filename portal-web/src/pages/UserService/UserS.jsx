import UserNavbar from "../../components/UserNavBar/UserNavBar";

import * as React from "react";
import Footer from "../../components/footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IMG1 from "../../assets/UserHome/instalacion.png";
import IMG2 from "../../assets/UserHome/reparacion.png";
import IMG3 from "../../assets/UserHome/mantenimiento.png";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Margin } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';


function UserService() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [servicio, setServicio] = useState("--Seleccionar--");
  const [metodoPago, setMetodoPago] = useState("--Seleccionar--");
  const [referenciaPago, setReferenciaPago] = useState("");
  const [montoPagado, setMontoPagado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos al servidor
    console.log("Datos enviados:", {
      servicio,
      metodoPago,
      referenciaPago,
      montoPagado,
    });
  };

  const [Servicio, setservicio] = React.useState("");
  const [metPago, setmetPago] = React.useState("");

  const handleChange = (event) => {
    setservicio(event.target.value);
  };

  const handleChanged = (event) => {
    setmetPago(event.target.value);
  };

  return (
    <div>
      <UserNavbar />

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
              <CardActionArea href="/FormServ">
                <Card sx={{ display: 'flex', bgcolor: '#18a0a6', color: '#fff', height: 240, alignItems: "center", padding: 4, borderRadius: 8 }}>
                    
                    <CardMedia
                            component="img"
                            sx={{ width: 200, height: 200, display: "flex" }}
                            image={IMG1}
                            alt="Live from space album cover"
                          />
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 620 }}>
                      
                      <CardContent sx={{ flex: '1 0 auto', padding: 4}}>
                        <Typography component="div" variant="h5" >
                          Servicio de Instalación
                        </Typography>
                        <Typography variant="subtitle1" color="#fff" component="div" sx={{textAlign: "justify"}}>
                        Somos expertos en la puesta en marcha de tus sistemas y equipos, desde la configuración inicial 
                        hasta las primeras pruebas de funcionamiento. Nos aseguramos de que todo esté instalado correctamente 
                        y según las especificaciones del fabricante para que puedas disfrutar de tu inversión desde el primer 
                        momento.
                        </Typography>
                      </CardContent>
                    </Box>
                    

                  </Card>

                </CardActionArea>

                <CardActionArea href="/FormServ">
                    <Card sx={{ display: 'flex', color: '#18a0a6', height: 240, alignItems: "center", padding: 4, borderRadius: 8, }}>
                      

                      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 620 }}>
                        
                        <CardContent sx={{ flex: '1 0 auto', padding: 4 }}>
                          <Typography component="div" variant="h5">
                            Servicio de Reparación
                          </Typography>
                          <Typography variant="subtitle1" color="#454545" component="div" sx={{textAlign: "justify"}}>
                              Contamos con un equipo técnico altamente cualificado para diagnosticar rápidamente 
                              la causa de la avería y repararla de forma eficiente. Trabajamos con las herramientas 
                              y repuestos originales para garantizarte una reparación duradera y de calidad.
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

                
                <CardActionArea href="/FormServ">
                  <Card sx={{ display: 'flex', bgcolor: '#70decd', color: '#454545', height: 240, alignItems: "center", padding: 4, borderRadius: 8 }}>
                    
                    <CardMedia
                            component="img"
                            sx={{ width: 200, height: 200, display: "flex" }}
                            image={IMG3}
                            alt="Live from space album cover"
                          />
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 620 }}>
                      
                      <CardContent sx={{ flex: '1 0 auto', padding: 4 }}>
                        <Typography component="div" variant="h5">
                          Servicio de Mantenimiento
                        </Typography>
                        <Typography variant="subtitle1" color="#454545" component="div" sx={{textAlign: "justify"}}>
                        Con nuestros planes de mantenimiento preventivo, nos encargamos de revisar periódicamente tu sistema o 
                        equipo para detectar posibles fallos antes de que te causen problemas. 
                        De esta manera, alargamos la vida útil de tu inversión, reducimos el riesgo de averías inesperadas 
                        y optimizamos su rendimiento al máximo.
                        </Typography>
                      </CardContent>
                    </Box>
                    

                  </Card>

                </CardActionArea>

        </Stack>
      </Box>

      

      <Footer />
    </div>
  );
}

export default UserService;

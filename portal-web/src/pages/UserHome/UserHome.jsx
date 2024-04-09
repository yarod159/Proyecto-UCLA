import UserNavbar from "../../components/UserNavBar/UserNavBar";
import SliderUser from "./Component/slider/SliderUser";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Footer from "../../components/footer/Footer";
import ImgProd from "../../assets/UserHome/Productos.png";
import ImgServ from "../../assets/UserHome/ServicioT.png";
import "./UserHome.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IMG1 from "../../assets/UserHome/Productos.jpg";
import IMG2 from "../../assets/UserHome/Servicio.png";
import IMG3 from "../../assets/UserHome/Cliente.png";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Faq from "../Home/components/FAQ/Faq";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "12px solid #18a0a6",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  "& > :not(style)": { m: 1, width: "25ch" },
};

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: "4px",
}));

function UserHome() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className="container-userHome">
       <UserNavbar />
        <SliderUser />
      <div className="wrapper-userHome">
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="#18a0a6"
              textAlign={"center"}
            >
              Contratación de servicio
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, width: "80px" }}
            >
              Por favor rellene este formulario con sus datos para realizar la
              contratación del servicio.
            </Typography>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Servicio
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Servicio}
                onChange={handleChange}
                label="Servicio"
              >
                <MenuItem value="">
                  <em>--</em>
                </MenuItem>
                <MenuItem value="Instalación">Instalación</MenuItem>
                <MenuItem value="Mantenimiento">Mantenimiento</MenuItem>
                <MenuItem value="Reparacion">Reparación</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Método de Pago
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={metPago}
                onChange={handleChanged}
                label="MetPago"
              >
                <MenuItem value="">
                  <em>--</em>
                </MenuItem>
                <MenuItem value="Transferencia">
                  Transferencia Bancaria
                </MenuItem>
                <MenuItem value="PagoMovil">Pago móvil</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="standard-basic"
              label="Referencia de Pago"
              variant="standard"
            />

            <TextField id="standard-basic" label="Monto" variant="standard" />

            <TextField
              id="standard-basic"
              label="Descripción"
              variant="standard"
            />

            <Button
              type="submit"
              variant="outlined"
              sx={{
                bgcolor: "#18a0a6",
                color: "#fff",
                marginTop: "40px",
                ":hover": { color: "#18a0a6" },
              }}
            >
              Contratar
            </Button>
          </Box>
        </Modal>

        <div className="userHome-cards">
          <Stack
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 2, sm: 8 }}
           sx={{ marginBottom: 2, marginLeft: { xs: 0, sm: '150px' } }}
          >
            <Item>
              <Card class="CardHome1">
                <CardMedia
                  sx={{ height: 180, borderRadius: "4px" }}
                  image={IMG1}
                  title="Productos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Catálogo de Productos
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    Tenemos los mejores productos del mercado para ofrecerte
                    siempre lo mejor para tu hogar. ¿Qué estas esperando? Visita
                    nuestro catálogo
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/productos" sx={{ color: "#fff" }}>
                    Ir al catálogo
                  </Button>
                  <Button size="small">Leer más</Button>
                </CardActions>
              </Card>
            </Item>

            <Item>
              <Card class="CardHome2">
                <CardMedia
                  sx={{ height: 180, borderRadius: "4px" }}
                  image={IMG2}
                  title="Servicios"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Nuestros servicios
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tenemos servicio de instalación, mantenimiento y reparación
                    de tus equipos. Disponemos de profesionales para brindarte
                    el mejor servicio.
                  </Typography>
                </CardContent>
                <CardActions>
                  {/*onClick={handleOpen}*/}
                  <Button size="small" href="/FormServ" sx={{ color: "#18a0a6" }} >
                    Contratar servicio
                  </Button>
                  <Button size="small">Leer mas</Button>
                </CardActions>
              </Card>
            </Item>

            <Item>
              <Card class="CardHome3">
                <CardMedia
                  sx={{ height: 180, borderRadius: "4px" }}
                  image={IMG3}
                  title="Atención al cliente"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Reparación
                  </Typography>
                  <Typography variant="body2" color="#454545">
                    Nuestros técnicos estan dispuestos para ayudarte con la
                    reparación de tus equipos averiados. Para lo que necesites,
                    tenemos la solución
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleOpen}>
                    Contratar servicio
                  </Button>
                  <Button size="small">Leer mas</Button>
                </CardActions>
              </Card>
            </Item>
          </Stack>
        </div>

        <div class="Prod">
          <div class="P1">
            <h1>Productos</h1>
            <h3>Tenemos para tí los mejores productos</h3>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button
                onClick
                href="/productos"
                sx={{
                  bgcolor: "#fff",
                  color: "#18a0a6",
                  ":hover": { bgcolor: "#18a0a6", color: "#fff" },
                }}
              >
                Ir al catálogo
              </Button>
              <Button
                onClick
                href=""
                sx={{
                  bgcolor: "#fff",
                  color: "#18a0a6",
                  ":hover": { bgcolor: "#18a0a6", color: "#fff" },
                }}
              >
                Más información
              </Button>
            </ButtonGroup>
          </div>

          <div class="P2">
            <img src={ImgProd} alt="" />
          </div>
        </div>

        <div class="Serv">
          <div class="P4">
            <img src={ImgServ} alt="" />
          </div>

          <div class="P3">
            <h1>Servicios</h1>
            <h3>
              Te ofrecemos lo mejor en servicios de instalación, <br></br>{" "}
              mantenimiento y reparación de equipos.
            </h3>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              {/*onClick={handleOpen}*/}
              <Button
                
                href="/FormServ"
                sx={{
                  bgcolor: "#18a0a6",
                  color: "#fff",
                  textAlign: "center",
                  ":hover": { bgcolor: "#fff", color: "#18a0a6" },
                }}
              >
                Contratar servicio
              </Button>
              <Button
                onClick
                href="/productos"
                sx={{
                  bgcolor: "#18a0a6",
                  color: "#fff",
                  textAlign: "center",
                  ":hover": { bgcolor: "#fff", color: "#18a0a6" },
                }}
              >
                Más información
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <Faq/>
        <Footer />
      </div>
    </div>
  );
}

export default UserHome;

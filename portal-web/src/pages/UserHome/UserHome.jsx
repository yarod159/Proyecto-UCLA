import React from 'react';
import UserNavbar from '../../components/UserNavBar/UserNavBar';
import SliderUser from './Component/slider/SliderUser';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Footer from '../../components/footer/Footer';
import ImgProd from '../../assets/UserHome/Productos.png';
import ImgServ from '../../assets/UserHome/ServicioT.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import IMG1 from "../../assets/UserHome/Productos.jpg";
import IMG2 from "../../assets/UserHome/Servicio.png";
import IMG3 from "../../assets/UserHome/Cliente.png";
import Faq from '../Home/components/FAQ/Faq';
import { styled } from '@mui/system';
import "./UserHome.css";


function UserHome() {

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    padding: "4px",
  }));

  return (
       <div className="container-userHome">
        <UserNavbar />
        <SliderUser />
        <div className="wrapper-userHome">
       
        <div className="userHome-cards">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 2 }}
            sx={{ marginBottom: 0, marginLeft: { xs: 0, sm: 0 } }}
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
                    Atención al cliente
                  </Typography>
                  <Typography variant="body2" color="#454545">
                    ¿Necesitas ayuda? Podemos ayudarte.
                    En esta sección podrás contactarte con nosotros y te
                    ayudaremos a solucionar cualquier problema.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href='/AtencionAlCliente' sx={{ color: "#fff" }} >
                    Ir a Atención al cliente
                  </Button>
                  <Button size="small">Leer mas</Button>
                </CardActions>
              </Card>
            </Item>
            </Stack>
        </div>
        {/*
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

        <Faq/>*/}
        <Footer />
      </div>
    </div>
  );
}

export default UserHome;

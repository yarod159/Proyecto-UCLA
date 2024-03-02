import UserNavbar from "../../components/UserNavBar/UserNavBar"
import SliderUser from "./Component/slider/SliderUser"
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Footer from "../../components/footer/Footer"
import ImgProd from "../../assets/UserHome/Productos.png"
import "./UserHome.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IMG1 from "../../assets/UserHome/Iguana1.jpg"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: '4px',
  }));

function UserHome() {
  return (
    <div>
      
      <UserNavbar/>
      <SliderUser/>

   <div>
      <Stack direction="row" spacing={8}
        sx={{marginBottom:'8px', marginLeft: '150px'
        
      }}
      >
        <Item>     
          <Card class="CardHome1">
            <CardMedia
              sx={{ height: 180, borderRadius: '4px' }}
              image={IMG1}
              title="The Maximus Iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Catálogo de Productos
              </Typography>
              <Typography variant="body2" color="#fff">
                Tenemos los mejores productos del mercado para ofrecerte
                siempre lo mejor para tu hogar.
                ¿Qué estas esperando? Visita nuestro catálogo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Ir al catálogo</Button>
              <Button size="small">Leer más</Button>
            </CardActions>
          </Card>
        </Item>
        
        
        <Item>
          <Card class="CardHome2">
            <CardMedia
              sx={{ height: 180, borderRadius: '4px' }}
              image={IMG1}
              title="The Maximus Iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nuestros servicios
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tenemos servicio de instalación, mantenimiento
                y reparación de tus equipos.
                Disponemos de profesionales para brindarte el mejor servicio.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contratar servicio</Button>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card>
        </Item>


        <Item>
          <Card class="CardHome3">
            <CardMedia
              sx={{ height: 180, borderRadius: '4px' }}
              image={IMG1}
              title="The Maximus Iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reparación
              </Typography>
              <Typography variant="body2" color="#454545">
                Nuestros técnicos estan dispuestos para ayudarte con la reparación
                de tus equipos averiados. Para lo que necesites, tenemos la solución
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contratar servicio</Button>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card> 
        </Item>
      </Stack>
    </div>




      <Card class="CardHome12">
      <CardMedia
        sx={{ height: 180, borderRadius: '8px' }}
        image={IMG1}
        title="The Maximus Iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Catálogo de Productos
        </Typography>
        <Typography variant="body2" color="#fff">
          Tenemos los mejores productos del mercado para ofrecerte
          siempre lo mejor para tu hogar.
          ¿Qué estas esperando? Visita nuestro catálogo
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ir al catálogo</Button>
        <Button size="small">Leer más</Button>
      </CardActions>
      </Card>
      

      <Card class="CardHome23">
      <CardMedia
        sx={{ height: 180, borderRadius: '8px' }}
        image={IMG1}
        title="The Maximus Iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nuestros servicios
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tenemos servicio de instalación, mantenimiento
          y reparación de tus equipos.
          Disponemos de profesionales para brindarte el mejor servicio.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contratar servicio</Button>
        <Button size="small">Leer mas</Button>
      </CardActions>
      </Card>     
      
      <Card class="CardHome34">
      <CardMedia
        sx={{ height: 180, borderRadius: '8px' }}
        image={IMG1}
        title="The Maximus Iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reparación
        </Typography>
        <Typography variant="body2" color="#fff">
          Nuestros técnicos estan dispuestos para ayudarte con la reparación
          de tus equipos averiados. Para lo que necesites, tenemos la solución
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contratar servicio</Button>
        <Button size="small">Leer mas</Button>
      </CardActions>
      </Card> 


      <div class="Prod">
        <div class="P1">
          <h1>Productos</h1>
          <h3>Aqui va la información</h3>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>Ir al catálogo</Button>
            <Button>Más información</Button>
          </ButtonGroup>
        </div>

        <div class="P2">
          <img src={ImgProd} alt="" />
        </div>
      </div>

      <div class="Serv">
        
        <div class="P4">
          <img src={ImgProd} alt="" />
        </div>
        
        
        <div class="P3">
          <h1>Productos</h1>
          <h3>Aqui va la información</h3>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>Contratar servicio</Button>
            <Button>Más información</Button>
          </ButtonGroup>
        </div>


      </div>

     


      <Footer/>
    </div>
  )
}

export default UserHome
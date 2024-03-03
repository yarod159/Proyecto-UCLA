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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '12px solid #18a0a6',
  boxShadow: 24,
  p: 4,
  borderRadius:'8px'
};

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: '4px',
  }));

function UserHome() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [servicio, setServicio] = useState('');
  const [metodoPago, setMetodoPago] = useState('efectivo');
  const [referenciaPago, setReferenciaPago] = useState('');
  const [montoPagado, setMontoPagado] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos al servidor
    console.log('Datos enviados:', {
      servicio,
      metodoPago,
      referenciaPago,
      montoPagado,
    });
  };
 
  return (
    <div>
      
      <UserNavbar/>
      <SliderUser/>

      <Button onClick={handleOpen}>Contratar Servicio</Button>
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
            color="#fff"
            bgcolor="#18a0a6"
          >
            Contratación de servicio
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Por favor rellene este formulario con sus datos para realizar la
            contratación del servicio.
          </Typography>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="servicio">Servicio:</label>
                <br />
                <select
                  type="text"
                  id="servicio"
                  name="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  required
                >
                  <option value="instalación">Instalación</option>
                  <option value="mantenimiento">Mantenimiento</option>
                  <option value="reparacion">Reparación</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="metodoPago">Método de Pago:</label>
                <br />
                <select
                  id="metodoPago"
                  name="metodoPago"
                  value={metodoPago}
                  onChange={(e) => setMetodoPago(e.target.value)}
                  required
                >
                  <option value="efectivo">Efectivo</option>
                  <option value="Divisas">Divisas</option>
                  <option value="transferencia">Transferencia bancaria</option>
                  <option value="transferencia">Pago Móvil</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="referenciaPago">Referencia de Pago:</label>
                <br />
                <input
                  type="text"
                  id="referenciaPago"
                  name="referenciaPago"
                  value={referenciaPago}
                  onChange={(e) => setReferenciaPago(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="montoPagado">Monto Pagado:</label>
                <br />
                <input
                  type="number"
                  id="montoPagado"
                  name="montoPagado"
                  step="0.01"
                  value={montoPagado}
                  onChange={(e) => setMontoPagado(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </Box>
      </Modal>

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
                  <Button size="small" onClick={handleOpen}>Contratar servicio</Button>
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
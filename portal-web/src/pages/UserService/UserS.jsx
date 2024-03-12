import UserNavbar from "../../components/UserNavBar/UserNavBar"
import "./UserS.css";
import * as React from 'react';
import Footer from "../../components/footer/Footer"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IMG1 from "../../assets/UserHome/Servicio.png"
import IMG2 from "../../assets/UserHome/Mantenimiento.jpeg"
import IMG3 from "../../assets/UserHome/Reparacion.jpg"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Margin } from "@mui/icons-material";

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
  borderRadius:'8px',
  '& > :not(style)' : { m: 1, width: '25ch' },
};

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    padding: '4px',
}));

const columns = [
    { id: 'servicio', label: 'Servicio', minWidth: 170 },
    
    {
      id: 'numFact',
      label: 'N.\u00a0Factura',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'monto',
      label: 'Precio',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    
];

function createData(servicio, numFact, monto,) {
    
    return { servicio, numFact, monto};
}

const rows = [
    createData('Mantenimiento', 1244, 440.0),
    createData('Instalacion', 1284, 550.42),
    createData('Mantenimeinto', 1315, 448.25),
    
];

function UserService() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const [servicio, setServicio] = useState('--Seleccionar--');
    const [metodoPago, setMetodoPago] = useState('--Seleccionar--');
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

      const [Servicio, setservicio] = React.useState('');
      const [metPago, setmetPago] = React.useState('');
    
      const handleChange = (event) => {
        setservicio(event.target.value);
      };
    
      const handleChanged = (event) => {
        setmetPago(event.target.value);
      };

    return (
        <div >
            <UserNavbar/>

            
            
            <div >
                <Stack direction="row" spacing={0}
                    sx={{marginBottom:'8px', marginLeft: '200px', marginTop:'8px'}}>
                    <Item sx={{backgroundColor: '#18a0a6'}}>     
                        <Card class="CardHome1">
                            <CardActionArea onClick={handleOpen}>
                                <CardMedia
                                sx={{ height: 180, borderRadius: '4px' }}
                                image={IMG1}
                                title="Instalación"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Instalación
                                </Typography>
                                <Typography variant="body2" color="#fff">
                                    Realizamos la instalación del servicio en tu hogar u oficina.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                    
                    
                    <Item>
                    <Card class="CardHome2">
                        <CardActionArea onClick={handleOpen}>
                            <CardMedia
                            sx={{ height: 180, borderRadius: '4px' }}
                            image={IMG2}
                            title="Mantenimiento de equipos"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mantenimiento
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Mantén tus equipos en optimas condiciones con nuestro servicio.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Item>


                    <Item sx={{backgroundColor: '#70decd'}}>
                    <Card class="CardHome3">
                        <CardActionArea onClick={handleOpen}>
                            <CardMedia
                            sx={{ height: 180, borderRadius: '4px' }}
                            image={IMG3}
                            title="Reparación de equipos"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Reparación
                            </Typography>
                            <Typography variant="body2" color="#454545">
                                ¿Tienes algún equipo que no funciona? Lo reparamos sin problemas.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                    </Item>
                </Stack>

            </div>
            
            <Paper sx={{ width: '100%', maxWidth:'922px', overflow: 'hidden', marginLeft:'200px', marginBottom: '8px', marginTop:'8px'}}>
            <TableContainer sx={{height: 240}}>
                <Table stickyHeader aria-label="sticky table" >
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                            );
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
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
                
                <Typography id="modal-modal-description" sx={{ mt: 2, width:'80px' }}>
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
                    <MenuItem value="Transferencia">Transferencia Bancaria</MenuItem>
                    <MenuItem value="PagoMovil">Pago móvil</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="standard-basic"
                  label="Referencia de Pago"
                  variant="standard"
                />

                <TextField id="standard-basic" label="Monto" variant="standard" />

                <TextField id="standard-basic" label="Descripción" variant="standard" />

                <Button type="submit"
                  variant="outlined"
                  sx={{
                    bgcolor: '#18a0a6',
                    color: '#fff',
                    marginTop:'40px',
                    ':hover': { color: '#18a0a6' },
                  }}
                >
                  Contratar
                </Button>
              </Box>
            </Modal>
            
            
            <Footer/>

        </div>
    )
}

export default UserService
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

    return (
        <div>
            <UserNavbar/>

            
            
            <div>
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
                                    Aqui va un texto referente al servicio de instalación
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
                                Aqui va un texto referente al servicio de mantenimiento
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
                                Aqui va un texto referente al servicio de reparación.
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
                        color="#fff"
                        bgcolor="#18a0a6"
                    >
                        Contratación de servicio
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Por favor rellene este formulario con sus datos para realizar la
                        contratación del servicio.
                    </Typography>
                    <div class="container">
                        <form onSubmit={handleSubmit}>
                        <div class="form-group">
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
                        <div class="form-group">
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
                        <div class="form-group">
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
                        <div class="form-group">
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
            <Footer/>

        </div>
    )
}

export default UserService
import UserNavbar from "../../components/UserNavBar/UserNavBar"
import "./UserFact.css";
import * as React from 'react';
import Footer from "../../components/footer/Footer"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IMG1 from "../../assets/UserHome/Iguana1.jpg"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    padding: '4px',
}));

const columns = [
    //{ id: 'servicio', label: 'Servicio', minWidth: 170 },
    
    {
      id: 'numFact',
      label: 'N.\u00a0Factura',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    
    {
      id: 'monto',
      label: 'Precio',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },

    { id: 'metodPago', label: 'Metodo\u00a0de\u00a0Pago', minWidth: 170, align: 'center' },
    
];

function createData(numFact, monto, metodPago,) {
    
    return { numFact, monto, metodPago};
}

const rows = [
    createData(1244, 440.0, 'Pago Móvil'),
    createData(1284, 550.42, 'Efectivo'),
    createData(1315, 448.25, 'Transferencia'),
    
];

function UserFact() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <div>
            <UserNavbar/>
            <div>
                <Stack direction="row" spacing={0}
                    sx={{marginBottom:'8px', marginLeft: '200px', marginTop:'8px'}}>
                    <Item sx={{backgroundColor: '#18a0a6'}}>     
                        <Card class="CardHome1">
                            <CardMedia
                            sx={{ height: 180, borderRadius: '4px' }}
                            image={IMG1}
                            title="The Maximus Iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Instalación
                            </Typography>
                            <Typography variant="body2" color="#fff">
                                Aqui va un texto referente al servicio de instalación
                            </Typography>
                            </CardContent>
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
                            Mantenimiento
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Aqui va un texto referente al servicio de mantenimiento
                        </Typography>
                        </CardContent>
                    </Card>
                    </Item>


                    <Item sx={{backgroundColor: '#70decd'}}>
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
                            Aqui va un texto referente al servicio de reparación.
                        </Typography>
                        </CardContent>
                    </Card> 
                    </Item>
                </Stack>
            </div>
            <Paper sx={{ width: '100%', maxWidth:'922px', overflow: 'hidden', marginLeft:'200px', marginBottom: '8px', marginTop:'8px'}}>
            <TableContainer sx={{height: 440}}>
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




            <Footer/>

        </div>
    )
}

export default UserFact
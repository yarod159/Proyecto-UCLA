import UserNavbar from "../../components/UserNavBar/UserNavBar"
import "./UserS.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Footer from "../../components/footer/Footer"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

function UserService() {
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

export default UserService
import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import productData from '../../data/productData';


function Productos() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "nombre",
        headerName: "Nombre",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "cantidad",
        headerName: "Cantidad",
        flex: 1,
      },
      {
        field: "caracteristicas",
        headerName: "Caracteristicas",
        flex: 1,
      },
      {
        field: "color",
        headerName: "Color",
        flex: 1,
      },
      {
        field: "precio",
        headerName: "Precio",
        flex: 1,
        renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
              ${params.row.precio}
            </Typography>
          ),
      },
      {
        field: "foto",
        headerName: "Imagen",
        flex: 1,
       
        
         renderCell: (params) => (
      <img
        alt="profile-user"
        width="100px"
        height="80px"
        src={params.row.foto}
        style={{ cursor: "pointer" }}
      />
    ),
      },
      {
        field: "categoria",
        headerName: "Categoria",
        flex: 1,
      },
    ];
  
  return (
    <Box m="20px">
    <Header title="Facturas" subtitle="Lista de balance de Facturas" />
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid checkboxSelection rows={productData} columns={columns} />
    </Box>
  </Box>
    
  )
}

export default Productos
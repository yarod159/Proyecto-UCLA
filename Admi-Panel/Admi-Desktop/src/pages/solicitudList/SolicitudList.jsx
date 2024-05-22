import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import SolicitudesList from "../../utils/SolicitudesList";
import { Link } from "react-router-dom";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";
import MUIDataTable from "mui-datatables";
import { Box, TextField } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete } from '@mui/material';

const modalidades = ["Domicilio", "Local"];

export default function SolicitudList() {
  const [data, setData] = useState(SolicitudesList);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id!== id));
  };

  const columns = [
    { name: "id", label: "ID", width: 80 },
    { name: "id_servicio", label: "Id Servicios", width: 80 },
    { name: "id_cliente", label: "id del cliente", width: 110 },
    { name: "id_Empleado", label: "id del Empleado", width: 110 },
    { name: "nombreEmpleado", label: "Nombre del Empleado", width: 110 },
    { name: "Tipo de servicios", label: "Tipo de servicios", width: 200 },
    { name: "fecha", label: "Fecha", width: 100 },
    { name: "Metodo de Pago", label: "Metodo de Pago", width: 150 },
    { name: "monto", label: "Monto", width: 150 },
    { name: "Referencia de Pago", label: "Referancia de Pago", width: 150 },
    {
      name: "modalidad",
      label: "Modalidad",
      width: 150,
      options: {
        customBodyRender: (value, tableMeta, updateRow) => {
          // Renderiza el Autocomplete directamente en lugar de un div
          return (
            <Autocomplete
              options={modalidades}
              getOptionLabel={(option) => option}
              renderInput={(params) => <TextField {...params} label="Modalidad" />}
              value={value}
              onChange={(event, newValue) => {
                // Maneja el cambio de selección aquí
                console.log(newValue); // newValue será el valor seleccionado
              }}
              renderTags={() => null} // Deshabilita la visualización de tags
              freeSolo // Permite ingresar cualquier valor no listado
            />
          );
        },
      },
    },
    {
      name: "Estatus",
      label: "Estatus",
      width: 150,
      options: {
        customBodyRender: (value, tableMeta, updateRow) => {
          // Define los colores de fondo que deseas utilizar
          const backgroundColor1 = "#65B741"; // Color para 'Pagado'
          const backgroundColor2 = "#5FBDFF"; // Color para 'Completado'
          const backgroundColor3 = "#FF8911"; // Color por defecto

          // Determina el color de fondo basado en el valor de la celda
          let backgroundColor;
          if (value === "Pagado") {
            backgroundColor = `linear-gradient(to right, ${backgroundColor1}, ${backgroundColor1})`;
          } else if (value === "Completado") {
            backgroundColor = `linear-gradient(to right, ${backgroundColor2}, ${backgroundColor2})`;
          } else if (value === "En proceso") {
            backgroundColor = backgroundColor3;
          }

          // Retorna un elemento con el estilo aplicado y el ComboBox
          return (
            <div
              style={{
                background: backgroundColor,
                color: "white", // Color del texto
                borderRadius: "5px",
                padding: "5px",
                width: "90px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Select
                value={value}
                onChange={(e) => {
                  // Aquí puedes manejar el cambio de selección
                  console.log(e.target.value);
                }}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              >
                <MenuItem value={"Pagado"}>Pagado</MenuItem>
                <MenuItem value={"Completado"}>Completado</MenuItem>
                <MenuItem value={"En proceso"}>En proceso</MenuItem>
                <MenuItem value={"En Espera por pago"}>En Espera Por Pago</MenuItem>
              </Select>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="productList">
          <Box>
            <MUIDataTable
              data={data}
              title="Solicitudes Aprobadas"
              columns={columns}
              options={{
                responsiveMode: "vertical",
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

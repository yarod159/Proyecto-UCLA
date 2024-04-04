import "../productList/productList.css";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import SolicitudesList from "../../utils/SolicitudesList";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import SidebarMui from "../../components/sideBar/SidebarMui";

export default function SolicitudList() {
  const [data, setData] = useState(SolicitudesList);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "id del producto",
      headerName: "id del producto",
      width: 110,
    },
    {
      field: "Tipo de servicios",
      headerName: "Tipo de servicios",
      width: 200,
    },

    {
      field: "fecha",
      headerName: "Fecha",
      width: 100,
    },

    {
      field: "Metodo de Pago",
      headerName: "Metodo de Pago",
      width: 150,
    },
    {
      field: "Referencia de Pago",
      headerName: "Referancia de Pago",
      width: 150,
    },
    {
      field: "Estatus",
      headerName: "Estatus",
      width: 150,
      renderCell: (params) => {
        // Define los colores de fondo que deseas utilizar
        const backgroundColor1 = "#65B741"; // Color para 'Pagado'
        const backgroundColor2 = "#5FBDFF"; // Color para 'Completado'
        const backgroundColor3 = "#FF8911"; // Color por defecto

        // Determina el color de fondo basado en el valor de la celda
        let backgroundColor;
        if (params.value === "Pagado") {
          backgroundColor = `linear-gradient(to right, ${backgroundColor1}, ${backgroundColor1})`;
        } else if (params.value === "Completado") {
          backgroundColor = `linear-gradient(to right, ${backgroundColor2}, ${backgroundColor2})`;
        } else if (params.value === "En proceso") {
          backgroundColor = backgroundColor3;
        }

        // Retorna un elemento con el estilo aplicado
        return (
          <div
            style={{
              background: backgroundColor,
              color: "white", // Color del texto
              borderRadius: "5px",
              padding: "5px",
              width: "90px",
            }}
          >
            {params.value}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      
      <div className="container">
        <SidebarMui />
        <div className="productList">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

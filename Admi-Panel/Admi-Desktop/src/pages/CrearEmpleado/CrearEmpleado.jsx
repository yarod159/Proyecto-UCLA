import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sideBar/SideBar";
import Topbar from "../../components/topBar/TopBar";
import "./crearEmpleado.css";

export default function CrearEmpleado() {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dateCumple, setdateCumple] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [estatus, setEstatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertir la fecha de nacimiento al formato DD/MM/YYYY
    const fechaNacimientoFormateada =dateCumple
      .split("/")
      .reverse()
      .join("-");
    const fechaNacimientoObj = new Date(fechaNacimientoFormateada);

    // Asegurarse de que la fecha es válida
    if (isNaN(fechaNacimientoObj.getTime())) {
      console.error("Fecha de nacimiento inválida");
      return;
    }

    const empleadoData = {
      cedula,
      nombre,
      apellido,
      dateCumple: fechaNacimientoObj,
      telefono,
      direccion,
      ocupacion,
      estatus,
    };

    try {
      await axios
        .post("http://localhost:3000/empleado/post-empleado", empleadoData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error.response.data);
        });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h2 className="addProductTitle">Crear Empleado</h2>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Cedula</label>
              <input
                type="text"
                placeholder="26964179"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Gina"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Apellido</label>
              <input
                type="text"
                placeholder="Del Bianco"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Fecha de Nacimiento</label>
              <input
                type="text"
                placeholder="20/02/1998"
                value={dateCumple}
                onChange={(e) => setdateCumple(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Telefono</label>
              <input
                type="text"
                placeholder="0424-5534182"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Dirección</label>
              <input
                type="text"
                placeholder="Carrera 32 entre 33 y 34"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Ocupacion</label>
              <input
                type="text"
                placeholder="trabajador de mantenimiento"
                value={ocupacion}
                onChange={(e) => setOcupacion(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Estatus</label>
              <select
                name="active"
                id="active"
                value={estatus}
                onChange={(e) => setEstatus(e.target.value)}
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <button className="addProductButton" type="submit">
              Guardar{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

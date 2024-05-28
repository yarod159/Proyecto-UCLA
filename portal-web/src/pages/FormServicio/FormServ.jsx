import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./FormServ.css";
import { Box, Select, FormLabel } from "@mui/material";
import { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import axios from "axios";
import { getEstadosTokenRequest } from "../../api/FormServ";

import { getProfileRequest } from "../../api/profile";
import { postSolicitudDeServiciosRequest } from "../../api/solicitudDeServicios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormServ = () => {
  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    email: "",
    fechaNacimiento: "",
    telefono: "",
    estado: "",
    municipios: "",
    codigoPostal: "",
    Direccion: "",
    servicios: "",
    marcaEquipo: "",
    modeloEquipo: "",
    numeroSerie: "",
    descripcion: "",
    tipoServicio: "",
    tipoVivienda: "",
    estatus: "",
  });

  const [servicios, setServicios] = useState([]);
  const [servicio, setservicio] = useState("");
  const [tipServicio, setTipServicio] = useState("");
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [tipVivienda, setTipVivienda] = useState("");
  const [estadosGrupo, setEstadosGrupo] = useState([]);
  const [municipioGrupo, setMunicipioGrupo] = useState([]);

  const getMunicipios = () => {
    const data = estadosGrupo.filter((value) => value?.estado == estado);
    console.log(data[0]);
    setMunicipioGrupo(data[0]?.municipios ?? []);
  };

  useEffect(() => {
    getMunicipios();
  }, [estado]);

  const getEstadosData = async () => {
    const resp = await getEstadosTokenRequest();
    setEstadosGrupo(resp?.data.data);
  };

  useEffect(() => {
    getEstadosData();
  }, []);

  const handleOptionChange = (event) => {
    setservicio(event.target.value);
  };

  const handleOptionChangeTip = (event) => {
    setTipServicio(event.target.value);
  };

  const handleEstado = (event) => {
    setEstado(event.target.value);
  };

  const handleMunicipio = (event) => {
    setMunicipio(event.target.value);
  };

  const handleTipVivienda = (event) => {
    setTipVivienda(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    apellido: "",
    email: "",
    fechaNacimiento: "",

    telefono: "",
    estado: "",
    municipios: "",
    codigoPostal: "",
    Direccion: "",
    servicios: "",
    marcaEquipo: "",
    modeloEquipo: "",
    numeroSerie: "",
    descripcion: "",
    tipoServicio: "",
    tipoVivienda: "",
    estatus: "",
  });

  const getProfileData = async () => {
    const resp = await getProfileRequest();
    console.log(resp);
    setUserInfo({
      _id: resp._id,
      nombre: resp.name,
      apellido: resp.apellido,
      email: resp.user.email,
      fechaNacimiento: new Date(resp.dateCumple).toLocaleDateString(),
      Direccion: resp.Direccion,
      telefono: resp.telefono,
    });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/instalador/get-servOfrecido"
        );
        if (response.data.success) {
          setServicios(response.data.data);
        }
      } catch (error) {
        console.error("Error al obtener servicios ofrecidos:", error);
      }
    };

    fetchServicios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('esto es un form data: ', formData);

    const reporteData = {
      profile: userInfo._id,
      estado,
      municipios: municipio,
      codigoPostal: formData.codigoPostal,
      Direccion: formData.Direccion,
      servicio,
      marcaEquipo: formData.marcaEquipo,
      modeloEquipo: formData.modeloEquipo,
      numeroSerie: formData.numeroSerie,
      descripcion: formData.descripcion,
      tipoServicio: tipServicio,
      tipoVivienda: tipVivienda,
      estatus: 'Activo',
    };
    console.log('Esto es un reporte: ', reporteData);
    try {
      const response = await axios.post(
        "http://localhost:3000/solicitud/post-SolicituDeServicios",
        reporteData
      );

      console.log("holaaaa", response); // Puedes ver la respuesta del servidor aquí
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Aquí puedes manejar errores, por ejemplo, mostrando un mensaje de error
    }
  };

  return (
    <div className="container-user-profile">
      <UserNavBar />

      <div className="wrapper-user-profile">
        <Box sx={{ margin: 8 }}>
          <Grid container spacing={2}>
            <Grid item md={80}>
              <Item sx={{ padding: 4, borderRadius: "12px" }}>
                <form
                  onSubmit={(e) => {
                    console.log(userInfo);
                    handleSubmit(e);
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    SOLICITUD DE SERVICIOS
                  </Typography>
                  <Typography variant="h8" gutterBottom>
                    Por favor rellene los datos
                  </Typography>
                  <hr />
                  <br />
                  <div>
                    <FormLabel>Datos Generales</FormLabel>
                  </div>
                  <div className="form-nombre-apellido">
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="nombre"
                      variant="standard"
                      value={userInfo.nombre}
                      onChange={handleInputChange}
                      sx={{ marginTop: 0, width: 310 }}
                    />

                    <TextField
                      fullWidth
                      label="Apellido"
                      name="apellido"
                      variant="standard"
                      value={userInfo.apellido}
                      onChange={handleInputChange}
                      sx={{ marginTop: 0, width: 310 }}
                    />
                  </div>

                  <div className="Form-telefono-correo">
                    <TextField
                      label="Teléfono de contacto - Ejemplo: +584126202525"
                      name="telf"
                      variant="standard"
                      onChange={handleInputChange}
                      value={userInfo.telefono}
                      sx={{ marginTop: 2, width: 310 }}
                    />

                    <TextField
                      label="Correo electrónico"
                      name="email"
                      variant="standard"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      sx={{ marginTop: 2, width: 310 }}
                    />
                  </div>

                  <div className="Form-estado-municipio">
                    <FormControl
                      variant="standard"
                      sx={{ marginTop: 2, width: 310 }}
                    >
                      <InputLabel>Estado</InputLabel>
                      <Select value={estado} onChange={handleEstado}>
                        <MenuItem value="">Selecciona una opción</MenuItem>
                        {estadosGrupo.map((value, key) => (
                          <MenuItem index={key} value={value.estado}>
                            {value.estado}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl
                      variant="standard"
                      sx={{ marginTop: 2, width: 310 }}
                    >
                      <InputLabel>Municipio</InputLabel>
                      <Select value={municipio} onChange={handleMunicipio}>
                        <MenuItem value="">Selecciona una opción</MenuItem>
                        {municipioGrupo.map((value, key) => (
                          <MenuItem index={key} value={value.municipio}>
                            {value.municipio}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <TextField
                    fullWidth
                    label="Código Postal"
                    name="codigoPostal"
                    variant="standard"
                    onChange={handleInputChange}
                    sx={{ marginTop: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Dirección de instalación"
                    name="Direccion"
                    variant="standard"
                    multiline
                    onChange={handleInputChange}
                    sx={{ marginTop: 2 }}
                  />

                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ marginTop: 2, marginBottom: 4 }}
                  >
                    <InputLabel>Selecciona un Servicio</InputLabel>
                    <Select value={servicio} onChange={handleOptionChange}>
                      <MenuItem value="">Selecciona una opción</MenuItem>
                      <MenuItem value="Instalación">Instalación</MenuItem>
                      <MenuItem value="Mantemimiento">Mantenimiento</MenuItem>
                      <MenuItem value="Reparación">Reparación</MenuItem>
                    </Select>
                  </FormControl>

                  {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />*/}

                  {servicio === "Instalación" && (
                    <div className="form-instalacion">
                      <FormLabel sx={{ marginTop: 4 }}>
                        Datos para la instalación
                      </FormLabel>

                      <div className="form-tipInstalacion-tipVivienda">
                        <FormControl
                          variant="standard"
                          sx={{ marginTop: 2, width: 310 }}
                        >
                          <InputLabel>Tipo de servicio</InputLabel>
                          <Select
                            value={tipServicio}
                            onChange={handleOptionChangeTip}
                          >
                            <MenuItem value="">Selecciona una opción</MenuItem>
                            {servicios.map((service) => (
                              <MenuItem
                                key={service._id}
                                value={service.titulo}
                              >
                                {service.titulo}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        <FormControl
                          variant="standard"
                          sx={{ marginTop: 2, marginBottom: 4, width: 310 }}
                        >
                          <InputLabel>Tipo de vivienda</InputLabel>
                          <Select
                            value={tipVivienda}
                            onChange={handleTipVivienda}
                          >
                            <MenuItem value="">Selecciona una opción</MenuItem>
                            <MenuItem value="Casa">Casa</MenuItem>
                            <MenuItem value="Apartamento">Apartamento</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  )}

                  {servicio === "Mantemimiento" && (
                    <div className="form-mantenimiento">
                      <FormLabel>Datos para el Mantenimiento</FormLabel>
                      <div className="form-datos">
                        <TextField
                          fullWidth
                          label="Marca del Equipo"
                          name="marcaEquipo"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />

                        <TextField
                          fullWidth
                          label="Modelo del Equipo"
                          name="modeloEquipo"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />

                        <TextField
                          fullWidth
                          label="Numero de serie del equipo"
                          name="numeroSerie"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />

                        <TextField
                          fullWidth
                          label="Descripción del problema"
                          name="descripcion"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />
                      </div>
                    </div>
                  )}

                  {servicio === "Reparación" && (
                    <div className="form-reparacion">
                      <FormLabel>Datos para la Reparación</FormLabel>
                      <div className="form-datos">
                        <TextField
                          fullWidth
                          label="Marca del Equipo"
                          name="marcaEquipo"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />

                        <TextField
                          fullWidth
                          label="Modelo del Equipo"
                          name="modeloEquipo"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />

                        <TextField
                          fullWidth
                          label="Numero de serie del equipo"
                          name="numeroSerie"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />

                        <TextField
                          fullWidth
                          label="Descripción del problema"
                          name="descripcion"
                          variant="standard"
                          onChange={handleInputChange}
                          sx={{ marginTop: 2, width: 310 }}
                        />
                      </div>
                    </div>
                  )}
                  {servicio !== "" && (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        marginTop: 4,
                        color: "#fff",
                        bgcolor: "#18a0a6",
                        ":hover": { bgcolor: "#fff", color: "#18a0a6" },
                      }}
                    >
                      Contratar
                    </Button>
                  )}
                </form>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default FormServ;

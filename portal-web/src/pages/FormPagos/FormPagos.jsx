import React, { useEffect, useState } from "react";
import { Typography, Grid, TextField, Button, Box, Select, MenuItem, FormControl, InputLabel, FormLabel, Card, CardContent } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./FormPagos.css";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark"? "#1A2027" : "#fff",
 ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormPagos = () => {
  const [formData, setFormData] = useState({
    direccion: "",
    estado: "",
    codigoPostal: "",
    tipoPared: "",
  });

  const [metPago, setmetPago] = useState("");
  const [bancoSeleccionado, setBancoSeleccionado] = useState(null);
  const [bancos, setBancos] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/instalador/get-metodoPago');
        setBancos(response.data.data); // Actualiza la lista de bancos
        setBancoSeleccionado("");
        console.log(response.data)
      } catch (error) {
        console.error("Error al cargar los bancos:", error);
      }
    };

    fetchBanks();
  }, []);

  const HandleMetPago = (event) => {
    setmetPago(event.target.value);
  };

  const HandleBanco = (event) => {
    const selectedBankId = event.target.value;
    const selectedBank = bancos.find(banco => banco._id === selectedBankId);
    if (selectedBank) {
      setBancoSeleccionado(selectedBank);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  return (
    <div className="container-user-profile">
      <UserNavBar />

      <div className="wrapper-user-profile">
        <Box sx={{ margin: 8 }}>
          <Grid container spacing={2}>
            <Grid item md={80}>
              <Item sx={{ padding: 4, borderRadius: "12px" }}>
                <form>
                  <Typography variant="h5" gutterBottom>
                    Formulario de pagos
                  </Typography>
                  <Typography variant="h8" sx={{ marginBottom: 4 }}>
                    Por favor rellene los datos
                  </Typography>
                  <hr />
                  <FormControl fullWidth variant="standard" sx={{ marginTop: 4 }}>
                    <InputLabel>Selecciona un método de pago</InputLabel>
                    <Select value={metPago} onChange={HandleMetPago}>
                      <MenuItem value="">Selecciona una opción</MenuItem>
                      <MenuItem value="TrMisBanc">Transferencia mismo banco</MenuItem>
                      <MenuItem value="TrOtrBanc">Transferencia otros bancos</MenuItem>
                      <MenuItem value="Págo móvil">Págo móvil</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth variant="standard" sx={{ marginTop: 4 }}>
                    <InputLabel>Selecciona un banco</InputLabel>
                    <Select value={bancoSeleccionado? bancoSeleccionado._id : ""} onChange={HandleBanco}>
                      <MenuItem value="">Selecciona una opción</MenuItem>
                      {bancos.map(banco => (
                        <MenuItem key={banco._id} value={banco._id}>{banco.Banco}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {bancoSeleccionado && (
                    <Card sx={{ marginTop: 2 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Información del Banco Seleccionado
                        </Typography>
                        <Typography variant="body1">
                          Nombre: {bancoSeleccionado.Banco}
                        </Typography>
                        <Typography variant="body1">
                          Identificación: {bancoSeleccionado.Identificacion}
                        </Typography>
                        <Typography variant="body1">
                          Beneficiario: {bancoSeleccionado.Beneficiario}
                        </Typography>
                        <Typography variant="body1">
                          Teléfono: {bancoSeleccionado.NumeroTelefono}
                        </Typography>
                        <Typography variant="body1">
                          Número de Cuenta: {bancoSeleccionado.NumeroCuenta}
                        </Typography>
                      </CardContent>
                    </Card>
                  )}

                  <div className="form-pagos">
                    <div className="form-datos-de-pago">
                      <TextField
                        fullWidth
                        label="Cédula del emisor"
                        name="cedula"
                        variant="standard"
                        onChange={handleInputChange}
                        sx={{ marginTop: 2, width: 310 }}
                      />

                      <TextField
                        fullWidth
                        label="Referencia"
                        name="Ref"
                        variant="standard"
                        onChange={handleInputChange}
                        sx={{ marginTop: 2, width: 310 }}
                      />

                      <TextField
                        label="Monto"
                        name="monto"
                        variant="standard"
                        onChange={handleInputChange}
                        sx={{ marginTop: 2, width: 310 }}
                      />

                      <TextField
                        label="Fecha"
                        name="fech"
                        variant="standard"
                        onChange={handleInputChange}
                        sx={{ marginTop: 2, width: 310 }}
                      />
                    </div>

                    <Button
                      variant="contained"
                      onClick={() => console.log(formData)}
                      href="/"
                      sx={{
                        marginTop: 4,
                        color: "#fff",
                        bgcolor: "#18a0a6",
                        ":hover": { bgcolor: "#fff", color: "#18a0a6" },
                      }}
                    >
                      Enviar
                    </Button>
                  </div>
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

export default FormPagos;
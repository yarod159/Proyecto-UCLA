import React from "react";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import { Card, CardContent, Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './UserProfile.css'



const Item = styled(Paper)(({}) => ({
  textAlign: "center",
}));

const UserProfile = () => {
  const [nombre, setName] = React.useState("Héctor Julio Méndez Gómez");
  const [cedula, setCedula] = React.useState("262325307");
  const [email, setEmail] = React.useState("HECTORMG2404@GMAIL.COM");
  const [FechaNacimiento, setBirthDate] = React.useState("24/04/1998");
  const [DirUsuario, setAddress] = React.useState(
    "URB. VISTA ALEGRE, 3ERA ETAPA CASA 001. AV2 2 CON CALLE 17. MUNICIPIO INDEPENDENCIA, ESTADO YARACUY"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container-user-profile">
      <UserNavBar />

      <div className="wrapper-user-profile">
        <Stack
          direction="row"
          spacing={8}
          sx={{ marginBottom: "8px", marginTop: "8px", padding:"40px 0 40px 0" }}
        >
          <Item>
            <Container
              sx={{
                width: "460px",
                border: "12px solid #18a0a6",
                borderRadius: "12px",
                padding: "40px 0 40px 0",
                color: "#18a0a6",
                textAlign: "center",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Datos de Usuario
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id="UserName"
                      label="Nombre"
                      value={nombre}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id="cedula"
                      label="Cédula"
                      value={cedula}
                      onChange={(e) => setCedula(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id="email"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id="UserNacimiento"
                      label="Fecha de nacimiento"
                      value={FechaNacimiento}
                      onChange={(e) => setBirthDate(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      id="DirUsuario"
                      label="Dirección"
                      value={DirUsuario}
                      onChange={(e) => setAddress(e.target.value)}
                      fullWidth
                      multiline
                      rows={2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#18a0a6",
                        color: "#fff",
                        ":hover": { bgcolor: "#fff", color: "#18a0a6" },
                      }}
                    >
                      Modificar Datos
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Item>

          <Item>
           
          </Item>
        </Stack>

        <Stack
          direction="row"
          spacing={8}
          sx={{ marginBottom: "8px", marginTop: "8px", padding:"40px 0 40px 0" }}
        >   

          <Card
              sx={{
                width: "300px",
                height: "254px",
                backgroundColor: "teal",
                marginTop: "80px",
                paddingTop: "40px",
              }}
            >
                
              <CardContent>
                <Avatar
                  sx={{
                    bgcolor: "deepOrange[500]",
                    width: 56,
                    height: 56,
                    margin: "0 auto",
                    marginBottom: "12px",
                  }}
                ></Avatar>
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  color="white"
                >
                  Hola, {nombre}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
       
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;

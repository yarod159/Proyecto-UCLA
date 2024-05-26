import React, {useState, useEffect} from "react";
import { Container, Grid, Typography } from "@mui/material";
import ImgNosotros from '../../../../assets/background/nosotros.jpg';
import { getAjustesSistemaRequest } from "../../../../api/ajustesSistema";


function NosotrosHomeMain() {

 
  const [nTitulo, setnTitulo] = useState("");
  const [nosotros, setNosotros] = useState("");
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAjustesSistemaRequest(); // Utiliza la función específica aquí
        console.log('holaaa,',response)
        if (response.data.success) {
          const data = response.data.data;
          setnTitulo(data[0].nTitulo);
          setNosotros(data[0].nosotros);
          setMision(data[0].mision);
          setVision(data[0].vision);

        } else {
          console.error("Error al obtener los ajusts del sistema:", response.data.message);
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" style={{position:"relative", top:"-200px"}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom style={{color:"#18a0a6", fontSize:"16px"}}>
            NOSOTROS
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom style={{fontSize:"36px", fontWeight:"bold"}}>
            {nTitulo}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {nosotros}
            <br></br>
            <br></br>
            <strong>Misión:</strong> {mision} 
            <br></br>
            <br></br>
            <strong>Nuestra Visión:</strong>  {vision}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={ImgNosotros}
            alt="Image"
            style={{
              width: "100%",
              height: "550px",
              objectFit: "cover",
              borderRadius:"15px"
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default NosotrosHomeMain;

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from '../../components/responsiveAppBar/ResponsiveAppBar';
import Footer from '../../components/footer/Footer';

function Invoice() {
    const [clientName, setClientName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    const [total, setTotal] = useState(0);
  
    const calculateTotal = () => {
      const total = quantity * unitPrice;
      setTotal(total);
    };

  return (
    <>
      <Navbar />
      <Box component="form" sx={{ '& > :not(style)': { m:  1, width: '25ch' },boxShadow:  3, 
            p:  2, 
            borderRadius:  1, 
            marginTop:  2, 
            marginBottom:  2,  }}>
      <Typography variant="h4" gutterBottom sx={{
      color: 'primary.main', // Cambia el color del texto al color primario del tema
      textAlign: 'center', // Centra el texto horizontalmente
      fontWeight: 'bold', // Hace el texto en negrita
      padding: '14px  0', // Añade un padding vertical para darle más espacio
      fontFamily: 'calibri', 
    }}>
      Factura
    </Typography>
      <TextField label="Nombre del Cliente" value={clientName} onChange={(e) => setClientName(e.target.value)} />
      <TextField label="Descripción del Producto" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
      <TextField label="Cantidad" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <TextField label="Precio Unitario" type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
      <Button variant="contained" onClick={calculateTotal}>Calcular Total</Button>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
    </Box>
      <Footer />
    </>
  );
}

export default Invoice;

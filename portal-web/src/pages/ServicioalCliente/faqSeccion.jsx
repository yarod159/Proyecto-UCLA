import { Button } from "@mui/material";
import UserNavBar from "../../components/UserNavBar/UserNavBar.jsx";
import Footer from "../../components/footer/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import './servCliente.css'
import React, { useState, useEffect } from "react";
import FaqSeccion from "../Home/components/FAQ/Faq.jsx";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const faqSeccion = () => {
 

  return (
    
    <div className="container-servicio-cliente">
      
      <UserNavBar />

      <div className="wrapper-servicio-cliente">
        <div>
           <FaqSeccion />
        </div>
 
      </div>
      <Footer />
    </div>
  );

};

export default faqSeccion;
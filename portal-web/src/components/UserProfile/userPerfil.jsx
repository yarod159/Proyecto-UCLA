import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import EditIcon from '@mui/icons-material/Edit';

import './userPerfil.css'


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


const UserPerfil = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="container-user-profile">
      <div className="wrapper-user-profile">
        <div className="user">
          <div className="userContainer">
            <div className="userUpdate">
              <span className="userUpdateTitle">Perfil</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  
                    <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img
                        className="userUpdateImg"
                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        />
                        <label htmlFor="file">
                        <IconButton aria-label="upload picture" component="span">
                            <PublishIcon />
                        </IconButton>
                        </label>
                        <input type="file" id="file" style={{ display: 'none' }} />
                    </div>
                    </div>
                  
                  
                  <div className="userUpdateItem1">
                    


                      <List component="nav">

                      <ListItem sx={{textAlign:'center', 
                      bgcolor:'#18a0a6', 
                      marginTop:'-10px', 
                      borderTopLeftRadius:'12px', 
                      borderTopRightRadius:'12px',
                      color:'#fff'}}>
                        <ListItemText >
                          Informacion General
                        </ListItemText>
                        
                      </ListItem>
                        <ListItem>
                        <DriveFileRenameOutlineIcon />
                          <ListItemText primary="Nombre: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon />
                          </IconButton>
                        </ListItem>
                        

                        <Divider />
                        <ListItem>
                        <PersonIcon />
                          <ListItemText primary="Apellido: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon />
                          </IconButton>
                        </ListItem>

                        <Divider />
                        <ListItem>
                        <BadgeIcon />
                          <ListItemText primary="Cédula: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon />
                          </IconButton>
                        </ListItem>

                        <Divider />
                        <ListItem>
                          <CalendarMonthIcon />
                          <ListItemText primary="Fecha de nacimiento: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon />
                          </IconButton>
                        </ListItem>
                      </List>




                  </div>
                    

                  <div className="userUpdateItem1">

                    <List component="nav">

                    <ListItem sx={{textAlign:'center', 
                      bgcolor:'#18a0a6', 
                      marginTop:'-10px', 
                      borderTopLeftRadius:'12px', 
                      borderTopRightRadius:'12px',
                      color:'#fff'}}>
                        <ListItemText >
                          Contacto
                        </ListItemText>
                        
                      </ListItem>
                      <ListItem>
                         <MarkEmailReadIcon />
                        <ListItemText primary="Correo: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon /> 
                          </IconButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                        <PhoneAndroidIcon />
                          <ListItemText primary="Teléfono: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon /> 
                          </IconButton>
                        </ListItem>
                      
                      <Divider />
                        <ListItem>
                        <HomeIcon />
                          <ListItemText primary="Dirección: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon /> 
                          </IconButton>
                        </ListItem>
                      </List>

                  </div>

                  <div className="userUpdateItem1" >

                  

                    <List component="nav">

                      <ListItem sx={{textAlign:'center', 
                      bgcolor:'#18a0a6', 
                      marginTop:'-10px', 
                      borderTopLeftRadius:'12px', 
                      borderTopRightRadius:'12px',
                      color:'#fff'}}>
                        <ListItemText >
                          Seguridad
                        </ListItemText>
                        
                      </ListItem>
                        

                      <ListItem>
                      <AccountCircleIcon />
                        <ListItemText primary="Usuario: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon /> 
                          </IconButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                        <HttpsIcon />
                          <ListItemText primary="Contraseña: " />
                          <IconButton edge="end" aria-label="comments">
                          <EditIcon /> 
                          </IconButton>
                        </ListItem>
                      </List>

                  </div>

                </div>
                
                <Button variant="contained" color="primary"  sx={{alignItems:'center'}}>
                  Save Changes
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPerfil;
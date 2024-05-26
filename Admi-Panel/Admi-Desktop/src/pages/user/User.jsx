import { useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/SideBar";
import BadgeIcon from '@mui/icons-material/Badge';
import SidebarMui from "../../components/sideBar/SidebarMui";
import { getUsuarioProfileRequest } from "../../api/tablaProfile";
import { putUsuarioEmpleadoRequest, getRolRequest } from "../../api/userAEmpleado";
import { userData } from "../../data";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const roles = [
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
  { label: "Empleado", value: "empleado" },
];

const ocupacion=[
  { label: "Limpieza", value: "limpieza" },
  { label: "Tecnico", value: "tecnico" },
]




export default function User() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedOcupacion, setSelectedOcupacion] = useState("");
  const [availableRoles, setAvailableRoles] = useState(roles);


  const [data, setData] = useState([]);
  let { userId } = useParams();
  console.log("holaaa", userId);

  const [userInfo, setUserInfo] = useState({
    name:"",
    apellido: "",
    email:"",
    cedula: "",
    fechaNacimiento: "",
    direccion: "",
    telefono: "",
  });


  // Función para cargar los roles disponibles
  const fetchRoles = async () => {
    try {
      const response = await getRolRequest(userId);
      // Actualiza availableRoles con el nuevo rol obtenido
      setAvailableRoles(prevRoles => [...prevRoles, response.role]);
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  };
  

  useEffect(() => {
    getProfileData();
    fetchRoles(); // Llama a fetchRoles para cargar los roles disponibles
  }, []);


  const getProfileData = async () => {
    const resp = await getUsuarioProfileRequest(userId);
    console.log(resp)
    setUserInfo({
      name:resp.data.name,
      apellido: resp.data.apellido,
      cedula: resp.data.cedula,
      email:resp.data.user.email,
      fechaNacimiento: new Date(resp.data.dateCumple).toLocaleDateString(),
      direccion: resp.data.direccion,
      telefono: resp.data.telefono,
      role:resp.data.user.role,
    });
    setSelectedRole(resp.data.role || ""); 
  };

  useEffect(() => {
    getProfileData();
  }, []);

  console.log("userInfo:", userInfo);

  const handleChange = async (event, value) => {
    // Antes de llamar a putUsuarioEmpleadoRequest, extraemos el string del objeto seleccionado
    const roleString = value? value.value : ""; // Si no se selecciona ninguna opción, usamos un string vacío o el valor predeterminado que prefieras
  
    setSelectedRole(roleString); // Actualizamos el estado con el string del rol
    try {
      const updatedData = await putUsuarioEmpleadoRequest(userId, roleString); // Pasamos el string del rol a la función de actualización
      console.log('Rol actualizado exitosamente:', updatedData);
      getProfileData();
    } catch (error) {
      console.error('Falló al actualizar el rol:', error);
      // Maneja el error, por ejemplo, muestra un mensaje de error
    }
  };
  

  const handleChangeOcupacion = (event, value) => {
    setSelectedOcupacion(value);
  };

  return (
    <div>
      <div className="container">
        <SidebarMui />

        <div className="user">
          
          <div className="userContainer">
            <div className="userShow" >
              <div className="userShowTop">
               
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Datos del Usuario</span>
                
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Detalles de Cuenta</span>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{userInfo.name} {userInfo.apellido}</span>
                </div>
                <div className="userShowInfo">
                  <BadgeIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{userInfo.cedula}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarTodayIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {userInfo.fechaNacimiento}
                  </span>
                </div>
                <span className="userShowTitle">Detalles de Contactos</span>
                <div className="userShowInfo">
                  <AlternateEmailIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{userInfo.email}</span>
                </div>
                <div className="userShowInfo">
                  <PhoneAndroidIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{userInfo.telefono}</span>
                </div>
                
                <div className="userShowInfo">
                  <LocationSearchingIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {userInfo.direccion}
                  </span>
                </div>

                 
                <div className="userShowInfo">
                  <AssignmentIndIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {userInfo.role}
                  </span>
                </div>
                <div className="userShowInfo" style={{display:'flex', flexDirection:'column'}}>
                  <div className="userUpdateItem">
                    <Autocomplete
                      id="role-selector"
                      options={roles}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Seleccionar Rol" />
                      )}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                  <TextField id="outlined-basic" label="Ocupacion de trabajo" variant="outlined"  sx={{width:'300px'}}/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

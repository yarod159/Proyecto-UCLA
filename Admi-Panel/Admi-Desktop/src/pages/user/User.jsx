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

import SidebarMui from "../../components/sideBar/SidebarMui";
import { getUsuarioProfileRequest } from "../../api/tablaProfile";
import { userData } from "../../data";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
];

export default function User() {
  const [selectedRole, setSelectedRole] = useState("");

  const [data, setData] = useState([]);
  let { userId } = useParams();
  console.log("holaaa", userId);

  const [userInfo, setUserInfo] = useState({
    apellido: "",
    cedula: "",
    fechaNacimiento: "",
    direccion: "",
    telefono: "",
  });

  const getProfileData = async () => {
    const resp = await getUsuarioProfileRequest(userId);
    setUserInfo({
      apellido: resp.data.apellido,
      cedula: resp.data.cedula,
      fechaNacimiento: resp.data.dateCumple,
      direccion: resp.data.direccion,
      telefono: resp.data.telefono,
    });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  console.log("userInfo:", userInfo);

  const handleChange = (event, value) => {
    setSelectedRole(value);
  };

  return (
    <div>
      <div className="container">
        <SidebarMui />

        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Datos del Usuario</h1>
           
          </div>
          <div className="userContainer">
            <div className="userShow" >
              <div className="userShowTop">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Nombre</span>
                
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{userInfo.apellido}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarTodayIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {userInfo.fechaNacimiento}
                  </span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroidIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{userInfo.telefono}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutlineIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    annabeck99@gmail.com
                  </span>
                </div>
                <div className="userShowInfo">
                  <LocationSearchingIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {userInfo.direccion}
                  </span>
                </div>
                <div className="userShowInfo">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

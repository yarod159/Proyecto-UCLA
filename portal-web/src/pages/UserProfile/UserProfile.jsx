import React from "react";

import UserNavBar from "../../components/UserNavBar/UserNavBar";
import Footer from "../../components/footer/Footer";
import UserPerfil from "../../components/UserProfile/userPerfil.jsx";
import './UserProfile.css'





const UserProfile = () => {
 
  return (
    <div className="container-user-profile">
      <UserNavBar />

      <div className="wrapper-user-profile">

        <UserPerfil />

      </div>
      
      <Footer />

    </div>
  );
};

export default UserProfile;

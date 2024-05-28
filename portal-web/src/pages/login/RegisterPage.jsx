import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../shemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./register.css";
import "./login.css";

import { createProfileRequest} from "../../api/profile";
import axios from "axios";

function RegisterPage() {
  
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    console.log(value)
    // await axios.post(`/auth/registerFull`, user);
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  return (
    <div className="register-box">
      <p className="back-button-container">
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <FontAwesomeIcon icon={faArrowLeft} /> Atrás
        </Link>
      </p>

      <h2 style={{ color: "#18a0a6" }}>Registrate</h2>
      <form onSubmit={handleSubmit((value) => {onSubmit(value); console.log('el valoooor!', value)})} >
        <div className="wrapperUser" >
        <div className="user-box">
        
          <input
            name="email"
            placeholder="ejemplo@gmail.com"
            {...register("email")}
            style={{ color: "#000" }}
          />
          {errors.email?.message && (
            <p className="error-message">{errors.email?.message}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            {...register("password")}
            style={{ color: "#000" }}
          />
          {errors.password?.message && (
            <p className="error-message">{errors.password?.message}</p>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            style={{ color: "#000" }}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="error-message" style={{ color: "#000" }}>
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>

    
        </div>
        <button style={{ background: "#18a0a6", display:'flex',marginTop:'40px',justifyContent:'center', alignItems:'center', margin:'0 auto' }}>Registrar</button>
      </form>
      <p style={{ marginTop: 40 }}>
        ¿Estas Registrado?
        <Link className="link" to="/login" style={{ color: "#18a0a6" }}>
          {" "}
          Ingresar
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;



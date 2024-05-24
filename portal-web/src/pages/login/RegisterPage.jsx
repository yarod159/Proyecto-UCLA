import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext"; 
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../shemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './register.css';
import './login.css'; 

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
      await signup(value);
    };
  
    useEffect(() => {
      if (isAuthenticated) navigate("/home");
    }, [isAuthenticated]);
  
    return (
      <div className="login-box">
        <p className="back-button-container">
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faArrowLeft} /> Atrás
          </Link>
        </p>
          
          <h2>Registrate</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              {...register("name")}
              autoFocus
            />
            {errors.name?.message && (
              <p className="error-message">{errors.username?.message}</p>
            )}
            <input
              name="email"
              placeholder="ejemplo@gmail.com"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="error-message">{errors.email?.message}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="contraseña"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="error-message">{errors.password?.message}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="error-message">{errors.confirmPassword?.message}</p>
            )}
            </div>
            <button>Registrar</button>
          </form>
          <p>
            Estas Registrado?
            <Link className="link" to="/login">Ingresar</Link>

          </p>
        </div>
      
    );
  }
  

  
  export default RegisterPage;
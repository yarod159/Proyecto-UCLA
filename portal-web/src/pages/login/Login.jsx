import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../shemas/auth";
import './login.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono

const Login = function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  // Función para manejar el clic en el botón "Atrás"
  const goBackToHome = () => {
    navigate('/home'); // Regresa al inicio
  };

  return (
    <div>
      <div className="login-box">
        <p className="back-button-container">
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FontAwesomeIcon icon={faArrowLeft} /> Atrás
          </Link>
        </p>
        <p>


        </p>
        <h2 style={{color:'#18a0a6'}}>Iniciar Sesión</h2>
       
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-box">
            <input
              type="email"
              name="email"
              placeholder="Correo"
              {...register("email", { required: true })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              {...register("password", { required: true, minLength: 6 })}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button style={{background:'#18a0a6'}}>Ingresar</button>
        </form>
        <p style={{marginTop: 26}}>
          No estás registrado? <Link to="/register">Registrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
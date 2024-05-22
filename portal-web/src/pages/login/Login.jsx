import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../shemas/auth";
import './login.css'; 

const Login= function Login() {
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
  

  return (
    <div>
      <div className="login-box">
        
        <h2 >Iniciar Sesión</h2>

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
          <button>Ingresar</button>
        </form>
       
        <p>
          No estás registrado? <Link to="/register" >Registrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
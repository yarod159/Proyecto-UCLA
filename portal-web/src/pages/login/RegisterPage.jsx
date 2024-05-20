import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext"; 
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../shemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import './register.css'

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
      <div className="register-container">
        <div>
          
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              name="name"
              placeholder="Write your name"
              {...register("name")}
              autoFocus
            />
            {errors.name?.message && (
              <p className="error-message">{errors.username?.message}</p>
            )}
  
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              placeholder="youremail@domain.tld"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="error-message">{errors.email?.message}</p>
            )}
  
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="error-message">{errors.password?.message}</p>
            )}
  
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="error-message">{errors.confirmPassword?.message}</p>
            )}
            <button>Submit</button>
          </form>
          <p>
            Already Have an Account?
            <Link className="link" to="/home">Login</Link>

          </p>
        </div>
      </div>
    );
  }
  
  export default RegisterPage;
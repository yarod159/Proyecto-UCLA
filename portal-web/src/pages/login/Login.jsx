import { useState } from "react";
import "./login.css";
import axios from 'axios';

function Login() {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null); // Maneja los errores
  const [formData, setFormData] = useState({ name: "", email: "", password: "" }); // Maneja los datos del formulario

  const handleToggle = () => {
    setActive(!active);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault(); // Previene el envío del formulario

    try {
      const response = await axios.post("http://localhost:3000/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data); // Maneja el registro exitoso
      setError(null); // Limpia los errores

    } catch (error) {
      console.error(error.response.data); // Registra el error para depuración
      setError(error.response.data?.message || "Registration failed"); // Mensaje de error para el usuario
    }
  };

 return (
    <div className="container-L">
      <div className={`container-login ${active ? "active" : ""}`}>
        <div className="form-container sign-up">
        <form onSubmit={handleRegistration}>
            <h1>Create Account</h1>
            <div className="social-icons"></div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" onClick={handleToggle}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="hidden" onClick={handleToggle}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Login;

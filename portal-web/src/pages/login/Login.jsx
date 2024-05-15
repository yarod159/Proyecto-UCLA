import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from 'axios';

function SuccessModal({ showModal, setShowModal }) {
  const navigate = useNavigate();

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>¡Registro exitoso!</h2>
          <p>Has sido registrado correctamente.</p>
          <button onClick={() => { setShowModal(false); navigate("/userHome"); }}>Ir al Home</button>
        </div>
      </div>
    )
  );
}

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
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
    event.preventDefault();
    console.log(formData); // Log the formData object

    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);
      setError(null);
      setShowModal(true);
    
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data?.message || "Registration failed");
    }
  };


  ////login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      console.log(response.data);

      // Store the JWT token in local storage
      localStorage.setItem('jwtToken', response.data.token);

      // Navigate to a new page
      navigate('/userHome');

    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data?.message || "Login failed");
    }
  };


  return (
    <div className="container-L">
      <div className={`container-login ${active ? "active" : ""}`}>
        <div className="form-container sign-up">
         <form onSubmit={handleSubmit}>
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
            <input type="email" placeholder="Email" name="email"
              value={email} 
              onChange={handleEmailChange} />
            <input type="password" placeholder="Password" name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        
        <div className="form-container sign-in">
        <form onSubmit={handleSubmit}> 
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
            <input type="email" placeholder="Email" name="email"
              value={email} 
              onChange={handleEmailChange} />
            <input type="password" placeholder="Password" name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
          <SuccessModal showModal={showModal} setShowModal={setShowModal} />
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
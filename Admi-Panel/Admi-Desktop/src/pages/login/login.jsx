import React from 'react';
import "./login.css";
import axios from 'axios';

class Login extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: '',
    };
 }

 handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
 }

 handleSubmit = async (event) => {
    event.preventDefault();
    const { usuario, password } = this.state;

    try {
      const response = await axios.get('http://localhost:3000/userDesktop/get-userDesktop', {
        usuario,
        password,
      });

      if (response.data.success) {
        this.props.history.push('/');
        console.log('Inicio de sesión exitoso');
      } else {
        alert('Credenciales incorrectas');
        console.log('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      alert('Error al realizar la solicitud');
    }
 }

 render() {
    return (
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <h2>Kinetika</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="usuario"
              required
              value={this.state.usuario}
              onChange={this.handleInputChange}
            />
            <label>Usuario</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Ingresar
          </a>
        </form>
      </div>
    );
 }
}

export default Login;




/*
import React from 'react';
import "./login.css";
import axios from 'axios';




class Login extends React.Component {
 render() {
    return (
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <h2>Kinetika</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Usuario</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Ingresar
          </a>
        </form>
      </div>
    );
 }
}

export default Login;
*/
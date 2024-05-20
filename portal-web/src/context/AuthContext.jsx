import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest } from "../api/auth";
import axios from "../api/axios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('context:',context)
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

const verifyTokenRequest = async () => {
  try {
    const response = await axios.get('http://localhost:3000/auth/verify');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error verifying token:', error);
    throw error;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);

      console.info('Esto es un res: ',res);

      if (res.status === 200) {
        setUser(res.data);
        //setIsAuthenticated(true);
        // Asegurarse de que el token se extraiga correctamente de la respuesta
        const token = res.data.token; // Ajuste según la estructura real de la respuesta
        localStorage.setItem('accessToken', token);
        console.log('Token almacenado:', localStorage.getItem('accessToken'));
      }
    } catch (error) {
      console.error(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  const signin = async (user) => {
    try {
      const { data } = await loginRequest(user);

      const res = data?.data;
      
      console.info('Esto es un token: ', res?.token);

      setUser(res?.user);
      setIsAuthenticated(typeof res?.token === 'string');
      // Extraer y almacenar el token de la misma manera
      const token = res?.token; // Ajuste según la estructura real de la respuesta
      localStorage.setItem('accessToken', token);
      console.log('Token almacenado:', localStorage.getItem('accessToken'));
    } catch (error) {
      console.error(error);
      // Considerar agregar manejo de errores aquí
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await verifyTokenRequest();
        if (!res.data) {
          setIsAuthenticated(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

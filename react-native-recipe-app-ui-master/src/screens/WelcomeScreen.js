import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z]).{8,}$/;
    return regex.test(String(password));
  }

  const handleLogin = () => {
    if (!validateEmail(email)) return alert("Correo electrónico no válido");
    if (!validatePassword(password)) return alert("Contraseña no válida");

    // EP DE VALIDACION DE DATOS Y LUEGO REDIRECCIONAMIENTO
    navigation.navigate("Main");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/kinetica-inicio.png")}
          style={styles.imgLogin}
        />

        <Text style={styles.title}>
          Servicio de internet, mantenimiento y venta
        </Text>

        <TextInput
          value={email}
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {
          email &&
          !validateEmail(email) &&
          <Text style={styles.errorText}>
            Correo electrónico no válido
          </Text>
        }

        <View style={styles.containerPass}>
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputPass}
            placeholder="Contraseña"
          />
          
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            <FontAwesome
              name={showPassword? "eye-slash" : "eye"}
              size={22}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {
          password &&
          !validatePassword(password) &&
          <Text style={styles.errorText}>
            Contraseña no válida
          </Text>
        }

        <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
          <Text style={styles.textLogin}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>

        <View style={styles.subContainer}></View>
      </View>
    </ ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#20a1a7",
  },

  imgLogin: {
    marginTop: 10,
    resizeMode: "cover",
    width: 400,
    height: 760,
  },

  title: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: -330,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 20,
    color: '#000',
  },

  containerPass: {
    width: '80%',
  },

  inputPass: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },

  iconContainer: {
    position: 'absolute',
    right: 0,
    top: -10,
    bottom: 0,
    width: 40,
    justifyContent: 'center',
  },

  errorText: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },

  btnLogin: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 15,
    width: "50%",
    alignItems: "center",
  },

  textLogin: {
    fontSize: 18,
    color: "#20a1a7",
    fontWeight: "700",
  },

  subContainer: {
    marginTop: 40
  },
});

export default WelcomeScreen;




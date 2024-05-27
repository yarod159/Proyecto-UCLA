import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,SafeAreaView ,Pressable, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from "@expo/vector-icons";
import COLORS from './colors';

const FormGarantia = ({ navigation }) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [attentionType, setAttentionType] = useState(null);
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [ arrow, setArrow ] = useState("down");

  const attentionTypes = ["Tipo de atención 1", "Tipo de atención 2"];

  function handleSubmit() {
    if (!name || !email || !phone || !attentionType || !date || !message) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }

    // Aquí puedes enviar los datos del formulario a tu servidor o base de datos
    Alert.alert('Éxito', 'Tu mensaje ha sido enviado.');
  }

  const renderDropdownIcon = () => {
    const a = arrow === "up" ? "angle-up" : "angle-down";
    return (
      <FontAwesome name={a} size={20} color="black" />
    );
  };

  return (
    <View style={styles.container } >
      <View style={ styles.header }> 
        <Pressable 
          onPress={() => navigation.goBack()} 
          style={ styles.back }   >
          <FontAwesome name={"arrow-circle-left"} size={28} color="#20a1a7" />  
        </Pressable> 
        <Text style={ styles.title }> 
          Solicitudes de garantía  
        </Text> 
      </View>
      
      <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
          Nombre Completo
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese sus nombres y apellidos"
        onChangeText={setName}
        value={name}
      />
        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
          Correo electronico
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo. Ej: kinetica@gmail.com"
        onChangeText={setEmail}
        value={email}
      />
      
      <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
          Numero de Telefono:
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un telefono de contacto. Ej: 0424555555"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />

      
      <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700", marginTop: 2 }}>
          Fecha:
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la fecha de realización del servicio"
        onChangeText={setDate}
        value={date}
      />
      
      <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
          Informacion adicional:
        </Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Breve descripción del problema"
        onChangeText={setMessage}
        value={message}
        multiline
      />
       <View style={ styles.spacing }></View>

        < View style={ styles.subContainer }>
          <TouchableOpacity  onPress={handleSubmit}
            style={styles.btnLogin}>
            <Text style={styles.textLogin}>
            Solicitar Garantia
            </Text>
            </TouchableOpacity>
            </View>
            </View>
 );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 20,
  },

  back: {
    marginTop: 2
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 10,
  },

  textLogin: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  subContainer: {
    alignItems: 'center',
  },
  
  subContainer: {
    marginLeft: 90,
    marginTop: 10,
    marginBottom: 26,
    backgroundColor: "#20a1a7",
    borderRadius: 20,
    paddingVertical: 15,
    width: "50%",
    alignItems: "center",
  },
  
  saveButtom: {
    overflow: 'hidden',
    width: "50%",
    
  },
 container: {
  padding: 20,
  marginTop: 1,
  resizeMode: "cover",
  width: 400,
  flex: 1,
  backgroundColor: "#fff"
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 6
 },
 SelectDropdown: 
 {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 10,
  padding: 10,
},},);

export default FormGarantia;
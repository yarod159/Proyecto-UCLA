import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,SafeAreaView ,Pressable, TouchableOpacity, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from "@expo/vector-icons";

const FormRM = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [estado, setEstado] = useState(null);
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [ arrow, setArrow ] = useState("down");
    const [tipoServicio, setTiposServicio ]= useState('');
    const [domicilio, setDomicilio ]= useState('');
    const [producto, setProducto ]= useState('');
    const [marca, setMarca]= useState('');
    const [modelo, setModelo ]= useState('');
  
    const tipoServicios = ["Reparacion", "Mantenimiento"];
    const estados = ["lara", "Mantenimiento"];
    
  
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
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={ styles.header }> 
          <Pressable 
            onPress={() => navigation.goBack()} 
            style={ styles.back }   >
            <FontAwesome name={"arrow-circle-left"} size={28} color="#20a1a7" />  
          </Pressable> 
          <Text style={ styles.title }> 
            Reparacion o mantenimiento 
          </Text> 
        </View>
        
        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Nombre Completo
          </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={setName}
          value={name}
        />
      
        
        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Numero de Telefono:
          </Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 0424555555"
          onChangeText={setPhone}
          value={phone}
          keyboardType="phone-pad"
        />

         <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Domicilio
          </Text>
        <TextInput
          style={styles.input}
          placeholder="urbaniuzacion"
          onChangeText={setDomicilio}
          value={domicilio}
        />

<Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
          Estado
        </Text>
  
        <SelectDropdown 
          data={estados } 
          onSelect={( selectedItem ) => { setEstado(selectedItem) }} 
          buttonTextAfterSelection={( selectedItem ) => { return selectedItem }} 
          rowTextForSelection={( item ) => { return item }} 
          buttonStyle={{ 
            width: "100%", 
            backgroundColor: "#fff", 
            height: 40, 
            borderRadius: 20, 
            borderColor: 'gray', 
            borderWidth: 1,  
          }} 
          selectedRowStyle={{ 
            backgroundColor: "#20a1a7", 
            borderColor: "#fff", 
            borderWidth: 1, 
          }}
          defaultButtonText="Selecciona un servicio" 
          buttonTextStyle={{ 
            textAlign: 'left', 
            fontSize: 15, 
          }}
          onFocus={ () => setArrow("up") }
          onBlur={ () => setArrow("down") } 
          renderDropdownIcon={ renderDropdownIcon } 
        />


         <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Producto
          </Text>
        <TextInput
          style={styles.input}
          placeholder="ups"
          onChangeText={setProducto}
          value={producto}
        />
         <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Marca
          </Text>
        <TextInput
          style={styles.input}
          placeholder="lg"
          onChangeText={setMarca}
          value={marca}
        />
         <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Modelo
          </Text>
        <TextInput
          style={styles.input}
          placeholder="tp1234"
          onChangeText={setModelo}
          value={modelo}
        />
        
        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
          Seleccionar Servicio
        </Text>
  
        <SelectDropdown 
          data={tipoServicios } 
          onSelect={( selectedItem ) => { setTiposServicio(selectedItem) }} 
          buttonTextAfterSelection={( selectedItem ) => { return selectedItem }} 
          rowTextForSelection={( item ) => { return item }} 
          buttonStyle={{ 
            width: "100%", 
            backgroundColor: "#fff", 
            height: 40, 
            borderRadius: 20, 
            borderColor: 'gray', 
            borderWidth: 1,  
          }} 
          selectedRowStyle={{ 
            backgroundColor: "#20a1a7", 
            borderColor: "#fff", 
            borderWidth: 1, 
          }}
          defaultButtonText="Selecciona un servicio" 
          buttonTextStyle={{ 
            textAlign: 'left', 
            fontSize: 15, 
          }}
          onFocus={ () => setArrow("up") }
          onBlur={ () => setArrow("down") } 
          renderDropdownIcon={ renderDropdownIcon } 
        />
        
      


        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}>
            Informacion adicional:
          </Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descripción del problema"
          onChangeText={setMessage}
          value={message}
          multiline
        />
        <View style={ styles.spacing }></View>
  
  < View style={ styles.subContainer }>
  <TouchableOpacity  onPress={handleSubmit}
     style={styles.btnLogin}>
    <Text style={styles.textLogin}>
    Registrar Solicitud
    </Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
      </View>
   );
  };
  
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      marginTop: 25,
      marginBottom: 20,
    },
  
    back: {
      marginTop: 2
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
      width: "50%",  },
  
      spacing: {
        marginTop: 10,
      },
    title: {
      fontSize: 22,
      fontWeight: "700",
      marginLeft: 10,
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
      borderRadius: 20
   },
   SelectDropdown: 
   {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },},);
  

export default FormRM
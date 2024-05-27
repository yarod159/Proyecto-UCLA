import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Pressable,
    TouchableOpacity,
    ScrollView,
  } from 'react-native'
  import React, { useState } from 'react';
  import { FontAwesome } from "@expo/vector-icons";
  
  const Profile = ({ navigation }) => {
      const [nombre, setNombre] = useState("");
      const [apellido, setApellido] = useState("");
      const [cedula, setCedula] = useState("");
      const [fechaNacimiento, setFechaNacimiento] = useState("");
      const [correo, setCorreo] = useState("");
      const [telefono, setTelefono] = useState("");
      const [direccion, setDireccion] = useState("");
    
      const guardarCambios = () => {
        const data = {
          nombre,
          apellido,
          cedula,
          fechaNacimiento,
          correo,
          telefono,
          direccion,
        }
  
        console.log("DATA", data);
        // Alert.alert('Guardado', 'Los cambios han sido guardados exitosamente.');
      };

        return (
          <ScrollView style={styles.container}>
            <View style={ styles.header }> 
              <Pressable 
                onPress={() => navigation.goBack()} 
                style={ styles.back }   >
                <FontAwesome name={"arrow-circle-left"} size={28} color="#20a1a7" />  
              </Pressable> 
              <Text style={ styles.title }> Perfil </Text> 
            </View>
  
            {/* Info General */}
            <View style={ styles.subContainer }>
              <Text style={ styles.subTitle }> Información General </Text>
            </View>
  
            <Text style={styles.label}> Nombre </Text>
            <TextInput
              style={styles.input}
              value={nombre}
              onChangeText={(text) => setNombre(text)}
              placeholder="Nombre"
            />
  
            <Text style={styles.label}> Apellido </Text>
            <TextInput
              style={styles.input}
              value={apellido}
              onChangeText={(text) => setApellido(text)}
              placeholder="Apellido"
            />
  
            <Text style={styles.label}> Cedula </Text>
            <TextInput
              style={styles.input}
              value={cedula}
              onChangeText={(text) => setCedula(text)}
              placeholder="Cedula"
            />
  
            <Text style={styles.label}> Fecha de Nacimiento </Text>
            <TextInput
              style={[styles.input, {marginBottom: 20}]}
              value={fechaNacimiento}
              onChangeText={(text) => setFechaNacimiento(text)}
              placeholder="Fecha de Nacimiento"
            />
  
            {/* Contacto */}
  
            <View style={ styles.subContainer }>
              <Text style={ styles.subTitle }> Contacto </Text>
            </View>
            
            <Text style={styles.label}> Correo </Text>
            <TextInput
              style={styles.input}
              value={correo}
              onChangeText={(text) => setCorreo(text)}
              placeholder="Ej: kinetica@gmail.com"
            />
  
            <Text style={styles.label}> Teléfono </Text>
            <TextInput
              style={styles.input}
              value={telefono}
              onChangeText={(text) => setTelefono(text)}
              placeholder="Ej: 0424555555"
              keyboardType="phone-pad"
            />
  
            <Text style={styles.label}> Dirección </Text>
            <TextInput
              style={styles.input}
              value={direccion}
              onChangeText={(text) => setDireccion(text)}
              placeholder="Dirección"
            />
  
            <View style={ styles.vistabotton }>
            <TouchableOpacity  onPress={guardarCambios}
            style={styles.btnLogin}>
            <Text style={styles.textLogin}>
            Guardar cambios 
            </Text>
            </TouchableOpacity>
            </View>
  
            <View style={ styles.containerView }></View>
          </ScrollView>
        );
    };
    
  export default Profile
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 1,
      resizeMode: "cover",
      width: 400,
      flex: 1,
      backgroundColor: "#fff"
    },
  
    header: {
      flexDirection: "row",
      marginTop: 25,
      marginBottom: 20,
    },
    textLogin: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "700",
    },
    
    vistabotton: {
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
    back: {
      marginTop: 2
    },
  
    title: {
      fontSize: 22,
      fontWeight: "700",
      marginLeft: 10,
    },
  
    subTitle: {
      fontSize: 18,
      fontWeight: "700",
    },
  
    subContainer: {
      alignItems: 'center',
    },
  
    label: {
      fontSize: 18,
      color: "#20a1a7",
      fontWeight: "700",
    },
  
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      borderRadius: 20,
    },
  
    saveButtom: {
      overflow: 'hidden',
      width: '50%',
    },
  
    containerView: {
      marginTop: 30,
    }
  })
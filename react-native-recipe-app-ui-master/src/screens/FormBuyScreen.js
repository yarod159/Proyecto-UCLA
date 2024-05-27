import React, { useState } from "react"; 
import { StyleSheet, View, ScrollView, Text, SafeAreaView, Pressable, TextInput, Alert, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SelectDropdown from 'react-native-select-dropdown'

const FormBuyScreen = ({ route, navigation }) => {

  const { itemDetail } = route.params;
  const [ name, setName ] = useState("");
  const [ apellido, setApellido ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ error, setError ] = useState("");
  const [ state, setState ] = useState("");
  const [ municipio, setMunicipio ] = useState("");
  const [ direccionI, setDireccionI ] = useState("");
  const [ tipoServicio, setTiposServicio ] = useState("");
  const [ vivienda, setVivienda ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ arrow, setArrow ] = useState("down");

  const countries = ["Lara", "Zulia", "Tachira", "Sucre"];
  const municipios = ["irribarren", "union", "Torres", "palavecino"];
  const viviendaz = ["casa", "apartamento", "oficina", "conjunto residencial"];


  function handleSubmit() {
  
    // Aquí puedes enviar los datos del formulario a tu servidor o base de datos
    Alert.alert('Éxito', 'Tu solicitud a sido registrada.');
  }
  const handlePhoneNumberChange = (inputText) => {
    const numberRegex = inputText.replace(/[^0-9+]/g, '');
    setPhoneNumber(numberRegex);
  };


  const renderDropdownIcon = () => {
    const a = arrow === "up" ? "angle-up" : "angle-down";
    return (
      <FontAwesome name={a} size={20} color="black" />
    );
  };

  const focusSelect = () => {
    setArrow("up");
  };

  const blurSelect = () => {
    setArrow("down");
  };

  console.log("PASO", state,vivienda,municipio);

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={ styles.header }>
        <Pressable
          onPress={() => navigation.goBack()}
          style={ styles.back }
        >
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <Text style={ styles.title }>
          Solicitud de Servicios
        </Text>
      </View>
        
      <View style={ styles.bodyForm }>
        <View style={ styles.titleForm }>
          <Text style={ styles.textTitle }>
            Datos Generales
          </Text>
        </View>
        
        <View style={ styles.form }>
        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}> Nombre </Text>
          <TextInput
            value={ name }
            onChangeText={ setName}
            style={ styles.input }
            placeholder="Nombre Completo"
          />

<View style={ styles.spacing }></View>
          <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700"}}> Apellido </Text>
          <TextInput
            value={ apellido }
            onChangeText={ setApellido }
            style={ styles.input }
            placeholder="Apellido"
          />

          <View style={ styles.spacing }></View>
          <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}> Telefono </Text>
          <TextInput
            value={ phoneNumber }
            onChangeText={ handlePhoneNumberChange }
            style={ styles.input }
            maxLength={12}
            keyboardType="numeric"
            placeholder="Teléfono de contacto - Ejemplo: +584121234567"
          />

          <View style={ styles.spacing }></View>
          <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700"}}> Dirección de instalacion </Text>
          <TextInput
            value={ direccionI }
            onChangeText={ setDireccionI }
            style={ styles.input }
            placeholder="direccion - ejemplo: urbanizacion"
          />

          { error ? <Text style={ styles.errorText }> { error } </Text> : null }
          <View>
          <View style={ styles.spacing }></View>
          <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700"}}> Estado </Text>
          <SelectDropdown
            data={ countries }
            onSelect={( selectedItem ) => { setState(selectedItem) }}
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
            defaultButtonText="Selecciona un estado"
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: 15,
            }}
            onFocus={ () => setArrow("up") }
            onBlur={ () => setArrow("down") }
            renderDropdownIcon={ renderDropdownIcon }
          />

<View style={ styles.spacing }></View>
<Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700"}}> Municipio </Text>
          <SelectDropdown
            data={ municipios }
            onSelect={( selectedItem ) => { setMunicipio(selectedItem) }}
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
            defaultButtonText="Selecciona un municipio"
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: 15,
            }}
            onFocus={ () => setArrow("up") }
            onBlur={ () => setArrow("down") }
            renderDropdownIcon={ renderDropdownIcon }
          />
          </View>
          <View style={ styles.spacing }></View>
          <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700"}}> Servicio </Text>
          <TextInput
            value={ tipoServicio }
            onChangeText={ setTiposServicio }
            style={ styles.input }
            placeholder="el servicio seleccionado"
          />
           
           <View style={ styles.spacing }></View>
           <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}> Tipo Vivienda </Text>
          <SelectDropdown
            data={ viviendaz }
            onSelect={( selectedItem ) => { setVivienda(selectedItem) }}
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
            defaultButtonText="Tipo de Vivienda"
            buttonTextStyle={{
              textAlign: 'left',
              fontSize: 15,
            }}
            onFocus={ () => setArrow("up") }
            onBlur={ () => setArrow("down") }
            renderDropdownIcon={ renderDropdownIcon }
          />

          <View style={ styles.spacing }></View>
          <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700" }}> Precio  </Text>
          <TextInput
            value={ price }
            onChangeText={ setPrice }
            style={ styles.input }
            placeholder="aqui va monto del price deibys"
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
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20a1a7",
  },

  header: {
    flexDirection: "row",
    marginTop: 46,
    marginHorizontal: 16,
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
  back: {
    marginTop: 2
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 10,
    color: "#fff"
  },

  spacing: {
    marginTop: 10,
  },

  bodyForm: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    paddingHorizontal: 16,
  },

  titleForm: {
    marginTop: 20,
    alignItems: "center",
  },

  textTitle: {
    fontSize: 20,
    fontWeight: "600"
  },
  form: {
    marginTop: 15,
  },

  input: {
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },

  errorText: {
    color: 'red',
    marginTop: 2,
    marginLeft: 5,
  },

  arrowContainer: {
    marginLeft: 10,
  },

  arrow: {
      fontSize: 20,
      color: 'gray',
  },
});

export default FormBuyScreen;




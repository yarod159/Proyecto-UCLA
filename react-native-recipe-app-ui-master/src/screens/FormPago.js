import React, { useState } from "react"; 
import { StyleSheet, View, ScrollView, Text, SafeAreaView, Pressable, TextInput , TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SelectDropdown from 'react-native-select-dropdown'

const FormPago = ({ route, navigation }) => {

  const { itemDetail } = route.params;
  const [ cedula, setCedula ] = useState("");
  const [ referencia, setreferencia ] = useState("");
  const [ monto, setMonto ] = useState("");
  const [ fecha, setFecha] = useState("");
  const [ error, setError ] = useState("");
  const [ state, setState ] = useState("");
  const [ arrow, setArrow ] = useState("down");

  const Bancos = ["Banesco", "Banco Provincial", "Banco de Venezuela", "Otro"];
  const MetPagos = ["Transferencia mismo banco", "Transferencia terceros otros bancos", "Pago móvil", "Otro"];

  const handleCedula = (inputText) => {
    const numberRegex = inputText.replace(/[^0-9+]/g, '');
      setCedula(numberRegex);
    
  };

  const handlereferenciaChange = (inputText) => {
    const numberRegex = inputText.replace(/[^0-9+]/g, '');
    setreferencia(numberRegex);
  };

  const handleMontoChange = (inputText) => {
    const numberRegex = inputText.replace(/[^0-9+]/g, '');
    setMonto(numberRegex);
  };

  const validateEmail = (input) => {
    setError("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (input !== "") {
      emailRegex.test(input) ? setError("") : setError('Por favor, ingrese un correo electrónico válido');
    }
    setEmail(input);
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

  console.log("PASO", state);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <Pressable
          onPress={() => navigation.goBack()}
          style={ styles.back }
        >
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <Text style={ styles.title }>
          Formulario de pagos
        </Text>
      </View>
        
      <View style={ styles.bodyForm }>
        <View style={ styles.titleForm }>
          <Text style={ styles.textTitle }>
            Por favor rellene los datos
          </Text>
        </View>

        

        <View style={ styles.form }>

            <SelectDropdown
            data={ MetPagos }
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
            defaultButtonText="  Selecciona un método de pago"
            buttonTextStyle={{
                textAlign: 'left',
                fontSize: 15,
            }}
            onFocus={ () => setArrow("up") }
            onBlur={ () => setArrow("down") }
            renderDropdownIcon={ renderDropdownIcon }
            />

            <View style={ styles.spacing }></View>

            <SelectDropdown
            data={ Bancos }
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
            defaultButtonText="  Selecciona un banco"
            buttonTextStyle={{
                textAlign: 'left',
                fontSize: 15,
            }}
            onFocus={ () => setArrow("up") }
            onBlur={ () => setArrow("down") }
            renderDropdownIcon={ renderDropdownIcon }
            />

            <View style={ styles.spacing }></View>

          <TextInput
            value={ cedula }
            onChangeText={ handleCedula }
            style={ styles.input }
            placeholder="    Cédula del emisor"
          />

          <View style={ styles.spacing }></View>

          <TextInput
            value={ referencia }
            onChangeText={ handlereferenciaChange }
            style={ styles.input }
            maxLength={12}
            keyboardType="numeric"
            placeholder="    Referencia"
          />

          <View style={ styles.spacing }></View>

          <TextInput
            value={ monto }
            onChangeText={ handleMontoChange }
            style={ styles.input }
            maxLength={12}
            keyboardType="numeric"
            placeholder="    Monto"
          />

           <View style={ styles.spacing }></View>

           <TextInput
            value={ fecha}
            onChangeText={ setFecha}
            style={ styles.input }
            placeholder="    Fecha"
          />


          <View style={ styles.spacing }></View>

          <View style={ styles.subContainer }>
    <TouchableOpacity onPress={() => navigation.navigate("FormPagos", {
						itemDetail: item
					})} style={styles.btnLogin}>
          <Text style={styles.textLogin}>
            Registrar pago
          </Text>
        </TouchableOpacity>
            </View>

        </View>
      </View>
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
    marginTop: 15,
  },

  bodyForm: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
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
    marginTop: 20,
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

export default FormPago;




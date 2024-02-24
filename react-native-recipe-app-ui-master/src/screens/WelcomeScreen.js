import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" , backgroundColor:"#20a1a7" }}>
      <Image
        source={require("../../assets/images/kinetica-inicio.png")}
        style={{ marginTop: 75, resizeMode: "cover", width:400, height:750 }}
      />

      <Text style={{  color: "#ffff", fontSize: 30, fontWeight: "bold" ,marginTop:-300, paddingLeft:40 , paddingRight:40 , textAlign:"center", marginBottom: 20}}>
        Servicio de internet, matenimiento y venta
      </Text>

    

      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#fff",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#20a1a7", fontWeight: "700"}}>
           Iniciar Sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});

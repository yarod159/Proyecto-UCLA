import { StyleSheet, Text, View, Pressable, Button,TouchableOpacity } from 'react-native'
import {  SafeAreaView, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from 'react'
import CardtablaSolicitudes from '../components/CardtablaSolicitudes';

const Solicitudes = ({navigation, route}) => {
  const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 0 , marginTop: 0 }}>
    
        <View style={ styles.header }> 
        <Pressable 
          onPress={() => navigation.goBack()} 
          style={ styles.back }   >
          <FontAwesome name={"arrow-circle-left"} size={28} color="#20a1a7" />  
        </Pressable> 
        <Text style={ styles.title }> Historial Solicitudes </Text> 
      </View>
      <Text style={ styles.title }> Mis Solicitudes </Text>
                    <View style={{ marginTop: 16, flex: 1 }}>
               
    {/* card */}
    
    <CardtablaSolicitudes />
    </View>

    <View style={ styles.subContainer }>
    <TouchableOpacity onPress={() => navigation.navigate("FormPagos", {
						itemDetail: item
					})} style={styles.btnLogin}>
          <Text style={styles.textLogin}>
            Reportar Pago
          </Text>
        </TouchableOpacity>
            </View>

    </SafeAreaView>
    
      )
}

export default Solicitudes

const styles = StyleSheet.create({
    container: {
    padding: 20,
    marginTop: 1,
    resizeMode: "cover",
    width: 400,
    flex: 1,
    backgroundColor: "#fff"
  },
  textLogin: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  subContainer: {
    alignItems: 'center',
  },


  saveButtom: {
    overflow: 'hidden',
    width: "50%",
    
  },

  header: {
    flexDirection: "row",
    marginTop: 46,
    marginBottom: 20,
    marginHorizontal: 16,
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
    marginLeft: 90,
    marginTop: 10,
    marginBottom: 26,
    backgroundColor: "#20a1a7",
    borderRadius: 20,
    paddingVertical: 15,
    width: "50%",
    alignItems: "center",
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

  });
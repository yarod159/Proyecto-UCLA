import { StyleSheet, Text, View, Pressable } from 'react-native'
import {  SafeAreaView, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from 'react'
import CardNotificaciones from '../components/CardNotificaciones';

const Notificaciones = ( { navigation } ) => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 0 , marginTop: 0 }}>

    <View style={ styles.header }> 
    <Pressable 
      onPress={() => navigation.goBack()} 
      style={ styles.back }   >
      <FontAwesome name={"arrow-circle-left"} size={28} color="#20a1a7" />  
    </Pressable> 
    <Text style={ styles.title }> Notificaciones </Text> 
  </View>

                <View style={{ marginTop: 16, flex: 1 }}>
           
{/* card */}

<CardNotificaciones />
</View>
</SafeAreaView>

  )
}

export default Notificaciones

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
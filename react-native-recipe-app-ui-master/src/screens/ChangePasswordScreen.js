import {
    StyleSheet,
    Text,
    View,
    Button,
    Pressable,
    ScrollView,
  } from 'react-native'
  import React, { useState } from 'react';
  import { FontAwesome } from "@expo/vector-icons";
import InputPassword from '../components/InputPassword';
  
  const ChangePasswordScreen = ({ navigation }) => {
      const [currentPassword, setCurrentPassword] = useState("");
      const [showCurrent, setShowCurrent] = useState(false);
      const [newPassword, setNewPassword] = useState("");
      const [showNew, setShowNew] = useState(false);
      const [repeatPassword, setRepeatPassword] = useState("");
      const [showRepeat, setShowRepeat] = useState("");
    
      const guardarCambios = () => {
        const data = {
          currentPassword,
          newPassword,
          repeatPassword,
        }
        
        // EP de cambio de contrase#a
        console.log("DATA", data);
      };

        return (
          <ScrollView style={styles.container}>
            <View style={ styles.header }> 
              <Pressable 
                onPress={() => navigation.goBack()} 
                style={ styles.back }   >
                <FontAwesome name={"arrow-circle-left"} size={28} color="#20a1a7" />  
              </Pressable> 
              <Text style={ styles.title }> Contraseña </Text> 
            </View>
  
            <Text style={styles.label}> Contraseña Actual </Text>
            <InputPassword
              pass={currentPassword}
              setPass={setCurrentPassword}
              show={showCurrent}
              setShow={setShowCurrent}
            />
  
            <Text style={styles.label}> Crea una contraseña nueva </Text>
            <InputPassword
              pass={newPassword}
              setPass={setNewPassword}
              show={showNew}
              setShow={setShowNew}
            />
  
            <Text style={styles.label}> Vuelve a introducir tu nueva contraseña </Text>
            <InputPassword
              pass={repeatPassword}
              setPass={setRepeatPassword}
              show={showRepeat}
              setShow={setShowRepeat}
            />

            <View style={ styles.subContainer }>
              <Button
                title="Guardar Cambios"
                onPress={guardarCambios}
                style={styles.saveButtom}
              />
            </View>
          </ScrollView>
        );
    };
    
  export default ChangePasswordScreen
  
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
  
    back: {
      marginTop: 2
    },
  
    title: {
      fontSize: 22,
      fontWeight: "700",
      marginLeft: 10,
    },

    subContainer: {
      alignItems: 'center',
      marginTop: 10,
    },

    label: {
      fontSize: 18,
      color: "#20a1a7",
      fontWeight: "700",
    },
  
    saveButtom: {
      overflow: 'hidden',
      width: '50%',
    },
  })
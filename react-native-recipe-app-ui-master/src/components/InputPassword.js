import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native'
  import React from 'react';
  import { FontAwesome } from "@expo/vector-icons";
  
  const InputPassword = ({ pass, setPass, show, setShow }) => {
    return (
      <View>
        <TextInput
          value={pass}
          secureTextEntry={!show}
          onChangeText={(text) => setPass(text)}
          style={styles.input}
        />
        
        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={styles.iconContainer}
        >
          <FontAwesome
            name={show? "eye-slash" : "eye"}
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>
    );
    };
    
  export default InputPassword
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 10,
      paddingLeft: 15,
    },

    iconContainer: {
      position: 'absolute',
      right: 0,
      top: -10,
      bottom: 0,
      marginRight: 15,
      width: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  })
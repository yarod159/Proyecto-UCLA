import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import Header from "../components/Header";
import Cardhome from "../components/Cardhome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScream = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    // EP para cerrar sesion aqui
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
			<Header
        headerIcon2={"gear"}
        headerText={"Bienvenido "}
        headerIcon={"bell-o"}
        onPress={toggleMenu}
      />

      { isMenuOpen && (
				<View style={styles.menu}>
					<TouchableOpacity
						onPress={() => navigation.navigate('ChangePassword')}
						style={styles.menuItem}
					>
						<View style={styles.iconTextContainer}>
							<MaterialCommunityIcons name="key" size={30} color="white" />
							<Text style={styles.menuItemText}> Cambiar Contraseña </Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={logout}
						style={styles.menuItem}
					>
						<View style={styles.iconTextContainer}>
							<MaterialCommunityIcons name="account" size={30} color="white" />
							<Text style={styles.menuItemText}> Cerrar Sesión </Text>
						</View>
					</TouchableOpacity>
				</View>
      )}

      <View style={styles.containerCard}>
        <Cardhome />
      </View>
    </SafeAreaView>
  )
}

export default HomeScream; 

const styles = StyleSheet.create({
	container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 40,
  },

  containerCard: {
    marginTop: 16,
    flex: 1,
  },

  menu: {
    backgroundColor: '#20a1a7',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },

  menuItem: {
		borderWidth: 1,
		borderColor: '#ffff',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginBottom: 10,
	},

  iconTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	
	menuItemText: {
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
		marginLeft: 10,
	},
});


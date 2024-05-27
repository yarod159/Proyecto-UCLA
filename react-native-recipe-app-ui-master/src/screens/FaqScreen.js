import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import CardFaq from "../components/cardFaq";
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FaqScreen = ({ navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        // EP para cerrar sesion aqui
        navigation.navigate('Welcome');
      }; 

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 44 }}>
            {/* render header */}
            <Header headerText={"Atención al Cliente"}
                headerIcon2={"gear"} // Cambia a "bars" para un ícono de hamburguesa
                onPress={toggleMenu}  />

            {/* Menú personalizado */}
            {isMenuOpen && (
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

            {/* Lista de Cards de Preguntas Frecuentes */}
            <View contentContainerStyle={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>FAQ</Text>
                {/* Lista de Preguntas */}

                <CardFaq />
            </View>
        </SafeAreaView>
    );
};

export default FaqScreen;

const styles = StyleSheet.create({
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
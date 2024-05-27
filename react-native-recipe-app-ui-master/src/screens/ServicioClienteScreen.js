import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from "../components/Header";
import CardServicioCliente from '../components/CardServicioCliente';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './colors';

import { contacto } from "../Constant";

const ServicioClienteScreen = ({navigation}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        // EP para cerrar sesion aqui
        navigation.navigate('Welcome');
        };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 15, marginTop: 40 }}>
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

            <ScrollView contentContainerStyle={{ marginTop: 16 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    {/* card */}
                    <CardServicioCliente />
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default ServicioClienteScreen;

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

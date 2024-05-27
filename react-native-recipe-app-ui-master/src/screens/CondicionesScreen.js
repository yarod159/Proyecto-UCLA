import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import CardCondiciones from "../components/cardCondiciones";
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CondicionesScreen = ({ navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    console.log("paso")

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 44 }}>
            {/* render header */}
            <Header headerText={"Atención al Cliente"}
                headerIcon={"bars"} // Cambia a "bars" para un ícono de hamburguesa
                onPress={toggleMenu}  />

            {/* Menú personalizado */}
            {isMenuOpen && (
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('ServicioCliente')} style={styles.menuItem}>
                        <View style={styles.iconTextContainer}>
                            <MaterialCommunityIcons name="account-edit" size={30} color="white" />
                            <Text style={styles.menuItemText}>Atencion al cliente </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.menuItem}>
                        <View style={styles.iconTextContainer}>
                            <MaterialCommunityIcons name="account" size={30} color="white" />
                            <Text style={styles.menuItemText}>Perfil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenName3')} style={styles.menuItem}>
                        <View style={styles.iconTextContainer}>
                            <MaterialCommunityIcons name="bell" size={30} color="white" />
                            <Text style={styles.menuItemText}>Notificacion</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenName3')} style={styles.menuItem}>
                        <View style={styles.iconTextContainer}>
                            <MaterialCommunityIcons name="account-group" size={30} color="white" />
                            <Text style={styles.menuItemText}>Nosotros</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            {/* Lista de Cards de Preguntas Frecuentes */}
            <View contentContainerStyle={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Condiciones</Text>
                {/* Lista de Preguntas */}

                <CardCondiciones />
            </View>
        </SafeAreaView>
    );
};

export default CondicionesScreen;

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
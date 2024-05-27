import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import CardServicioOfrecido from "../components/cardServicioOfrecido";
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from "@expo/vector-icons";

const ServicioListaScreen = ({ navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 44 }}>
            {/* render header */}
            <Header headerText={"   Nuestros Servicios"}
                headerIcon2={"arrow-circle-left"} // Cambia a "bars" para un ícono de hamburguesa
                onPress={() => navigation.goBack()}  />

            {/* Lista de Cards de Servicios Ofrecidos */}
            <View Style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Servicios Ofrecidos</Text>
                {/* Lista de Servicios */}
                <CardServicioOfrecido />
            </View>
        </SafeAreaView>
    );
};

export default ServicioListaScreen;

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

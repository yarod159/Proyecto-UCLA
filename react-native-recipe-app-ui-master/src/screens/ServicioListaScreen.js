import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Pressable} from "react-native";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from "@expo/vector-icons";

const ServicioListaScreen = ({ navigation }) => {
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
            <Header headerText={"Nuestros Servicios"}
                
                
                headerIcon2={"gear"}  
                onPress={toggleMenu} />

            {/* Menú personalizado */}
            {isMenuOpen && (
                <View style={styles.menu}>
        
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
            {/* Lista de Cards de Servicios Ofrecidos */}
            <View Style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Servicios</Text>
                {/* Lista de Servicios */}
                <ServiceCard />
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
    header: {
        flexDirection: "row",
        marginTop: 25,
        marginBottom: 20,
      },
});

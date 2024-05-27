import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Pressable } from "react-native";
import Header from "../components/Header";
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../screens/colors';
import gar from "../../assets/images/gar.png";
import form from "../../assets/images/form.png";
import { FontAwesome } from "@expo/vector-icons";

const GarantiaScreen = ({ navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 44 }}>
            {/* render header */}
            <Header headerText={"Atención al Cliente"}
                headerIcon2={"arrow-circle-left"} // 
                onPress={() => navigation.goBack()}   />

            {/* Menú personalizado */}


            {/* Lista de Cards de Preguntas Frecuentes */}
            <View contentContainerStyle={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Garantías</Text>
                {/* Lista de Preguntas */}

                <View style={{
             
                    alignItems: 'center',
                    marginBottom: 40,
                    height: 260

                }}>
                    <Image
                        source={gar}
                        style={{ width: 240, height: 240, resizeMode: "center" }}
                    />

                    <Text style={{fontSize: 18, fontWeight: 700, color: COLORS.gris, textAlign: "center", marginTop: 12, }}>
                        En esta sección podras encontrar todo lo que necesites para nuestras garantías.
                    </Text>

                </View>
                
                
                <Pressable
                    onPress={() => navigation.navigate("FormGarantia")}
                    style={{
                        backgroundColor: COLORS.huevo,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        borderRadius: 16,
                        marginVertical: 8,
                        alignItems: "center",
                        paddingHorizontal: 0,
                        paddingVertical: 24,
                        marginTop:20
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
                        <Image
                            source={form}
                            style={{ width: 180, height: 180, resizeMode: "center" }}
                        />
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%', marginTop: 20 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginLeft: 0, marginTop: 16 }}>Solicitud de garantías</Text>
                            <Text style={{ fontSize: 14, color: '#fff', marginTop: 4, textAlign: 'center', marginLeft: 2, marginRight: 16 }}>
                                A través de este formulario podrás solicitar la garantía del servicio que te hemos brindado.
                            </Text> 
                        </View>
                    </View>
                    
                            
                </Pressable>


                <Pressable
					onPress={() => navigation.navigate("Condiciones")}
                    style={{
							
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 4 },
						shadowOpacity: 0.1,
						shadowRadius: 7,
						borderRadius: 16,
						borderColor: COLORS.gris,
						borderWidth: 3,
						marginVertical: 8,
						alignItems: "center",
						paddingHorizontal: 0,
						paddingVertical: 14,
                        marginTop:12
					}}> 
                
                    <View style={{  alignItems: 'center'  }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.gris, textAlign: 'center', marginLeft: 0, marginTop: 0 }}>Condiciones de las garantías</Text>
                        </View>
                    </View>

                </Pressable>

            </View>
        </SafeAreaView>
    );
};

export default GarantiaScreen;

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
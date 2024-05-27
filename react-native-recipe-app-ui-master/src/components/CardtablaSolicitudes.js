import { View, Text } from 'react-native'
import {
	FlatList,
	StyleSheet,
	Image,
	Pressable,
} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Notificaciones, colors, tablaSolicitudes} from '../Constant';
import COLORS from '../screens/colors';

const CardtablaSolicitudes = () => {
    const navigation = useNavigation();
    return (
        <View>         
            <FlatList				
                data={tablaSolicitudes}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate("ListaDeServicios", { item: item })}
                        style={{
                            
                            shadowColor: "#000",
                            shadowOffset: { width: 8, height: 10 },
                            shadowOpacity: 0.1,
                            shadowRadius: 7,
                            borderRadius: 16,
                            borderColor: COLORS.huevo,
							borderWidth: 3,
                            marginVertical: 0,
                            marginHorizontal: 15,
                            alignItems: "center",
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                        }}
                        >
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Nro Solicitud:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Empleado:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Servicio:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Fecha:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Tipo Servicio:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Metodo de Pago:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Referencia:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Modalidad:</Text>
                        <Text style={{ color: '#000' , fontSize: 16, fontWeight: "bold",marginTop: 4 }}> Estatus:</Text>
                        </View>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '60%' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginLeft: 10,marginTop: 4 }}>{item.Idcliente}</Text>
                            <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.NombreEmpleado}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.IDservicio}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.fecha}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.tiposervicio}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.Metodo}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.REferentep}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.Modalidad}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 4 }}>{item.Estatus}</Text> 
                            </View>
                        </View>
                    </Pressable>
                    )}
                showsVerticalScrollIndicator={false}
                />
        </View>
            )
}

export default CardtablaSolicitudes
import { View, Text } from 'react-native'
import {
	FlatList,
	StyleSheet,
	Image,
	Pressable,
} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Notificaciones, colors} from '../Constant';
import COLORS from '../screens/colors';

const CardNotificaciones = () => {
    const navigation = useNavigation();
    return (
        <View>         
            <FlatList				
                data={Notificaciones}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate("ListaDeServicios", { item: item })}
                        style={{
                            backgroundColor: colors.COLOR_LIGHT,
                            shadowColor: "#000",
                            shadowOffset: { width: 8, height: 10 },
                            shadowOpacity: 0.1,
                            shadowRadius: 7,
                            borderRadius: 16,
                            borderColor: COLORS.huevo,
							borderWidth: 3,
                            marginVertical: 5,
                            marginHorizontal: 8,
                            alignItems: "center",
                            paddingHorizontal: 9,
                            paddingVertical: 10,
                        }}
                        >
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
                        <Image
                            source={item.image}
                            style={{ width: 140, height: 150, resizeMode: "center" }}
                        />
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '60%' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: 10,marginTop: 15 }}>{item.Titulo}</Text>
                            <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 8 }}>{item.asunto}</Text> 
                                    <Text style={{ fontSize: 16, color: '#000', marginLeft : 10, marginTop: 8 }}>{item.description}</Text> 
                            </View>
                        </View>
                    </Pressable>
                    )}
                showsVerticalScrollIndicator={false}
                />
        </View>
            )
}

export default CardNotificaciones
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, ListaDeServicios, ServiciosOfrecidos } from "../Constant";
import COLOR from "../screens/colors"
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-elements/dist/helpers";

const cardServicioOfrecido = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={ServiciosOfrecidos}
				style={{marginBottom: 130}}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate(item.navigate, { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 20,
							marginVertical: 8,
							alignItems: "center",
							paddingHorizontal: 20,
							paddingVertical: 22,
                            marginTop:10,
							margin:10,

						}}
					>
						<Image
							source={item.image}
							style={{ width: 180, height: 180, resizeMode: "center" }}
						/>
						<Text style={{fontSize: 24, fontStyle: "italic", fontWeight: "600", marginTop: 8, color: COLOR.huevo}}>{item.nombre}</Text>
						
					</Pressable>
				)}
				numColumns={1}

				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default cardServicioOfrecido;

const styles = StyleSheet.create({});

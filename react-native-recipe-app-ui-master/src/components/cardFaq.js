import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, ListaDeServicios, ListaDePreguntas } from "../Constant";
import COLOR from "../screens/colors"
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-elements/dist/helpers";

const cardFaq = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={ListaDePreguntas}
				style={{marginBottom: 130}}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("DetalleFaq", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 20,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 20,
							paddingVertical: 30,
                            marginTop:10,
							margin:20,

						}}
					>
						<Image
							source={item.image}
							style={{ width: 160, height: 160, resizeMode: "center" }}
						/>
						<Text style={{fontSize: 22, fontStyle: "italic", fontWeight: "800", marginTop: 8, color: COLOR.gris, textAlign: "center"}}>{item.pregunta}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>

						</View>
					</Pressable>
				)}
				numColumns={1}

				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default cardFaq;

const styles = StyleSheet.create({});

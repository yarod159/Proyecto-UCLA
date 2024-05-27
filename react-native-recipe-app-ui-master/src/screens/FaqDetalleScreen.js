import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
	Button
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "./colors";
import { Feather } from "@expo/vector-icons";

const FaqDetalleScreen = ({ navigation, route }) => {
	const { item } = route.params;

	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 45 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>



			</SafeAreaView>

			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop: 140,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
					<Image
						source={item.image2}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
							marginTop: 20,
						}}
					/>
				</View>

				{/* Pregunta */}
				<Text style={{ marginTop: 180, fontSize: 28, fontWeight: "bold", fontStyle: "italic", marginBottom: 10, color: colors.huevo }}>
					{item.pregunta}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Descripción del servicio */}
						<Text style={{ fontSize: 20, marginTop: 4, marginBottom: 20, textAlign: "center" }}>
							{item.respuesta}
						</Text>

					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default FaqDetalleScreen;

const styles = StyleSheet.create({});
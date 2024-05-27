import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
	Button,
	TouchableOpacity
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "./colors";
import { Feather } from "@expo/vector-icons";

const ServicioOfrecidoDetalleScreen = ({ navigation, route }) => {
	const { item } = route.params;

	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 45 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>


				<FontAwesome
					name={"shopping-cart"}
					size={28} color="white"
					onPress={() => navigation.navigate("FormBuy", {
						itemDetail: item
					})}
				/>
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
						source={item.image}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
							marginTop: 20,
						}}
					/>
				</View>

				{/* Nombre del Servicio */}
				<Text style={{ marginTop: 180, fontSize: 28, fontWeight: "bold", fontStyle: "italic", marginBottom: 10, color: colors.huevo }}>
					{item.nombre}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Descripción del servicio */}
						<Text style={{ fontSize: 20, marginTop: 4, marginBottom: 20, textAlign: "center" }}>
							{item.description}
						</Text>		
							
					</ScrollView>

					<View style={ styles.spacing }></View>

<                     View style={ styles.subContainer }>
                    <TouchableOpacity  onPress={() => navigation.navigate("FormBuy", {
						itemDetail: item
					})}>
                    <Text style={styles.textLogin}>
                    Contratar servicio
                   </Text>
                   </TouchableOpacity>
                   </View>
				</View>
			</View>
		</View>
	);
};

export default ServicioOfrecidoDetalleScreen;

const styles = StyleSheet.create({


	textLogin: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "700",
	  },
	  subContainer: {
		alignItems: 'center',
	  },
	  
	  subContainer: {
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 26,
		backgroundColor: "#20a1a7",
		borderRadius: 20,
		paddingVertical: 15,
		paddingHorizontal: 8,
		width: "50%",
		alignItems: "center",
	  },
	  
	  saveButtom: {
		overflow: 'hidden',
		width: "50%",
		
	  },

	  spacing: {
		marginTop: 10,
	  },
});
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const CondicionDetalleScreen = ({ navigation, route }) => {
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
					marginTop: 40,
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

				
				</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: 40, fontSize: 28, fontWeight: "bold" }}>
					{item.titulo}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: 16, marginVertical: 16, textAlign:"justify" }}>
							{item.description}
						</Text>


						{/* Requisitos */}

						<View style={{ alignSelf: "flex-start", marginVertical: 4 }}>
							<Text
								style={{ fontSize: 18, fontWeight: "600", marginBottom: 2 }}
							>
								Pasos a seguir:
							</Text>

							{item.pasos.map((paso, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 10,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "black",
												height: 8,
												width: 8,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 16, marginLeft: 10 }}>
											{paso}
										</Text>
									</View>
								);
							})}
						</View>

						{/* Requerimientos */}

						<View style={{ alignSelf: "flex-start", marginVertical: 4 }}>
							<Text
								style={{ fontSize: 18, fontWeight: "600", marginBottom: 2 }}
							>
								Requisitos:
							</Text>

							{item.requisitos.map((requisito, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: 16, marginLeft: 10, marginVertical: 4 }}
									>{`${index + 1} ) ${requisito}`}</Text>
								);
							})}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default CondicionDetalleScreen;

const styles = StyleSheet.create({});

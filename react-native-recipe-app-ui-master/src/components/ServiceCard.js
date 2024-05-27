import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList, ListaDeServicios } from "../Constant";
import COLOR from "../screens/colors"
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-elements/dist/helpers";

const ServiceCard = () => {
	const navigation = useNavigation();
	return (
		<View>
                <FlatList
				data={ListaDeServicios}
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
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 20,
							paddingVertical: 30,
                            marginTop:10,
							margin:20,
							hover: {
								backgroundColor: colors.COLOR_DARK,
								color: '#fff'
							}

						}}
					>
						<Image
							source={item.image}
							style={{ width: 160, height: 160, resizeMode: "center" }}
						/>
						<Text style={{fontSize: 22, fontStyle: "italic", fontWeight: "800", marginTop: 8, color: colors.COLOR_PRIMARY}}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>

							<View style={{ flexDirection: "row" }}>
								<FontAwesome
									name="star"
									size={16}
									color={COLOR.primary}
								/>
                                	<FontAwesome
									name="star"
									size={16}
									color={COLOR.primary}
								/>
                                	<FontAwesome
									name="star"
									size={16}
									color={COLOR.primary}
								/>
                                	<FontAwesome
									name="star"
									size={16}
									color={COLOR.primary}
								/>
                                	<FontAwesome
									name="star"
									size={16}
									color={COLOR.primary}
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={1}

				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default ServiceCard;

const styles = StyleSheet.create({});

import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, condGarantia } from "../Constant";
import COLOR from "../screens/colors"
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-elements/dist/helpers";

const cardCondiciones = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={condGarantia}
				style={{marginBottom: 150}}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("CondicionDetalle", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 20,
							marginVertical: 6,
							paddingHorizontal: 16,
							paddingVertical: 10,
                            marginTop: 6,
							margin:10,
						}}
					>
						<Text style={{fontSize: 18, fontStyle: "italic", fontWeight: "800", marginTop: 8, color: COLOR.gris}}>{item.titulo}</Text>
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

export default cardCondiciones;

const styles = StyleSheet.create({});

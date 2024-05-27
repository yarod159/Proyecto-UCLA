import React from 'react'
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import { colors, home, home2, home3} from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ServicioListaScreen from '../screens/ServicioListaScreen';
import COLORS from '../screens/colors';


const Cardhome = () => {
    const navigation = useNavigation();
  return (
    	<View>
			
						
			<FlatList				
				data={home}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("ListaDeServicios", { item: item })}
						style={{
							backgroundColor: colors.COLOR_V,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 8,
							alignItems: "center",
							paddingHorizontal: 0,
							paddingVertical: 14,
						}}
					>
						<View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
					        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginLeft: 25, marginTop: 16 }}>{item.Titulo}</Text>
						          <Text style={{ fontSize: 14, color: '#fff', marginLeft : 16, marginTop: 4,textAlign: 'center' }}>{item.description}</Text> 
						    </View>
						</View>
				
						
					</Pressable>
				)}
			
				showsVerticalScrollIndicator={false}
			/>

			 <FlatList
				data={home2}
				
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("Solicitudes", { item: item })}
						style={{
							
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							borderColor: COLORS.huevo,
							borderWidth: 3,
							marginVertical: 8,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 14,
							
						}}
					>
						<View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>

					        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.huevo, marginLeft: 41, textAlign: 'center', marginTop: 16 }}>{item.Titulo}</Text>
						          <Text style={{ fontSize: 14, color: '#666', marginLeft : 16, marginTop: 4, textAlign: 'center' }}>{item.description}</Text> 
						    </View>

							<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
							/>

						</View>
				
						
					</Pressable>
				)}
			
				showsVerticalScrollIndicator={false}
			/>
<               FlatList
				data={home3}
				
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("ServicioCliente", { item: item })}
						style={{
							backgroundColor: COLORS.verde2,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 8,
							alignItems: "center",
							paddingHorizontal: 0,
							paddingVertical: 14,
							
						}}
					>
						<View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
					        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.gris, textAlign: 'center', marginLeft: 35, marginTop: 16 }}>{item.Titulo}</Text>
						          <Text style={{ fontSize: 14, color: COLORS.gris, marginLeft : 16, marginTop: 4,textAlign: 'center' }}>{item.description}</Text> 
						    </View>
						</View>
				
						
					</Pressable>
				)}
       			showsVerticalScrollIndicator={false}
			/>
		</View>

		
  )
}

export default Cardhome
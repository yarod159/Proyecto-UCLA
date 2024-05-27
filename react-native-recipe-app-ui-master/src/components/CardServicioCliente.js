import React from 'react'
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import redes from "../../assets/images/www.png";
import faq from "../../assets/images/faq.png";
import contacto from "../../assets/images/contacto.png";
import garant from "../../assets/images/garantia.png";
import COLORS from '../screens/colors';


const CardServicioCliente = () => {
    const navigation = useNavigation();
  return (
    	<View>
			
						
			<Pressable
				onPress={() => navigation.navigate("Faq")}
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
						source={faq}
						style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
					<View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
						<Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginLeft: 25, marginTop: 16 }}>¿Tienes preguntas?</Text>
						<Text style={{ fontSize: 14, color: '#fff', marginTop: 4, textAlign: 'center', marginLeft: 16 }}>
							En esta sección podrás encontrar respuesta a las preguntas realiada frecuentemente por los usuarios
						</Text> 
					</View>
				</View>
				
						
			</Pressable>
				
				<Pressable
					onPress={() => navigation.navigate("Soporte")}
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
						paddingHorizontal: 0,
						paddingVertical: 14,
							
					}}
					>
						<View style={{ flexDirection: 'row', alignItems: 'flex-start'  }}>
						<Image
							source={contacto}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
					        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
								<Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.huevo, textAlign: 'center', marginLeft: 42, marginTop: 16 }}>¡Contáctanos!</Text>
								<Text style={{ fontSize: 14, color: '#666', marginTop: 4, textAlign: 'center', marginLeft: 16 }}>
									¿Necesitas contactarnos? A través de este formulario podremos contactarte y atender tu solicitud
								</Text> 
						    </View>
						</View>
				
						
					</Pressable>
				
					<Pressable
						onPress={() => navigation.navigate("Garantias")}
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
							source={garant}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
					        <View style={{ flexDirection: 'column', alignItems: 'flex-start', width:  '50%' }}>
								<Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.gris, textAlign: 'center', marginLeft: 62, marginTop: 16 }}>Garantías</Text>
								<Text style={{ fontSize: 14, color: COLORS.gris, marginTop: 4, textAlign: 'center', marginLeft: 16 }}>
									Aquí podras encontrar la información sobre las garantías que ofrecemos y además solicitar el uso de la misma
								</Text> 
						    </View>
						</View>
				
						
					</Pressable>
				
			<View style={{
             
				alignItems: 'center',
				marginBottom: 16,
				height: 260

		   }}>
			 <Image
			   source={redes}
			   style={{ width: 200, height: 200, resizeMode: "center" }}
			 />

			 <Text style={{fontSize: 18, fontWeight: 700, color: COLORS.huevo}}>Estamos disponibles en WhatsApp</Text>
			 <Text style={{fontSize: 18, fontWeight: 700, color: COLORS.gris}}>Puedes contactarnos al: +58 412-5246951 </Text>
			
		   </View>

		   	
		</View>

		
  )
}

export default CardServicioCliente
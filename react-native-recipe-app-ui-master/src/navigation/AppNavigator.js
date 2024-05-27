import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import ServicioListaScreen from "../screens/ServicioListaScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import ServicioDetalleScreen from "../screens/ServicioDetalleScreen";
import ServicioClienteScreen from "../screens/ServicioClienteScreen";
import CatalogoServicioScreen from "../screens/CatalogoServicioScreen";
import FaqDetalleScreen from "../screens/FaqDetalleScreen";
import CondicionDetalleScreen from "../screens/CondicionDetalleScreen";
import ServicioOfrecidoDetalleScreen from "../screens/ServicioOfrecidoDetalleScreen";
import GarantiaScreen from "../screens/GarantiaScreen";
import FaqScreen from "../screens/FaqScreen";
import CondicionesScreen from "../screens/CondicionesScreen";
import CustomerSupportForm from "../screens/CustomerSupportForm";
import FormGarantia from "../screens/FormGarantia";
import FormBuyScreen from "../screens/FormBuyScreen";
import FormPago from "../screens/FormPago";
import HomeScream from "../screens/HomeScream";
import CardCatalogo from "../components/CardCatalogo";
import Notificaciones from "../screens/Notificaciones";
import COLORS from "../screens/colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import Solicitudes from "../screens/Solicitudes";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import FormRM from "../screens/FormRM";

const AppNavigator = () => {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();
	
	function BottomTabs() {
		return (
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
					backgroundColor: COLORS.huevo,
					height: 70,
				},
				tabBarShowLabel: true,
				}}
			>
				<Tab.Screen
					name="Inicio"
					component={HomeScream}
					options={{
						tabBarLabel: "Inicio",
						tabBarLabelStyle: { color: "white" , fontSize : 15 },
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<View style={{borderRadius: 22, backgroundColor: COLORS.white, height: 46 , width: 46}}>
									<Text style={{textAlign: "center", marginTop: 4}}>
									<Feather name="home" size={35} color={COLORS.huevo} />
									</Text>
								</View>
							) : (
								<Feather
									name="home"
									size={35}
									color={COLORS.white}
								/>
							),
					}}
				/>
		
				<Tab.Screen
					name="ListaDeServicios"
					component={ServicioListaScreen}
					options={{
						tabBarLabel: "Servicios",
						tabBarLabelStyle: { color: "white", fontSize : 15  },
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<View style={{borderRadius: 22, backgroundColor: COLORS.white, height: 46 , width: 46}}>
									<Text style={{textAlign: "center", marginTop: 4}}>
										<Feather name="package" size={35} color={COLORS.huevo} />
									</Text>
								</View>
							) : (
								<Feather name="package" size={35} color={COLORS.white} />
							),
						}}
				/>
		
				<Tab.Screen
					name="ServicioCliente"
					component={ServicioClienteScreen}
					options={{
					tabBarLabel: "Atención",
					tabBarLabelStyle: { color: "white" , fontSize : 15 },
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={{borderRadius: 22, backgroundColor: COLORS.white, height: 46 , width: 46}}>
								<Text style={{textAlign: "center", marginTop: 6}}>
									<Feather name="phone" size={32} color={COLORS.huevo} />
								</Text>
							</View>
						) : (
							<Feather name="phone" size={35} color={COLORS.white} />
						),
					}}
				/>
		
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarLabel: "Perfil",
						tabBarLabelStyle: { color: "white" , fontSize : 15 },
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<View style={{borderRadius: 22, backgroundColor: COLORS.white, height: 46 , width: 46}}>
									<Text style={{textAlign: "center", marginTop: 4}}>
										<Feather name="user" size={35} color={COLORS.huevo} />
									</Text>
								</View>
							) : (
								<Feather name="user" size={35} color={COLORS.white} />
							),
					}}
				/>

				<Tab.Screen
					name="Notificaciones"
					component={Notificaciones}
					options={{
						tabBarLabel: "Noti",
						tabBarLabelStyle: { color: "white" , fontSize : 15 },
						headerShown: false,
						tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={{borderRadius: 22, backgroundColor: COLORS.white, height: 46 , width: 46}}>
								<Text style={{textAlign: "center", marginTop: 4}}><FontAwesome name="bell-o" size={35} color={COLORS.huevo} /></Text>
							</View>
						) : (
							<FontAwesome name="bell-o" size={35} color={COLORS.white} />
						),
					}}
				/>
			</Tab.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name= "Main" component={BottomTabs} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
				<Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
				<Stack.Screen name="DetalleServicio" component={ServicioDetalleScreen} />
				<Stack.Screen name="FormBuy" component={FormBuyScreen} />
				<Stack.Screen name="Soporte" component={CustomerSupportForm} />
				<Stack.Screen name="Faq" component={FaqScreen} />
				<Stack.Screen name="Solicitudes" component={Solicitudes} />
				<Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
				<Stack.Screen name="FormPagos" component={FormPago} />
				<Stack.Screen name="Garantias" component={GarantiaScreen} />
                <Stack.Screen name="DetalleFaq" component={FaqDetalleScreen} />
                <Stack.Screen name="Condiciones" component={CondicionesScreen} />
                <Stack.Screen name="CondicionDetalle" component={CondicionDetalleScreen} />
                <Stack.Screen name="CatalogoServicio" component={CatalogoServicioScreen} />
                <Stack.Screen name="SOfrecidoDetalle" component={ServicioOfrecidoDetalleScreen} />
                <Stack.Screen name="FormGarantia" component={FormGarantia} />
				<Stack.Screen name="FormRM" component={FormRM} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});

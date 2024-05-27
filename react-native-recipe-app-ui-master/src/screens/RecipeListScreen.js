import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import ServiceCard from "../components/ServiceCard"
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RecipeListScreen = ({ navigation }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 20 , marginTop: 44 }}>
			<Header
				headerText={"Nuestros Servicios"} 
				headerIcon={"bars"}
				onPress={toggleMenu}
			/>

			{ isMenuOpen && (
				<View style={styles.menu}>
					<TouchableOpacity
						onPress={() => navigation.navigate('CustomerForm')}
						style={styles.menuItem}
					>
						<View style={styles.iconTextContainer}>
							<MaterialCommunityIcons name="account-edit" size={30} color="white" />
							<Text style={styles.menuItemText}>Atencion al cliente </Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate('ScreenName2')}
						style={styles.menuItem}
					>
						<View style={styles.iconTextContainer}>
							<MaterialCommunityIcons name="account" size={30} color="white" />
							<Text style={styles.menuItemText}>Perfil</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate('ScreenName3')}
						style={styles.menuItem}
					>
						<View style={styles.iconTextContainer}>
							<MaterialCommunityIcons name="bell" size={30} color="white" />
							<Text style={styles.menuItemText}>Notificacion</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate('ScreenName3')}
						style={styles.menuItem}
					>
						<View style={styles.iconTextContainer}>
							<MaterialCommunityIcons name="account-group" size={30} color="white" />
							<Text style={styles.menuItemText}>Nosotros</Text>
						</View>
					</TouchableOpacity>
				</View>
            )}

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"Ingresa tu servicio"} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}> Categorias </Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Servicios</Text>
				{/* Recipes list */}

				<ServiceCard />
			</View>
		</SafeAreaView>
		
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({
	menu: {
    backgroundColor: '#20a1a7',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
	marginBottom: 20

    },
	menuItem: {
		borderWidth: 1, // Define el ancho del borde
		borderColor: '#ffff', // Define el color del borde
		borderRadius: 5, // Define el radio del borde para redondear las esquinas
		paddingVertical: 10, // Espacio vertical dentro del botón
		paddingHorizontal: 20, // Espacio horizontal dentro del botón
		marginBottom: 10, // Espacio entre botones
	},

	iconTextContainer: {
		flexDirection: 'row', // Alinea los elementos horizontalmente
		alignItems: 'center', // Alinea verticalmente los elementos en el centro
	},
	
	menuItemText: {
		fontSize: 18, // Tamaño de fuente más grande
		color: 'white', // Color del texto
		textAlign: 'center', // Alineación del texto
		marginLeft: 10,
	},
});
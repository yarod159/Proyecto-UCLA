import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
	return (
		
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 , marginTop: 60 }}>
			{/* render header */}
			<Header headerText={"Bienvenido "} headerIcon={"bell-o"} />

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"ingresa tu servicio"} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}> Categorias </Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Servicios</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
		
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});

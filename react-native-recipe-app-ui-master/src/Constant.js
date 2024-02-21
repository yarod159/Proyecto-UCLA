export const colors = {
	COLOR_PRIMARY: "#20a1a7",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Atencion al cliente",
	},
	{
		id: "02",
		category: "Telefonia",
	},
	{
		id: "03",
		category: "internet",
	},
	{
		id: "04",
		category: "hector",
	},
	{
		id: "05",
		category: "Italian",
	},
	{
		id: "06",
		category: "Desserts",
	},
	{
		id: "07",
		category: "Vegetarian",
	},
	{
		id: "08",
		category: "Seafood",
	},
];

export const recipeList = [
	{
		id: "01",
		name: "Router",
		image: require("../assets/images/route.png"),
		rating: "4.2",
		ingredients: ["Cable de corriente", "cable de red ", "Manual", "Garantia"],
		time: "WIFI 6",
		difficulty: "dual banda",
		calories: "1800 Mbps",
		color: "#006A4E",
		description:
			"Conectividad: 1 puerto Gigabit WAN + 4 puertos Gigabit LAN Ethernet. Compatible con VLAN, Dynamic IP/Static IP/PPPoE/PPTP/L2TP (Multi-EWAN). Wi-Fi: Wi-Fi 6 AX1800 1201 Mbps (5 GHz) + 574 Mbps (2,4 GHz).Tecnología 802.11ax: Compatible con características como Muti-SSID, TX Beamforming, MU-MIMO, DL/UL OFDMA, Airtime Fairness, Guest Network y Seguridad WPA/WPA2-PSK/WPA3.",
		steps: [
			"Fácil configuración: Configure su Router de una manera rápida y sencilla con AginetConfig, puede cargar ficheros de configuración desde nuestra aplicación o un servidor TFTP y evitar el reset de la configuración",

			"Gestión Remota: Compatible con los estándares BBF TR-098, TR-181, TR-111, TR-143 y TR-369. Admite gestión mediante https/SNMP. Compatible con TAUC TR-369 USP.",
		],
	},
	{
		id: "02",
		name: "Camara de seguridad",
		image: require("../assets/images/camara.png"),
		rating: "3.6",
		ingredients: [
			"Lasagna Noodles",
			"Ground Beef",
			"Ricotta Cheese",
			"Tomato Sauce",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	{
		id: "03",
		name: "Switch TP-Link TL-SG105",
		image: require("../assets/images/switch.png"),
		rating: "4.6",
		ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
		time: "250$",
		difficulty: "Soporta PoEm",
		calories: "250$",
		color: "#006A4E",
		// description, steps to prepare
		description:
			"5 puertos Ethernet Gigabit",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
	{
		id: "04",
		name: "Manchurian",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "05",
		name: "Chicken",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		ingredients: ["Chicken Breasts", "Salt", "Black Pepper", "Olive Oil"],
		time: "45 mins",
		difficulty: "Medium",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"A succulent chicken dish seasoned with a blend of salt and black pepper, then cooked to perfection with a drizzle of olive oil.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Season the chicken breasts with salt and black pepper.",
			"Heat olive oil in a skillet over medium-high heat.",
			"Sear the chicken breasts on both sides until golden brown.",
			"Transfer the chicken to the oven and bake until cooked through.",
			"Serve hot and enjoy your flavorful chicken!",
		],
	},
	{
		id: "06",
		name: "Cupcakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
		time: "60 mins",
		difficulty: "Medium",
		calories: "200 cal",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Prepare the cupcake batter by mixing the ingredients together.",
			"Line a muffin tin with cupcake liners.",
			"Fill each liner with batter and bake in the oven.",
			"Let the cupcakes cool, then frost and decorate as desired.",
			"Indulge in these sweet treats and savor the flavor!",
		],
	},
	{
		id: "07",
		name: "Curry",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		ingredients: ["Meat", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 mins",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the meat with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the meat is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "08",
		name: "Ramen",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
	},
];

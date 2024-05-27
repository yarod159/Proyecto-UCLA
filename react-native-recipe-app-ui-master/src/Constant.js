import COLORS from "./screens/colors";

export const colors = {
	COLOR_PRIMARY: "#20a1a7",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
	COLOR_V: "#20a1a7",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Productos",
	},
	{
		id: "02",
		category: "Instalacion",
	},
	{
		id: "03",
		category: "Reparacion",
	},
	{
		id: "04",
		category: "Mantenimiento",
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
		image: require("../assets/images/route.png"),
		rating: "4.6",
		ingredients: ["cableado", "conector a corriente americana", "limpiador", "adaptador web"],
		time: "250$",
		difficulty: "Soporta PoEm",
		calories: "250$",
		color: "#006A4E",
		// description, steps to prepare
		description:
			"5 puertos Ethernet Gigabit",
		steps: [
			"Facil instalacion.",
			"Buen manejo de datos .",
			
		],
	},
	
];

export const ListaDeServicios2 = [
	{
		id: "01",
		name: "Servicio de Instalación",
		image: require("../assets/images/instalacion.png"),
		navigate: "CatalogoServicio",

		conf: "Confiable",
		seg: "Seguro",
		gar: "Garantizado",
		color: COLORS.huevo,
		description:
			"Somos expertos en la puesta en marcha de tus sistemas y equipos, desde la configuración inicial hasta las primeras pruebas de funcionamiento. Nos aseguramos de que todo esté instalado correctamente y según las especificaciones del fabricante para que puedas disfrutar de tu inversión desde el primer momento."
	},

]
export const ListaDeServicios = [
	
	{
		id: "01",
		name: "Servicio de Instalación",
		image: require("../assets/images/instalacion.png"),
		navigate: "CatalogoServicio",

		conf: "Confiable",
		seg: "Seguro",
		gar: "Garantizado",
		color: COLORS.huevo,
		description:
			"Somos expertos en la puesta en marcha de tus sistemas y equipos, desde la configuración inicial hasta las primeras pruebas de funcionamiento. Nos aseguramos de que todo esté instalado correctamente y según las especificaciones del fabricante para que puedas disfrutar de tu inversión desde el primer momento."
	},
	{
		id: "02",
		name: "Servicio de Reparación",
		image: require("../assets/images/reparacion.png"),
		navigate: "DetalleServicio",

		conf: "Confiable",
		seg: "Seguro",
		gar: "Garantizado",
		color: COLORS.huevo,
		description:
			"Contamos con un equipo técnico altamente cualificado para diagnosticar rápidamente la causa de la avería y repararla de forma eficiente. Trabajamos con las herramientas y repuestos originales para garantizarte una reparación duradera y de calidad."
	},
	{
		id: "03",
		name: "Servicio de Mantenimiento",
		image: require("../assets/images/mantenimiento.png"),
		navigate: "DetalleServicio",

		conf: "Confiable",
		seg: "Seguro",
		gar: "Garantizado",
		color: COLORS.huevo,
		description:
			"Con nuestros planes de mantenimiento preventivo, nos encargamos de revisar periódicamente tu sistema o equipo para detectar posibles fallos antes de que te causen problemas. De esta manera, alargamos la vida útil de tu inversión, reducimos el riesgo de averías inesperadas y optimizamos su rendimiento al máximo."
	}

]


export const Notificaciones = [
	{
		id: "01",
		Titulo: "APROBADO",
		image: require("../assets/images/check2.png"),
		asunto: "PAGO",
		description: "el pago de la orden 2345 a sido procesado:",
		
	},

	{
		id: "02",
		Titulo: "EN ESPERA ",
		image: require("../assets/images/pendiente.png"),
		asunto: "ESPERA DE PAGO",
		description: "Su solicitud fue aceptada por un empleado, debe proceder a realizar el pago",
		
	},

	{
		id: "03",
		Titulo: "RECHAZADA ",
		image: require("../assets/images/rechazada.png"),
		asunto: "SOLICITUD RECHAZADA",
		description: "Su solicitud fue rechazada, por que no cumple las condiciones para el servicios",
		
	},

];


export const tablaSolicitudes = [
	{
		id: "01",
		Idcliente: "1212",
		NombreEmpleado: "Ingeniero Asdrubillo",
		IDservicio: "02",
		tiposervicio: "Instalacion",
		fecha: "11-06-16",
		Metodo: "efectivo",
		Monto: "1500$",
		REferentep: "12345633221",
		Modalidad: "remoto",
		Estatus: "pendiente",
		
		
	},

];

export const home = [
	{
		id: "01",
		Titulo: "Nuestros servicios",
		image: require("../assets/images/servicio.png"),
		description: "Contamos con servicios de:",
		
	},

];

export const home2 = [

	{
		id: "01",
		Titulo: "Mis Solicitudes",
		image: require("../assets/images/compra.png"),
		description: "Traemos para ti la posibilidad de manejar todas tus solicitudes",
	},

];

export const home3 = [


	{
		id: "01",
		Titulo: "¿Necesitas ayuda?",
		image: require("../assets/images/consulta.png"),
		description: "Acude a nuestra area de Atencion al cliente, para cualquier duda o reclamo",
	},
	
];

export const contacto = [

	{
		id: "01",
		numero:  +58-1234567
	},
];

export const ListaDePreguntas = [
	{
		id: "01",
		pregunta: "Aqui deberia ir la pregunta 1",
		image: require("../assets/images/pregunta.png"),
		image2: require("../assets/images/respuesta.png"),
		color: COLORS.huevo,
		respuesta:
			"Aqui va la respuesta 1"
	},

	{
		id: "02",
		pregunta: "Aqui deberia ir la pregunta 2",
		image: require("../assets/images/pregunta.png"),
		image2: require("../assets/images/respuesta.png"),
		color: COLORS.huevo,
		respuesta:
			"Aqui va la respuesta 2"
	},

	{
		id: "03",
		pregunta: "Aqui deberia ir la pregunta 3",
		image: require("../assets/images/pregunta.png"),
		image2: require("../assets/images/respuesta.png"),
		color: COLORS.huevo,
		respuesta:
			"Aqui va la respuesta 3"
	},

	{
		id: "04",
		pregunta: "Aqui deberia ir la pregunta 4",
		image: require("../assets/images/pregunta.png"),
		image2: require("../assets/images/respuesta.png"),
		color: COLORS.huevo,
		respuesta:
			"Aqui va la respuesta 4"
	},
];

export const condGarantia = [

	{
		id: "01",
		titulo:  "Artículo 1: Objeto",
		color: COLORS.huevo,
		description: "Los presentes Términos y Condiciones (en adelante, T&C) regulan el procedimiento para la reclamación de la garantía de los servicios de instalación, reparación o mantenimiento de telecomunicaciones (en adelante, los Servicios) prestados por [Nombre de la empresa] (en adelante, la Empresa).",
		pasos:[""],
		requisitos:[""]
	},

	{
		id: "02",
		titulo:  "Artículo 2: Alcance de la Garantía",
		color: COLORS.huevo,
		description: "La Empresa garantiza que los Servicios se prestarán de conformidad con las especificaciones técnicas y los estándares de calidad establecidos en el contrato de prestación de servicios. La garantía cubre los defectos de fabricación, materiales y mano de obra que se presenten durante el período de garantía establecido en el contrato.",
		pasos:[""],
		requisitos:[""]
	},

	{
		id: "03",
		titulo:  "Artículo 3: Plazo de la Garantía",
		color: COLORS.huevo,
		description: "El plazo de la garantía para los Servicios será de 15 días a partir de la fecha de entrega del servicio.",
		pasos:[""],
		requisitos:[""]
	},

	{
		id: "04",
		titulo:  "Artículo 4: Procedimiento para Reclamar la Garantía",
		color: COLORS.huevo,
		description: "Para reclamar la garantía, el cliente deberá seguir los siguientes pasos:",
		pasos: [
			"Notificar a la Empresa: El cliente deberá notificar a la Empresa por escrito la existencia del defecto que reclama, dentro del plazo de la garantía. La notificación deberá incluir una descripción detallada del defecto, la fecha en que se detectó y cualquier otra información relevante.",
			"Permitir la inspección del servicio: El cliente deberá permitir que la Empresa inspeccione el servicio para verificar la existencia del defecto reclamado.",
			"Presentar la documentación: El cliente deberá presentar a la Empresa la siguiente documentación:",
		],
		
		requisitos: [
			"Copia del contrato de prestación de servicios.",
			"Factura o recibo de pago del servicio.",
			"Cualquier otra documentación que acredite la compra del servicio." 
		],
		
	
	},

	{
		id: "05",
		titulo:  "Artículo 5: Reparación o Reemplazo del Servicio",
		color: COLORS.huevo,
		description: "Si la Empresa comprueba que el defecto está cubierto por la garantía, procederá a repararlo o reemplazar el servicio, a su elección. La Empresa realizará la reparación o el reemplazo del servicio en un plazo de 20 días hábiles a partir de la recepción de la notificación del cliente.",
		pasos:[""],
		requisitos:[""]
	},

	{
		id: "06",
		titulo:  "Artículo 6: Exclusiones de la Garantía",
		color: COLORS.huevo,
		description: "La garantía no cubrirá los siguientes casos:",
		pasos:[""],
		requisitos:[
			"Defectos causados por el uso indebido, negligente o abusivo del servicio por parte del cliente.",
			"Defectos causados por daños accidentales, vandalismo o fuerza mayor.",
			"Defectos causados por reparaciones o modificaciones realizadas por personal no autorizado por la Empresa.",
			"Defectos causados por el uso de equipos o software no compatibles con los Servicios.",
		],
	},

	{
		id: "07",
		titulo:  "Artículo 7: Limitación de Responsabilidad",
		color: COLORS.huevo,
		pasos:[""],
		requisitos:[""],
		description: "La responsabilidad de la Empresa por los daños y perjuicios derivados de la prestación de los Servicios se limitará al costo de la reparación o reemplazo del servicio. La Empresa no será responsable de ningún otro daño o perjuicio, directo o indirecto, incluyendo, pero no limitándose a, lucro cesante, daños a la propiedad o daños personales.",
	},

	{
		id: "08",
		titulo:  "Artículo 8: Jurisdicción y Competencia",
		color: COLORS.huevo,
		description: "Para cualquier controversia que surja de la interpretación o aplicación de estos T&C, las partes se someten a la jurisdicción de los tribunales ordinarios de la ciudad de Barquisimeto, Estado Lara.",
		pasos:[""],
		requisitos:[""]
	},

	{
		id: "09",
		titulo:  "Artículo 9: Notificaciones",
		color: COLORS.huevo,
		description: "Todas las notificaciones y comunicaciones que se realicen al amparo de estos T&C se considerarán válidamente realizadas cuando se efectúen por escrito y se entreguen personalmente",
		pasos:[""],
		requisitos:[""]
	},

	{
		id: "10",
		titulo:  "Artículo 10: Aceptación",
		color: COLORS.huevo,
		description: "El cliente declara haber leído y comprendido los presentes T&C y los acepta expresamente al contratar los Servicios.",
		pasos:[""],
		requisitos:[""]
	},

	
];

export const ServiciosOfrecidos = [
	{
		id: "01",
		nombre:"Internet",
		description:"Descripcion 1",
		image: require("../assets/images/internet.png"),
		navigate:"SOfrecidoDetalle",
		color: COLORS.huevo,
	},

	{
		id: "02",
		nombre:"Televisión",
		description:"Descripcion 2",
		image: require("../assets/images/television.png"),
		navigate:"SOfrecidoDetalle",
		color: COLORS.huevo,
	},

	{
		id: "03",
		nombre:"Internet y Televisión",
		description:" Descripcion 3",
		image: require("../assets/images/tvi.png"),
		navigate:"SOfrecidoDetalle",
		color: COLORS.huevo,
	},

];
require("dotenv").config();
const axios = require('axios');
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');

const fetchCompanyName = async () => {
    try {
      const response = await axios.get("http://localhost:3000/informacionGeneral/get-infoGeneral");
      const companyName = response.data.nombreEmpresa;
      return companyName;
    } catch (error) {
      console.error("Error fetching company name:", error);
      return "";
    }
};

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const flowGracias = addKeyword(['']).addAnswer(
    [
        '🚀 Muchas gracias',
        'Pronto nos comunicaremos contigo para brindarte la mejor atención que va a brindarte una asesoría especializada.', 
    ],
    null,
    null,
)
const flowNoClienteCorreo = addKeyword(['']).addAnswer(
    [
        '🚀 Sigamos avanzando, ahora compártenos:',

       ' ▪ Correo electrónico',
        
    ],
    null,
    null,
    [flowGracias]
)
const flowNoClienteCedula = addKeyword(['']).addAnswer(
    [
        '¡Encantados de conocerte 🤩! Cada vez estamos más cerca de mostrarte todo lo que tenemos para ti. Ahora, necesitamos saber:',
        '▪ Cédula de Identidad',  
       ' Ejemplo: 12345678',  

    ],
    null,
    null,
    [flowNoClienteCorreo]
)
const flowNoCliente = addKeyword(['#']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩! Queremos conocerte para darte el servicio ajustado a tus necesidades 😊.',
        'Nombre Apellido:',
        'Ejemplo: Juan Peréz',

    ],
    null,
    null,
    [flowNoClienteCedula]
)
 



const flowProductos = addKeyword(['1']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩!',
        '  Queremos que conozcas nuestros productos y que mejor que la de ingresar a nuestra pagina web "www.kinetika.com" o a nuestra app en playstore ',
    ],
    null,
    null,
    [flowGracias]
)

const flowServicios = addKeyword(['2']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩!',
        '  Queremos que conozcas nuestros servicios y que mejor que la de ingresar a nuestra pagina web "www.kinetika.com" o a nuestra app en playstore ',
    ],
    null,
    null,
    [flowGracias]
)

const flowPreguntas = addKeyword(['3']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩!',
        'Te compartiremos nuestras preguntas frecuentes, recuerda que para mas información puedes ingresar a "www.kinetika.com"',
    ],
    null,
    null,
    [flowGracias]
)

const flowPrincipal = addKeyword([''])
  .addAnswer(async () => { // Cambia esta línea para usar una función asíncrona
    
        const companyName = await fetchCompanyName(); // Obtén el nombre de la empresa
        console.log(companyName);
        return `🙌 Hola bienvenido este es el chatBot *${companyName}*`; // Utiliza el nombre de la empresa en la respuesta
    })
  .addAnswer(
        [
            '👉 Escribe *#* si aun no eres cliente *Kinetika*',
            '👉 Escribe *1* Si quieres conocer nuestros Productos',
            '👉 Escribe *2* Si quieres conocer nuestros servicios',
            '👉 Escribe *3* Si quieres conocer las preguntas frecuentes',
        ],
        null,
        null,
        [flowNoCliente, flowProductos, flowServicios, flowPreguntas]
    );

    const main = async () => {
        const adapterDB = new MockAdapter();
        const adapterFlow = createFlow([flowPrincipal]);
        const adapterProvider = createProvider(BaileysProvider);
    
        flowPrincipal.addAnswer(async () => {
            const companyName = await fetchCompanyName();
            return `🙌 Hola bienvenido este es el chatBot *${companyName}*`;
        });
    
        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        });
    
        QRPortalWeb();
    };
    
    main();

require("dotenv").config();
const axios = require('axios');
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')



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
        
        'Escribe *0* para volver al menú anterior 🔙 ',

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
        'Escribe *0*para volver al menú anterior 🔙'

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
        'Escribe *0* para volver al menu principal',

    ],
    null,
    null,
    [flowNoClienteCedula]
)
 



const flowProductos = addKeyword(['1']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩!',
        '  Queremos que conozcas nuestros productos y que mejor que la de ingresar a nuestra pagina web "" o a nuestra app en playstore ""',
    ],
    null,
    null,
    [flowGracias]
)

const flowServicios = addKeyword(['2']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩!',
        '  Queremos que conozcas nuestros servicios y que mejor que la de ingresar a nuestra pagina web "" o a nuestra app en playstore ""',
    ],
    null,
    null,
    [flowGracias]
)

const flowPreguntas = addKeyword(['3']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de *Kinetika* 🤩!',
        'Te compartiremos nuestras preguntas frecuentes, recuerda que para mas información puedes ingresar a ""',
    ],
    null,
    null,
    [flowGracias]
)

const flowPrincipal = addKeyword([''])
    .addAnswer('🙌 Hola bienvenido este es el chatBot *Kinetika*')
    .addAnswer(
        [
            'Escribe *#* si aun no eres cliente *Kinetika*',
            '👉 Escribe *1* Si quieres conocer nuestros Productos',
            '👉 Escribe *2* Si quieres conocer nuestros servicios',
            '👉 Escribe *3* Si quieres conocer las preguntas frecuentes',
        ],
        null,
        null,
        [flowNoCliente, flowProductos, flowServicios, flowPreguntas]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()

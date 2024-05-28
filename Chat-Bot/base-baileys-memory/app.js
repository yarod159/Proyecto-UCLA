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
        '¡Gracias por querer empezar a disfrutar de Kinetika 🤩! Queremos conocerte para darte el servicio ajustado a tus necesidades 😊.',
        'Nombre Apellido:',
        'Ejemplo: Juan Peréz',

    ],
    null,
    null,
    [flowNoClienteCedula]
)
 



const flowProductos = addKeyword(['1']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de Kinetika 🤩!',
        '  Queremos que conozcas nuestros productos y que mejor que la de ingresar a nuestra pagina web *www.kinetika.com¨* apartado productos o a nuestra app en playstore ',
    ],
    null,
    null,
    [flowGracias]
)

const flowServicios = addKeyword(['2']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de Kinetika 🤩!',
        '  Queremos que conozcas nuestros servicios y que mejor que la de ingresar a nuestra pagina web *www.kinetika.com¨* apartado servicios o a nuestra app en playstore ',
           ]
    ,
    null,
    null,
    [flowGracias]
)

const flowPreguntas = addKeyword(['3']).addAnswer(
    [
        '¡Gracias por querer empezar a disfrutar de Kinetika 🤩!',
        'Te compartiremos nuestras preguntas frecuentes',
        '*DESEO SUSPENDER MI SERVICIO, QUÉ DEBO HACER?*',
        'RESPUESTA: Debe realizar su solicitud por escrito, dirigiendo una carta (la cual puede ser escrita a mano si lo deseas) exponiendo el motivo por el cual deseas darte de baja. Dicha solicitud debe ser entregada por nuestras oficinas del 1° al 15 de cada mes. Recuerda que debes estar al día con tus pagos, anexar copia de la C.I y de poseer equipos en alquiler debes hacer entrega de los mismos.',
        '*¿QUÉ DEBO HACER PARA QUE MI CONTRATO SALGA A NOMBRE DE OTRA PERSONA?*',
        'Para lograr esto debe realizar la solicitud directamente por nuestras oficinas antes de la fecha de facturación la cual se realiza los 22 de cada mes. Además, debe tener su saldo al día, anexar fotocopia de la C.I de ambas personas, y una autorización por escrito del abonado en caso de que éste no sea el que solicite personalmente el cambio.',
        '*¿A QUE REFIERE DOMICILIAR PAGOS?*',
        'Es un medio de cobranza que ofrece Inter para facilitarte el pago de tus facturas, se caracteriza por ser un proceso automático donde se realizan los descuentos entre el 01 al 05 de cada mes luego de emitida la factura.',
 
    ],
    null,
    null,
    [flowGracias]
)




const flowPrincipal = addKeyword([''])
  .addAnswer(
        [   '🙌 Hola bienvenido este es el chatBot de *Kinetika*',
            '👉 Escribe # si aun no eres cliente Kinetika',
            '👉 Escribe 1 Si quieres conocer nuestros Productos',
            '👉 Escribe 2 Si quieres conocer nuestros servicios',
            '👉 Escribe 3 Si quieres conocer las preguntas frecuentes',
        ],
        null,
        null,
        [flowNoCliente, flowProductos, flowServicios, flowPreguntas]
    );


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

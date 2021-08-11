
import { urlsite } from './url.js' 
//const urlsite contiene la apikey y otros parametros de mi cuenta en: openweathermap.org


const GetDatos = async () => {

    const response = await fetch(urlsite)
    const data = await response.json()

    let direccionLetras = ""
    const direccion = await data.wind.deg



    direccion == 0 ? direccionLetras = "NORTE" :
        direccion == 90 ? direccionLetras = "ESTE" :
            direccion == 180 ? direccionLetras = "SUR" :
                direccion == 270 ? direccionLetras = "OESTE" :
                    direccion > 0 && direccion < 90 ? direccionLetras = "NORESTE" :
                        direccion > 90 && direccion < 180 ? direccionLetras = "SUR-ESTE" :
                            direccion > 180 && direccion < 270 ? direccionLetras = "SUR-OESTE" :
                                direccion > 270 ? direccionLetras = "NOROESTE" : null


    let miDiccionario = { //armo un diccionario a medida.
        "nombre": data.name,
        "temperatura": data.main.temp,
        "viento": {
            "velocidad": data.wind.speed,
            "orientacion": direccionLetras,
        },
    }


    const puntero = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'

    document.getElementById("imagenClima").src = puntero
    document.getElementById("datos").innerHTML =
        `CIUDAD: ${miDiccionario.nombre} <br> TEMPERATURA: ${miDiccionario.temperatura} º 
        <br> VIENTO:  ${Number(miDiccionario.viento.velocidad * 3.6).toFixed(2)} km/h  ${miDiccionario.viento.orientacion}    
        `
}


GetDatos()


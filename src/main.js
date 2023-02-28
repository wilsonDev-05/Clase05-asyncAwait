/* // importacion de fs 
import fs from 'fs';

// metodo bloqueante
// cargar agenda
let agenda;

const ruta = './static/agenda.txt'

function cargarAgenda() {
    // leer archivo con readFileSync
    const json = fs.readFileSync(ruta, 'utf-8')
    // parseando archivo json
    agenda = JSON.parse(json)
}

function mostrarAgenda() {
    console.log(agenda);
}

function agregarContacto(contacto) {
    agenda.push(contacto)

}

function actualizarAgenda() {
    const json = JSON.stringify(agenda, null, 2)
    // reescribir el archivo de fomra "bloqueante"
    fs.writeFileSync(ruta, json)
    console.log('agenda actualziada!');
}

// elimnar un archivo del proyecto
function eliminarAgenda() {
    fs.rmSync(ruta)
} 

cargarAgenda()
mostrarAgenda()
agregarContacto( {"fatiga": "342132352"} )
mostrarAgenda()
setTimeout(actualizarAgenda, 2000)

// 00.54.26
 */
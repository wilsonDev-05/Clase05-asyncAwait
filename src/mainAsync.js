// importacion de fs 
import fs from 'fs/promises';

// metodo bloqueante
// cargar agenda
let agenda;

const ruta = './static/agenda.txt'

function textoDeEjemplo() {
    console.log('esto es un texto lorem de prueba!');
}

async function cargarAgenda() {
    // leer archivo con readFileSync
    const json = await fs.readFile(ruta, 'utf-8')
    // parseando archivo json
    agenda = JSON.parse(json)
}

function mostrarAgenda() {
    console.log(agenda);
}

function agregarContacto(contacto) {
    agenda.push(contacto)

}

async function actualizarAgenda() {
    const json = JSON.stringify(agenda, null, 2)
    await fs.writeFile(ruta, json)
    console.log('agenda actualziada!');
}

// elimnar un archivo del proyecto
async function eliminarAgenda() {
    await fs.rm(ruta)
} 

async function operarConLaAgenda() {
    await cargarAgenda() // esperar a que se Cargue la aguenda para realizar la siguiente tarea.
    mostrarAgenda()
    agregarContacto( {"fatiga": "342132352"} )
    mostrarAgenda()
}

operarConLaAgenda()
textoDeEjemplo()


// explicacion de la practica: 01.37.12
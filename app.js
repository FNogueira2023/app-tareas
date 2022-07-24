const fs = require('fs');
const archivoTareas = require('./funcionesDeTareas');
const proceso = process.argv[2];

switch (proceso) {

    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, index) => {
            console.log((index + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;
    case 'crear': 
        console.log('Nueva tarea creada');
        console.log('------------------'); 

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }

        archivoTareas.guardarTarea(tarea);

        console.log(tarea.titulo + ' -> ' + tarea.estado);
        console.log()
        break;

    case 'filtrarPorEstado':
        let estado = process.argv[3];
        console.log();
        console.log('Tareas ' + estado);
        console.log('------------------');

        let filtradas = this.archivoTareas.filtrarPorEstado(estado);
               
        filtradas.forEach((tarea, index) => {
            console.log((index + 1) +'. ' + tarea.titulo);
        });       
        break;      
    


    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo qué quieres hacer');
}


console.log(archivoTareas.leerArchivo())

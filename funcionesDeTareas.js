const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },
    guardarTarea: function (tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    filtrarPorEstado: function (estado) {
        let tareas = this.leerArchivo();
        return tareas.filter(tarea => tarea.estado == estado);
    }
}

module.exports = archivoTareas;
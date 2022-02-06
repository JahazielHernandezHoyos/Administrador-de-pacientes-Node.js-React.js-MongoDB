const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {
    //Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )

    //obtiene todos los registros de pacientes en la Base de Datos
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )

    //Obtiene un paciente en especifico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )

    //actualizar un registro con un ID especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )

    //elimina un registro por su id
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )

    return router;
}
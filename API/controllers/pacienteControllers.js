const Paciente = require('../models/Paciente');

// cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    
    // crear un nuevo objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agregó correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
    //TODO: validar que el cliente no exista
};

//obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const paciente = await Paciente.find({});
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
};

//obtiene paciente en especifico
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
};

//Actualiza un registro por su id
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    } catch (error) {
        console.log(error);
        next();
    }
        
};

exports.eliminarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndDelete({_id: req.params.id});
    } catch (error) {
        console.log(error);
        next();
    }
};


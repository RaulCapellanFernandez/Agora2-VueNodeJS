module.exports = async (dni) => {
    const AlumTrabajo = require("../models/AlumTrabajo");

    const errHandler = (err) => {
        console.error("Error: ", err);
    }

    var listaAlumTrabajo = await AlumTrabajo.findAll({ where:{alumId: dni }}).catch(errHandler);
    //const aux1 = await Trabajo.findAll({ where:{asignaturaId: listaAsignaturas[0][0].id }}).catch(errHandler);
    return listaAlumTrabajo;
};
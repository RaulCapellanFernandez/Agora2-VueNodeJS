module.exports = async (dni) => {
    const AlumAsign = require("../models/AlumAsign");
    const Asignatura = require("../models/Asignatura");
    const Recurso = require("../models/Recurso");


    const errHandler = (err) => {
        console.error("Error: ", err);
    }
    
    var idAsigns = await AlumAsign.findAll({ where:{alumId: dni }}).catch(errHandler);

    var listaAsignaturas = [];
    for(i in idAsigns){
        const aux = await Asignatura.findAll({ where:{id: idAsigns[i].id }}).catch(errHandler);
        listaAsignaturas.push(aux);
    }

    var listaRecurso = [];
    for(i in listaAsignaturas){    
        const aux1 = await Recurso.findAll({ where:{asignaturaId: listaAsignaturas[i][0].id }}).catch(errHandler);
        listaRecurso.push(aux1);
    }

    return listaRecurso;
};

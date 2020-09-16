module.exports = async (dni) => {
    const AlumAsign = require("../models/AlumAsign");
    const Asignatura = require("../models/Asignatura");
    const Trabajo = require("../models/Trabajo");


    const errHandler = (err) => {
        console.error("Error: ", err);
    }
    
    var idAsigns = await AlumAsign.findAll({ where:{alumId: dni }}).catch(errHandler);

    var listaAsignaturas = [];
    for(i in idAsigns){
        const aux = await Asignatura.findAll({ where:{id: idAsigns[i].id }}).catch(errHandler);
        listaAsignaturas.push(aux);
    }

    var listaTrabajo = [];
    for(i in listaAsignaturas){    
        const aux1 = await Trabajo.findAll({ where:{asignaturaId: listaAsignaturas[i][0].id }}).catch(errHandler);
        listaTrabajo.push(aux1);
    }
    //const aux1 = await Trabajo.findAll({ where:{asignaturaId: listaAsignaturas[0][0].id }}).catch(errHandler);
    return listaTrabajo;
};

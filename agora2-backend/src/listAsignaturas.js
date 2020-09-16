module.exports = async (dni) => {
    const AlumAsign = require("../models/AlumAsign");
    const Asignatura = require("../models/Asignatura");

    const errHandler = (err) => {
        console.error("Error: ", err);
    }
    
    var idAsigns = await AlumAsign.findAll({ where:{alumId: dni }}).catch(errHandler);
    //console.log(idAsigns.length);
    //console.log(idAsigns[1].id);
    var listaAsignaturas = [];
    for(i in idAsigns){
        const aux = await Asignatura.findAll({ where:{id: idAsigns[i].id }}).catch(errHandler);
        listaAsignaturas.push(aux);
    }
    return listaAsignaturas;
};

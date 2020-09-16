module.exports = async (examenbbdd) => {
    //const Alumno = require("../models/Alumno");
    const Asignatura1 = require("../models/Asignatura");
    const AlumAsign = require("../models/AlumAsign");
    const Trabajo = require("../models/Trabajo");
    //const Recurso = require("../models/Recurso");
    const AlumTrabajo = require("../models/AlumTrabajo");

    var alumAsig1 = examenbbdd.trabajo+"alumasig";
    var alumno1 = examenbbdd.trabajo+"alumno";
    var asignatura1= examenbbdd.trabajo+"asignatura";
    var trabajo1= examenbbdd.trabajo+"trabajo";
    var alumTrabajo1= examenbbdd.trabajo+"alumTrabajo";
    //Establece una relaciond e 1 a muchos
    Asignatura1.hasMany(AlumAsign, {as: alumAsig1, foreignKey:"alumId"});
    AlumAsign.belongsTo(Asignatura1, {as: alumno1, foreignKey:"alumId"});
    AlumAsign.belongsTo(Asignatura1, {as: asignatura1, foreignKey:"asignId"});

    //Establece una relaciond e 1 a muchos
    Asignatura1.hasMany(Trabajo, {as: trabajo1, foreignKey:"asignaturaId"});
    Trabajo.belongsTo(Asignatura1, {as: asignatura1, foreignKey:"asignaturaId"});

    //Establece una relaciond e 1 a muchos
    Trabajo.hasMany(AlumTrabajo, {as: alumTrabajo1, foreignKey:"alumId"});
    AlumTrabajo.belongsTo(Trabajo, {as: alumno1, foreignKey:"alumId"});
    AlumTrabajo.belongsTo(Trabajo, {as: trabajo1, foreignKey:"trabajoId"});



    const errHandler = (err) => {
        console.error("Error: ", err);
    }
    console.log(examenbbdd);
/*****************************************************/
/*************Primero borrar en alumTrabajo***********/
/*****************************************************/
    await AlumTrabajo.destroy(
        {where:{trabajoId:examenbbdd.trabajo}}
    ).catch(errHandler);
/*****************************************************/
/*************Borrar en trabjo***********/
/*****************************************************/
    await Trabajo.destroy(
        {where:{id:examenbbdd.trabajo}}
    ).catch(errHandler);
};
module.exports = async (examenbbdd) => {
    //const Alumno = require("../models/Alumno");
    const Asignatura1 = require("../models/Asignatura");
    const AlumAsign = require("../models/AlumAsign");
    const Trabajo = require("../models/Trabajo");
    //const Recurso = require("../models/Recurso");
    const AlumTrabajo = require("../models/AlumTrabajo");

    var alumAsig1 = examenbbdd.name+"alumasig";
    var alumno1 = examenbbdd.name+"alumno";
    var asignatura1= examenbbdd.name+"asignatura";
    var trabajo1= examenbbdd.name+"trabajo";
    var alumTrabajo1= examenbbdd.name+"alumTrabajo";
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
/*************Examenes y trabajos a entregar**********/
/*****************************************************/
   const trabajoBBDD = await Trabajo.create({
        nombre: examenbbdd.name,
        examen: examenbbdd.exam,
        fechaentrega: examenbbdd.fecha,
        asignaturaId: examenbbdd.asign 
    }).catch(errHandler);
/*****************************************************/
/*************Bucle asigna trabajo a alumno***********/
/*****************************************************/

    var listaAlumTrabajo = await AlumAsign.findAll({ where:{asignId:examenbbdd.asign}}).catch(errHandler);
    var listadni=[];

    for(var i = 0; i < listaAlumTrabajo.length; i++){
        if(! listadni.includes(listaAlumTrabajo[i].alumId))
            listadni.push(listaAlumTrabajo[i].alumId);
   }
   const varBBDD=[];
   console.log(listadni);
    for(var i = 0; i < listadni.length; i++){
        varBBDD[i]= await AlumTrabajo.create({
            nota: examenbbdd.nota,
            url: "No hecho todavia",
            entregado:false,
            trabajoId: examenbbdd.asign,
            alumId: listadni[i]
        }).catch(errHandler);
    }
};
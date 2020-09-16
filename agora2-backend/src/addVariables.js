module.exports = async () => {
    const Alumno = require("../models/Alumno");
    const Asignatura = require("../models/Asignatura");
    const AlumAsign = require("../models/AlumAsign");
    const Trabajo = require("../models/Trabajo");
    const Recurso = require("../models/Recurso");
    const AlumTrabajo = require("../models/AlumTrabajo");

    //Establece una relaciond e 1 a muchos
    Alumno.hasMany(Asignatura, {as: "Asignaturas", foreignKey: "alumnoId"});
    Asignatura.belongsTo(Alumno, {as: "Alumno", foreignKey: "alumnoId"});

    //Establece una relaciond e 1 a muchos
    Asignatura.hasMany(AlumAsign, {as: "AlumAsig", foreignKey:"alumId"});
    AlumAsign.belongsTo(Asignatura, {as: "Alumno", foreignKey:"alumId"});
    AlumAsign.belongsTo(Asignatura, {as: "Asignatura", foreignKey:"asignId"});

    //Establece una relaciond e 1 a muchos
    Asignatura.hasMany(Recurso, {as: "Recurso", foreignKey:"asignaturaId"});
    Recurso.belongsTo(Asignatura, {as: "Asignatura", foreignKey:"asignaturaId"});

    //Establece una relaciond e 1 a muchos
    Asignatura.hasMany(Trabajo, {as: "Trabajo", foreignKey:"asignaturaId"});
    Trabajo.belongsTo(Asignatura, {as: "Asignatura", foreignKey:"asignaturaId"});

    //Establece una relaciond e 1 a muchos
    Trabajo.hasMany(AlumTrabajo, {as: "AlumTrabajo", foreignKey:"alumId"});
    AlumTrabajo.belongsTo(Trabajo, {as: "Alumno", foreignKey:"alumId"});
    AlumTrabajo.belongsTo(Trabajo, {as: "Trabajo", foreignKey:"trabajoId"});



    const errHandler = (err) => {
        console.error("Error: ", err);
    }

    //introduce un alumno
    const alumno = await Alumno.create({
        dni:"71471266P",
        username: "rcapef00",
        password: "hola",
        email:"rcapef00@gmail.com",
        profesor:false
    }).catch(errHandler);

    //introduce un profesor
    const profesor = await Alumno.create({
        dni:"12345678K",
        username: "dmañac00",
        password: "hola",
        email:"dmañac00@gmail.com",
        profesor:true
    }).catch(errHandler);

    //Introduce una asignatura
    const appWeb = await Asignatura.create({
        nombre: "Aplicaciones Web",
        carrera: "Ing.Informatica",
        creditos:6,
        alumnoId: profesor.dni
    }).catch(errHandler);

    //Introduce una asignatura
    const vArt = await Asignatura.create({
        nombre: "Vision Artificial",
        carrera: "Ing.Informatica",
        creditos:6,
        alumnoId: profesor.dni
    }).catch(errHandler);

    //Introduce una asignatura
    const assoo = await Asignatura.create({
        nombre: "Ampliacion de sistemas operativos",
        carrera: "Ing.Informatica",
        creditos:6,
        alumnoId: profesor.dni
    }).catch(errHandler);

    //Asigna una asignatura a un alumno
    const rcapef00Appweb = await AlumAsign.create({
        alumId: alumno.dni,
        asignId: appWeb.id
    }).catch(errHandler);

    //Asigna una asignatura a un alumno
    const rcapef00vArt = await AlumAsign.create({
        alumId: alumno.dni,
        asignId: vArt.id
    }).catch(errHandler);

    //Asigna una asignatura a un alumno
    const rcapef00assoo = await AlumAsign.create({
        alumId: alumno.dni,
        asignId: assoo.id
    }).catch(errHandler);

    //Asigna un recurso a una asignatura
    const recurso = await Recurso.create({
        url: "No implementado todavia",
        nombre: "Tema1: Teoría Vuetify",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    //Asigna un recurso a una asignatura
    const recurso1 = await Recurso.create({
        url: "No implementado todavia6",
        nombre: "Tema2: Teoría Vue Router",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    //Asigna un recurso a una asignatura
    const recurso2 = await Recurso.create({
        url: "No implementado todavia1",
        nombre: "Tema1: Teoría Gestion de archivos",
        asignaturaId: assoo.id 
    }).catch(errHandler);

    //Asigna un recurso a una asignatura
    const recurso3 = await Recurso.create({
        url: "No implementado todavia2",
        nombre: "Tema1: Gestion de memoria",
        asignaturaId: assoo.id 
    }).catch(errHandler);

    //Asigna un recurso a una asignatura
    const recurso4 = await Recurso.create({
        url: "No implementado todavia3",
        nombre: "Tema3: Explicacion proyecto final",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    //Crea un trabajo y lo asigna a una asignatura
    const pFinal = await Trabajo.create({
        nombre: "Practica final",
        examen: false,
        fechaentrega: "2020-05-05",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    const EjecsTeoria = await Trabajo.create({
        nombre: "Ejercicos Teoria Tema1",
        examen: false,
        fechaentrega: "2020-05-05",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    const ExamenTeoria = await Trabajo.create({
        nombre: "Examen Teoria",
        examen: true,
        fechaentrega: "2020-05-05",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    const ExamenPracticas = await Trabajo.create({
        nombre: "Examen Practicas",
        examen: true,
        fechaentrega: "2020-05-05",
        asignaturaId: appWeb.id 
    }).catch(errHandler);

    //Asignas tareas y examenes a alumnos
    const pFinalRcapef00 = await AlumTrabajo.create({
        nota: 8,
        url: "No hecho todavia",
        entregado:false,
        trabajoId: pFinal.id,
        alumId: alumno.dni
    }).catch(errHandler);

    const ejcTeorialRcapef00 = await AlumTrabajo.create({
        nota: 8,
        url: "No hecho todavia",
        entregado:false,
        trabajoId: EjecsTeoria.id,
        alumId: alumno.dni
    }).catch(errHandler);

    const exmteorRcapef00 = await AlumTrabajo.create({
        nota: 8,
        url: "No hecho todavia",
        entregado:false,
        trabajoId: ExamenTeoria.id,
        alumId: alumno.dni
    }).catch(errHandler);

    const exmPracRcapef00 = await AlumTrabajo.create({
        nota: 8,
        url: "No hecho todavia",
        entregado:false,
        trabajoId: ExamenPracticas.id,
        alumId: alumno.dni
    }).catch(errHandler);




};
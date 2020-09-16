module.exports = async (dni) => {
    const Alumno = require("../models/Alumno");

    const errHandler = (err) => {
        console.error("Error: ", err);
    }
    
    const user = await Alumno.findAll({ where:{dni: dni }}).catch(errHandler);
    //console.log("usuario: ", user);
    return user;
};
//exports.getUser = getUser;
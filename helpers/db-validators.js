const async = require('hbs/lib/async');
const Role = require('../models/role');
const Usuario=require('../models/usuario')

const esRoleValido =async(role='')=>{
    const existeRol= await Role.findOne({rol});
    if (!existeRol){
      throw new Error(`E rol ${rol} no está registrado en la Base de Datos`)
    }
}


const emailExiste=async(email='')=>{
     //verificar si el correo existe

  const emailExiste =await Usuario.findOne({correo});
  if(emailExiste){
    throw new Error(`Este correo: ${correo} ya está registrado en la Base de Datos`)
  }
}

const existeUsuarioPorId =async(id)=>{
  //verificar si existe el id por usuario

const existeUsuario =await Usuario.findById({id});
if(existeUsuario){
 throw new Error(`El id no existe ${id}`);
}
}

  module.exports={
      esRoleValido,
      emailExiste,
      existeUsuarioPorId
  }



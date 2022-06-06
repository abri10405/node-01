//const  bcrypt  =  require ( 'bcrypt' ) ; 

const {response , request}= require ('express');
const bcryptjs = require ('bcryptjs');


const Usuario = require('../models/usuario');

const async = require('hbs/lib/async');



const UsuarioGet =async(req=request, res=response) =>{
    //const {q,nombre='no name',apikey, page='1', limit='no limite'}=req.query;
    //paginacion 
    const {limite=5, desde =0}=req.query;
    const query ={estado:true};
    const usuarios =await Usuario.find(query)
     .skip(Number(desde))
     .limit(Number(limite))

    //const total = await Usuario.countDocuments(estado=true);
    // const {total,usuarios}=await Promise.all([
    //   Usuario.count(query),
    //   Usuario.find(query)
    //     .skip(Number(desde))
    //     .limit(Number(limite))
    //]);
    res.json({
      //total,
      usuarios
    });
  };
const UsuarioPut =async(req, res=response) =>{
    const {id}= req.params;
    const {password, google, correo, ...resto}=req.body;

    //TODO validador contra la base de datos
    if (password){
      const salt= bcryptjs.genSaltSync();
      resto.password=bcryptjs.hashSync(password, salt);
    }
    const usuario=await Usuario.findByIdAndUpdate(id, resto);
    res.json({
        msg:'put -API -controllers',
        usuario
    });
  };
const UsuarioPost =async (req, res=response) =>{
  //const body=req.body;
  //const usuario=new Usuario(body);  
  
  
  const {nombre, password, correo, rol}=req.body;
  const usuario= new Usuario({nombre, password, correo, rol});
    //verificar si el correo existe

  
    
    //encriptar la contraseña
    /////////////////////////////////////////
   
    //const salt = bcryptjs.genSaltSync(10);
    //usuario.password= bcryptjs.hashSync(password, salt);
    //var hash = bcrypt.hashSync("B4c0//", salt);
    ///////////////////////////////////////////////////////////////////
    //const salt=bcryptjs.genSaltSync();
    //usuario.contraseña=bcryptjs.hashSync(contraseña, salt);


    //guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
  };
const UsuarioPatch = (req, res=response) =>{
    
    res.json({
        msg:'patch -API -controllers'
    });
  };
const UsuarioDelete =async(req, res=response) =>{
    const {id}=req.params;
    ///////////////////////////////////////////////////////
    //se borra fisicamente
    //const usuario= await Usuario.findByIdAndDelete(id);
    ///////////////////////////////////////////////////////
    const usuario= await Usuario.findByIdAndUpdate(id, {estado:false});

    res.json(usuario);
  };




  module.exports={
      UsuarioGet,
      UsuarioPut,
      UsuarioPost,
      UsuarioPatch,
      UsuarioDelete
  }
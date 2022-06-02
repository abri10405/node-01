const { request } = require('express');
const {response}= require('express');

const UsuarioGet =(req=request, res=response) =>{
    const {q,nombre='no name',apikey, page='1', limit='no limite'}=req.query;
    res.json({
        msg:'get -API -controllers',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  };
const UsuarioPut =(req, res=response) =>{
    const {id}= req.params
    res.json({
        msg:'put -API -controllers',
        id
    });
  };
const UsuarioPost =(req, res=response) =>{
    const {nombre,edad}=req.body;
    res.json({
        msg:'post -API -controllers',
        nombre,
        edad
    });
  };
const UsuarioPatch =(req, res=response) =>{
    
    res.json({
        msg:'patch -API -controllers'
    });
  };
const UsuarioDelete =(req, res=response) =>{
    
    res.json({
        msg:'delete -API -controllers'
    });
  };




  module.exports={
      UsuarioGet,
      UsuarioPut,
      UsuarioPost,
      UsuarioPatch,
      UsuarioDelete
  }
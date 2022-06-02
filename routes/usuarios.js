

const {Router}=require('express');
const { UsuarioGet,  
        UsuarioPut,
        UsuarioPost, 
        UsuarioPatch, 
        UsuarioDelete, 
        } = require('../controllers/usuraios');


const router=Router();


  router.get('/', UsuarioGet);
  router.put('/:id', UsuarioPut);
  router.post('/', UsuarioPost);
  router.patch('/', UsuarioPatch);
  router.delete('/', UsuarioDelete);


module.exports=router
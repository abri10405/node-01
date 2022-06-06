

const {Router}=require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar/validar-campos');
const { UsuarioGet,  
        UsuarioPut,
        UsuarioPost, 
        UsuarioPatch, 
        UsuarioDelete, 
        } = require('../controllers/usuraios');

const async = require('hbs/lib/async');
const { esRoleValido, existeEmail, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');



const router=Router();


  router.get('/', UsuarioGet);
  router.put('/:id',[
  check('id','No es un ID válido').isMongoId(),
  //check('id').custom(existeUsuarioPorId),
  //check('rol').custom(esRoleValido),
  
  validarCampos
  ], UsuarioPut);
  router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de tener 6 caracteres').isLength({min:6}),
    check('correo', 'El correo no es válido').isEmail(),
    //check('correo').custom(emailExiste),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    //check('rol').custom(esRoleValido),
    validarCampos
  ],UsuarioPost);
  router.patch('/', UsuarioPatch);
  router.delete('/:id',[
    //check('id','No es un ID válido').isMongoId(),
    //check('id').custom(existeUsuarioPorId),
    validarCampos
  ], UsuarioDelete);


module.exports=router
const {Schema, model}=require('mongoose');

const UsiarioSchema=Schema({
    nombre:{
        type: String,
        required:[true, 'El Nombre Es Obligatorio'],
    },
    correo:{
        type:String,
        required:[true, 'El Correo Es Obligatorio'],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'La contraseña Obligatorio']
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        emun:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type:String,
        default: Boolean,
    },
    google:{
        type:String,
        default: false,
    },
});


UsiarioSchema.methods.toJSON=function(){
    const {__v, password,...usuario}=this.toObject();
    return usuario;
} 

module.exports=model('Usuario', UsiarioSchema);


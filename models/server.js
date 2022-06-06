const express = require('express');
const cors = require('cors');
const async = require('hbs/lib/async');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios'

        //conectar a la base de datos
        this.conectarDB();
        
        //middlewares
        this.middlewares();


        //rutas de mi aplicacion 
        this.routes();
    }
    //conectar a base de datos
    async conectarDB(){
        await dbConnection()
    }
    middlewares(){
        //cors
        this.app.use(cors());
        //parseo y lectura del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }
    routes(){
        

    };
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en el puerto', this.port)
        })
    }
}

module.exports= Server
const mongoose = require("mongoose")
const config = require("../config")

mongoose.Promise = global.Promise;
let mongoUrl = config.db.mongodb[config.env];
console.log("inicializando por: ", mongoUrl);
   function startMongo(){
        try {
            return mongoose.connect(mongoUrl, {useNewUrlParser: true})
            .then( (connect) => { console.log("Servicio mongo ACTIVO", connect); } )
            .catch( (error) => { console.log("Error en el Servicio de Mongo: ", error ); throw error } )
        } catch (error) {
            console.log("Error con MongoDB: ", error);
        }
    }
module.exports = {
    startMongo,
}

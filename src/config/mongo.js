const mongoose = require("mongoose")
const config = require("../config")

mongoose.Promise = global.Promise;
let mongoUrl = config.db.mongodb[config.env];
function startMongo() {
  try {
    return mongoose.connect(mongoUrl, { useNewUrlParser: true })
      .then(() => { console.log('\n\n', "Conectado a DB: ", mongoUrl, '\n\n\n'); })
      .catch((error) => { console.log("Error en el Servicio de Mongo: "); throw error })
  } catch (error) {
    console.log("Error con MongoDB: ", error);
  }
}

export { startMongo }

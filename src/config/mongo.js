const mongoose = require("mongoose")
const config = require("../config")
const colors = require('colors');

mongoose.Promise = global.Promise;
let mongoUrl = config.db.mongodb[config.env];
function startMongo() {
  try {
    return mongoose.connect(mongoUrl, { useNewUrlParser: true })
      .then(() => { console.log('\n\n', colors.bgYellow("Conectado a DB: ", colors.bgBlue(mongoUrl)), '\n\n\n'); })
      .catch((error) => { console.log("Error en el Servicio de Mongo: "); throw error })
  } catch (error) {
    console.log("Error con MongoDB: ", error);
  }
}

export { startMongo }

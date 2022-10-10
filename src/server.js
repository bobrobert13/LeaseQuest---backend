const express = require("express")
const cors = require("cors")
const app = express();
const mongo = require("../src/config/mongo");
const graphql = require("../src/domain")

    let corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200,
    }
    app.use(cors(corsOptions))

    app.dirbase = __dirname
    console.log("DIRECTORIO ACTUAL:", app.dirbase);
    
    //ahora iniciamos los servicios del server: apollo graphql, mongoDB y otros.
    ( async () => {
            await mongo.startMongo();
            await graphql.apolloServiceInit(app)
             
    })()
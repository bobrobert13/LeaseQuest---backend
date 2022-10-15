const cors = require("cors")
import express from 'express';
const mongo = require("./config/mongo");
import { server } from '../src/domain'
const app = express()

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


//ahora iniciamos los servicios del server: apollo graphql, mongoDB y otros.
(async () => {
  await mongo.startMongo();
  await server.apollosServiceInit(app)
  console.log('--------------------- Servicios Iniciados ------------------------');
})()

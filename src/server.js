const cors = require("cors")
import express from 'express';
import { startMongo } from "./config/mongo"
import { server } from '../src/domain'
const app = express()

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


//ahora iniciamos los servicios del server: apollo graphql, mongoDB y otros.
(async () => {
  await startMongo();
  await server.apollosServiceInit(app)
  console.log('--------------------- Servicios Iniciados ------------------------');
})()

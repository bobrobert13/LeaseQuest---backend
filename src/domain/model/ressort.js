import mongoose from "mongoose";
import { apartamentSchema } from "./apartaments";

const ressortSchema = new mongoose.Schema({
  nombre: { type: String },
  rif: { type: String },
  tlt: { type: String },
  status: { type: Boolean },
  description: { type: String },
  puntuacion: { type: Number },
  apartaments: [apartamentSchema],
});

const Ressort = mongoose.model("Ressorts", ressortSchema);
export default Ressort;

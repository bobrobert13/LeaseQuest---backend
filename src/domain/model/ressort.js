import mongoose from "mongoose";
import { type } from "os";
import { apartamentSchema } from "./apartaments";

const apartamentsRessots = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
}, {
  timeStamp: true
})

const address = {
  city: {
    type: String,
    default: ""
  },
  state: {
    type: String,
    default: ""
  },
  postal: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  street: {
    type: String,
    default: ""
  },
  edNumber: {
    type: String,
    default: ""
  },
}

const ressortSchema = new mongoose.Schema({
  nombre: { type: String },
  rif: { type: String },
  tlt: { type: String },
  status: { type: Boolean },
  description: { type: String },
  puntuacion: { type: Number },
  address: address,
  apartaments: [
    apartamentsRessots,
  ],
}, { timestamps: true });

const Ressort = mongoose.model("Ressorts", ressortSchema);
export default Ressort;

import mongoose from "mongoose";
import apartamentModel from "./apartaments";

console.log("Este schema", { apartamentModel })

const social_net = new mongoose.Schema({
  facebook: { type: String },
  instagram: { type: String },
})
const notifications = new mongoose.Schema({
  active: { type: Boolean },
  username: { type: String },
  phone: { type: String },
  date: { type: Date }
})

const seguridad = new mongoose.Schema({
  pin: { type: Number },
  status: { type: Boolean }
})

const address = new mongoose.Schema({
  referencia: { type: String },
  entityID: { type: mongoose.Schema.Types.ObjectId },
  type: { type: String, enum: ['casa', 'apartamento', 'ninguno'] }
})

const favorite = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
})

const userSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  foto: { type: String, default: "" },
  password: { type: String, default: "" },
  active: { type: Boolean, default: true },
  phone: { type: String, default: "" },
  role: { type: String, default: "" },
  favorites: { type: [favorite], default: [] },
  social: { type: social_net, default: {} },
  notifications: { type: [notifications], default: [] },
  seguridad: { type: seguridad, default: {} },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  address: { type: address, default: {} }
}, { timestamps: true })



const User = mongoose.model("Users", userSchema)
export default User;
console.log("Este schema", { User })

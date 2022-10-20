import mongoose from "mongoose";

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


const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  foto: { type: String },
  password: { type: String },
  active: { type: Boolean },
  phone: { type: Number },
  role: { type: String },
  social: social_net,
  notifications: [notifications],
  seguridad: seguridad,
  role: { type: String, enum: ['admin', 'user'] },
  address: address
})



export const User = mongoose.Model('Users', userSchema)

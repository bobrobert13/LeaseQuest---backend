import mongoose, { mongo } from "mongoose";

const plans = new mongoose.Schema({
  byDay: { type: Boolean }, byMonth: { type: Boolean }, byWeek: { type: Boolean }
})


const user = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  fullName: { type: String },
  email: { type: String },
  foto: { type: String },
})

const gallery = new mongoose.Schema({
  path: { type: String },
  photo: { type: String },
  url: { type: String },
  binary: { type: String }
})

const services = new mongoose.Schema({
  name: { type: String },
  status: { type: Boolean }
})

const booking = new mongoose.Schema({
  start: { type: Date },
  end: { type: Date }
})

const address = new mongoose.Schema({
  referencia: { type: String },
  entityID: { type: mongoose.Schema.Types.ObjectId },
  type: { type: String, enum: ['casa', 'apartamento', 'ninguno'] }
})


const apartaments = new mongoose.Schema({
  name: { type: String },
  photo: { type: String },
  description: { type: String },
  disponible: { type: Boolean },
  recomendado: { type: Boolean },
  bathrooms: { type: Number },
  address: address,
  rooms: { type: Number },
  salas: { type: Number },
  suite: { type: Boolean },
  costo: { type: Number },
  plans: [plans],
  points: { type: Number },
  recomendadoBy: [user],
  gallery: [gallery],
  numberApt: { type: Number },
  calidad: { type: String, enum: ["Exelente", "Buena", "Regular"] },
  inFav: user,
  cocinas: { type: Number },
  muebleria: { type: Boolean },
  servicios: [services],
  disponible: { type: Boolean },
  status: { type: Boolean },
  booking: booking,
})

export const APT = new mongoose.model('Apartament', apartaments)

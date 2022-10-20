import mongoose from "mongoose";

const booking = new mongoose.Schema({
  number: { type: Boolean },
  apartaments: { type: mongoose.Schema.Types.Mixed },
  client: { type: mongoose.Schema.Types.Mixed },
  activa: { type: Boolean },
  cancelada: { type: Boolean },
})

export const bookings = new mongoose.model('Booking', booking)

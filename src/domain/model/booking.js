import mongoose from "mongoose";

const status = mongoose.Schema({
  code: { type: Number, default: 0 },
  process: { type: String, default: "" },
});

const booking = new mongoose.Schema(
  {
    apartaments: { type: mongoose.Schema.Types.ObjectId },
    client: { type: mongoose.Schema.Types.ObjectId },
    activa: { type: Boolean },
    status: status,
  },
  { timeStamp: true }
);

export const bookings = mongoose.model("Booking", booking);

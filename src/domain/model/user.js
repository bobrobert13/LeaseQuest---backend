import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    active: { type: Boolean },
    pin: { type: Number },
    phone: { type: Number },
    role: { type: String },
})

export const User = mongoose.Model('Users', userSchema)
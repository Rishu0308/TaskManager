import mongoose, { connect, mongo } from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect(process.env.ATLAS_URL)
    .then (() => console.log ('DB CONNECT'));
}
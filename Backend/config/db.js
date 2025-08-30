import mongoose, { connect, mongo } from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://rishu1618r2:rishu1618r2@cluster0.pyhxxmz.mongodb.net/Taskflow')
    .then (() => console.log ('DB CONNECT'));
}
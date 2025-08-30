import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        require: true
    }
})

const userModel = mongoose.model.user || mongoose.model("user", userShema);

export default userModel;
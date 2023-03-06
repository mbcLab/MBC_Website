import mongoose from "mongoose";
 
const User = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    divisi:{
        type: String,
        required: true
    },
    instagram:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    namafile:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('User', User);
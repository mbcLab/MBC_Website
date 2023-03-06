import mongoose from "mongoose";
 
const Project = mongoose.Schema({
    proyek:{
        type: String,
        required: true
    },
    tanggal:{
        type: Date,
        value: Date.now()
    },
    tanggalberakhir:{
        type: Date,
        required: false
    },
    isi:{
        type: String,
        required: true
    },
    namafile:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Project', Project);
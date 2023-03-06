import mongoose from "mongoose";
 
const Berita = mongoose.Schema({
    judul:{
        type: String,
        required: true
    },
    tanggal:{
        type: Date,
        value: Date.now()
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
 
export default mongoose.model('Berita', Berita);
import React, { useState } from "react";
import axios from "axios";
import { storage } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 
const AddBerita = () => {
  const [judul, setJudul] = useState("");
  const [percent, setPercent] = useState(0);
  const [tanggal, setTanggal] = useState(Date.now());
  const [isi, setisi] = useState("");
  const [foto, setfoto] = useState("");
  const navigate = useNavigate();
  var namafile = "";
  var persenan = '';
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      if(foto != null){
        const storageRef = ref(storage,'/berita/'+judul+'/'+foto.name);
        const uploadTask = uploadBytesResumable(storageRef, foto);
        uploadTask.on(
          "state_changed",
            (snapshot) => {
            const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
            },
          (err) => console.log(err),

          () =>{
            getDownloadURL(uploadTask.snapshot.ref).then(async (url)=>{
              namafile = url;
              alert("berhasil ditambahkan");
              await axios.post("http://127.0.0.1:5000/MakeBerita", {
                  judul,
                  isi,
                  namafile,
                  tanggal,
              });
              navigate("/BlogList");
            });
          });  
        }
      await axios.post("http://localhost:5000/MakeBerita", {
          judul,
          isi,
      });
      navigate("/BlogList");
    } catch (error) {
      console.log(error);
    }
  };
  if(percent == 0){
    persenan = <p></p>;
  }
  else{ persenan = <p>{percent} "% done"</p>}
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">judul</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">foto</label>
            <div className="control">
              <input
                type="file"
                accept="image/*"
                className="input"
                onChange={(e) => setfoto(e.target.files[0])}
                placeholder="foto"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">isi</label>
            <div className="control">
              <textarea
                className="input"
                value={isi}
                onChange={(e) => setisi(e.target.value)}
                placeholder="isi"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
          {persenan}
        </form>
      </div>
    </div>
  );
};
 
export default AddBerita;
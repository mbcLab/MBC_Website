import React, { useState } from "react";
import { firestore,storage } from "../../firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
 
const AddProject = () => {
  const [proyek, setproyek] = useState("");
  const [isi, setisi] = useState("");
  const [tanggalberakhir, settanggalberakhir] = useState(Date.now());
  const [tanggal, setTanggal] = useState(Date.now());
  const [percent, setPercent] = useState(0);
  const [foto, setfoto] = useState("");
  const navigate = useNavigate();
  var namafile = "";
  var persenan = '';
  const reff = collection(firestore,'project');

 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      if(foto != null){
        const storageRef = ref(storage,'/project/'+proyek+'/'+foto.name);
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
              let data = {
                proyek: proyek,
                tanggal:tanggal,
                tanggalberakhir:tanggalberakhir,
                isi:isi,
                namafile:namafile
               }
              addDoc(reff,data);
              alert("berhasil ditambahkan");
            navigate("/ProjectList");
            });
          });
        }
      navigate("/ProjectList");
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
            <label className="label">nama project</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={proyek}
                onChange={(e) => setproyek(e.target.value)}
                placeholder="nama project"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">tanggal berakhir</label>
            <div className="control">
              <input
                type="datetime-local"
                className="input"
                value={tanggalberakhir}
                onChange={(e) => settanggalberakhir(e.target.value)}
                placeholder="tanggal berakhir"
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
 
export default AddProject;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";
const AddUser = () => {
  const [nama, setnama] = useState("");
  const [divisi, setdivisi] = useState("Gametech");
  const [instagram, setinstagram] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [foto, setfoto] = useState("");
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();
  var namafile = "";
  var persenan = "";
  const reff = collection(firestore,'user');

  const saveUser = async (e) => {
    e.preventDefault();
    function validURL(link) {
      try {
        return Boolean(new URL(link));
      } catch {
        return false;
      }
    }
    if (!validURL(instagram) || !validURL(linkedin)) {
      console.log("[?] URL unknown");
      return;
    }
    try {
      if (foto != null) {
        const storageRef = ref(storage, "/user/" + nama + "/" + foto.name);
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

          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
              namafile = url;
              let data = {
                nama:nama,
                divisi:divisi,
                instagram:instagram,
                linkedin:linkedin,
                namafile:namafile
               }
              addDoc(reff,data);
              alert("berhasil ditambahkan");
              navigate("/UserList");
            });
          }
        );
      }

      // sending data to backend
      let data = {
        nama:nama,
        divisi:divisi,
        instagram:instagram,
        linkedin:linkedin,
        namafile:namafile
       }
      addDoc(reff,data);
      alert("berhasil ditambahkan");
      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };
  if (percent === 0) {
    persenan = <p></p>;
  } else {
    persenan = <p>{percent} "% done"</p>;
  }

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setnama(e.target.value)}
                placeholder="Nama"
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
            <label className="label">Divisi</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={divisi}
                  onChange={(e) => setdivisi(e.target.value)}
                >
                  <option value="GameTech">Gametech</option>
                  <option value="GIS">GIS</option>
                  <option value="Cyber">Cyber</option>
                  <option value="BigData">Big Data</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">instagram</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={instagram}
                onChange={(e) => setinstagram(e.target.value)}
                placeholder="instagram"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">linkedin</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={linkedin}
                onChange={(e) => setlinkedin(e.target.value)}
                placeholder="linkedin"
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

export default AddUser;

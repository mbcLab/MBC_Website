import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { updateDoc, doc, collection,getDoc } from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const EditUser = () => {
  const [nama, setnama] = useState("");
  const [instagram, setinstagram] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const reff = collection(firestore,'berita');
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const taskDocRef = doc(firestore, 'user', id)
    try{
      const a = await getDoc(taskDocRef);
      setnama(a.data().nama);
      setinstagram(a.data().instagram);
      setlinkedin(a.data().linkedin);
    } catch (err) {
      alert(err)
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(firestore, 'user', id)
    try{
      await updateDoc(taskDocRef, {
        nama:nama,
        instagram:instagram,
        linkedin:linkedin
      })
      alert("berhasil diubah");
      navigate("/UserList"); 
    } catch (err) {
      alert(err)
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setnama(e.target.value)}
                placeholder="Nama"
                id="name"
              />
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
                id="instagram"
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
                id="linkedin"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

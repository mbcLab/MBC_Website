import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { updateDoc, doc, collection, getDoc } from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";
 
const EditProject = () => {
  const [proyek, setproyek] = useState("");
  const [isi, setisi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const taskDocRef = doc(firestore, 'project', id)
    try{
      const a = await getDoc(taskDocRef);
      setproyek(a.data().proyek);
      setisi(a.data().isi);
    } catch (err) {
      alert(err)
    }
  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(firestore, 'project', id)
    try{
      await updateDoc(taskDocRef, {
        proyek:proyek,
        isi:isi
      })
      alert("berhasil diubah");
      navigate("/ProjectList"); 
    } catch (err) {
      alert(err)
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditProject;
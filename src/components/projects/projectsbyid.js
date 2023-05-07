import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {collection,doc, getDoc} from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const ProjectbyId = () => {
  const [Proyek, setProyek] = useState("");
  const [isi, setisi] = useState("");
  const [gambar, setgambar] = useState(""); // belum ada
  const [tanggal, setTanggal] = useState("");
  const [tanggalberakhir, setTanggalberakhir] = useState(""); // belum ada
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const taskDocRef = doc(firestore, 'project', id)
    try{
      const a = await getDoc(taskDocRef);
      setProyek(a.data().proyek);
      setTanggal(a.data().tanggal);
      setTanggalberakhir(a.data().tanggalberakhir);
      setisi(a.data().isi);
      setgambar(a.data().namafile);
    } catch (err) {
      alert(err)
    }
  };

  return (
    <section className="w3-container" style={{ padding: "100px" }}>
      <h2 className="font-extrabold">{Proyek}</h2>
      <h5>Start Date: {Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(tanggal)}</h5>
      <h5>Due Date: {tanggalberakhir}</h5>
      <img src={gambar} style={{ maxWidth: "100%" }} alt="gambar" />
      <p>{isi}</p>
    </section>
  );
};
export default ProjectbyId;

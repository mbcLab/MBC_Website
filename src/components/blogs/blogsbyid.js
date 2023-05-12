import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { collection,doc, getDoc } from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const BlogsbyId = () => {
  const reff = collection(firestore,'berita');
  const [judul, setJudul] = useState("");
  const [isi, setisi] = useState("");
  const [gambar, setgambar] = useState("");
  const [tanggal, setTanggal] = useState(Date.now);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const taskDocRef = doc(firestore, 'berita', id)
    try{
      const a = await getDoc(taskDocRef);
      setJudul(a.data().judul);
      setTanggal(a.data().tanggal);
      setisi(a.data().isi);
      setgambar(a.data().namafile);
    } catch (err) {
      alert(err)
    }
  };
  return (
    <section class="w3-container" style={{ padding: "100px" }}>
      <h2>{judul}</h2>
      <h5>{Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(tanggal)}</h5>
      <img src={gambar} style={{ maxWidth: "100%" }} />
      <p>{isi}</p>
    </section>
  );
};
export default BlogsbyId;

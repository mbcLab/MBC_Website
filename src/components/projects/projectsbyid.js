import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
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
    return await axios
      .get(`http://localhost:5000/Project/${id}`)
      .then((res) => {
        const data = res.data[0];
        const startDate = new Date(data.date);
        setProyek(data.title);
        setTanggal(new Date(data.date).toUTCString());
        data.dueDate
          ? setTanggalberakhir(new Date(data.dueDate).toUTCString())
          : setTanggalberakhir(
              new Date(
                startDate.setMonth(startDate.getMonth() + 3)
              ).toUTCString()
            );
        setisi(data.content);
        setgambar(data.namafile);
      });
  };

  return (
    <section className="w3-container" style={{ padding: "100px" }}>
      <h2 className="font-extrabold">{Proyek}</h2>
      <h5>Start Date: {tanggal}</h5>
      <h5>Due Date: {tanggalberakhir}</h5>
      <img src={gambar} style={{ maxWidth: "100%" }} alt="gambar" />
      <p>{isi}</p>
    </section>
  );
};
export default ProjectbyId;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProjectbyId = () => {
    const [Proyek, setProyek] = useState("");
    const [isi, setisi] = useState("");
    const [gambar,setgambar] =useState("");
    const [tanggal, setTanggal] = useState(Date.now);
    const [tanggalberakhir, setTanggalberakhir] = useState(Date.now);
    const { id } = useParams();
   
    useEffect(() => {
      getUserById();
    }, []);
   
    const getUserById = async () => {
      const response = await axios.get(`http://localhost:5000/Project/${id}`);
      setProyek(response.data.proyek);
      setTanggal(response.data.tanggal);
      setTanggalberakhir(response.data.tanggalberakhir);
      setisi(response.data.isi);
      setgambar(response.data.namafile);
    };

    return(
    <section class="w3-container" style={{padding: "100px"}}>
        <h2>{Proyek}</h2>
        <h5>
            dari {tanggal} sampai dengan {tanggalberakhir}
        </h5>
        <img src={gambar} style={{maxWidth:'100%'}}/>
        <p>{isi}</p>
    </section>
        );
}
export default ProjectbyId;
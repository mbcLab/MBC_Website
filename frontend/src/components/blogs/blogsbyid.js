import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BlogsbyId = () => {
    const [judul, setJudul] = useState("");
    const [isi, setisi] = useState("");
    const [gambar,setgambar] =useState("");
    const [tanggal, setTanggal] = useState(Date.now);
    const navigate = useNavigate();
    const { id } = useParams();
   
    useEffect(() => {
      getUserById();
    }, []);
   
    const getUserById = async () => {
      const response = await axios.get(`http://localhost:5000/Berita/${id}`);
      setJudul(response.data.judul);
      setTanggal(response.data.tanggal)
      setisi(response.data.isi);
      setgambar(response.data.namafile);
    };

    return(
    <section class="w3-container" style={{padding: "100px"}}>
        <h2>{judul}</h2>
        <h5>
            {tanggal}
        </h5>
        <img src={gambar} style={{maxWidth:'100%'}}/>
        <p>{isi}</p>
    </section>
        );
}
export default BlogsbyId;

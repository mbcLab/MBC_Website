import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBlogs = () => {
  const [beritas, setBerita] = useState([]);

  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    const response = await axios.get("http://127.0.0.1:5000/Berita");
    setBerita(response.data);
  };
  return (
    <section class="w3-container">
      {beritas.map((berita, index) => (
        <div
          class="w3-col s3 w3-card"
          style={{
            padding: "30px",
            margin: "50px",
            borderRadius: "50px",
            background: "#02073E",
          }}
        >
          <div class="w3-container w3-center">
            <img
              src={berita.namafile}
              alt="Avatar"
              style={{ marginTop: "50px", maxWidth: "200px" }}
            />
            <h5 class="w3-text-white">{berita.title}</h5>
            <div class="w3-section">
              <a
                href={`/Blog/${berita._id}`}
                class="w3-button w3-grey"
                style={{ borderRadius: "50px" }}
              >
                lihat
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ListBlogs;

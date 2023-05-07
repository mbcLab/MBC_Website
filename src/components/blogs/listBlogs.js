import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const ListBlogs = () => {
  const reff = collection(firestore,'berita');
  const [beritas, setBerita] = useState([]);


  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async() => {
      const snapshot = await query(reff);
    
      onSnapshot(snapshot, (querySnapshot) => {
        setBerita(querySnapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().judul,
          namafile: doc.data().namafile
        })))
      });
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
              class="w3-center"
              src={berita.namafile}
              alt="Avatar"
              style={{ marginTop: "50px", minWidth: "240px", maxWidth:"240px",maxHeight: "200px",minHeight: "200px" }}
            />
            <h5 class="w3-text-white">{berita.title}</h5>
            <div class="w3-section">
              <a
                href={`/Blog/${berita.id}`}
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

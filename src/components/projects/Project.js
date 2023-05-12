import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const Project = () => {
  const reff = collection(firestore,'project');
  const [projects, setproject] = useState([]);

  useEffect(() => {
    getproject();
  }, []);

  const getproject = async() => {
    const snapshot = await query(reff);
  
    onSnapshot(snapshot, (querySnapshot) => {
      setproject(querySnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().proyek,
        date: doc.data().tanggal,
        namafile: doc.data().namafile
      })))
    }); 
    };

  return (
    <div>
      <header
        class="w3-container w3-center"
        style={{
          paddingTop: "100px",
          height: "300px",
          borderEndEndRadius: "100px",
          borderEndStartRadius: "100px",
          background: "#02073E",
        }}
      >
        <h1 class="w3-xxxlarge w3-text-white" style={{ marginTop: "50px" }}>
          MBC Projects
        </h1>
      </header>
      <div
        class="w3-container w3-padding w3-center"
        style={{ height: "100%" }}
      >
        <h1 style={{ marginTop: "50px" }}>
          <b>project yang masih berjalan</b>
        </h1>
        <div
          class="w3-container w3-padding"
          style={{
            margin: "100px",
            height: "80%",
            borderRadius: "100px",
            background: "#02073E",
          }}
        >
          {projects.map((project, index) => (
            <div
              class="w3-col s3 w3-card s3"
              style={{
                padding: "20px",
                margin: "30px",
                borderRadius: "50px",
                background: "#02073E",
              }}
            >
              <div class="w3-container w3-center">
                <img
                  src={project.namafile}
                  alt="Avatar"
                  style={{ marginTop: "50px", minWidth: "200px", maxWidth:"200px",maxHeight: "200px",minHeight: "200px" }}
                />
                <h5 class="w3-text-white">{project.title}</h5>
                <h5 class="w3-text-white">Tanggal {Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(project.date)}</h5>
                <div class="w3-section">
                  <a
                    href={`/Projek/${project.id}`}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    lihat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

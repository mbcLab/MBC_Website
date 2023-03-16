import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Project = () => {
  const [projects, setproject] = useState([]);

  useEffect(() => {
    getproject();
  }, []);

  const getproject = async () => {
    const response = await axios.get("http://localhost:5000/Project");
    setproject(response.data);
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
        style={{ height: "1000px" }}
      >
        <h1 style={{ marginTop: "50px" }}>
          <b>project yang masih berjalan</b>
        </h1>
        <div
          class="w3-container w3-padding"
          style={{
            margin: "100px",
            height: "500px",
            borderRadius: "100px",
            background: "#02073E",
          }}
        >
          {projects.map((project, index) => (
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
                  src={project.namafile}
                  alt="Avatar"
                  style={{ marginTop: "50px", maxWidth: "200px" }}
                />
                <h5 class="w3-text-white">{project.title}</h5>
                <h5 class="w3-text-white">Tanggal {project.date}</h5>
                <div class="w3-section">
                  <a
                    href={`/Projek/${project._id}`}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Project from "../projects/Project";

const ProjectList = () => {
  const [projects, setproject] = useState([]);

  useEffect(() => {
    getproject();
  }, []);
  const getproject = async () => {
    const response = await axios.get("http://localhost:5000/Project");
    setproject(response.data);
  };

  const deleteproject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteProject/${id}`);
      getproject();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="/addProject" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>proyek</th>
              <th>tanggal</th>
              <th>tanggal berakhir</th>
              <th>isi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.date}</td>
                <td>{project.tanggalberakhir}</td>
                <td>{project.content}</td>
                <td>
                  <Link
                    to={`/editProject/${project._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteproject(project._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;

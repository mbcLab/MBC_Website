import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Button href="/addProject" variant="success" className="ml-5">
          Add Project
        </Button>
        <table className="table is-striped is-fullwidth mt-2 text-center">
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
                <td>{new Date(project.date).toUTCString()}</td>
                <td>{project.tanggalberakhir}</td>
                <td>{project.content}</td>
                <td className="flex flex-row gap-3">
                  <Button
                    href={`/editProject/${project._id}`}
                    className="flex-auto"
                  >
                    Edit
                  </Button>

                  <Button
                    href="/ProjectList"
                    variant="danger"
                    onClick={() => deleteproject(project._id)}
                    className="bg-red-600 hover:bg-red-900 flex-auto"
                  >
                    Delete
                  </Button>
                  {/* <button
                    onClick={() => deleteproject(project._id)}
                    className="button is-danger is-small text-center inset-10 bg-red-600 hover:bg-red-900 hover:text-white"
                  >
                    Delete
                  </button> */}
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

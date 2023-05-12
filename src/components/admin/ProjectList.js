import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {doc,collection, query, orderBy, onSnapshot,deleteDoc} from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const ProjectList = () => {
  const [projects, setproject] = useState([]);
  const reff = collection(firestore,'project');

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
        tanggalberakhir: doc.data().tanggalberakhir,
        isi: doc.data().isi,
        namafile: doc.data().namafile
      })))
    }); 
    };

  const deleteproject = async (id) => {
    const taskDocRef = doc(firestore, 'project', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
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
                <td>{project.isi}</td>
                <td className="flex flex-row gap-3">
                  <Button
                    href={`/editProject/${project.id}`}
                    className="flex-auto"
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => deleteproject(project.id)}
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

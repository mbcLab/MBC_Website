import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const BlogList = () => {
  const [beritas, setBerita] = useState([]);
 
  useEffect(() => {
    getBerita();
  }, []);
  const getBerita = async () => {
    const response = await axios.get("http://localhost:5000/Berita");
    setBerita(response.data);
  };
 
  const deleteBerita = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteBerita/${id}`);
      getBerita();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="/addBerita" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>judul</th>
              <th>tanggal</th>
              <th>isi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {beritas.map((berita, index) => (
              <tr key={berita._id}>
                <td>{index + 1}</td>
                <td>{berita.judul}</td>
                <td>{berita.tanggal}</td>
                <td>{berita.isi}</td>
                <td>
                  <Link
                    to={`/EditBerita/${berita._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBerita(berita._id)}
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
 export default BlogList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

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
        <Button href="/addBerita" variant="success" className="ml-5">
          Add Blog
        </Button>
        <table className="table is-striped is-fullwidth mt-2 text-center">
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
                <td>{berita.title}</td>
                <td>{new Date(berita.date).toUTCString()}</td>
                <td>{berita.content}</td>
                <td className="flex flex-row gap-3">
                  <Button
                    href={`/editberita/${berita._id}`}
                    className="flex-auto"
                  >
                    Edit
                  </Button>

                  <Button
                    href="/beritaList"
                    variant="danger"
                    onClick={() => deleteBerita(berita._id)}
                    className="bg-red-600 hover:bg-red-900 flex-auto"
                  >
                    Delete
                  </Button>
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const EditUser = () => {
  const [nama, setnama] = useState("");
  const [instagram, setinstagram] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const reff = collection(firestore,'berita');
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    return fetch(`http://localhost:5000/User/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setnama(data.name);
        setinstagram(data.social[0].link);
        setlinkedin(data.social[1].link);
      });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    /**
     * alternative code
      const form = e.target;
      setnama(form.name.value);
      setinstagram(form.instagram.value);
      setlinkedin(form.linkedin.value);
     */

    try {
      await axios.patch(`http://localhost:5000/UpdateUser/${id}`, {
        nama,
        instagram,
        linkedin,
      });
      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setnama(e.target.value)}
                placeholder="Nama"
                id="name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">instagram</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={instagram}
                onChange={(e) => setinstagram(e.target.value)}
                placeholder="instagram"
                id="instagram"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">linkedin</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={linkedin}
                onChange={(e) => setlinkedin(e.target.value)}
                placeholder="linkedin"
                id="linkedin"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

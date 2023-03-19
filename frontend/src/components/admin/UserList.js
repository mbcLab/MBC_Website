import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    return fetch("http://localhost:5000/User")
      .then((res) => res.json())
      .then((data) => setUser(data));
    // const response = await axios
    //   .get("http://localhost:5000/User")
    //   .then((res) => setUser(res.data))
    //   .catch(console.error);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteUsers/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const getList = (div, divName) => {
    function socialList(soc) {
      return (
        <td>
          <a href={soc.link} target="_blank" rel="noreferrer">
            {soc.media.toUpperCase()}
          </a>
        </td>
      );
    }

    return div.map((user, index) => (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{divName}</td>
        {user.social.map((soc) => {
          return socialList(soc);
        })}
        <td>
          <Link
            to={`/editUser/${user._id}`}
            className="button is-info is-small mr-1"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteUser(user._id)}
            className="button is-danger is-small"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="/addUser" className="button is-success">
          Add New
        </Link>

        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr key="head">
              <th>No</th>
              <th>Nama</th>
              <th>divisi</th>
              <th>instagram</th>
              <th>linkedin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.bigdata
              ? getList(users.bigdata, "Big Data")
              : console.log(users)}
            {users.cyber
              ? getList(users.cyber, "Cyber Security")
              : console.log(users)}
            {users.gis ? getList(users.gis, "GIS") : console.log(users)}
            {users.gametech
              ? getList(users.gametech, "GameTech")
              : console.log(users)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

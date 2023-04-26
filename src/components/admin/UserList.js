import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
        <td className="flex flex-row gap-3">
          <Button href={`/edituser/${user._id}`} className="flex-auto">
            Edit
          </Button>

          <Button
            href="/userList"
            variant="danger"
            onClick={() => deleteUser(user._id)}
            className="bg-red-600 hover:bg-red-900 flex-auto"
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Button href="/addUser" variant="success" className="ml-5">
          Add User
        </Button>

        <table className="table is-striped is-fullwidth mt-2 text-center">
          <thead>
            <tr key="head">
              <th>No</th>
              <th>Nama</th>
              <th>Divisi</th>
              <th>Instagram</th>
              <th>Linkedin</th>
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

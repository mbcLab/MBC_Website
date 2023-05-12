import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {doc,collection, query, orderBy, onSnapshot,deleteDoc} from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const UserList = () => {
  const [users, setUser] = useState([]);
  const reff = collection(firestore,'user');
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const snapshot = await query(reff);
  
    onSnapshot(snapshot, (querySnapshot) => {
      setUser(querySnapshot.docs.map(doc => ({
        id: doc.id,
        nama: doc.data().nama,
        divisi: doc.data().divisi,
        instagram: doc.data().instagram,
        linkedin: doc.data().linkedin,
        namafile: doc.data().namafile
      })))
    }); 
    };

  const deleteUser = async (id) => {
    const taskDocRef = doc(firestore, 'user', id)
    console.log(taskDocRef);
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
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
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.nama}</td>
              <td>{user.divisi}</td>
              <td>{user.instagram}</td>
              <td>{user.linkedin}</td>
              <td className="flex flex-row gap-3">
                <Button href={`/edituser/${user.id}`} className="flex-auto">
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => deleteUser(user.id)}
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

export default UserList;

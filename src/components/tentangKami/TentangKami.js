import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { storage, firestore } from "../../firebase.js";

const TentangKami = () => {
  const [Users, setUser] = useState([]);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async() => {
    const reff = collection(firestore,'user');
    const snapshot = await query(reff, orderBy('divisi', 'asc'));
    
    onSnapshot(snapshot, (querySnapshot) => {
      console.log(querySnapshot.docs);
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

  return (
    <div>
      <header
        class="w3-container w3-center"
        style={{ paddingTop: "100px", height: "100%", background: "#02073E" }}
      >
        <img src="/Asisten.png"></img>
      </header>
      <div class="w3-container">
        <div class="w3-col l6">
          <img src="/gambar1.jpg" class="w3-block "/>
        </div>
      </div>
      <div class="w3-container w3-padding" style={{ height: "700px" }}>
        <div
          class="w3-container w3-padding w3-text-white"
          style={{
            margin: "100px",
            height: "500px",
            borderRadius: "100px",
            background: "#02073E",
          }}
        >
          <h1
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingBottom: "50px",
            }}
          >
            <b>visi</b>
          </h1>
          <h1
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingBottom: "50px",
            }}
          >
            <b>misi</b>
          </h1>
        </div>
      </div>
      <div class="w3-container w3-padding" style={{ height: "700px" }}>
        <h1
          class="w3-text white w3-center"
          style={{ paddingBottom: "50px", fontSize: "64px" }}
        >
          <b>pencapaian kami</b>
        </h1>
      </div>
      <div
        class="w3-container w3-center w3-padding"
      >
        <h1
          class="w3-text white w3-center"
          style={{
            fontSize: "64px",
          }}
        >
          <b>Asisten Laboratorium</b>
        </h1>
      </div>
        <div
        class="w3-container w3-center w3-padding"
        style={{ margin: "100px" }}
      >
        <h1
          class="w3-text white w3-center"
          style={{
            marginTop: "50px",
            paddingBottom: "50px",
            fontSize: "64px",
          }}
        >
          Divisi Big Data
        </h1>
        {Users.map(function(user,_index) {
          if(user.divisi == "BigData"){
            return(
              <div class="w3-col l4 w3-center" style={{paddingBottom:"20%"}}>
            <div
              class="w3-card-4"
              style={{ width: "80%", borderRadius: "50px", maxHeight:"800px"}}
            >
              <img class="w3-center" src={user.namafile} alt="Avatar" style={{ width: "100%" , maxWidth: "300px", maxHeight: "400px", minWidth: "300px", minHeight: "400px", alignContent: "center" }} />
              <div class="w3-container w3-center">
                <h5>{user.nama}</h5>
                <h5>{user.divisi}</h5>
                <div class="w3-section">
                  <a
                    href={user.instagram}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href={user.linkedin}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
            );
          }
        })}
        </div>


        <div
        class="w3-container w3-center w3-padding"
        style={{ margin: "100px" }}
      >
        <h1
          class="w3-text white w3-center"
          style={{
            marginTop: "50px",
            paddingBottom: "50px",
            fontSize: "64px",
          }}
        >
          Divisi Cyber
        </h1>
        {Users.map(function(user,_index) {
          if(user.divisi == "Cyber"){
            return(
              <div class="w3-col l4 w3-center" style={{paddingBottom:"20%"}}>
            <div
              class="w3-card-4"
              style={{ width: "80%", borderRadius: "50px", maxHeight:"800px"}}
            >
              <img class="w3-center" src={user.namafile} alt="Avatar" style={{ width: "100%" , maxWidth: "300px", maxHeight: "400px", minWidth: "300px", minHeight: "400px", alignContent: "center" }} />
              <div class="w3-container w3-center">
                <h5>{user.nama}</h5>
                <h5>{user.divisi}</h5>
                <div class="w3-section">
                  <a
                    href={user.instagram}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href={user.linkedin}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
            );
          }
        })}
        </div>


        <div
        class="w3-container w3-center w3-padding"
        style={{ margin: "100px" }}
      >
        <h1
          class="w3-text white w3-center"
          style={{
            marginTop: "50px",
            paddingBottom: "50px",
            fontSize: "64px",
          }}
        >
          Divisi GameTech
        </h1>
        {Users.map(function(user,_index) {
          if(user.divisi == "Gametech"){
            return(
              <div class="w3-col l4 w3-center" style={{paddingBottom:"20%"}} >
            <div
              class="w3-card-4"
              style={{ width: "80%", borderRadius: "50px", maxHeight:"800px"}}
            >
              <img class="w3-center" src={user.namafile} alt="Avatar" style={{ width: "100%" , maxWidth: "300px", maxHeight: "400px", minWidth: "300px", minHeight: "400px", alignContent: "center" }} />
              <div class="w3-container w3-center">
                <h5>{user.nama}</h5>
                <h5>{user.divisi}</h5>
                <div class="w3-section">
                  <a
                    href={user.instagram}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href={user.linkedin}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
            );
          }
        })}
        </div>


        <div
        class="w3-container w3-center w3-padding"
        style={{ margin: "100px" }}
      >
        <h1
          class="w3-text white w3-center"
          style={{
            marginTop: "50px",
            paddingBottom: "50px",
            fontSize: "64px",
          }}
        >
          Divisi GIS
        </h1>
        {Users.map(function(user,_index) {
          if(user.divisi == "GIS"){
            return(
              <div class="w3-col l4 w3-center" style={{paddingBottom:"20%"}}>
            <div
              class="w3-card-4"
              style={{ width: "80%", borderRadius: "50px", maxHeight:"800px"}}
            >
              <img class="w3-center" src={user.namafile} alt="Avatar" style={{ width: "100%" , maxWidth: "300px", maxHeight: "400px", minWidth: "300px", minHeight: "400px", alignContent: "center" }} />
              <div class="w3-container w3-center">
                <h5>{user.nama}</h5>
                <h5>{user.divisi}</h5>
                <div class="w3-section">
                  <a
                    href={user.instagram}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href={user.linkedin}
                    class="w3-button w3-grey"
                    style={{ borderRadius: "50px" }}
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
            );
          }
        })}
        </div>
      </div>
  );
};

export default TentangKami;

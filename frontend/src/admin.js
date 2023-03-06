import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { auth } from './firebase';
import AddUser from "./components/admin/AddUser";
import EditUser from "./components/admin/EditUser";
import AddBerita from "./components/admin/AddBerita";
import EditBerita from "./components/admin/EditBerita";
import AddProject from "./components/admin/AddProjects";
import EditProject from "./components/admin/EditProjects";
import UserList from "./components/admin/UserList";
import { useAuthState } from "react-firebase-hooks/auth";

function Admin() {
  const [user,loading,error] = useAuthState(auth);
return (

);
}
export default Admin;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Beranda from "./components/beranda/Beranda";
import Blogs from "./components/blogs/Blogs";
import Project from "./components/projects/Project";
import TentangKami from "./components/tentangKami/TentangKami";
import { auth } from "./firebase";
import AddUser from "./components/admin/AddUser";
import EditUser from "./components/admin/EditUser";
import AddBerita from "./components/admin/AddBerita";
import EditBerita from "./components/admin/EditBerita";
import AddProject from "./components/admin/AddProjects";
import EditProject from "./components/admin/EditProjects";
import UserList from "./components/admin/UserList";
import LoginAdmin from "./components/admin/LoginAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/attribute/navbar";
import Footer from "./components/attribute/footer";
import NavbarLoggedIn from "./components/attribute/navbarLoggedIn";
import LogoutUser from "./components/admin/logout";
import ListBlogs from "./components/blogs/listBlogs";
import BlogList from "./components/admin/BlogList";
import ProjectList from "./components/admin/ProjectList";
import BlogsbyId from "./components/blogs/blogsbyid";
import ProjectbyId from "./components/projects/projectsbyid";
import Spinner from "react-bootstrap/Spinner";
function App() {
  let [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <div className="h-screen text-center items-center flex">
        <Spinner animation="border" className="m-auto scale-150">
          <span>Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (!user) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={[<Beranda />]} />
          <Route path="Blogs/" element={[<Blogs />, <ListBlogs />]} />
          <Route path="Blog/:id" element={<BlogsbyId />} />
          <Route path="Projek/" element={<Project />} />
          <Route path="Projek/:id" element={<ProjectbyId />} />
          <Route path="tentangKami/" element={<TentangKami />} />
          <Route path="login/" element={<LoginAdmin />} />
          <Route path="UserList/" element={[<LoginAdmin />]} />
          <Route path="BlogList/" element={[<LoginAdmin />]} />
          <Route path="ProjectList/" element={[<LoginAdmin />]} />
          <Route path="AddUser/" element={<LoginAdmin />} />
          <Route path="AddBerita/" element={<LoginAdmin />} />
          <Route path="AddProject/" element={<LoginAdmin />} />
          <Route path="EditUser/" element={<LoginAdmin />} />
          <Route path="EditBerita/" element={<LoginAdmin />} />
          <Route path="EditProject/" element={<LoginAdmin />} />
          <Route path="logout/" element={<LoginAdmin />} />
          <Route path="Admin/" element={<LoginAdmin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <NavbarLoggedIn />
        <Routes>
          <Route path="/" element={[<UserList />]} />
          <Route path="Admin/" element={[<UserList />]} />
          <Route path="UserList/" element={[<UserList />]} />
          <Route path="BlogList/" element={[<BlogList />]} />
          <Route path="ProjectList/" element={[<ProjectList />]} />
          <Route path="AddUser/" element={<AddUser />} />
          <Route path="AddBerita/" element={<AddBerita />} />
          <Route path="AddProject/" element={<AddProject />} />
          <Route path="EditUser/:id" element={<EditUser />} />
          <Route path="EditBerita/:id" element={<EditBerita />} />
          <Route path="EditProject/:id" element={<EditProject />} />
          <Route path="logout/" element={<LogoutUser />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;

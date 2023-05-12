import React from "react";

function NavbarLoggedIn() {
  return (
    <nav className="w3-bar w3-black">
      <img
        src="/logo.png"
        className="w3-bar-item"
        style={{ maxHeight: "45px" }}
        alt="logo"
      ></img>
      <a href="/UserList" className="w3-bar-item w3-button">
        <i className="fa fa-home"></i> User
      </a>
      <a href="/ProjectList" className="w3-bar-item w3-button">
        <i className="fa fa-calendar"></i> Project
      </a>
      <a href="/BlogList" className="w3-bar-item w3-button">
        <i className="fa fa-paperclip"></i> Blog
      </a>
      <a href="/logout" className="w3-bar-item w3-button w3-right">
        <i className="fa fa-sign-out"></i>
      </a>
    </nav>
  );
}
export default NavbarLoggedIn;

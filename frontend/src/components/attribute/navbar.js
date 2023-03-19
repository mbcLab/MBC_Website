import React from "react";

function Navbar() {
  return (
    <div
      className="w3-top w3-padding"
      style={{ background: "#02073E", width: "100%", position: "sticky" }}
    >
      <div
        className="w3-container w3-padding"
        style={{ background: "#02073E" }}
      ></div>
      <div className="w3-container w3-row" style={{ background: "#02073E" }}>
        <div className="w3-col s2">
          <img src="/logo.png" className="w3-image" alt="logo" />
        </div>
        <div className="w3-col s2 w3-center">
          <a href="/" className="w3-button w3-text-white">
            Beranda
          </a>
        </div>
        <div className="w3-col s2 w3-center">
          <a href="/Blogs" className="w3-button w3-text-white">
            Blog
          </a>
        </div>
        <div className="w3-col s2 w3-center">
          <a href="/Projek" className="w3-button w3-text-white">
            Projek
          </a>
        </div>
        <div className="w3-col s2 w3-center">
          <a href="/tentangKami" className="w3-button w3-text-white">
            Tentang kami
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

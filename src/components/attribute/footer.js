import React from "react";
function Footer() {
  return (
    <div class="w3-container w3-padding" style={{ height: "300px" }}>
      <div
        class="w3-container w3-padding w3-text-white"
        style={{ margin: "50px", height: "120px", background: "#183656" }}
      >
        <div class="w3-col l6 w3-block">
          <h3>
            Do you have any question?<br></br> Feel free to contact us
          </h3>
        </div>
        <div class="w3-col l3 w3-block" style={{ marginTop: "30px" }}></div>
        <div class="w3-col l2 w3-block" style={{ marginTop: "15px" }}>
          <a href="/" class="w3-button w3-white w3-block">
            contact us <br></br>now
          </a>
        </div>
      </div>
      <div
        class="w3-container w3-padding"
        style={{ margin: "100px", height: "350px" }}
      >
        <div class="w3-col l2 w3-block" style={{ marginTop: "20px" }}>
          <img src="/logo.png" class="w3-block" alt="logo" />
        </div>
        <div class="w3-col l2 w3-block">
          <h2 class="w3-center">About Us</h2>
          <a href="/" class="w3-button w3-block">
            Support
          </a>
          <a href="/" class="w3-button w3-block">
            About Us
          </a>
          <a href="/" class="w3-button w3-block">
            Copyright
          </a>
        </div>
        <div class="w3-col l3 w3-block">
          <h2 class="w3-center">Our Information</h2>
          <a href="/" class="w3-button w3-block">
            Site Map
          </a>
        </div>
        <div class="w3-col l2 w3-block">
          <h2 class="w3-center">Social Media</h2>
          <a href="https://github.com/mbcLab" class="w3-button w3-block">
            GitHub
          </a>
          <a
            href="https://www.instagram.com/mbclab/"
            class="w3-button w3-block"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

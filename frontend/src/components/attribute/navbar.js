import React from "react";


function Navbar() {
        return(
            <div class="w3-top w3-padding" style={{background: "#02073E",  width:'100%'}}>
                <div class="w3-container w3-padding" style={{background: "#02073E"}}></div>
                <div class="w3-container w3-row" style={{background: "#02073E"}}>
                    <div class="w3-col s2">
                        <img src="/download.png" class="w3-image"/>
                    </div>
                    <div class="w3-col s2 w3-center">
                        <a href="/" class="w3-button w3-text-white">Beranda</a>
                    </div>
                    <div class="w3-col s2 w3-center">
                        <a href="/Blogs" class="w3-button w3-text-white">Blog</a>
                    </div>
                    <div class="w3-col s2 w3-center">
                        <a href="/Projek" class="w3-button w3-text-white">Projek</a>
                    </div>
                    <div class="w3-col s2 w3-center">
                        <a href="/tentangKami" class="w3-button w3-text-white">Tentang kami</a>
                    </div>
                </div>
            </div>
        );
            
    }
export default Navbar;
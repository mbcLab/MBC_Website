import React from "react";

function Profile(){
    return(<div class="w3-container">
    <div class="w3-col s6">
        <img src="/gambar1.jpg" class="w3-block "/> {/*taruh gambar di sini */}
    </div>
    <div class="w3-col s6">
        <h1 class="w3-center" style={{marginTop:"50px"}}>
            <b>Tentang kami</b>
        </h1>
        <h2 style={{marginTop:"100px",marginLeft:"50px"}}>
            <b>Multimedia, Big Data, &
            Cyber Security Laboratory</b>
        </h2>
        <h2 style={{margin:"50px"}}>
        Multimedia Big Data and Cyber Security (MBC) Laboratory adalah salah satu laboratorium diatas naungan Kelompok Keahlian Networking, Cybernetics, dan Engineering Management (KK NCM) yang mempelajari mengenai Cyber Security, Big data, dan Multimedia.
        </h2>
        <div class="w3-center">
        <a href="/tentangKami" class="w3-center w3-button w3-text-white" style={{background:"#02073E",borderRadius:"100px"}}>
            <h3 style={{marginLeft :"20px",marginRight :"20px"}}>lihat selengkapnya</h3>
        </a>
        </div>
    </div>
</div>);
}
export default Profile;
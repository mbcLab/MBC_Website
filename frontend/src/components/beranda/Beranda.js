import React from "react";
function Beranda(){
    return(
    <section>
        <div class="w3-container w3-padding w3-center">
            <img src="/mimiperi.png" class="w3-block" style={{padding:"100px"}}/>
        </div>
        <div class="w3-container w3-padding" style={{height:"700px"}}>
            <h1 style={{marginTop:"50px",paddingLeft:"100px",paddingBottom:"50px",fontSize:"64px"}}>
                <b>Cyber Security</b>
            </h1>
            <p style={{marginTop:"50px",paddingLeft:"100px",paddingRight:"100px",paddingBottom:"100px",fontSize:"24px"}}>
                Cyber Security adalah perlindungan sistem yang terhubung ke internet, termasuk perangkat keras, perangkat lunak, dan data dari serangan cyber. Keamanan informasi yang dirancang untuk menjaga kerahasiaan, integritas, dan ketersediaan data adalah bagian dari keamanan cyber. Divisi Cyber Security Laboratorium MBC mendapatkan banyak riset dan penelitian. 
                <br></br>Riset dan penelitian yang sedang dilakukan yaitu:
                <br></br>- Bidang Kriptografi
                <br></br>- Bidang Capture The Flag
                <br></br>- Membuat paper bersama dosen pembimbing laboratorium
            </p>
        </div>
        <div class="w3-container w3-padding w3-text-white" style={{height:"700px", background:"#02073E"}}>
            <h1 class="w3-text white"style={{marginTop:"100px",paddingLeft:"100px",paddingBottom:"50px",fontSize:"64px"}}>
                <b>Big Data</b>
            </h1>
            <p style={{marginTop:"50px",paddingLeft:"100px",paddingRight:"100px",marginBottom:"100px",fontSize:"24px"}}>
            Big Data adalah kumpulan data yang begitu besar dan kompleks yang tidak memungkinkan lagi untuk dikelola dengan tools software tradisional. Divisi Big Data Laboratorium MBC merupakan divisi riset yang membahas dan meriset mengenai perkembangan data mining, data analys, machine learning dan dasar-dasar AI.
            </p>
        </div>
        <div class="w3-container w3-padding w3-text-white w3-sepia" style={{minHeight:"700px", background:"url(/mimiperi2.jpg)",backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
            <h1 class="w3-text white"style={{marginTop:"200px",paddingLeft:"100px",fontSize:"64px"}}>
                <b>GIS</b>
            </h1>
            <p style={{marginTop:"50px",paddingLeft:"100px",paddingRight:"100px",marginBottom:"100px",fontSize:"24px"}}>
            GIS (Geographic Information System) adalah informasi
                sistem komputerisasi yang memungkinkan penangkapan,
                penganalisisan, dan presentasi data acuan geografis
                sebagai fasilitas untuk menginterpretasi fakta-fakta
                permukaan bumi.
            </p>
        </div>
        <div class="w3-container w3-padding w3-text-white" style={{height:"700px", background:"#02073E"}}>
            <h1 class="w3-text white"style={{marginTop:"100px",paddingLeft:"100px",paddingBottom:"50px",fontSize:"64px"}}>
                <b>Game Tech</b>
            </h1>
            <p style={{marginTop:"50px",paddingLeft:"100px",paddingRight:"100px",marginBottom:"100px",fontSize:"24px"}}>
            Game Tech mempelajari tentang bagaimana sebuah game itu dibuat hingga bisa dimainkan oleh orang banyak. Divisi Game Tech Laboratorium MBC mempelajari pengembangan teknologi pembuatan game mulai dari merancang cerita dan sistem pelevelan, hingga proses produksi game tersebut dan distribusinya.
            </p>
        </div>
    </section>

    
    );
}
export default Beranda;
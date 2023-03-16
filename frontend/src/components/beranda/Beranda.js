import React from "react";
function Beranda() {
  return (
    <>
      <header
        class="w3-center w3-block"
        style={{
          padding: "10%",
          minHeight: "720px",
          width: "100%",
          background: "#02073E",
        }}
      >
        <div class="w3-container">
          <h1 class="w3-xxxlarge w3-text-white" style={{ marginTop: "100px" }}>
            Selamat Datang
          </h1>
          <h1 class="w3-xxxlarge w3-text-white">
            Di Website Multimedia , Big Data
          </h1>
          <h1 class="w3-xxxlarge w3-text-white">
            And Cyber Security Laboratory
          </h1>
        </div>
      </header>

      {/* Profile */}
      <div class="w3-container">
        <div class="w3-col s6">
          <img src="/gambar1.jpg" class="w3-block " alt="" />{" "}
          {/*taruh gambar di sini */}
        </div>
        <div class="w3-col s6">
          <h1 class="w3-center" style={{ marginTop: "50px" }}>
            <b>Tentang kami</b>
          </h1>
          <h2 style={{ marginTop: "100px", marginLeft: "50px" }}>
            <b>Multimedia, Big Data, & Cyber Security Laboratory</b>
          </h2>
          <h2 style={{ margin: "50px" }}>
            Multimedia Big Data and Cyber Security (MBC) Laboratory adalah salah
            satu laboratorium diatas naungan Kelompok Keahlian Networking,
            Cybernetics, dan Engineering Management (KK NCM) yang mempelajari
            mengenai Cyber Security, Big data, dan Multimedia.
          </h2>
          <div class="w3-center">
            <a
              href="/tentangKami"
              class="w3-center w3-button w3-text-white"
              style={{ background: "#02073E", borderRadius: "100px" }}
            >
              <h3 style={{ marginLeft: "20px", marginRight: "20px" }}>
                lihat selengkapnya
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <section>
        <div class="w3-container w3-padding w3-center">
          <img
            src="/mimiperi.png"
            class="w3-block"
            style={{ padding: "100px" }}
            alt=""
          />
        </div>
        <div class="w3-container w3-padding" style={{ height: "700px" }}>
          <h1
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingBottom: "50px",
              fontSize: "64px",
            }}
          >
            <b>Cyber Security</b>
          </h1>
          <p
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingRight: "100px",
              paddingBottom: "100px",
              fontSize: "24px",
            }}
          >
            Cyber Security adalah perlindungan sistem yang terhubung ke
            internet, termasuk perangkat keras, perangkat lunak, dan data dari
            serangan cyber. Keamanan informasi yang dirancang untuk menjaga
            kerahasiaan, integritas, dan ketersediaan data adalah bagian dari
            keamanan cyber. Divisi Cyber Security Laboratorium MBC mendapatkan
            banyak riset dan penelitian.
            <br></br>Riset dan penelitian yang sedang dilakukan yaitu:
            <br></br>- Bidang Kriptografi
            <br></br>- Bidang Capture The Flag
            <br></br>- Membuat paper bersama dosen pembimbing laboratorium
          </p>
        </div>
        <div
          class="w3-container w3-padding w3-text-white"
          style={{ height: "700px", background: "#02073E" }}
        >
          <h1
            class="w3-text white"
            style={{
              marginTop: "100px",
              paddingLeft: "100px",
              paddingBottom: "50px",
              fontSize: "64px",
            }}
          >
            <b>Big Data</b>
          </h1>
          <p
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginBottom: "100px",
              fontSize: "24px",
            }}
          >
            Big Data adalah kumpulan data yang begitu besar dan kompleks yang
            tidak memungkinkan lagi untuk dikelola dengan tools software
            tradisional. Divisi Big Data Laboratorium MBC merupakan divisi riset
            yang membahas dan meriset mengenai perkembangan data mining, data
            analys, machine learning dan dasar-dasar AI.
          </p>
        </div>
        <div
          class="w3-container w3-padding w3-text-white w3-sepia"
          style={{
            minHeight: "700px",
            background: "url(/mimiperi2.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            class="w3-text white"
            style={{
              marginTop: "200px",
              paddingLeft: "100px",
              fontSize: "64px",
            }}
          >
            <b>GIS</b>
          </h1>
          <p
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginBottom: "100px",
              fontSize: "24px",
            }}
          >
            GIS (Geographic Information System) adalah informasi sistem
            komputerisasi yang memungkinkan penangkapan, penganalisisan, dan
            presentasi data acuan geografis sebagai fasilitas untuk
            menginterpretasi fakta-fakta permukaan bumi.
          </p>
        </div>
        <div
          class="w3-container w3-padding w3-text-white"
          style={{ height: "700px", background: "#02073E" }}
        >
          <h1
            class="w3-text white"
            style={{
              marginTop: "100px",
              paddingLeft: "100px",
              paddingBottom: "50px",
              fontSize: "64px",
            }}
          >
            <b>Game Tech</b>
          </h1>
          <p
            style={{
              marginTop: "50px",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginBottom: "100px",
              fontSize: "24px",
            }}
          >
            Game Tech mempelajari tentang bagaimana sebuah game itu dibuat
            hingga bisa dimainkan oleh orang banyak. Divisi Game Tech
            Laboratorium MBC mempelajari pengembangan teknologi pembuatan game
            mulai dari merancang cerita dan sistem pelevelan, hingga proses
            produksi game tersebut dan distribusinya.
          </p>
        </div>
      </section>
    </>
  );
}
export default Beranda;

import React from "react";

const tim = [
  {
    nama: "Muh. Yusuf Al-Qadri",
    peran: "Ketua Kelompok",
    foto: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/Muh.%20Yusuf/WhatsApp%20Image%202025-07-30%20at%2009.49.31_334bb270.jpg"
  },
  {
    nama: "Muh. Apriansyah Arrahman",
    peran: "Anggota Kelompok",
    foto: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/Muh.%20Apriansyah%20Arrhman/Screenshot_20250716_143559.png"
  },
  {
    nama: "M.Nabil Putra Hadi",
    peran: "Anggota Kelompok",
    foto: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/M.%20Nabil/WhatsApp%20Image%202025-07-30%20at%2010.24.13_6ae77c30.jpg"
  },
  {
    nama: "Muh. Al-Ihsan",
    peran: "Anggota Kelompok",
    foto: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/AL-IHSAN%20PIC/WhatsApp%20Image%202025-07-30%20at%2010.14.35_e883bd17.jpg"
  }
];

export default function Beranda() {
  return (
    <div>
      <h2>Profil Tim</h2>
      <div className="tim-grid">
        {tim.map((anggota, idx) => (
          <div className="card" key={idx}>
            <img src={anggota.foto} alt={anggota.nama} className="foto" />
            <h3>{anggota.nama}</h3>
            <p>{anggota.peran}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./Home.css";

const members = [
  {
    name: "Muh. Yusuf Al-Qadri",
    role: "Ketua Kelompok",
    img: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/Muh.%20Yusuf/WhatsApp%20Image%202025-07-30%20at%2009.49.31_334bb270.jpg"
  },
  {
    name: "Muh. Apriansyah Arrahman",
    role: "Anggota Kelompok",
    img: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/Muh.%20Apriansyah%20Arrhman/Screenshot_20250716_143559.png"
  },
  {
    name: "M.Nabil Putra Hadi",
    role: "Anggota Kelompok",
    img: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/M.%20Nabil/WhatsApp%20Image%202025-07-30%20at%2010.24.13_6ae77c30.jpg"
  },
  {
    name: "Muh. Al-Ihsan",
    role: "Anggota Kelompok",
    img: "https://raw.githubusercontent.com/TechStudent404/XI-TJKT3-PICTURE/refs/heads/main/AL-IHSAN%20PIC/WhatsApp%20Image%202025-07-30%20at%2010.14.35_e883bd17.jpg"
  },
];

export default function Home() {
  return (
    <div className="home-wrap">
      <h2 className="judul">Profil Tim</h2>
      <div className="team-list">
        {members.map((m, idx) => (
          <div className="member-card" key={m.name}>
            <div className="img-frame">
              <img src={m.img} alt={m.name} loading="lazy" />
            </div>
            <div className="member-info">
              <div className="member-name">{m.name}</div>
              <div className="member-role">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

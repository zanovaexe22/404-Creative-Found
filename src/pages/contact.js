import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrap">
      <h2 className="judul">Kontak Kami</h2>
      <div className="contact-content">
        Untuk menghubungi admin hubungi nomor pada link yang tertera di bawah
      </div>
      <a
        className="wa-link"
        href="https://wa.me/qr/F4EXK3JITKODF1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hubungi admin via WhatsApp
      </a>
    </div>
  );
}

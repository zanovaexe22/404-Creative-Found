import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Proyek from "./pages/Proyek";
import Kontak from "./pages/Kontak";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Portofolio tim 404 Creative Found</h1>
          <nav>
            <Link to="/">Beranda</Link>
            <Link to="/proyek">Proyek</Link>
            <Link to="/kontak">Kontak Kami</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/proyek" element={<Proyek />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <footer>
          by admin zanova.exe
        </footer>
      </div>
    </Router>
  );
}

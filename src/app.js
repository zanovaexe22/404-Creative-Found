import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function NavButton({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`nav-btn${isActive ? " active" : ""}`}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Portofolio tim 404 Creative Found</h1>
          <nav>
            <NavButton to="/">Beranda</NavButton>
            <NavButton to="/projects">Proyek</NavButton>
            <NavButton to="/contact">Kontak Kami</NavButton>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          by admin zanova.exe
        </footer>
      </div>
    </Router>
  );
}

export default App;

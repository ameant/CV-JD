import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Creations from "./pages/Creations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import LegalNotices from "./pages/LegalNotices";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/creations" element={<Creations />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/mentionslegales" element={<LegalNotices />}></Route>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
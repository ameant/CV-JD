import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Creations from "../pages/Creations";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

import "./Header.css";

const Header = () => {

    const navLinkStyles = ({isActive}) => {
        return {
            color: isActive ? 'white' : 'grey',
        }
    }

    const navLogoStyle = ({isActive}) => {
        return {
            color: isActive ? 'white' : 'white',
        }
    }

    return (
        <div>
           <nav className="navbar navbar-expand-xl navbar-light">
                <div className="container-fluid">
                    <NavLink style={navLogoStyle} className="navbar-brand mb-0 h1" to="/">John Doe</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="navbar-nav">
                            <NavLink style={navLinkStyles} className="nav-link" to="/">Accueil</NavLink>
                            <NavLink style={navLinkStyles} className="nav-link" to="/services">Services</NavLink>
                            <NavLink style={navLinkStyles} className="nav-link" to="/creations">Réalisations</NavLink>
                            <NavLink style={navLinkStyles} className="nav-link" to="/blog">Blog</NavLink>
                            <NavLink style={navLinkStyles} className="nav-link" to="/contact">Me contacter</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/creations" element={<Creations />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
        </div>
    )
}

export default Header;
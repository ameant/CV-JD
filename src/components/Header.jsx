import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {

    const [showLinks, setShowLinks] = useState(false);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div>
            {/* Barre de navigation */}
           <nav className="menubar">
                <div className="menulogo">
                    <NavLink className="navbar-brand mb-0 h1" to="/">John Doe</NavLink>
                </div>

                {/* Bouton du menu burger */}
                <button className="burgermenu" onClick={toggleMenu}>
                    <span className="burgerbtn"></span>
                </button>

                {/* Liens de navigation */}
                <div className={`menulinks ${showLinks ? 'show' : ''}`}>
                    <NavLink className="menulink" to="/" onClick={toggleMenu}>Accueil</NavLink>
                    <NavLink className="menulink" to="/services" onClick={toggleMenu}>Services</NavLink>
                    <NavLink className="menulink" to="/creations" onClick={toggleMenu}>Réalisations</NavLink>
                    <NavLink className="menulink" to="/blog" onClick={toggleMenu}>Blog</NavLink>
                    <NavLink className="menulink" to="/contact" onClick={toggleMenu}>Me contacter</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;
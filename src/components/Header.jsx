import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

    const [showLinks, setShowLinks] = useState(false);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div>
           <nav className="menubar">
                <div className="menulogo">
                    <NavLink style={navLogoStyle} className="navbar-brand mb-0 h1" to="/">John Doe</NavLink>
                </div>
                <button className="burgermenu" onClick={toggleMenu}>
                    <span className="burgerbar"></span>
                </button>
                <div className={`menulinks ${showLinks ? 'show' : ''}`}>
                    <NavLink style={navLinkStyles} className="menulink" to="/" onClick={toggleMenu}>Accueil</NavLink>
                    <NavLink style={navLinkStyles} className="menulink" to="/services" onClick={toggleMenu}>Services</NavLink>
                    <NavLink style={navLinkStyles} className="menulink" to="/creations" onClick={toggleMenu}>Réalisations</NavLink>
                    <NavLink style={navLinkStyles} className="menulink" to="/blog" onClick={toggleMenu}>Blog</NavLink>
                    <NavLink style={navLinkStyles} className="menulink" to="/contact" onClick={toggleMenu}>Me contacter</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;
import React from "react";
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
        </div>
    )
}

export default Header;
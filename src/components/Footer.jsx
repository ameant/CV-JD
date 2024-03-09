import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="columns">
                <div className="column-one">
                    <h5>John Doe</h5>
                    <p>40 Rue Laure Diebold <br />
                    69009 Lyon, France <br />
                    Téléphone : 06 20 30 40 50</p>
                    <div className="icon-links">
                    <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="f-icon"/>
                    </a>
                    <a  className="icon-link" href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSquareTwitter} className="f-icon"/>
                    </a>
                    <a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="f-icon"/>
                    </a>
                    </div>
                </div>
                <div className="column-two">
                    <h5>Liens utiles</h5>
                    <ul>
                        <a className="page-link" href="/">
                            <li>Accueil</li>
                        </a>
                        <a className="page-link" href="#about-section">
                            <li>À propos</li>
                        </a>
                        <a className="page-link" href="/services">
                        <li>Services</li>
                        </a>
                        <a className="page-link" href="/contact">
                            <li>Me contacter</li>
                        </a>
                        <li>Mentions Légales</li>
                    </ul>
                </div>
                <div className="column-three">
                    <h5>Mes dernières réalisations</h5>
                    <ul>
                        <li>Fresh food</li>
                        <li>Restaurant Akira</li>
                        <li>Espace bien-être</li>
                    </ul>
                </div>
                <div className="column-four">
                    <h5>Mes derniers articles</h5>
                    <ul>
                        <li>Coder son site en HTML/CSS</li>
                        <li>Vendre ses produits sur le web</li>
                        <li>Se positionner sur Google</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p> &copy; Designed by John Doe</p>
            </div>
        </div>
    )
}

export default Footer;
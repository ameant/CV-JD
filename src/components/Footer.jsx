import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";

const Footer = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const GOLDEN_RATIO = 0.5;

            if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footer-container">
            <div className="columns">

                {/* Colonne des informations personnelles */}
                <div className="column-one">
                    <h5>John Doe</h5>
                    <p>40 Rue Laure Diebold <br />
                    69009 Lyon, France <br />
                    Téléphone : 06 20 30 40 50</p>

                    <div className="icon-links">
                        <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer nofollow">
                            <FontAwesomeIcon icon={faGithub} className="f-icon"/>
                        </a>
                        <a className="icon-link" href="https://twitter.com/" target="_blank" rel="noreferrer nofollow">
                            <FontAwesomeIcon icon={faSquareTwitter} className="f-icon"/>
                        </a>
                        <a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noreferrer nofollow">
                            <FontAwesomeIcon icon={faLinkedin} className="f-icon"/>
                        </a>
                    </div>
                </div>

                {/* Colonne des liens de pages */}

                <div className="column-two">
                    <h5>Liens utiles</h5>
                    <ul>
                        <li>  
                            <a className="page-link" href="/">Accueil</a>
                        </li>
                        <li>
                            <a className="page-link" href="/#about-section">À propos</a>
                        </li>
                        <li>
                            <a className="page-link" href="/services">Services</a>
                        </li>
                        <li>
                            <a className="page-link" href="/contact">Me contacter</a>
                        </li>
                        <li>
                            <a className="page-link" href="/mentionslegales">Mentions Légales</a>
                        </li>
                    </ul>
                </div>

                {/* Colonne des liens Réalisations */}

                <div className="column-three">
                    <h5>Mes dernières réalisations</h5>
                    <ul>
                        <li>
                            <a className="page-link" href="/creations">Fresh food</a>
                        </li>
                        <li>
                            <a className="page-link" href="/creations">Restaurant Akira</a>
                        </li>
                        <li>
                            <a className="page-link" href="/creations">Espace bien-être</a>
                        </li>
                    </ul>
                </div>

                {/* Colonne des liens Blog */}

                <div className="column-four">
                    <h5>Mes derniers articles</h5>
                    <ul>
                        <li>
                            <a className="page-link" href="/blog">Coder son site en HTML/CSS</a>
                        </li>
                        <li>
                            <a className="page-link" href="/blog">Vendre ses produits sur le web</a>
                        </li>
                        <li>
                            <a className="page-link" href="/blog">Se positionner sur Google</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Copyright */}

            <div className="copyright">
                <p className="copyright-txt"> &copy; Designed by John Doe</p>

                {showScrollTop && (
                <div className="scroll-top" onClick={scrollToTop}>
                    <button className="scroll-to-top">Retour en haut</button>
                </div>
                )}
            </div>
        </div>      
    )
}

export default Footer;
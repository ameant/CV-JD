import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

import "./Services.css";

const Services = () => {
    return (
        <div className="services-page">
            <img src="/images/banner.jpg" alt="banner" className="banner"/>

            {/* Header */}
            <div className="s-header">
                <h1>MON OFFRE DE SERVICES</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                <hr />
            </div>

            <div className="services">
                {/* UX Design */}
                <div className="service">
                    <FontAwesomeIcon icon={faDisplay} className="s-icon"/>
                    <h4 className="s-title">UX DESIGN</h4>
                    <p>L'<strong>UX Design</strong> est une méthode de <br/>
                    conception centrée sur l'utilisateur. Son but <br/>
                    est d'offrir une expérience de navigation <br/>
                    optimale à l'internaute.</p>
                </div>
                
                {/* Développement web */}
                <div className="service">
                    <FontAwesomeIcon icon={faFileCode} className="s-icon"/>
                    <h4 className="s-title">DÉVELOPPEMENT WEB</h4>
                    <p>Le <strong>développement de sites web</strong> repose sur <br/>
                    l'utilisation des langages <u className="dotted">HTML</u>, <u className="dotted">CSS</u>, <br/>
                    Javascript et <u className="dotted">PHP</u>.</p>
                </div>

                {/* SEO */}
                <div className="service">
                    <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="s-icon"/>
                    <h4 className="s-title">RÉFÉRENCEMENT</h4>
                    <p>Le <strong>référencement naturel d'un site</strong>, aussi <br/> 
                    appelé <u className="dotted">SEO</u>, consiste à mettre des <br/>
                    techniques en oeuvre pour <i>améliorer sa</i> <br/>
                    <i>position</i> dans les résultats des moteurs de <br/>
                     recherche.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;
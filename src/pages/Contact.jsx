import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-content">
                <div className="contact-header">
                    <h1>ME CONTACTER</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <hr />
                </div>

                <div className="contact-section">
                    <div className="form-section">
                        <form action="#" method="post">
                            <h4 className="contact-title">Formulaire de contact</h4>
                            <input type="text" name="name" id="name" placeholder="Votre nom"/>
                            <input type="text" name="email" id="email" placeholder="Votre adresse email"/>
                            <input type="text" name="tel" id="tel" placeholder="Votre numéro de téléphone"/>
                            <input type="text" name="object" id="object" placeholder="Sujet"/>
                            <textarea name="msg" id="msg" cols="40" rows="4" placeholder="Votre message"/>
                            <input class="btn btn-primary" type="submit" value="Envoyer"/>
                        </form>
                    </div>

                    <div className="map-section">
                        <h4 className="contact-title">Mes coordonnées</h4>
                        <p><FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold 69009 Lyon, France <br />
                        <FontAwesomeIcon icon={faMobileScreenButton} /> 06 20 30 40 50</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626968942959!2d4.794365477628085!3d45.77866564850214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2spt!4v1710170451654!5m2!1sfr!2spt" type="map" title="map" width="500" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
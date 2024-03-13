import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

import "./LegalNotices.css";

const LegalNotices = () => {
    return (
        <div className="nl-container">
            <div className="ln-header">
                <h1>MENTIONS LÉGALES</h1>
                <hr />
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>John Doe</h4>
                            <p> <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold <br/>
                            69009 Lyon, France</p>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                            <a href="tel:0620304050"> 06 20 30 40 50 </a> <br />
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:john.doe@gmail.com"> john.doe@gmail.com </a>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>Always Data</h4>
                            <p>91 rue du Faubourg Saint Honoré <br/>
                            75008 Paris</p>
                            <FontAwesomeIcon icon={faGlobe} />
                            <a href="https://www.alwaysdata.com/" target="_blank" rel="noreferrer"> https://www.alwaysdata.com</a>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>Crédits</h4>
                            <p>Site développé par John Doe, étudiant du CEF.</p>
                            <p>Les images libresde droits sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">Pixabay</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegalNotices;
import React from "react";

import "./LegalNotices.css";

const LegalNotices = () => {
    return (
        <div className="nl-container">
            <div className="ln-header">
                <h1>MENTIONS LÉGALES</h1>
            </div>

            <div class="accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>40 Rue Laure Diebold <br/>
                            69009 Lyon, France <br/>
                            06 20 30 40 50 <br/>
                            john.doe@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>91 rue du Faubourg Saint Honoré <br/>
                            75008 Paris</p>
                            <a href="https://www.alwaysdata.com/">https://www.alwaysdata.com</a>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Site développé par John Doe, étudiant du CEF.</p>
                            <p>Les images libresde droits sont issues du site <a href="https://pixabay.com/fr/">Pixabay</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegalNotices;
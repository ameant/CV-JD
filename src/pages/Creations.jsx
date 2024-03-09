import React from "react";

import "./Creations.css";

const Creations = () => {
    return (
        <div className="creations-container">
            <img src="/images/banner.jpg" alt="banner" className="banner"/>
            <div className="c-header">
                <h1>PORTFOLIO</h1>
                <p>Voici quelques-unes de mes réalisations.</p>
            </div>
            <section className="creations">
                <div class="card" id="card1">
                    <div class="card-body">
                        <h4 class="card-title">Fresh food</h4>
                        <p class="card-text">Réalisation d'un site avec commande en <br />
                        ligne.</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                </div>
                
                <div class="card" id="card2">
                    <div class="card-body">
                        <h4 class="card-title">Restaurant Akira</h4>
                        <p class="card-text">Réalisation d'un site vitrine.</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                </div>

                <div class="card" id="card3">
                    <div class="card-body">
                        <h4 class="card-title">Espace bien-être</h4>
                        <p class="card-text">Réalisation d'un site vitrine pour un practicien <br />
                        de bien-être.</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Creations;
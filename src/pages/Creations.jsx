import React from "react";

import "./Creations.css";

const Creations = () => {
    return (
        <div className="creations-container">
            <img src="/images/banner.jpg" alt="banner" className="banner"/>
            <div className="c-header">
                <h1>PORTFOLIO</h1>
                <p>Voici quelques-unes de mes réalisations.</p>
                <hr />
            </div>
            <section className="creations">
                <div class="card text-center" id="card1">
                    <img class="card-img-top" src="/images/fresh-food.jpg" alt="Fruits et légumes"/>
                    <div class="card-body">
                        <h4 class="card-title">Fresh food</h4>
                        <p class="card-text">Réalisation d'un site avec commande en <br />
                        ligne.</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                    <div class="card-footer">
                        Site réalisé avec PHP et MySQL
                    </div>
                </div>
                
                <div class="card text-center" id="card2">
                    <img class="card-img-top" src="/images/restaurant-japonais.jpg" alt="Sushis"/>
                    <div class="card-body">
                        <h4 class="card-title">Restaurant Akira</h4>
                        <p class="card-text">Réalisation d'un site vitrine.</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                    <div class="card-footer">
                        Site réalisé avec WordPress
                    </div>
                </div>

                <div class="card text-center" id="card3">
                    <img class="card-img-top" src="./images/espace-bien-etre.jpg" alt="Buddha, fleur de lotus et pierres empilées"/>
                    <div class="card-body">
                        <h4 class="card-title">Espace bien-être</h4>
                        <p class="card-text">Réalisation d'un site vitrine pour un practicien <br />
                        de bien-être.</p>
                        <button type="button" class="btn btn-outline-primary">Voir</button>
                    </div>
                    <div class="card-footer">
                        Site réalisé en HTML/CSS
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Creations;
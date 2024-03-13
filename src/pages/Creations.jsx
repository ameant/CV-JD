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
                <div className="card text-center" id="c_card">
                    <img className="card-img-top" src="/images/fresh-food.jpg" alt="Fruits et légumes"/>
                    <div className="card-body">
                        <h4 className="card-title">Fresh food</h4>
                        <p className="card-text">Réalisation d'un site avec commande en <br />
                        ligne.</p>
                        <button type="button" className="btn btn-outline-primary">Voir</button>
                    </div>
                    <div className="card-footer">
                        Site réalisé avec PHP et MySQL
                    </div>
                </div>
                
                <div className="card text-center" id="c_card">
                    <img className="card-img-top" src="/images/restaurant-japonais.jpg" alt="Sushis"/>
                    <div className="card-body">
                        <h4 className="card-title">Restaurant Akira</h4>
                        <p className="card-text">Réalisation d'un site vitrine.</p>
                        <button type="button" className="btn btn-outline-primary">Voir</button>
                    </div>
                    <div className="card-footer">
                        Site réalisé avec WordPress
                    </div>
                </div>

                <div className="card text-center" id="c_card">
                    <img className="card-img-top" src="./images/espace-bien-etre.jpg" alt="Buddha, fleur de lotus et pierres empilées"/>
                    <div className="card-body">
                        <h4 className="card-title">Espace bien-être</h4>
                        <p className="card-text">Réalisation d'un site vitrine pour un practicien <br />
                        de bien-être.</p>
                        <button type="button" className="btn btn-outline-primary">Voir</button>
                    </div>
                    <div className="card-footer">
                        Site réalisé en HTML/CSS
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Creations;
import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className="home-section">
                <div className="home-container">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <a href="#about-section">
                        <button type="button" className="btn btn-primary">En savoir plus</button>
                    </a>
                </div>
            </section>

            <section className="about-section" id="about-section">
                <div className="about-container">
                    <h3 className="about-title">À  propos</h3>
                    <p className="about-p">Passioné par l'informatique et les nouvelles
                    technologies, j'ai suivi une formation <strong>d'intégrateur- 
                    développer web</strong> au CEF. Au cours de cette formation,
                    j'ai pu acquérir des bases solides pour travailler dans le
                    domaine du <strong>développement web</strong>.</p>
                    <p>Basé à Lyon, je suis en recherche d'une alternance au 
                    sein d'une agence digitale pour consolider ma formation
                     de <strong>développeur web full stack</strong>.</p>
                    <p>J'accorde une attention particulière à la qualité du code 
                    que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="progress-container">
                    <img src="/images/john-doe-about.jpg" alt="Homme de profil" className="a-img"/>
                    <h3>Mes compétences</h3>

                    <span>HTML5 90%</span>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style={{width:"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>CSS3 80%</span>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                
                    <span>JAVASCRIPT 70%</span>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>PHP 60%</span>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{width:"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>REACT 50%</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
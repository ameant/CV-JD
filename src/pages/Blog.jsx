import React from "react";

import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog-container">
            <img src="/images/banner.jpg" alt="banner" className="banner"/>
            <div className="b-header">
                <h1>BLOG</h1>
                <p>Retrouvez ici quelques articles sur le développement web.</p>
            </div>

            <section className="blog">
                <div className="card-container">
                    <div class="card" id="bcard1">
                        <img class="card-img-top" src="/images/coder.jpg" alt="Lignes de code"/>
                        <div class="card-body">
                            <h4 class="card-title">Coder son site en HTML/CSS</h4>
                            <p class="card-text">Some quick example text to build on the <br />
                            card title and make up the bulk of the card's <br />
                            content.</p>
                            <button type="button" class="btn btn-primary">Lire la suite</button>
                        </div>
                        <div class="card-footer">
                            Publié le 22 août 2022
                        </div>
                    </div>
                  
                    <div class="card" id="bcard2">
                        <img class="card-img-top" src="/images/croissance.jpg" alt="Piles croissantes de pièces de monnaie"/>
                        <div class="card-body">
                            <h4 class="card-title">Vendre ses produits sur le web</h4>
                            <p class="card-text">Some quick example text to build on the <br />
                            card title and make up the bulk of the card's <br />
                            content.</p>
                            <button type="button" class="btn btn-primary">Lire la suite</button>
                        </div>
                        <div class="card-footer">
                            Publié le 20 août 2022
                        </div>
                    </div>

                    <div class="card" id="bcard3">
                        <img class="card-img-top" src="./images/google.jpg" alt="PC et téléphone"/>
                        <div class="card-body">
                            <h4 class="card-title">Se positionner sur Google</h4>
                            <p class="card-text">Some quick example text to build on the <br />
                            card title and make up the bulk of the card's <br />
                            content.</p>
                            <button type="button" class="btn btn-primary">Lire la suite</button>
                        </div>
                        <div class="card-footer">
                            Publié le 1 août 2022
                        </div>
                    </div>
                </div>
                    
                <div className="card-container">
                    <div class="card" id="bcard4">
                        <img class="card-img-top" src="/images/screens.jpg" alt="Ordinateur, PC et tablette"/>
                        <div class="card-body">
                            <h4 class="card-title">Coder en responsive design</h4>
                            <p class="card-text">Some quick example text to build on the <br />
                            card title and make up the bulk of the card's <br />
                            content.</p>
                            <button type="button" class="btn btn-primary">Lire la suite</button>
                        </div>
                        <div class="card-footer">
                            Publié le 31 juillet 2022
                        </div>
                    </div>
                    
                    <div class="card" id="bcard5">
                        <img class="card-img-top" src="/images/seo.jpg" alt="Mots liés au référencement"/>
                        <div class="card-body">
                            <h4 class="card-title">Techniques de référencement</h4>
                            <p class="card-text">Some quick example text to build on the <br />
                            card title and make up the bulk of the card's <br />
                            content.</p>
                            <button type="button" class="btn btn-primary">Lire la suite</button>
                        </div>
                        <div class="card-footer">
                            Publié le 30 juillet 2022
                        </div>
                    </div>

                    <div class="card" id="bcard6">
                        <img class="card-img-top" src="/images/technos.png" alt="Icônes de langage de programmation"/>
                        <div class="card-body">
                            <h4 class="card-title">Apprendre à coder</h4>
                            <p class="card-text">Some quick example text to build on the <br />
                            card title and make up the bulk of the card's <br />
                            content.</p>
                            <button type="button" class="btn btn-primary">Lire la suite</button>
                        </div>
                        <div class="card-footer">
                            Publié le 12 juillet 2022
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog;
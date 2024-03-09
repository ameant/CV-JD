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
        </div>
    )
}

export default Blog;
import React from 'react';

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content animate-fade-in">
                <div className="badge">10+ Years of Experience</div>
                <h1>Anoop <span className="gradient-text">Vamadevan</span></h1>
                <p>Full-Stack Developer with 10+ years of experience delivering secure, scalable enterprise applications.</p>
                <div className="hero-actions">
                    <a href="#about" className="primary-btn">Read My Story</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;

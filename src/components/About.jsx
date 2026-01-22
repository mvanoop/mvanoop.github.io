import React from 'react';

function About() {
    return (
        <section id="about" className="section">
            <div className="section-header">
                <h2>About Me</h2>
                <div className="section-line"></div>
            </div>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        Full-Stack Developer with 10+ years of experience delivering secure, scalable enterprise applications.
                        Proven expertise in .NET, Azure, Angular, Elasticsearch, IDaaS platforms (Entra ID, OpenAM).
                        Known for strong collaboration, team leadership, and driving digital transformation using modern
                        development practices including GenAI tools like GitHub Copilot.
                    </p>
                    <div className="skills-container">
                        <div className="skill-tag">.NET 8+</div>
                        <div className="skill-tag">Angular 17+</div>
                        <div className="skill-tag">Azure DevOps</div>
                        <div className="skill-tag">Azure Cloud Architecture</div>
                        <div className="skill-tag">Elasticsearch</div>
                        <div className="skill-tag">IDaaS (Entra ID, OpenAM)</div>
                        <div className="skill-tag">TDD</div>
                        <div className="skill-tag">Agile SCRUM</div>
                    </div>
                </div>
                <div className="about-stats glass">
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">Toronto</span>
                        <span className="stat-label">Location</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

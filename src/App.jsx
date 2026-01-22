import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">ANOOP <span>VAMADEVAN</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact" className="contact-btn">Hire Me</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <div className="section-line"></div>
        </div>
        <div className="experience-list">
          <div className="experience-item glass">
            <div className="exp-header">
              <h3>Technology Lead</h3>
              <span className="exp-date">2021 - Present</span>
            </div>
            <p className="exp-company">Infosys Limited, Guelph, ON</p>
            <ul>
              <li>Lead the design and development of scalable web applications using .NET 8 Web API and Angular 17+</li>
              <li>Implement CI/CD pipelines using Azure DevOps for seamless integration and deployment</li>
              <li>Collaborate with cross-functional teams to define, design, and ship new features</li>
              <li>Mentor junior developers and conduct code reviews to ensure code quality</li>
            </ul>
          </div>

          <div className="experience-item glass">
            <div className="exp-header">
              <h3>Technology Analyst</h3>
              <span className="exp-date">2018 - 2021</span>
            </div>
            <p className="exp-company">Infosys Limited, Mangaluru, India</p>
            <ul>
              <li>Integrated Microsoft Graph APIs for enhanced functionality</li>
              <li>Built interactive UIs with Angular, HTML, CSS, and Telerik controls</li>
              <li>Practiced test-driven development (TDD) with MS unit test and Moq</li>
              <li>Followed Agile SCRUM, managed backlogs in Azure DevOps, and used GIT for source control</li>
            </ul>
          </div>

          <div className="experience-item glass">
            <div className="exp-header">
              <h3>Software Engineer</h3>
              <span className="exp-date">Oct 2014 – Oct 2018</span>
            </div>
            <p className="exp-company">Starcom Information Technology Limited, Bangalore, India</p>
            <ul>
              <li>Core developer for BI tools StarBI and Cubeware</li>
              <li>Developed and optimized Azure web apps, blob storage, and web jobs for scalable cloud solutions</li>
              <li>Implemented data visualization features using DevExpress dashboard controls and chart libraries</li>
              <li>Integrated predictive analytics models into dashboards with R scripts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-header">
          <h2>Education</h2>
          <div className="section-line"></div>
        </div>
        <div className="education-grid">
          <div className="education-card glass">
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="edu-univ">VTU University, Karnataka, India | 2010 - 2013</p>
            <p>Three-year, full-time master's degree program focusing on software development and database management.</p>
          </div>
          <div className="education-card glass">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="edu-univ">Kannur University, Kerala, India | 2007 - 2010</p>
            <p>Focusing on programming, data structures, and mathematical analysis.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="footer">
        <div className="footer-content glass">
          <h2>Let's build something <span className="gradient-text">extraordinary</span>.</h2>
          <p>Full-Stack Developer | Toronto, Canada</p>
          <div className="contact-info">
            <a href="mailto:mv.anoop1@gmail.com" className="email-link">mv.anoop1@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Anoop Vamadevan. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .app-container {
          padding-top: 80px;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 24px 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-scrolled {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 16px 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo span {
          color: var(--accent-blue);
        }

        .nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-dim);
          font-size: 0.95rem;
        }

        .nav-links a:hover {
          color: var(--text-bright);
        }

        .contact-btn {
          background: var(--accent-gradient);
          color: white !important;
          padding: 10px 24px;
          border-radius: 100px;
          font-weight: 600 !important;
        }

        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, #0a0a0a 100%);
          z-index: 1;
        }

        .hero-content {
          max-width: 900px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(0, 163, 255, 0.1);
          color: var(--accent-blue);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(0, 163, 255, 0.2);
        }

        h1 {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -3px;
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          font-size: 1.25rem;
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .primary-btn {
          background: var(--text-bright);
          color: var(--bg-primary);
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .secondary-btn {
          background: transparent;
          color: var(--text-bright);
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(4px);
        }

        .secondary-btn:hover {
          background: var(--glass-bg);
          border-color: var(--text-bright);
        }

        .section {
          max-width: 1100px;
          margin: 160px auto;
          padding: 0 40px;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .section-line {
          width: 60px;
          height: 4px;
          background: var(--accent-blue);
          border-radius: 2px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-text p {
          font-size: 1.25rem;
          color: var(--text-dim);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          padding: 8px 16px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-bright);
        }

        .about-stats {
          padding: 60px;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent-blue);
          margin-bottom: 8px;
        }

        .stat-label {
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .experience-item {
          padding: 40px;
          border-radius: 24px;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }

        .exp-header h3 {
          font-size: 1.5rem;
          color: var(--text-bright);
        }

        .exp-date {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .exp-company {
          font-family: monospace;
          color: var(--text-dim);
          margin-bottom: 20px;
          font-size: 1rem;
        }

        .experience-item ul {
          list-style: none;
        }

        .experience-item li {
          color: var(--text-dim);
          margin-bottom: 12px;
          padding-left: 20px;
          position: relative;
        }

        .experience-item li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .education-card {
          padding: 40px;
          border-radius: 24px;
        }

        .education-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--text-bright);
        }

        .edu-univ {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }

        .education-card p:last-child {
          color: var(--text-dim);
          line-height: 1.6;
        }

        .footer {
          padding: 160px 40px 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-content {
          text-align: center;
          padding: 100px 40px;
          border-radius: 48px;
          margin-bottom: 100px;
        }

        .footer-content h2 {
          font-size: 4rem;
          margin-bottom: 24px;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .footer-content p {
          font-size: 1.4rem;
          color: var(--text-dim);
          margin-bottom: 48px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .email-link {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-bright);
          text-decoration: underline;
          text-underline-offset: 10px;
          text-decoration-color: var(--accent-blue);
        }

        .footer-bottom {
          text-align: center;
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; }
          h1 { font-size: 4rem; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 3.5rem; }
          .nav-links { display: none; }
          .footer-content h2 { font-size: 2.5rem; }
          .section { margin: 100px auto; }
          .exp-header { flex-direction: column; gap: 4px; }
        }
      `}</style>
    </div>
  )
}

export default App

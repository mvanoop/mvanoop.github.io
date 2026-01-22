import React from 'react';

function Experience() {
    return (
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
    );
}

export default Experience;

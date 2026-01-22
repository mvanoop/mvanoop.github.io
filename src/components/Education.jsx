import React from 'react';

function Education() {
    return (
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
    );
}

export default Education;

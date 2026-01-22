import React, { useState } from 'react';

function Navbar({ scrolled, activeSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-content">
                <div className="logo">ANOOP <span>VAMADEVAN</span></div>

                <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
                    <li><a href="#" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a></li>
                    <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={closeMenu}>Experience</a></li>
                    <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={closeMenu}>Education</a></li>
                    <li><a href="#contact" className={`contact-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Hire Me</a></li>
                </ul>
            </div>
            {/* Overlay for mobile menu */}
            {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </nav>
    );
}

export default Navbar;

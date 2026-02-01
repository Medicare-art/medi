import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container">
                    <div className="contact-info">
                        <a href="tel:02081234567"><Phone size={14} /> 020 8123 4567</a>
                        <a href="mailto:info@mistymeadows.org.uk"><Mail size={14} /> info@mistymeadows.org.uk</a>
                    </div>
                </div>
            </div>
            <div className="main-nav">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="logo">
                            <img src="/logo.jpg" alt="Misty Meadows Logo" className="logo-img" />
                        </Link>

                        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                            <Link to="/our-homes" className={location.pathname === '/our-homes' ? 'active' : ''}>Our Homes</Link>
                            <Link to="/news-events" className={location.pathname === '/news-events' ? 'active' : ''}>News & Events</Link>
                            <Link to="/lifestyle" className={location.pathname === '/lifestyle' ? 'active' : ''}>Lifestyle</Link>
                            <Link to="/health-nutrition" className={location.pathname === '/health-nutrition' ? 'active' : ''}>Health & Nutrition</Link>
                            <button className="btn btn-secondary mobile-only">Contact Us</button>
                        </div>

                        <div className="nav-actions">
                            <button className="btn btn-secondary desktop-only">Contact Us</button>
                            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

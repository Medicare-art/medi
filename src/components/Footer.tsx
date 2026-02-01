import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-site">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <div className="logo footer-logo">
                            <img src="/src/assets/hero.jpeg" alt="Misty Meadows Logo" className="footer-logo-img" />
                        </div>
                        <p className="footer-desc">
                            Providing exceptional care and support to our residents across our nationwide network of luxury care homes.
                        </p>
                        <div className="social-icons">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/our-homes">Our Homes</Link></li>
                            <li><Link to="/news-events">News & Events</Link></li>
                            <li><Link to="/lifestyle">Lifestyle</Link></li>
                            <li><Link to="/health-nutrition">Health & Nutrition</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Policies</h3>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/modern-slavery">Modern Slavery Statement</Link></li>
                            <li><Link to="/cookies-policy">Cookies Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin size={20} />
                            <p>123 Healthcare Way, London, UK</p>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} />
                            <p>020 8123 4567</p>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} />
                            <p>info@mistymeadows.org.uk</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Misty Meadows. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

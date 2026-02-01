import { motion } from 'framer-motion';
import './Legal.css';

const CookiesPolicy = () => {
    return (
        <div className="legal-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Cookies <span className="text-secondary">Policy</span></h1>
                    <p>Understanding how we use cookies on our website.</p>
                </div>
            </section>
            <section className="legal-content section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="content-card"
                    >
                        <h2>1. What are Cookies?</h2>
                        <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

                        <h2>2. How We Use Cookies</h2>
                        <p>We use cookies to improve your experience on our website, for example, to remember your preferences and to understand how you interact with our site content.</p>

                        <h2>3. Types of Cookies We Use</h2>
                        <ul>
                            <li><strong>Necessary Cookies:</strong> Required for the website to function correctly.</li>
                            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
                            <li><strong>Functional Cookies:</strong> Allow the website to remember choices you make.</li>
                        </ul>

                        <h2>4. Managing Cookies</h2>
                        <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>www.aboutcookies.org</a>.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CookiesPolicy;

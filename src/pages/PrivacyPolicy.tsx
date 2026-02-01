import { motion } from 'framer-motion';
import './Legal.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Privacy <span className="text-secondary">Policy</span></h1>
                    <p>How we protect and manage your personal data.</p>
                </div>
            </section>
            <section className="legal-content section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="content-card"
                    >
                        <h2>1. Introduction</h2>
                        <p>Misty Meadows ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, and phone number when you fill out a contact form or inquire about our care homes.</p>

                        <h2>3. How We Use Your Information</h2>
                        <ul>
                            <li>To provide information about our services.</li>
                            <li>To process admissions and care inquiries.</li>
                            <li>To improve our website and user experience.</li>
                            <li>To comply with legal and regulatory obligations.</li>
                        </ul>

                        <h2>4. Data Protection</h2>
                        <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and access is restricted to authorized personnel only.</p>

                        <h2>5. Contact Us</h2>
                        <p>If you have any questions regarding this Privacy Policy, please contact our Data Protection Officer at privacy@mistymeadows.org.uk.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

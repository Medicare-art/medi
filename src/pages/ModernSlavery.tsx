import { motion } from 'framer-motion';
import './Legal.css';

const ModernSlavery = () => {
    return (
        <div className="legal-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Modern Slavery <span className="text-secondary">Statement</span></h1>
                    <p>Our commitment to preventing modern slavery and human trafficking.</p>
                </div>
            </section>
            <section className="legal-content section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="content-card"
                    >
                        <h2>1. Our Policy</h2>
                        <p>Misty Meadows is committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. Our Modern Slavery Policy reflects our commitment to acting ethically and with integrity in all our business relationships.</p>

                        <h2>2. Due Diligence Processes</h2>
                        <p>As part of our initiative to identify and mitigate risk, we perform due diligence on all suppliers before allowing them to become a preferred supplier. This includes an audit of their own anti-slavery processes.</p>

                        <h2>3. Training</h2>
                        <p>To ensure a high level of understanding of the risks of modern slavery and human trafficking in our supply chains and our business, we provide training to our staff.</p>

                        <h2>4. Monitoring</h2>
                        <p>We use a combination of software and manual reporting to monitor our supply chain and ensure adherence to our ethics and standards.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ModernSlavery;

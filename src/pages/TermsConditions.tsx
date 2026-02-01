import { motion } from 'framer-motion';
import './Legal.css';

const TermsConditions = () => {
    return (
        <div className="legal-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Terms & <span className="text-secondary">Conditions</span></h1>
                    <p>The rules and regulations for the use of Misty Meadows Website.</p>
                </div>
            </section>
            <section className="legal-content section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="content-card"
                    >
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Misty Meadows' website if you do not accept all of the terms and conditions stated on this page.</p>

                        <h2>2. Intellectual Property</h2>
                        <p>Unless otherwise stated, Misty Meadows and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>

                        <h2>3. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on Misty Meadows' website for personal, non-commercial transitory viewing only.</p>

                        <h2>4. Disclaimer</h2>
                        <p>The materials on Misty Meadows' website are provided on an 'as is' basis. Misty Meadows makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>

                        <h2>5. Limitations</h2>
                        <p>In no event shall Misty Meadows or its suppliers be liable for any damages arising out of the use or inability to use the materials on Misty Meadows' website.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;

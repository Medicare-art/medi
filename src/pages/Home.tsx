import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Utensils } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/images/hero.png';
import lifestyleImg from '../assets/images/lifestyle.png';
import nutritionImg from '../assets/images/nutrition.png';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-image-wrapper">
                    <img src={heroImg} alt="Caring for the Community" className="hero-bg" />
                    <div className="hero-overlay" />
                </div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="hero-content"
                    >
                        <h1>Caring for the <br /><span className="text-highlight">Community</span></h1>
                        <p>Providing clinical excellence and emotional enrichment in every one of our luxury care homes.</p>
                        <div className="hero-btns">
                            <a href="/our-homes" className="btn btn-primary">Find a Home</a>
                            <a href="/lifestyle" className="btn btn-secondary">Discover Lifestyle</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose <span className="text-secondary">Misty Meadows</span>?</h2>
                        <p className="subtitle">We believe in a holistic approach to care, where every resident's physical, emotional, and social needs are met with excellence.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-box"><Heart /></div>
                            <h3>Person-Centered Care</h3>
                            <p>Tailored care plans designed to meet the unique needs and preferences of every individual.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><ShieldCheck /></div>
                            <h3>Clinical Excellence</h3>
                            <p>Highly qualified medical staff and state-of-the-art facilities ensuring the best healthcare.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Users /></div>
                            <h3>Emotional Enrichment</h3>
                            <p>A vibrant community and engaging activities that bring joy and purpose to everyday life.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Utensils /></div>
                            <h3>Premium Dining</h3>
                            <p>Nutritious, restaurant-quality meals prepared by our professional chefs using fresh produce.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Sections */}
            <section className="featured-sections">
                <div className="featured-row">
                    <div className="featured-image">
                        <img src={lifestyleImg} alt="Lifestyle and Wellbeing" />
                    </div>
                    <div className="featured-content">
                        <div className="inner-content">
                            <h2>Lifestyle & <br />Wellbeing</h2>
                            <p>Our focus is on creating an environment where residents can thrive. From art classes to garden parties, there's always something happening at Misty Meadows.</p>
                            <a href="/lifestyle" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="featured-row reverse">
                    <div className="featured-image">
                        <img src={nutritionImg} alt="Health and Nutrition" />
                    </div>
                    <div className="featured-content">
                        <div className="inner-content">
                            <h2>Health & <br />Nutrition</h2>
                            <p>We understand the importance of a balanced diet. Our menu is designed by nutritionists and prepared with love by our expert culinary team.</p>
                            <a href="/health-nutrition" className="btn btn-primary">Discover Our Menu</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Placeholder */}
            <section className="testimonials section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>What Our <span className="text-secondary">Families Say</span></h2>
                    </div>

                    <div className="testimonial-slider">
                        <div className="testimonial-card">
                            <p>"The level of care and compassion shown to my mother has been nothing short of exceptional. She is happier now than she has been in years."</p>
                            <div className="client-info">
                                <h4>- Jane D., Resident's Daughter</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

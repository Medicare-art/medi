import { Palette, Music, Sprout, Coffee } from 'lucide-react';
import './Lifestyle.css';
import lifestyleImg from '../assets/images/lifestyle.png';

const Lifestyle = () => {
    return (
        <div className="lifestyle-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Misty Meadows <span className="text-secondary">Lifestyle</span></h1>
                    <p>Meaningful engagement and emotional enrichment at the heart of our community.</p>
                </div>
            </section>

            <section className="lifestyle-intro section-padding">
                <div className="container">
                    <div className="lifestyle-grid">
                        <div className="lifestyle-text">
                            <h2>More Than Just <br />A Care Home</h2>
                            <p>At Misty Meadows, we believe that moving into a care home should be the start of an exciting new chapter. Our lifestyle program is designed to inspire, engage, and bring joy to every resident.</p>
                            <p>From individual hobbies to group activities, we provide a wide range of opportunities for residents to continue doing what they love and discover new passions.</p>

                            <div className="lifestyle-features">
                                <div className="l-feature">
                                    <Palette className="l-icon" />
                                    <div>
                                        <h4>Arts & Crafts</h4>
                                        <p>Expressing creativity through various artistic mediums.</p>
                                    </div>
                                </div>
                                <div className="l-feature">
                                    <Music className="l-icon" />
                                    <div>
                                        <h4>Music & Dance</h4>
                                        <p>Regular live performances and interactive music sessions.</p>
                                    </div>
                                </div>
                                <div className="l-feature">
                                    <Sprout className="l-icon" />
                                    <div>
                                        <h4>Gardening</h4>
                                        <p>Beautiful outdoor spaces for relaxation and horticultural hobbies.</p>
                                    </div>
                                </div>
                                <div className="l-feature">
                                    <Coffee className="l-icon" />
                                    <div>
                                        <h4>Social Clubs</h4>
                                        <p>Themed coffee mornings and discussion groups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lifestyle-image">
                            <img src={lifestyleImg} alt="Lifestyle Activities" className="rounded-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="lifestyle-gallery section-padding bg-accent">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Moments of <span className="text-secondary">Joy</span></h2>
                    </div>
                    <div className="gallery-grid">
                        <img src={lifestyleImg} alt="Gallery 1" />
                        <img src={lifestyleImg} alt="Gallery 2" />
                        <img src={lifestyleImg} alt="Gallery 3" />
                        <img src={lifestyleImg} alt="Gallery 4" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lifestyle;

import { Palette, Music, Sprout, Coffee } from 'lucide-react';
import './Lifestyle.css';

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
                            <img src="/activity/92282471_246605660063401_8208245740372230144_n.jpg" alt="Lifestyle Activities" className="rounded-img" />
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
                        <img src="/activity/131663869_632292714828025_1912956360259747022_n.jpg" alt="Gallery 1" />
                        <img src="/activity/210224901_632292724828024_9040698239834818003_n.jpg" alt="Gallery 2" />
                        <img src="/activity/210401558_632292671494696_8950980790264489412_n.jpg" alt="Gallery 3" />
                        <img src="/activity/70736321_113457266711575_6729856201099575296_n.jpg" alt="Gallery 4" />
                        <img src="/activity/81374429_175578460499455_5933686847740837888_n.jpg" alt="Gallery 5" />
                        <img src="/activity/81781625_176701820387119_7488775397589385216_n.jpg" alt="Gallery 6" />
                        <img src="/activity/91143380_237261610997806_1431024115946356736_n.jpg" alt="Gallery 7" />
                        <img src="/activity/91518086_237261604331140_8160412049646551040_n.jpg" alt="Gallery 8" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lifestyle;

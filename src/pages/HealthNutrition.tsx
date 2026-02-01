import { Apple, Leaf, Thermometer, Smile } from 'lucide-react';
import './HealthNutrition.css';
import './HealthNutrition.css';

const HealthNutrition = () => {
    return (
        <div className="nutrition-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Health & <span className="text-secondary">Nutrition</span></h1>
                    <p>Excellence in dining and clinical nutrition for optimal wellbeing.</p>
                </div>
            </section>

            <section className="nutrition-intro section-padding">
                <div className="container">
                    <div className="nutrition-content-grid">
                        <div className="nutrition-image">
                            <img src="/food/93852242_257189742338326_2809627838217453568_n.jpg" alt="Healthy Dining" className="rounded-img" />
                        </div>
                        <div className="nutrition-text">
                            <h2>Nutritious Dining <br />Experience</h2>
                            <p>We understand that food is more than just sustenance; it's a social occasion and a key part of maintaining health and happiness. Our culinary team works closely with nutritionists to create menus that are both delicious and nutritionally balanced.</p>

                            <div className="nutrition-cards">
                                <div className="n-card">
                                    <Apple className="n-icon" />
                                    <h4>Fresh Ingredients</h4>
                                    <p>Sourced from local suppliers to ensure the highest quality and flavor.</p>
                                </div>
                                <div className="n-card">
                                    <Leaf className="n-icon" />
                                    <h4>Bespoke Diets</h4>
                                    <p>Catering to all dietary requirements, including vegetarian, vegan, and medical needs.</p>
                                </div>
                                <div className="n-card">
                                    <Thermometer className="n-icon" />
                                    <h4>Food Safety</h4>
                                    <p>Highest standards of hygiene and safety in all our kitchens.</p>
                                </div>
                                <div className="n-card">
                                    <Smile className="n-icon" />
                                    <h4>Social Dining</h4>
                                    <p>Enjoying meals in our elegant dining rooms with friends and family.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sample-menu section-padding">
                <div className="container">
                    <div className="menu-box text-center">
                        <h2>Sample <span className="text-secondary">Menu</span></h2>
                        <div className="menu-grid">
                            <div className="menu-category">
                                <h3>Breakfast</h3>
                                <p>Eggs Benedict on toasted brioche</p>
                                <p>Fresh fruit platter with Greek yogurt</p>
                                <p>Selection of artisan pastries</p>
                            </div>
                            <div className="menu-category">
                                <h3>Lunch</h3>
                                <p>Pan-seared Salmon with seasonal greens</p>
                                <p>Roasted Vegetable Tart with balsamic glaze</p>
                                <p>Lemon Posset with shortbread</p>
                            </div>
                            <div className="menu-category">
                                <h3>Dinner</h3>
                                <p>Slow-cooked Beef Brisket with root vegetables</p>
                                <p>Wild Mushroom Risotto with truffle oil</p>
                                <p>Apple & Blackberry Crumble with custard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="nutrition-gallery section-padding bg-accent">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Culinary <span className="text-secondary">Excellence</span></h2>
                    </div>
                    <div className="gallery-grid">
                        <img src="/food/70616745_113453566711945_5480935936839647232_n.jpg" alt="Food 1" />
                        <img src="/food/82932005_184296949627606_1345250676992638976_n.jpg" alt="Food 2" />
                        <img src="/food/83027106_184297006294267_4475721187925688320_n.jpg" alt="Food 3" />
                        <img src="/food/91825189_246740603383240_2942684481938522112_n.jpg" alt="Food 4" />
                        <img src="/food/91848722_246740640049903_4987196035613851648_n.jpg" alt="Food 5" />
                        <img src="/food/91919121_246740833383217_3165687099571568640_n.jpg" alt="Food 6" />
                        <img src="/food/92369417_246740620049905_8382070209371963392_n.jpg" alt="Food 7" />
                        <img src="/food/92939762_246740806716553_4322534165632253952_n.jpg" alt="Food 8" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HealthNutrition;

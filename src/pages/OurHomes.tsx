import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import './OurHomes.css';
import exteriorImg from '../assets/images/home-exterior.png';

const homesData = [
    {
        id: 1,
        name: 'Aarandale Manor',
        location: 'London',
        description: 'A luxurious care home set in the heart of London, offering bespoke care services.',
        image: exteriorImg,
    },
    {
        id: 2,
        name: 'Aaron Court',
        location: 'Leicester',
        description: 'Providing a warm and welcoming environment with a focus on community and wellbeing.',
        image: exteriorImg,
    },
    {
        id: 3,
        name: 'Abbey Court',
        location: 'Derby',
        description: 'Modern facilities combined with traditional care values in a beautiful setting.',
        image: exteriorImg,
    },
    {
        id: 4,
        name: 'Banks House',
        location: 'Nottingham',
        description: 'Dedicated to providing the highest standards of care and support for our residents.',
        image: exteriorImg,
    },
];

const OurHomes = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredHomes = homesData.filter(home =>
        home.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        home.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="our-homes-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>Find Your <span className="text-secondary">Nearest Home</span></h1>
                    <p>Discover our range of luxury care homes across the nation.</p>

                    <div className="search-container">
                        <div className="search-bar">
                            <Search className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search by home name or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="homes-list section-padding">
                <div className="container">
                    <div className="homes-grid">
                        {filteredHomes.map(home => (
                            <div key={home.id} className="home-card fade-in">
                                <div className="home-image">
                                    <img src={home.image} alt={home.name} />
                                    <div className="location-badge">
                                        <MapPin size={14} /> {home.location}
                                    </div>
                                </div>
                                <div className="home-info">
                                    <h3>{home.name}</h3>
                                    <p>{home.description}</p>
                                    <a href={`/our-homes/${home.id}`} className="view-home-btn">
                                        View Home <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredHomes.length === 0 && (
                        <div className="no-results text-center">
                            <h3>No homes found matching your search.</h3>
                            <p>Please try a different keyword or location.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default OurHomes;

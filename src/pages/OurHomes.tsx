import { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import './OurHomes.css';
import './OurHomes.css';

const homesData = [
    {
        id: 1,
        name: 'Aarandale Manor',
        location: 'London',
        description: 'A luxurious care home set in the heart of London, offering bespoke care services.',
        image: '/place/182617641_593825925341371_1400814053518723301_n.jpg',
    },
    {
        id: 2,
        name: 'Aaron Court',
        location: 'Leicester',
        description: 'Providing a warm and welcoming environment with a focus on community and wellbeing.',
        image: '/place/181707361_593825812008049_9014634401060927070_n.jpg',
    },
    {
        id: 3,
        name: 'Abbey Court',
        location: 'Derby',
        description: 'Modern facilities combined with traditional care values in a beautiful setting.',
        image: '/place/182472722_593825765341387_3705310151223140598_n.jpg',
    },
    {
        id: 4,
        name: 'Banks House',
        location: 'Nottingham',
        description: 'Dedicated to providing the highest standards of care and support for our residents.',
        image: '/place/196958865_616688069721823_8464107180352825292_n.jpg',
    },
    {
        id: 5,
        name: 'Cedar Grove',
        location: 'Birmingham',
        description: 'A peaceful retreat offering personalized care in a serene garden setting.',
        image: '/place/197328750_616688076388489_4017607006723317730_n.jpg',
    },
    {
        id: 6,
        name: 'Dolphin Lodge',
        location: 'Brighton',
        description: 'Seaside luxury living with 24/7 nursing support and vibrant social activities.',
        image: '/place/294916325_473958858063603_8725802060295243015_n.jpg',
    },
    {
        id: 7,
        name: 'Elm Tree Hall',
        location: 'Bristol',
        description: 'Historic charm meets modern care excellence in our recently renovated facility.',
        image: '/place/481248139_1180091497450332_5268504923039143271_n.jpg',
    },
    {
        id: 8,
        name: 'Fairview View',
        location: 'Manchester',
        description: 'Stunning panoramic views and a dedicated team committed to resident happiness.',
        image: '/place/89348574_220256486031652_3432494561102921728_n.jpg',
    },
    {
        id: 9,
        name: 'Green Meadows',
        location: 'Liverpool',
        description: 'Focusing on independence and dignity in a supportive community environment.',
        image: '/place/89384609_220256389364995_4855208293288640512_n.jpg',
    },
    {
        id: 10,
        name: 'Harbor Light',
        location: 'Southampton',
        description: 'Bright and airy rooms with a nautical theme, providing specialized memory care.',
        image: '/place/89543317_220256532698314_6138796919381557248_n.jpg',
    },
    {
        id: 11,
        name: 'Ivy Cottage',
        location: 'Oxford',
        description: 'Intimate and cozy boutique care home with a strong emphasis on family involvement.',
        image: '/place/89603321_220256396031661_4652473948447965184_n.jpg',
    },
    {
        id: 12,
        name: 'Jubilee House',
        location: 'Leeds',
        description: 'Celebrating life every day with a rich program of events and five-star dining.',
        image: '/place/89662073_220256549364979_4200606250326556672_n.jpg',
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

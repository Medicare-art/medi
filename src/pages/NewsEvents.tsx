import { Calendar, User, ArrowRight } from 'lucide-react';
import './NewsEvents.css';
import lifestyleImg from '../assets/images/lifestyle.png';

const newsData = [
    {
        id: 1,
        title: 'Huntingdon mobile library visit',
        date: 'October 15, 2023',
        author: 'Admin',
        excerpt: 'Residents enjoyed a wonderful afternoon exploring a wide variety of books during the mobile library visit.',
        image: lifestyleImg,
    },
    {
        id: 2,
        title: 'Autumn Garden Party at Aarandale Manor',
        date: 'September 28, 2023',
        author: 'Admin',
        excerpt: 'A beautiful day filled with music, laughter, and seasonal treats as we celebrated the arrival of autumn.',
        image: lifestyleImg,
    },
    {
        id: 3,
        title: 'New Wellness Program Launched',
        date: 'September 12, 2023',
        author: 'Admin',
        excerpt: 'We are excited to introduce our new holistic wellness program focused on mental and physical wellbeing.',
        image: lifestyleImg,
    },
];

const NewsEvents = () => {
    return (
        <div className="news-page">
            <section className="page-header section-padding">
                <div className="container">
                    <h1>News & <span className="text-secondary">Events</span></h1>
                    <p>Stay updated with the latest happenings across our care homes.</p>
                </div>
            </section>

            <section className="news-content section-padding">
                <div className="container">
                    <div className="news-grid">
                        {newsData.map(news => (
                            <div key={news.id} className="news-card fade-in">
                                <div className="news-image">
                                    <img src={news.image} alt={news.title} />
                                </div>
                                <div className="news-info">
                                    <div className="news-meta">
                                        <span><Calendar size={14} /> {news.date}</span>
                                        <span><User size={14} /> {news.author}</span>
                                    </div>
                                    <h3>{news.title}</h3>
                                    <p>{news.excerpt}</p>
                                    <a href={`/news-events/${news.id}`} className="read-more">
                                        Read More <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsEvents;

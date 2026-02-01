import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurHomes from './pages/OurHomes';
import NewsEvents from './pages/NewsEvents';
import Lifestyle from './pages/Lifestyle';
import HealthNutrition from './pages/HealthNutrition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ModernSlavery from './pages/ModernSlavery';
import CookiesPolicy from './pages/CookiesPolicy';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-homes" element={<OurHomes />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/health-nutrition" element={<HealthNutrition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/modern-slavery" element={<ModernSlavery />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

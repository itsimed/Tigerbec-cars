import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CatalogSection from '../components/CatalogSection';
import ComingSoonSection from '../components/ComingSoonSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { assets } from '../config/assets';

const HomePage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-black min-h-screen">
      <Navbar logo={assets.logoNav} siteName="Tiger Bec Cars" />
      
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <ComingSoonSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage; 
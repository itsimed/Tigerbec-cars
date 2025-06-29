import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src={assets.logoNav} 
                alt="Tiger Bec Cars"
                className="h-10 sm:h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {t('footer.description')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.catalog')}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/piccifranchise/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.usedCars')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.inspection')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.warranty')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.tradeIn')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.financing')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('contact.title')}</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.address')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  123 Rue de l'Automobile<br />
                  Quartier Premium<br />
                  Montréal, QC H1A 1B2
                </p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.phone')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">+1 (514) 123-4567</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.email')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">contact@tigerbeccars.com</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Instagram</h4>
                <a 
                  href="https://www.instagram.com/piccifranchise/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  piccifranchise
                </a>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.hours')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {t('contact.hours.weekdays')}<br />
                  {t('contact.hours.saturday')}<br />
                  {t('contact.hours.sunday')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Tiger Bec Cars. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <a 
                  href="https://www.instagram.com/piccifranchise/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
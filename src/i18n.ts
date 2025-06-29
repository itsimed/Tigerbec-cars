import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      'comingSoon.title': 'COMING SOON',
      'comingSoon.future': 'The future is here.',
      'comingSoon.description': 'Tiger Canada Trust LTD is revolutionizing the automotive industry with cutting-edge technology and unparalleled customer service. Stay tuned for an experience that will redefine your expectations.'
    }
  },
  fr: {
    translation: {
      'comingSoon.title': 'BIENTÔT DISPONIBLE',
      'comingSoon.future': 'Le futur est là.',
      'comingSoon.description': 'Tiger Canada Trust LTD révolutionne l\'industrie automobile avec une technologie de pointe et un service client inégalé. Restez à l\'écoute pour une expérience qui redéfinira vos attentes.'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 
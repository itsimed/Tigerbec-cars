import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const ComingSoonSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true
  });
  const { t } = useLanguage();
  const [textIndex, setTextIndex] = useState(0);
  const futureText = t('comingSoon.future');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    setTextIndex(0);
    if (inView) {
      const interval = setInterval(() => {
        setTextIndex(prev => (prev + 1) % (futureText.length + 1));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [inView, futureText]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background animations */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-pink-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre centré en haut */}
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          {t('comingSoon.title')}
        </h2>

        {/* Container pour la description et la vidéo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
          {/* Texte à gauche */}
          <div className={`text-white space-y-6 transform transition-all duration-1000 delay-300 w-full flex flex-col items-center text-center ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-4 text-lg sm:text-xl text-gray-300 max-w-lg">
              <div className="font-mono">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {futureText.substring(0, textIndex)}
                </span>
                <span className="animate-pulse inline-block ml-1 text-purple-400">|</span>
              </div>
              <p className="mt-6">{t('comingSoon.description')}</p>
            </div>
          </div>

          {/* Vidéo à droite */}
          <div 
            className={`relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 transform transition-all duration-1000 delay-500 w-full flex justify-center ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div 
              className="relative w-[75%]"
            >
              <video
                ref={videoRef}
                loop
                playsInline
                className="w-full h-auto object-cover rounded-xl"
              >
                <source src="/TCT.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Bouton de lecture central */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`absolute left-[calc(50%-32px)] top-[calc(50%-32px)] ${
                  isPlaying ? 'hidden' : 'block'
                }`}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-16 h-16"
                >
                  <defs>
                    <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M7 4.5L19 12L7 19.5V4.5Z" 
                    fill="url(#playGradient)"
                    stroke="none"
                  />
                </svg>
              </button>

              {/* Zone cliquable pour pause */}
              <div 
                className={`absolute inset-0 ${!isPlaying ? 'hidden' : 'block'}`}
                onClick={() => setIsPlaying(false)}
              ></div>

              {/* Contrôle du volume */}
              <div className={`absolute bottom-0 right-0 p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center space-x-2 bg-black/60 rounded-full px-3 py-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setVolume(v => v === 0 ? 1 : 0);
                    }}
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    {volume === 0 ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3 3v-3.46l4.13 4.13c-.32.07-.66.11-1.01.11-2.76 0-5-2.24-5-5 0-.35.04-.69.11-1.01l4.13 4.13c-.32.07-.66.11-1.01.11-2.76 0-5-2.24-5-5 0-.35.04-.69.11-1.01l3.14 3.14v-3.46l2.15 2.15.41.41 1.41-1.41L5.04 3.63a.996.996 0 00-1.41 0zM19 12c0 .82-.15 1.61-.41 2.34l1.41 1.41c.38-.94.59-1.95.59-3 0-3.92-2.83-7.17-6.55-7.87v2.23c2.41.45 4.34 2.42 4.34 4.89zM12 4l1.41 1.41L12 6.83V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-24 accent-purple-500"
                    onClick={e => e.stopPropagation()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection; 
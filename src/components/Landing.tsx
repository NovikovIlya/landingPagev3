import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Timeline from './Timeline';
import RoleModel from './RoleModel';
import Features from './Features';
import AboutUs from './AboutUs';
import Statistics from './Statistics';
import ITCareer from './ITCareer';
import BlurText from '../blocks/TextAnimations/BlurText/BlurText';
import CountUp from '../blocks/TextAnimations/CountUp/CountUp';

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed');
  };

  return (
    <div className="font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header 
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Главный экран */}
      <section id="home" className="relative pt-32 pb-24 overflow-hidden dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <BlurText
              text=" Единый личный кабинет"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-center flex justify-center"
            />
       
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Единый личный кабинет
            </h1> */}
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Цифровая платформа, упрощающая взаимодействие студентов с университетом и образовательными ресурсами.
              <CountUp
                  from={0}
                  to={7120}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
            </p>
          </div>
        </div>
      </section>

      <div className='animate-on-scroll'>
        <AboutUs />
      </div>
      <div className='animate-on-scroll'>
        <Statistics />
      </div>
      <div className='animate-on-scroll'>
        <Timeline />
      </div>
      <div className='animate-on-scroll'>
        <RoleModel />
      </div>
      <div className='animate-on-scroll'>
        <Features />
      </div>
      <div className='animate-on-scroll'>
        <ITCareer />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
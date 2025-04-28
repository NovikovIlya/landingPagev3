import React from 'react';

const ITCareer: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Мечаешь о карьере в IT?</h2>
          <p className="text-xl mb-8 opacity-90">
            Хочешь получить реальный опыт работы, который выделит тебя среди других выпускников? 
            Департамент Информатизации и Связи приглашает тебя на стажировку! Ты получишь 
            возможность работать над реальными проектами, учиться у профессионалов и увидеть 
            изнутри, как работает IT. Подай заявку прямо сейчас и начни строить свое будущее!
          </p>
          <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Подать заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITCareer;
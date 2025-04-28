import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">О нас</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Короче, Департамент информатизации и связи – это как мозг КФУ в плане технологий. 
              Эти ребята следят за тем, чтобы у всех был крутой интернет, компы не тупили, и 
              вообще все IT-штуки работали на полную катушку. Они шарят, как новые технологии 
              могут помочь учиться и создавать классные проекты.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Команда DIS"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
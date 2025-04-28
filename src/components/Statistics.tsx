import React from 'react';

const stats = [
  {
    number: "7659",
    description: "бюджетных мест на 2025 год"
  },
  {
    number: "50",
    suffix: "тысяч",
    description: "студентов из 85 регионов"
  },
  {
    number: "11",
    suffix: "тысяч",
    description: "сотрудников работает в КФУ"
  }
];

const Statistics: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Немного цифр
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {stat.number}
                  {stat.suffix && <span className="text-2xl ml-2">{stat.suffix}</span>}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
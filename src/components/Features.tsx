import React from 'react';

const features = [
  {
    title: "Двуязычность",
    description: [
      "Управляй учебой на удобном для тебя языке: Выбирай русский или английский в личном кабинете!",
      "Международная среда: Подготовка к общению и работе в глобальном мире.",
      "Более широкий доступ к информации: Используй ресурсы университета на двух языках.",
      "Развитие языковых навыков: Практикуй английский в привычной учебной среде."
    ],
    image: "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    title: "Мессенджер",
    description: [
      "Централизованный канал связи между студентами и администрацией университета.",
      "Безопасная и контролируемая среда для общения.",
      "Доступность на всех устройствах."
    ],
    image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Фичи
        </h2>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3 mt-1">
                        <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
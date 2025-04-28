import React from 'react';

const roles = [
  {
    title: "Абитуриент",
    features: [
      "Подача заявления на поступление в КФУ",
      "Участие в олимпиадах для поступающих (Магистриум, Open Doors и пр.)",
      "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства (если совершеннолетний)",
      "Просмотр каталога образовательных курсов КФУ"
    ]
  },
  {
    title: "Студент",
    features: [
      "Просмотр расписания занятий, академического рейтинга",
      "Заказ справок, подача заявлений в рамках обучения и внеучебной деятельности",
      "Доступ к ЭБС, к порталам онлайн-образования",
      "Просмотр вакансий для студентов",
      "Запись на курсы доп.образования",
      "Подача заявления на поступление в КФУ",
      "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства"
    ]
  },
  {
    title: "Сотрудник",
    features: [
      "Просмотр расчетного листа",
      "Заказ справок из УК и бухгалтерии",
      "Подача заявлений на отпуск, командировки",
      "Запись на прохождение образовательных курсов КФУ",
      "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
      "Подача заявления на поступление в КФУ",
      "Должностные сервисы, подключаемые индивидуально"
    ]
  }
];

const RoleModel: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Ролевая модель
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                {role.title}
              </h3>
              <ul className="space-y-4">
                {role.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary-600 dark:text-primary-400 text-sm">✓</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleModel;
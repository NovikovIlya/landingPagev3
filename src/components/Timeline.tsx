import React from 'react';
import { Link, Element } from 'react-scroll';

const timelineData = [
  {
    date: "Декабрь 2022",
    content: "Отбор кандидатов на стажировку и формирование проектных команд. Проект DISTRICT"
  },
  {
    date: "Февраль-март 2023",
    content: "Запуск проекта по разработке Единого личного кабинета"
  },
  {
    date: "Сентябрь-октябрь 2023",
    content: "Англоязычный кабинет для поступающих (egp.kpfu.ru)"
  },
  {
    date: "Ноябрь 2023",
    content: "Отбор на вторую волну стажировок DISTRICT"
  },
  {
    date: "Ноябрь 2023",
    content: "Начало следующих проектов: Трудоустройство, Отпуск, Практики студентов, Командировки, Центр единого облуживания"
  },
  {
    date: "Январь 2024",
    content: "Начало работ по реструктуризации Единого личного кабинета"
  },
  {
    date: "Ноябрь 2024",
    content: "Разработка мессенджера КФУ"
  }
];

const developmentGoals = [
  "Внедрение принципа «Одно физическое лицо - одна учетная запись»",
  "Переход от подхода множественности личных кабинетов к единой учетной записи с ролевым распределением",
  "Перенос ИАС «Электронный университет» на новый технологический стек, с частичным сохранением баз данных на Oracle",
  "Создание нового дизайн – решения, отвечающему предъявляемым пользователями требований в области удобства пользования системой (UX), в том числе с учетом кроссплатформенности и мультиязычности",
  "Разработка новых сервисов, связанных с цифровизацией кадрового направления (сервисы по трудоустройству, кадровому учету, цифровизации табеля, оценка второй половины дня и т д)"
];

const Timeline: React.FC = () => {
  return (
     <Element name="timeline">
    <div className="py-20 dark:bg-gray-900 animate-slideUp slide-up ">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Этапы развития проекта</h2>
          
          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-600"></div>
            
            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <div className={`p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="font-bold text-lg mb-2 text-primary-600 dark:text-primary-400">{item.date}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-gray-900"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>

          {/* Development Goals */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Цель разработки</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                {developmentGoals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-4 mt-1">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">{goal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Element>
  );
};

export default Timeline;
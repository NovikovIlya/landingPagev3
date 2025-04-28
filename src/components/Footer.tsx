import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-xl p-8 mb-12 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center">Свяжитесь с нами</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-xl mb-2">Телефон</p>
              <p className="text-gray-400">8 (843) 206 50 84</p>
            </div>
            <div>
              <p className="text-xl mb-2">Email</p>
              <p className="text-gray-400">dis@kpfu.ru</p>
            </div>
            <div>
              <p className="text-xl mb-2">Адрес</p>
              <p className="text-gray-400">г. Казань, ул. Нужина 1/37</p>
            </div>
            <div>
              <p className="text-xl mb-2">Режим работы</p>
              <p className="text-gray-400">пн-пт с 8 до 17 часов</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 КФУ. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
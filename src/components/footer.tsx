import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              hanzi<span className="text-red-500">77</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Видеоэдиты в After Effects — быстро, красиво, профессионально. Ролики до 1 минуты от 1390₽.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/hanzi77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Icon name="Send" size={20} />
              </a>
              <a href="mailto:hanzi77@mail.com" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Видеоэдиты
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Как заказать
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>

          {/* Контакт */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакт</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/hanzi77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Telegram: @hanzi77
                </a>
              </li>
              <li>
                <span className="font-space-mono text-gray-400">
                  От 1390₽ / ролик до 1 мин
                </span>
              </li>
              <li>
                <span className="font-space-mono text-gray-400">
                  Срок: 24–48 часов
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2025 hanzi77. Видеомонтаж и эдиты.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://t.me/hanzi77"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

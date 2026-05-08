import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит эдит?",
      answer:
        "Ролик до 1 минуты — от 1390₽. Итоговая стоимость зависит от сложности: количества эффектов, анимаций, работы с текстом. Обсуждаем цену до начала работы — никаких сюрпризов.",
    },
    {
      question: "Как долго делается видео?",
      answer:
        "Обычно 24–48 часов с момента получения всех материалов. Если нужно срочно — пиши, обсудим. Стараюсь не затягивать.",
    },
    {
      question: "Что нужно предоставить для работы?",
      answer:
        "Исходные видео или фото, музыку (если есть предпочтения), референс или описание желаемого стиля. Чем больше деталей — тем точнее результат.",
    },
    {
      question: "Можно ли сделать правки после сдачи?",
      answer:
        "Да, правки в рамках согласованного ТЗ — бесплатно. Если хочется поменять концепцию кардинально — обсудим отдельно.",
    },
    {
      question: "В каком формате отдаёшь готовый файл?",
      answer:
        "В любом нужном: MP4 для Reels/TikTok, MOV для YouTube, вертикальный 9:16 или горизонтальный 16:9. Скажи под какую платформу — сделаю под неё.",
    },
    {
      question: "Как происходит оплата?",
      answer:
        "Обычно после получения готового видео. Предоплата возможна по договорённости. Принимаю переводы на карту.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать перед заказом
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

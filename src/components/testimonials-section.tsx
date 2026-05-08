import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём К.",
    role: "Блогер, 50к подписчиков",
    avatar: "",
    content:
      "Заказывал эдит для Reels — результат превзошёл ожидания. Ролик набрал в 3 раза больше просмотров, чем обычно. Теперь работаем регулярно.",
  },
  {
    name: "Диана Р.",
    role: "Фитнес-тренер",
    avatar: "",
    content:
      "Быстро, красиво, без лишних слов. Отправила материал — через сутки получила готовый монтаж. Все клиенты спрашивают, кто делает видео.",
  },
  {
    name: "Максим Т.",
    role: "Музыкант",
    avatar: "",
    content:
      "Делали клип под трек — ритмика, переходы, цвет. Всё чётко легло в музыку. Качество на уровне студийного продакшна, цена — в разы дешевле.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы тех, кто уже заказал эдит
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500 text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

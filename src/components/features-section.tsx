import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "After Effects эдиты",
    description: "Динамичный монтаж с эффектами, переходами и синхронизацией под музыку. Ваш контент выглядит как клип с большим бюджетом.",
    icon: "film",
    badge: "After Effects",
  },
  {
    title: "Монтаж до 1 минуты",
    description: "Короткие видео — самый просматриваемый формат. Делаю плотный, насыщенный монтаж без воды и лишних кадров.",
    icon: "clock",
    badge: "1 мин",
  },
  {
    title: "Быстрые сроки",
    description: "Получи готовый эдит уже через 24-48 часов. Работаю чётко и без затяжек — твой контент не будет лежать в очереди.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Цветокоррекция",
    description: "Профессиональный грейдинг: кино-цвета, насыщенность, контраст. Видео приобретает свой уникальный визуальный стиль.",
    icon: "palette",
    badge: "Цвет",
  },
  {
    title: "Текст и субтитры",
    description: "Анимированные титры, субтитры и надписи в кадре. Повышают досматриваемость и делают видео понятным без звука.",
    icon: "type",
    badge: "Текст",
  },
  {
    title: "Результат под платформу",
    description: "Вертикальный формат для Reels и TikTok, горизонтальный для YouTube. Всё отдаётся в нужном разрешении и кодеке.",
    icon: "monitor",
    badge: "Форматы",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что входит в эдит</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Каждый ролик — это ручная работа с вниманием к каждому кадру
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "film" && "🎬"}
                    {feature.icon === "clock" && "⏱️"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "palette" && "🎨"}
                    {feature.icon === "type" && "✍️"}
                    {feature.icon === "monitor" && "📱"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

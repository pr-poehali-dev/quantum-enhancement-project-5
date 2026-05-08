import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов к крутому эдиту?</h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Ролик до 1 минуты — от 1390₽. Монтаж в After Effects, сдача за 24–48 часов.
          </p>
          <p className="text-lg text-red-400 font-semibold mb-10">
            Напиши прямо сейчас — первый ответ в течение часа.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              onClick={() => window.open("https://t.me/hanzi77", "_blank")}
            >
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Смотреть работы
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

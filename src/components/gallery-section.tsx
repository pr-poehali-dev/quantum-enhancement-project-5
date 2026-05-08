export function GallerySection() {
  const shots = [
    {
      url: "https://cdn.poehali.dev/files/e0fb7fa5-7032-4ccc-8361-8784d0ef08ad.jpeg",
      label: "Динамичный эдит",
    },
    {
      url: "https://cdn.poehali.dev/files/a1ceeefa-bb4b-4fbf-9d32-7ee81303f52d.jpeg",
      label: "Атмосферный монтаж",
    },
    {
      url: "https://cdn.poehali.dev/files/4da9701d-95c2-4445-8ade-56728d6fe566.jpeg",
      label: "Кинематографичный кадр",
    },
    {
      url: "https://cdn.poehali.dev/files/70c47eab-a3b9-4fd6-b9b6-aeb158d5c6ef.png",
      label: "Vintage / ретро стиль",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Примеры работ</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Кадры из реальных эдитов — каждый сделан вручную в After Effects
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {shots.map((shot, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={shot.url}
                alt={shot.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-geist text-sm font-semibold">{shot.label}</span>
                </div>
              </div>
              <div className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => window.open("https://t.me/hanzi77", "_blank")}
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-geist font-semibold px-8 py-3 rounded-md transition-all duration-200 text-base"
          >
            Больше работ в Telegram →
          </button>
        </div>
      </div>
    </section>
  )
}

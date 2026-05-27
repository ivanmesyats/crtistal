import React from "react";
import { Phone, MapPin, Instagram, MessageCircle, Clock, Trophy, CalendarDays, Tent, GraduationCap } from "lucide-react";

export default function BusinessCardWebsite() {
  return (
    <main className="min-h-screen bg-[#f5f7ef] px-5 py-8 text-[#12351f]">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative overflow-hidden bg-[#12351f] p-8 text-white md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f5d66b]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

            <div className="relative z-10">
              <p className="mb-5 inline-block rounded-full bg-[#f5d66b] px-4 py-2 text-sm font-black uppercase tracking-wide text-[#12351f]">
                Дитячий футбольний клуб
              </p>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                CRYSTAL UNITED
              </h1>

              <p className="mt-5 text-2xl font-bold text-[#f5d66b]">
                Перше тренування — БЕЗКОШТОВНО!
              </p>

              <p className="mt-6 text-lg text-green-50">
                Футбольні тренування для дітей від 5 до 12 років. Розвиваємо техніку, дисципліну, командний дух і любов до гри.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+380732791099"
                  className="rounded-2xl bg-[#f5d66b] px-6 py-4 text-center font-black text-[#12351f] transition hover:bg-yellow-300"
                >
                  Подзвонити
                </a>
                <a
                  href="https://t.me/crystal_united"
                  className="rounded-2xl border border-white/25 px-6 py-4 text-center font-bold transition hover:bg-white/10"
                >
                  Записатися в Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-black">Про клуб</h2>
            <p className="mt-4 text-neutral-600">
              CRYSTAL UNITED — дитячий футбольний клуб, де діти тренуються в дружній атмосфері під керівництвом ліцензованого тренера.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f5f7ef] p-5">
                <CalendarDays className="mb-3 h-7 w-7 text-[#1f6b3a]" />
                <h3 className="font-black">Вік</h3>
                <p className="mt-2 text-neutral-700">від 5 до 12 років</p>
              </div>

              <div className="rounded-2xl bg-[#f5f7ef] p-5">
                <Trophy className="mb-3 h-7 w-7 text-[#1f6b3a]" />
                <h3 className="font-black">Чемпіонати</h3>
                <p className="mt-2 text-neutral-700">участь у турнірах</p>
              </div>

              <div className="rounded-2xl bg-[#f5f7ef] p-5">
                <Clock className="mb-3 h-7 w-7 text-[#1f6b3a]" />
                <h3 className="font-black">Тренування</h3>
                <p className="mt-2 text-neutral-700">3 рази на тиждень</p>
              </div>

              <div className="rounded-2xl bg-[#f5f7ef] p-5">
                <Tent className="mb-3 h-7 w-7 text-[#1f6b3a]" />
                <h3 className="font-black">Збори</h3>
                <p className="mt-2 text-neutral-700">футбольні збори</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#f5f7ef] p-5">
              <h3 className="flex items-center gap-3 font-black">
                <GraduationCap className="h-6 w-6 text-[#1f6b3a]" /> Ліцензований тренер
              </h3>
            </div>

            <div className="mt-8 rounded-2xl bg-[#12351f] p-6 text-white">
              <h3 className="text-xl font-black">Запис за телефоном</h3>
              <div className="mt-4 space-y-3 text-green-50">
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#f5d66b]" /> +38 073 279 10 99, Дмитро</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#f5d66b]" /> Київ, Україна</p>
                <p className="flex items-center gap-3"><Instagram className="h-5 w-5 text-[#f5d66b]" /> @crystal.united</p>
                <p className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-[#f5d66b]" /> t.me/crystal_united</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl rounded-[2rem] bg-white p-8 shadow-2xl md:p-12">
        <p className="inline-block rounded-full bg-[#f5d66b] px-4 py-2 text-sm font-black uppercase tracking-wide text-[#12351f]">
          Партнери
        </p>

        <h2 className="mt-4 text-4xl font-black text-[#12351f]">
          Наші партнери
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://jakosport.com.ua/uk?srsltid=AfmBOora0krZLggsUJuZDvw2pCsIOQQ2m3nSa6VGrNZ4JLUSdJWztvmC"
            target="_blank"
            className="rounded-2xl bg-[#f5f7ef] p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">🤝</div>
            <h3 className="mt-4 text-xl font-black">JACO</h3>
          </a>

          <a
            href="https://ksm-group.ua"
            target="_blank"
            className="rounded-2xl bg-[#f5f7ef] p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">🏗️</div>
            <h3 className="mt-4 text-xl font-black">KSM GROUP</h3>
          </a>

          <a
            href="https://dus-level.com/about-us"
            target="_blank"
            className="rounded-2xl bg-[#f5f7ef] p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">⚙️</div>
            <h3 className="mt-4 text-xl font-black">DUS LEVEL</h3>
          </a>

          <div className="rounded-2xl bg-[#f5f7ef] p-6">
            <div className="text-3xl">🏢</div>
            <h3 className="mt-4 text-xl font-black">МЕГАТЕХСЕРВІС</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import { createRoot } from "react-dom/client";
import {
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Clock,
  Trophy,
  CalendarDays,
  Tent,
  GraduationCap,
} from "lucide-react";
import "./style.css";

const partners = [
  ["JAKO", "/images/jaco_logo.png", "https://jakosport.com.ua/uk"],
  ["KSM GROUP", "/images/ksm_logo.png", "https://ksm-group.ua"],
  ["FANREKO", "/images/fanreko_logo.png", "https://fanreko.com"],
  ["МЕГАТЕХСЕРВІС", "/images/megateh_logo.png", "#"],
  ["ARTAN", "/images/artan_logo.png", "https://www.artan-gur.com/"],
];

function BusinessCardWebsite() {
  return (
    <main className="page">
      <section className="card">
        <div className="hero">
          <div className="glow glow-one" />
          <div className="glow glow-two" />

          <div className="hero-content">
            <p className="badge">Дитячий футбольний клуб</p>

            <h1>CRYSTAL UNITED</h1>

            <p className="free">Перше тренування — БЕЗКОШТОВНО!</p>

            <p className="description">
              Футбольні тренування для дітей від 4 до 13 років. Розвиваємо техніку,
              дисципліну, командний дух і любов до гри.
            </p>

            <div className="actions">
              <a className="primary" href="tel:+380732791099">
                Подзвонити
              </a>
              <a className="secondary" href="https://t.me/crystal_united" target="_blank" rel="noreferrer">
                Записатися в Telegram
              </a>
            </div>
          </div>

          <img
            src="/images/crystal_logo.png"
            alt="Crystal United Logo"
            className="hero-logo"
          />
        </div>

        <section className="section about-section">
          <h2>Про клуб</h2>
          <p className="section-text">
            CRYSTAL UNITED — дитячий футбольний клуб, де діти тренуються в дружній
            атмосфері під керівництвом ліцензованого тренера.
          </p>

          <div className="features">
            <div className="feature">
              <CalendarDays />
              <b>Вік</b>
              <span>від 4 до 13 років</span>
            </div>

            <div className="feature">
              <Trophy />
              <b>Чемпіонати</b>
              <span>участь у турнірах</span>
            </div>

            <div className="feature">
              <Clock />
              <b>Тренування</b>
              <span>3 рази на тиждень</span>
            </div>

            <div className="feature">
              <Tent />
              <b>Збори</b>
              <span>футбольні збори</span>
            </div>
          </div>

          <div className="coach">
            <GraduationCap />
            <b>Ліцензований тренер</b>
          </div>

          <div className="contacts">
            <h3>Запис за телефоном</h3>
            <p><Phone /> +38 073 279 10 99, Дмитро</p>
            <p><MapPin /> Київ, Україна</p>
            <p><Instagram /> @crystal.united</p>
            <p><MessageCircle /> t.me/crystal_united</p>
          </div>
        </section>
      </section>

      <section className="partners-strip">
        <p className="badge">Партнери</p>
        <h2>Наші партнери</h2>

        <div className="partners-logos">
          {partners.map(([name, logo, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="partner-card">
              <img src={logo} alt={name} className="partner-logo-small" />
              <h3>{name}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<BusinessCardWebsite />);

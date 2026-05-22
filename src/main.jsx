import React from 'react'
import ReactDOM from 'react-dom/client'
import { Phone, MapPin, Instagram, MessageCircle, Trophy, Clock, Tent, GraduationCap } from 'lucide-react'
import './style.css'

function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="hero">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="content">
            <div className="logo">⚽</div>
            <p className="badge">Дитячий футбольний клуб</p>
            <h1>CRYSTAL UNITED</h1>
            <p className="free">Перше тренування — БЕЗКОШТОВНО!</p>
            <p className="description">
              Футбольні тренування для дітей від 5 до 12 років.
              Розвиваємо техніку, дисципліну, командний дух і любов до гри.
            </p>

            <div className="actions">
              <a className="primary" href="tel:+380732791099">Подзвонити</a>
              <a className="secondary" href="https://t.me/crystal_united" target="_blank" rel="noreferrer">
                Записатися
              </a>
            </div>
          </div>
        </div>

        <div className="info">
          <h2>Про клуб</h2>
          <p className="text">
            CRYSTAL UNITED — дитячий футбольний клуб, де діти тренуються в дружній атмосфері
            під керівництвом ліцензованого тренера.
          </p>

          <div className="features">
            <div className="feature"><Trophy /><b>Чемпіонати</b><span>участь у турнірах</span></div>
            <div className="feature"><Clock /><b>3 тренування</b><span>на тиждень</span></div>
            <div className="feature"><Tent /><b>Збори</b><span>футбольні збори</span></div>
            <div className="feature"><GraduationCap /><b>Тренер</b><span>ліцензований</span></div>
          </div>

          <div className="contacts">
            <h3>Запис за телефоном</h3>
            <p><Phone /> +38 073 279 10 99, Дмитро</p>
            <p><MapPin /> Київ, Україна</p>
            <p><Instagram /> @crystal.united</p>
            <p><MessageCircle /> t.me/crystal_united</p>
          </div>
        </div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

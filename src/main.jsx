import React from 'react'
import { createRoot } from 'react-dom/client'
import { Phone, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react'
import './style.css'

function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="hero">
          <p className="badge">Детская футбольная академия</p>
          <h1>Football Academy Kyiv</h1>
          <p className="lead">
            Тренировки по футболу для детей 4–14 лет. Помогаем ребёнку развить технику,
            дисциплину, уверенность и любовь к игре.
          </p>
          <div className="buttons">
            <a className="btn primary" href="tel:+380667771897">Позвонить</a>
            <a className="btn secondary" href="https://t.me/" target="_blank" rel="noreferrer">Написать в Telegram</a>
          </div>
        </div>

        <div className="content">
          <h2>О нас</h2>
          <p>
            Мы проводим групповые и индивидуальные тренировки для детей разного уровня подготовки.
            Занятия проходят в дружеской атмосфере под руководством внимательных тренеров.
          </p>

          <div className="box">
            <h3>Что предлагаем</h3>
            <ul>
              <li>тренировки для детей 4–14 лет</li>
              <li>пробное занятие</li>
              <li>группы по возрасту и уровню</li>
              <li>индивидуальные тренировки</li>
            </ul>
          </div>

          <div className="box">
            <h3>Контакты</h3>
            <p className="contact"><Phone size={20} /> +380 66 777 18 97</p>
            <p className="contact"><MapPin size={20} /> Киев, Украина</p>
            <p className="contact"><Clock size={20} /> Пн–Сб: 09:00–20:00</p>
            <p className="contact"><Instagram size={20} /> Instagram</p>
            <p className="contact"><MessageCircle size={20} /> Telegram / Viber</p>
          </div>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)

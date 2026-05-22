import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main className="wrapper">
      <div className="card">
        <span className="badge">Football Academy</span>
        <h1>Football Academy Kyiv</h1>
        <p>
          Тренировки по футболу для детей 4–14 лет.
          Современный подход, опытные тренеры и дружеская атмосфера.
        </p>

        <div className="buttons">
          <a href="tel:+380667771897">Позвонить</a>
          <a href="https://t.me/" target="_blank">Telegram</a>
        </div>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

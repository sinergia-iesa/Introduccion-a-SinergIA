import { useMemo, useState } from 'react'
import { presentations } from '../data/presentations.js'
import PresentationCard from './PresentationCard.jsx'
import './presentations.css'

export default function PresentationsSection() {
  const [query, setQuery] = useState('')

  // Filtra pero nunca reordena: el orden visible siempre respeta el
  // orden en el que las presentaciones están escritas en presentations.js
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return presentations
    return presentations.filter((p) =>
      `${p.title} ${p.category} ${p.description}`.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <section id="presentaciones" className="presentations">
      <div className="wrap">
        <div className="presentations__head">
          <div>
            <h2>Presentaciones</h2>
            <p>Explora el material del curso, en el orden en que se fue dando.</p>
          </div>

          <label className="presentations__search">
            <span className="sr-only">Buscar presentación</span>
            <input
              type="search"
              placeholder="Buscar por título o tema…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {results.length > 0 ? (
          <div className="presentations__grid">
            {results.map((p) => (
              <PresentationCard key={p.slug} presentation={p} />
            ))}
          </div>
        ) : (
          <p className="presentations__empty">
            No hay presentaciones que coincidan con “{query}”.
          </p>
        )}
      </div>
    </section>
  )
}

import { withBase } from '../utils/paths'

export default function PresentationCard({ presentation }) {
  return (
    <a className="p-card" href={withBase(`presentations/${presentation.slug}/`)}>
      <div className="p-card__thumb">
        <img src={withBase(presentation.thumbnail)} alt="" />
      </div>
      <div className="p-card__body">
        <span className="p-card__category">{presentation.category}</span>
        <h3 className="p-card__title">{presentation.title}</h3>
        <p className="p-card__desc">{presentation.description}</p>
        <span className="p-card__link">Explorar presentación</span>
      </div>
    </a>
  )
}

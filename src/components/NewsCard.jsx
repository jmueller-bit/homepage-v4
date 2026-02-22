import { Link } from 'react-router-dom'
import { formatDate } from '../services/contentfulMapper'
import './NewsCard.css'

function NewsCard({ article }) {
  const { title, slug, excerpt, category, publishDate, image } = article

  const categoryColors = {
    'Allgemein': 'var(--primary-green)',
    'News': 'var(--primary-green)',
    'Event': 'var(--orange)',
    'Veranstaltung': 'var(--orange)',
    'Info': 'var(--teal)',
    'Wichtig': 'var(--red)',
    'Projekt': 'var(--purple)'
  }

  const categoryColor = categoryColors[category] || 'var(--primary-green)'

  return (
    <article className="news-card glass">
      {image?.url && (
        <div className="news-card-image">
          <img src={image.url} alt={image.title || title} loading="lazy" />
          <span
            className="news-card-category"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
        </div>
      )}

      <div className="news-card-content">
        {!image?.url && (
          <span
            className="news-card-category-badge"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
        )}

        <time className="news-card-date" dateTime={publishDate?.toISOString()}>
          {formatDate(publishDate)}
        </time>

        <h3 className="news-card-title">
          <Link to={`/schulleben/news/${slug}`}>{title}</Link>
        </h3>

        <p className="news-card-excerpt">{excerpt}</p>

        <Link to={`/schulleben/news/${slug}`} className="news-card-link">
          Weiterlesen →
        </Link>
      </div>
    </article>
  )
}

export default NewsCard

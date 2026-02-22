import { useParams, Link } from 'react-router-dom'
import { useNewsArticle } from '../hooks/useNewsArticle'
import { formatDate } from '../services/contentfulMapper'
import NewsError from '../components/NewsError'
import './NewsDetail.css'

function NewsDetail() {
  const { slug } = useParams()
  const { article, loading, error, refresh } = useNewsArticle(slug)

  if (error) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <NewsError message={error} onRetry={refresh} />
          <div className="back-link-container">
            <Link to="/schulleben/news" className="back-link">
              ← Zurück zu allen News
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <div className="news-detail-skeleton glass">
            <div className="skeleton skeleton-breadcrumb"></div>
            <div className="skeleton skeleton-title-large"></div>
            <div className="skeleton skeleton-meta"></div>
            <div className="skeleton skeleton-image-large"></div>
            <div className="skeleton skeleton-paragraph"></div>
            <div className="skeleton skeleton-paragraph"></div>
            <div className="skeleton skeleton-paragraph short"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <div className="news-empty glass">
            <div className="news-empty-icon">🔍</div>
            <h3>Artikel nicht gefunden</h3>
            <p>Der angeforderte Artikel existiert nicht oder wurde entfernt.</p>
          </div>
          <div className="back-link-container">
            <Link to="/schulleben/news" className="back-link">
              ← Zurück zu allen News
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const { title, excerpt, content, category, publishDate, author, image } = article

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

  const renderContent = (content) => {
    if (!content) return null

    if (typeof content === 'string') {
      return <div className="article-body">{content}</div>
    }

    if (content.nodeType === 'document' && content.content) {
      return (
        <div className="article-body">
          {content.content.map((node, index) => renderNode(node, index))}
        </div>
      )
    }

    return null
  }

  const renderNode = (node, index) => {
    if (!node) return null

    switch (node.nodeType) {
      case 'paragraph':
        return (
          <p key={index}>
            {node.content?.map((child, i) => renderInlineNode(child, i))}
          </p>
        )
      case 'heading-1':
        return <h1 key={index}>{node.content?.map((child, i) => renderInlineNode(child, i))}</h1>
      case 'heading-2':
        return <h2 key={index}>{node.content?.map((child, i) => renderInlineNode(child, i))}</h2>
      case 'heading-3':
        return <h3 key={index}>{node.content?.map((child, i) => renderInlineNode(child, i))}</h3>
      case 'unordered-list':
        return (
          <ul key={index}>
            {node.content?.map((item, i) => (
              <li key={i}>{item.content?.map((child, j) => renderInlineNode(child, j))}</li>
            ))}
          </ul>
        )
      case 'ordered-list':
        return (
          <ol key={index}>
            {node.content?.map((item, i) => (
              <li key={i}>{item.content?.map((child, j) => renderInlineNode(child, j))}</li>
            ))}
          </ol>
        )
      case 'embedded-asset-block':
        if (node.data?.target?.fields?.file) {
          const file = node.data.target.fields.file
          return (
            <figure key={index} className="article-image">
              <img src={`https:${file.url}`} alt={node.data.target.fields.title || ''} />
              {node.data.target.fields.description && (
                <figcaption>{node.data.target.fields.description}</figcaption>
              )}
            </figure>
          )
        }
        return null
      default:
        return null
    }
  }

  const renderInlineNode = (node, index) => {
    if (!node) return null

    switch (node.nodeType) {
      case 'text': {
        let text = node.value
        if (node.marks) {
          node.marks.forEach(mark => {
            if (mark.type === 'bold') text = <strong key={index}>{text}</strong>
            if (mark.type === 'italic') text = <em key={index}>{text}</em>
            if (mark.type === 'underline') text = <u key={index}>{text}</u>
          })
        }
        return text
      }
      case 'hyperlink': {
        const hyperlinkContent = node.content?.map((child, i) => renderInlineNode(child, i))
        return (
          <a key={index} href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {hyperlinkContent}
          </a>
        )
      }
      default:
        return null
    }
  }

  return (
    <div className="news-detail-page">
      <article className="news-article">
        <div className="container">
          <nav className="article-breadcrumb">
            <Link to="/schulleben">Schulleben</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/schulleben/news">News</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{title}</span>
          </nav>

          <header className="article-header">
            <span
              className="article-category"
              style={{ backgroundColor: categoryColor }}
            >
              {category}
            </span>

            <h1>{title}</h1>

            <div className="article-meta">
              <time dateTime={publishDate?.toISOString()}>
                {formatDate(publishDate)}
              </time>
              <span className="meta-separator">•</span>
              <span className="article-author">Von {author}</span>
            </div>

            {excerpt && <p className="article-excerpt">{excerpt}</p>}

            {image?.url && (
              <div className="article-hero-image">
                <img src={image.url} alt={image.title || title} />
              </div>
            )}
          </header>

          <div className="article-content-wrapper">
            <div className="article-main glass">
              {renderContent(content)}
            </div>

            <aside className="article-sidebar">
              <div className="sidebar-box glass">
                <h4>Teilen</h4>
                <div className="share-buttons">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn facebook"
                    aria-label="Auf Facebook teilen"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                    aria-label="Auf X teilen"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="share-btn copy"
                    aria-label="Link kopieren"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="sidebar-box glass">
                <h4>Newsletter</h4>
                <p>Bleiben Sie auf dem Laufenden!</p>
                <Link to="/eltern/services" className="btn btn-primary btn-small">
                  Anmelden
                </Link>
              </div>
            </aside>
          </div>

          <div className="back-link-container">
            <Link to="/schulleben/news" className="back-link">
              ← Zurück zu allen News
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default NewsDetail

import { useNewsArticles } from '../hooks/useNewsArticles'
import NewsCard from '../components/NewsCard'
import NewsSkeleton from '../components/NewsSkeleton'
import NewsError from '../components/NewsError'
import './News.css'

function News() {
  const { articles, loading, error, pagination, loadMore, refresh } = useNewsArticles(9)

  if (error) {
    return <NewsError message={error} onRetry={refresh} />
  }

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <h1>Aktuelles & News</h1>
          <p className="hero-subtitle">
            Bleiben Sie auf dem Laufenden über Neuigkeiten aus unserem Schulalltag
          </p>
        </div>
      </section>

      <section className="news-content section">
        <div className="container">
          {loading && articles.length === 0 ? (
            <NewsSkeleton count={9} />
          ) : articles.length === 0 ? (
            <div className="news-empty glass">
              <div className="news-empty-icon">📰</div>
              <h3>Keine News vorhanden</h3>
              <p>Derzeit sind keine News veröffentlicht.</p>
              <p className="news-empty-hint">
                Sobald neue Artikel in Contentful veröffentlicht werden, erscheinen sie hier automatisch.
              </p>
            </div>
          ) : (
            <>
              <div className="news-grid">
                {articles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              {pagination.hasMore && (
                <div className="news-load-more">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="btn btn-outline"
                  >
                    {loading ? 'Wird geladen...' : 'Mehr laden'}
                  </button>
                </div>
              )}
            </>
          )}

          {loading && articles.length > 0 && (
            <div className="news-loading-more">
              <div className="loading-spinner"></div>
              <span>Weitere Artikel werden geladen...</span>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default News

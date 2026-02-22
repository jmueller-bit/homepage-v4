import './NewsError.css'

function NewsError({ message, onRetry }) {
  return (
    <div className="news-error glass">
      <div className="news-error-icon">⚠️</div>
      <h3>Ein Fehler ist aufgetreten</h3>
      <p>{message || 'Die News konnten nicht geladen werden.'}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary">
          Erneut versuchen
        </button>
      )}
    </div>
  )
}

export default NewsError

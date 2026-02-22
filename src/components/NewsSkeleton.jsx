import './NewsSkeleton.css'

function NewsSkeleton({ count = 6 }) {
  return (
    <div className="news-skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="news-skeleton-card glass">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton skeleton-badge"></div>
            <div className="skeleton skeleton-date"></div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsSkeleton

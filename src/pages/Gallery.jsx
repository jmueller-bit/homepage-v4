import { useState, useEffect } from 'react';
import { getGalleryImages } from '../services/contentful';
import './PageTemplate.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const galleryImages = await getGalleryImages();
        setImages(galleryImages);
        setLoading(false);
      } catch (err) {
        setError('Fehler beim Laden der Galerie');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  if (loading) {
    return (
      <div className="page-template">
        <section className="page-hero">
          <div className="container">
            <h1>Galerie</h1>
            <p className="hero-subtitle">Laden...</p>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-template">
        <section className="page-hero">
          <div className="container">
            <h1>Galerie</h1>
            <p className="hero-subtitle error">{error}</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Galerie</h1>
          <p className="hero-subtitle">
            Ein Blick in unseren Schulalltag
          </p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          {images.length === 0 ? (
            <div className="glass info-box">
              <h3>Derzeit sind keine Bilder verfügbar</h3>
              <p>Sobald neue Bilder hinzugefügt werden, erscheinen sie hier automatisch.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-title">{image.title}</span>
                    <span className="gallery-category">{image.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-nav lightbox-prev" onClick={showPrev}>
            ←
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
            />
            <div className="lightbox-caption">
              <h3>{images[selectedImage].title}</h3>
              <p>{images[selectedImage].category}</p>
              {images[selectedImage].description && (
                <p className="lightbox-description">
                  {images[selectedImage].description}
                </p>
              )}
            </div>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={showNext}>
            →
          </button>

          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;

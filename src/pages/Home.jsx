import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="hero-content container">
          <div className="hero-text glass fade-in">
            <h1>Astrid Lindgren Schule</h1>
            <p className="hero-subtitle">Zentrum für ganzheitliches Lernen</p>
            <p className="hero-desc">
              Eine reformpädagogische Schule mit Öffentlichkeitsrecht für Kinder von 6-15 Jahren. 
              Wir begleiten jedes Kind auf seinem individuellen Bildungsweg.
            </p>
            <div className="hero-buttons">
              <Link to="/eltern/interessiert" className="btn btn-primary">
                Kontakt aufnehmen
              </Link>
              <Link to="/schule" className="btn btn-outline">
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="hero-image floating">
            <div className="hero-card glass">
              <span className="hero-emoji">🌟</span>
              <p>"Jedes Kind ist hoch begabt, wir müssen es nur erkennen."</p>
              <cite>— Gerald Hüther, Neurobiologe</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass">
              <span className="stat-number">1.-9.</span>
              <span className="stat-label">Schulstufe</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">30</span>
              <span className="stat-label">Max. Schüler</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">7:1</span>
              <span className="stat-label">Betreuungsschlüssel</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">✓</span>
              <span className="stat-label">Öffentlichkeitsrecht</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current News */}
      <section className="news-section section">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: 'var(--red)' }}>Aktuelles</h2>
          </div>
          <div className="news-grid">
            <div className="news-card glass">
              <span className="news-date">13. Jänner 2026</span>
              <h4>Info-Zoom</h4>
              <p>Um 18:00 Uhr findet ein Online-Info-Abend statt.</p>
              <a href="#" className="news-link">Zoom-Link →</a>
            </div>
            <div className="news-card glass">
              <span className="news-date">5. März 2026</span>
              <h4>Tag der offenen Tür</h4>
              <p>Von 14:30 bis 17:00 Uhr im Astrid Lindgren Zentrum</p>
              <Link to="/kontakt" className="news-link">Anmelden →</Link>
            </div>
            <div className="news-card glass">
              <span className="news-tag">Suchen</span>
              <h4>Zivildiener gesucht</h4>
              <p>Ab September 2026 freuen wir uns auf Bewerbungen!</p>
              <Link to="/karriere" className="news-link">Mehr infos →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2>Was uns auszeichnet</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'var(--primary-green)' }}>📚</div>
              <h3>Reformpädagogik</h3>
              <p>Ganzheitlicher Ansatz mit Fokus auf individuelle Stärken jedes Kindes.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'var(--orange)' }}>🎯</div>
              <h3>Individuelles Lernen</h3>
              <p>Selbstbestimmtes Lernen mit persönlichem Tempo und eigenen Zielen.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'var(--purple)' }}>🤝</div>
              <h3>Projektarbeit</h3>
              <p>Realitätsnahe Projekte mit praktischem Bezug zur Lebenswelt.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'var(--teal)' }}>🍎</div>
              <h3>Verpflegung</h3>
              <p>Frisch gekochte Jause und Mittagessen inklusive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Levels */}
      <section className="levels-section section">
        <div className="container">
          <div className="section-header">
            <h2>Unsere Schulstufen</h2>
          </div>
          <div className="levels-grid">
            <div className="level-card glass" style={{ borderTop: '4px solid var(--yellow-green)' }}>
              <h3>Primaria I</h3>
              <span className="level-range">1.-4. Schulstufe</span>
              <p>Spielerisches Lernen mit Fokus auf Grundkompetenzen</p>
            </div>
            <div className="level-card glass" style={{ borderTop: '4px solid var(--primary-green)' }}>
              <h3>Primaria II</h3>
              <span className="level-range">5.-6. Schulstufe</span>
              <p>Vertiefung und Vorbereitung auf die Sekundarstufe</p>
            </div>
            <div className="level-card glass" style={{ borderTop: '4px solid var(--teal)' }}>
              <h3>Sekundaria</h3>
              <span className="level-range">7.-9. Schulstufe</span>
              <p>Abschluss der Pflichtschule mit individueller Förderung</p>
            </div>
            <div className="level-card glass" style={{ borderTop: '4px solid var(--purple)' }}>
              <h3>Kolleg</h3>
              <span className="level-range">10.+ Schulstufe</span>
              <p>Weiterführende Bildungsmöglichkeiten</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-card glass">
            <h2>Interessiert?</h2>
            <p>Vereinbaren Sie einen individuellen Termin für einen Schnuppertag!</p>
            <div className="cta-buttons">
              <Link to="/kontakt" className="btn btn-primary">Kontaktieren Sie uns</Link>
              <Link to="/eltern/interessiert" className="btn btn-secondary">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

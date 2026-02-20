import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sections = [
  { path: '/karriere/arbeiten', title: 'Arbeiten im ALZ' },
  { path: '/karriere/stellen', title: 'Offene Stellen' },
  { path: '/karriere/praktikum', title: 'Praktikum & Hospitanz' },
  { path: '/karriere/initiativ', title: 'Initiativbewerbung' },
];

function Karriere() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Karriere</h1>
          <p className="hero-subtitle">Arbeiten Sie mit uns zusammen - werden Sie Teil des ALZ-Teams</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Karriere am Astrid Lindgren Zentrum</h2>
              <p>
                Wir suchen engagierte Pädagog:innen und Unterstützer:innen, die 
                unsere reformpädagogische Vision teilen. Bei uns arbeiten Sie in 
                kleinen Teams mit hoher Eigenverantwortung.
              </p>
              
              <div className="feature-cards">
                <div className="feature-card glass">
                  <h4>Offene Stellen</h4>
                  <p>Aktuelle Jobangebote und Positionen.</p>
                  <Link to="/karriere/stellen" className="btn btn-primary" style={{marginTop: '10px'}}>Zu den Stellen</Link>
                </div>
                <div className="feature-card glass">
                  <h4>Praktikum & Hospitanz</h4>
                  <p>Erfahren Sie unser Konzept praktisch.</p>
                  <Link to="/karriere/praktikum" className="btn btn-primary" style={{marginTop: '10px'}}>Mehr erfahren</Link>
                </div>
                <div className="feature-card glass">
                  <h4>Initiativbewerbung</h4>
                  <p>Sie möchten Teil unseres Teams werden?</p>
                  <Link to="/karriere/initiativ" className="btn btn-primary" style={{marginTop: '10px'}}>Bewerben</Link>
                </div>
                <div className="feature-card glass">
                  <h4>Arbeiten im ALZ</h4>
                  <p>Unsere Arbeitskultur und Werte.</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Bereiche</h4>
                {sections.map((section) => (
                  <Link key={section.path} to={section.path} className="sidebar-link">
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass">
                <h4>Kontakt</h4>
                <p>Fragen zur Karriere?</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Karriere;

import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sections = [
  { path: '/schulleben/news', title: 'Aktuelles & News' },
  { path: '/schulleben/projekte', title: 'Projekte & Aktivitäten' },
  { path: '/schulleben/galerie', title: 'Galerie' },
  { path: '/schulleben/veranstaltungen', title: 'Veranstaltungen' },
  { path: '/schulleben/erfolge', title: 'Erfolgsgeschichten' },
];

function Schulleben() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Schulleben</h1>
          <p className="hero-subtitle">Aktivitäten, Projekte und das Leben an unserer Schule</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Lebendiges Schulleben</h2>
              <p>
                Das Astrid Lindgren Zentrum ist mehr als eine Schule - es ist eine Gemeinschaft. 
                Hier erfahren Sie alles über unsere Projekte, Veranstaltungen und das alltägliche Leben bei uns.
              </p>
              
              <div className="feature-cards">
                <div className="feature-card glass">
                  <h4>Aktuelles & News</h4>
                  <p>Neuigkeiten, Blog-Beiträge und unser Newsletter-Archiv.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Projekte & Aktivitäten</h4>
                  <p>Aktuelle Projekte, Ausflüge, Reisen und Workshops.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Galerie</h4>
                  <p>Fotos, Videos und Schüler:innen-Arbeiten.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Veranstaltungen</h4>
                  <p>Termine, Feste und Feiern im Überblick.</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Navigation</h4>
                {sections.map((section) => (
                  <Link key={section.path} to={section.path} className="sidebar-link">
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass">
                <h4>Newsletter</h4>
                <p>Bleiben Sie informiert!</p>
                <button className="btn btn-primary">Anmelden</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schulleben;

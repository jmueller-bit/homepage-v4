import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sections = [
  { path: '/unterstuetzen/warum', title: 'Warum unterstützen?' },
  { path: '/unterstuetzen/spenden', title: 'Spenden' },
  { path: '/unterstuetzen/verein', title: 'Verein "Freunde des ALZ"' },
  { path: '/unterstuetzen/sachspenden', title: 'Sachspenden & Volunteering' },
  { path: '/unterstuetzen/sponsoring', title: 'Unternehmen & Sponsoring' },
];

function Unterstuetzen() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Unterstützen</h1>
          <p className="hero-subtitle">Helfen Sie uns, Kindern eine besondere Bildungswelt zu bieten</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Werden Sie Teil unserer Gemeinschaft</h2>
              <p>
                Das Astrid Lindgren Zentrum lebt von der Unterstützung durch Eltern, 
                Ehemalige und Freunde. Mit Ihrem Beitrag ermöglichen Sie besondere 
                Projekte und eine qualitativ hochwertige Ausstattung.
              </p>
              
              <div className="feature-cards">
                <div className="feature-card glass">
                  <h4>Spenden</h4>
                  <p>Einmalige Spenden, Fördermitgliedschaft oder Patenschaften.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Verein "Freunde des ALZ"</h4>
                  <p>Werden Sie Mitglied und unterstützen Sie uns langfristig.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Sachspenden</h4>
                  <p>Materialien, Bücher oder Ausstattung für unsere Schule.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Sponsoring</h4>
                  <p>Unternehmen können uns durch Kooperationen unterstützen.</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Möglichkeiten</h4>
                {sections.map((section) => (
                  <Link key={section.path} to={section.path} className="sidebar-link">
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass" style={{borderTop: '4px solid var(--orange)'}}>
                <h4>Jetzt spenden</h4>
                <p>Jeder Beitrag zählt!</p>
                <button className="btn btn-secondary">Spenden</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Unterstuetzen;

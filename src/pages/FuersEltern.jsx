import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sections = [
  { path: '/eltern/interessiert', title: 'Interessiert?' },
  { path: '/eltern/anmeldung', title: 'Anmeldung & Kosten' },
  { path: '/eltern/services', title: 'Eltern-Services' },
  { path: '/eltern/mitwirkung', title: 'Elternmitwirkung' },
  { path: '/eltern/organisatorisches', title: 'Organisatorisches' },
  { path: '/eltern/rechtliches', title: 'Rechtliches' },
];

function FuersEltern() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Für Eltern</h1>
          <p className="hero-subtitle">Alles Wichtige für Familien rund um unsere Schule</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Willkommen bei den Eltern-Ressourcen</h2>
              <p>
                Hier finden Sie alle wichtigen Informationen für Eltern unserer Schüler:innen. 
                Von der Anmeldung bis zu unseren Eltern-Services - wir begleiten Sie gerne.
              </p>
              
              <div className="feature-cards">
                <div className="feature-card glass">
                  <h4>Interessiert?</h4>
                  <p>Ist unsere Schule passend für Ihr Kind? Erfahren Sie mehr über unser Konzept.</p>
                  <Link to="/eltern/interessiert" className="btn btn-primary" style={{marginTop: '10px'}}>Mehr erfahren</Link>
                </div>
                <div className="feature-card glass">
                  <h4>Anmeldung & Kosten</h4>
                  <p>Informationen zu Anmeldeformular, Kostenübersicht und Finanzierungsmöglichkeiten.</p>
                  <Link to="/eltern/anmeldung" className="btn btn-primary" style={{marginTop: '10px'}}>Mehr erfahren</Link>
                </div>
                <div className="feature-card glass">
                  <h4>Eltern-Services</h4>
                  <p>Zugang zum Elternportal, Schulkalender, Ferienplan und mehr.</p>
                  <Link to="/eltern/services" className="btn btn-primary" style={{marginTop: '10px'}}>Zum Portal</Link>
                </div>
                <div className="feature-card glass">
                  <h4>Organisatorisches</h4>
                  <p>Bring- & Abholzeiten, Verpflegung, Schul-ABC und Notfallkontakte.</p>
                  <Link to="/eltern/organisatorisches" className="btn btn-primary" style={{marginTop: '10px'}}>Mehr erfahren</Link>
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
                <h4>Noch Fragen?</h4>
                <p>Wir helfen Ihnen gerne weiter!</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FuersEltern;

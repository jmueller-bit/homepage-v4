import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sections = [
  { path: '/schule/paedagogik', title: 'Pädagogisches Konzept' },
  { path: '/schule/schulstufen', title: 'Schulstufen' },
  { path: '/schule/tagesablauf', title: 'Tagesablauf' },
  { path: '/schule/raeume', title: 'Räumlichkeiten' },
  { path: '/schule/downloads', title: 'Downloads' },
];

const pädagogikItems = [
  { title: 'Bildungsphilosophie', desc: 'Unsere Vision von ganzheitlicher Bildung' },
  { title: 'Reformpädagogischer Ansatz', desc: 'Tradition und Innovation' },
  { title: 'Individuelles Lernen', desc: 'Jedes Kind lernt in seinem Tempo' },
  { title: 'Projektarbeit & Praxisbezug', desc: 'Lernen durch praktische Projekte' },
];

function Schule() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Unsere Schule</h1>
          <p className="hero-subtitle">Ganzheitliches Lernen mit reformpädagogischem Ansatz</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Pädagogisches Konzept</h2>
              <p>
                Das Astrid Lindgren Zentrum ist eine reformpädagogische Schule mit Öffentlichkeitsrecht. 
                Wir begleiten Kinder von der 1. bis zur 9. Schulstufe auf ihrem individuellen Bildungsweg.
              </p>
              <div className="feature-cards">
                {pädagogikItems.map((item, index) => (
                  <div key={index} className="feature-card glass">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
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
                <h4>Interessiert?</h4>
                <p>Vereinbaren Sie einen Schnuppertag!</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schule;

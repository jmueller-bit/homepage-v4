import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sections = [
  { path: '/ueber-uns/vision', title: 'Unsere Vision' },
  { path: '/ueber-uns/team', title: 'Unser Team' },
  { path: '/ueber-uns/qualitaet', title: 'Qualität & Auszeichnungen' },
  { path: '/ueber-uns/netzwerk', title: 'Netzwerk & Partner' },
];

function UeberUns() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Über uns</h1>
          <p className="hero-subtitle">Das Astrid Lindgren Zentrum - Geschichte, Vision und Team</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Über das Astrid Lindgren Zentrum</h2>
              <p>
                Benannt nach der berühmten schwedischen Kinderbuchautorin Astrid Lindgren 
                steht unser Zentrum für ganzheitliches Lernen und reformpädagogische Werte.
              </p>
              <p>
                Seit unserer Gründung begleiten wir Kinder auf ihrem individuellen Bildungsweg 
                und schaffen eine Lernumgebung, in der jedes Kind seine Talente entdecken und entwickeln kann.
              </p>
              
              <div className="feature-cards">
                <div className="feature-card glass">
                  <h4>Unsere Vision</h4>
                  <p>Geschichte, Gründung und unser Leitbild.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Unser Team</h4>
                  <p>Pädagog:innen, Geschäftsführung und mehr.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Qualität & Auszeichnungen</h4>
                  <p>Öffentlichkeitsrecht, Zertifizierungen und Presse.</p>
                </div>
                <div className="feature-card glass">
                  <h4>Netzwerk & Partner</h4>
                  <p>Kooperationen und Unterstützer:innen.</p>
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
                <h4>Kontakt</h4>
                <p>Wir freuen uns auf Sie!</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UeberUns;

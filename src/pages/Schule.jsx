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

const schulstufen = [
  { id: 'vorschule', title: 'Vorschule', age: '4-6 Jahre', desc: 'Spielend lernen und entdecken' },
  { id: 'stufe1', title: '1. Schulstufe', age: '6-7 Jahre', desc: 'Erste Schritte ins Lernen' },
  { id: 'stufe2', title: '2. Schulstufe', age: '7-8 Jahre', desc: 'Grundlagen festigen' },
  { id: 'stufe3', title: '3. Schulstufe', age: '8-9 Jahre', desc: 'Selbstständigkeit fördern' },
  { id: 'stufe4', title: '4. Schulstufe', age: '9-10 Jahre', desc: 'Projektorientiertes Lernen' },
  { id: 'stufe5-6', title: '5.-6. Schulstufe', age: '10-12 Jahre', desc: 'Vertieftes Verständnis' },
  { id: 'stufe7-8', title: '7.-8. Schulstufe', age: '12-14 Jahre', desc: 'Individuelle Förderung' },
  { id: 'stufe9', title: '9. Schulstufe', age: '14-15 Jahre', desc: 'Abschluss vorbereiten' },
];

const tagesablauf = [
  { time: '07:30', activity: 'Betreuung beginnt' },
  { time: '08:00', activity: 'Beginn des Unterrichts' },
  { time: '10:00', activity: 'Pause mit Obst & Getränken' },
  { time: '10:30', activity: 'Unterricht' },
  { time: '12:00', activity: 'Mittagessen' },
  { time: '13:00', activity: 'Nachmittagsunterricht / AGs' },
  { time: '15:30', activity: 'Ende der Regularstunden' },
  { time: '17:00', activity: 'Späte Betreuung (optional)' },
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

              <h2 style={{ marginTop: '3rem' }}>Schulstufen im Überblick</h2>
              <p>Klicken Sie auf eine Schulstufe, um mehr zu erfahren.</p>
              <div className="schulstufen-grid">
                {schulstufen.map((stufe) => (
                  <Link key={stufe.id} to={`/schule/schulstufen#${stufe.id}`} className="schulstufe-card glass">
                    <h4>{stufe.title}</h4>
                    <span className="age">{stufe.age}</span>
                    <p>{stufe.desc}</p>
                  </Link>
                ))}
              </div>

              <h2 style={{ marginTop: '3rem' }}>Ein typischer Tag</h2>
              <p>Unser Tagesablauf bietet Struktur und Raum für individuelle Entfaltung.</p>
              <div className="tagesablauf-table glass">
                <table>
                  <thead>
                    <tr>
                      <th>Uhrzeit</th>
                      <th>Aktivität</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tagesablauf.map((item, index) => (
                      <tr key={index}>
                        <td className="time">{item.time}</td>
                        <td>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

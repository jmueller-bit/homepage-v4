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

function ElternOrganisatorisches() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Organisatorisches</h1>
          <p className="hero-subtitle">Wichtige Informationen zum Schulalltag</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Informationen & Dokumente</h2>
              <p>
                Hier finden Sie alle organisatorischen Informationen rund um den Schulalltag, 
                von Bring- und Abholzeiten bis hin zu wichtigen Kontakten und Formularen.
              </p>

              <div className="info-sections" style={{ marginTop: '30px' }}>
                <div className="info-block" style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>📋 Dokumente & Formulare</h3>
                  <p style={{ marginBottom: '20px' }}>
                    Alle wichtigen Formulare und organisatorischen Dokumente finden Sie in unserer Dokumentenbibliothek:
                  </p>
                  <Link to="/eltern/services" className="btn btn-primary">
                    Zu den Downloads →
                  </Link>
                </div>

                <div className="info-block" style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>🕐 Schulzeiten</h3>
                  <ul style={{ lineHeight: '1.8', color: '#555' }}>
                    <li><strong>Schulbeginn:</strong> 08:00 Uhr</li>
                    <li><strong>Schulende:</strong> 15:30 Uhr (Regularunterricht)</li>
                    <li><strong>Morgenbetreuung:</strong> ab 07:30 Uhr</li>
                    <li><strong>Nachmittagsbetreuung:</strong> bis 17:00 Uhr</li>
                  </ul>
                </div>

                <div className="info-block" style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>🍽️ Verpflegung</h3>
                  <p style={{ lineHeight: '1.6', color: '#555' }}>
                    In unserer Schule wird täglich frisch gekocht. Das Mittagessen ist im Schulgeld 
                    inkludiert. Bei Allergien oder Unverträglichkeiten sprechen Sie uns bitte an.
                  </p>
                </div>

                <div className="info-block" style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>🚌 Anfahrt</h3>
                  <p style={{ lineHeight: '1.6', color: '#555' }}>
                    <strong>Adresse:</strong><br />
                    Astrid Lindgren Zentrum<br />
                    Breitenfurter Straße 401-413/1/R02<br />
                    1230 Wien<br /><br />
                    <strong>Öffentliche Verkehrsmittel:</strong><br />
                    • S-Bahn: Bahnhof Liesing<br />
                    • Straßenbahn: Linie 60<br />
                    • Bus: 60A, 253, 259, 354
                  </p>
                </div>

                <div className="info-block" style={{ 
                  background: 'rgba(199, 55, 41, 0.1)', 
                  padding: '20px', 
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--red)'
                }}>
                  <h3 style={{ color: 'var(--red)', marginBottom: '15px' }}>🚨 Notfallkontakte</h3>
                  <p style={{ lineHeight: '1.6', color: '#555' }}>
                    <strong>Schulbüro:</strong> <a href="tel:+4318874053">+43 1 887 40 53</a><br />
                    <strong>E-Mail:</strong> <a href="mailto:office@astrid-lindgren-zentrum.at">office@astrid-lindgren-zentrum.at</a><br /><br />
                    <em>Bei Notfällen außerhalb der Bürozeiten wenden Sie sich bitte an die erziehungsberechtigte Person, die in den Notfallkontakten hinterlegt ist.</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Navigation</h4>
                {sections.map((section) => (
                  <Link 
                    key={section.path} 
                    to={section.path} 
                    className={`sidebar-link ${section.path === '/eltern/organisatorisches' ? 'active' : ''}`}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass">
                <h4>Fragen?</h4>
                <p>Bei organisatorischen Fragen kontaktieren Sie uns gerne.</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElternOrganisatorisches;
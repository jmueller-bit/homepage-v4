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

function ElternAnmeldung() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Anmeldung</h1>
          <p className="hero-subtitle">Wir begleiten Sie und Ihr Kind auf dem Weg zu uns - Schritt für Schritt</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Informationen zur Anmeldung</h2>
              <p style={{ lineHeight: '1.7', marginBottom: '25px' }}>
                Die erste Kontaktaufnahme kann telefonisch, per E-Mail, an einem Tag der offenen Tür, 
                einem Informationsabend oder ähnlichem erfolgen.
              </p>
              <p style={{ lineHeight: '1.7', marginBottom: '30px' }}>
                Unsere Kontaktdaten finden Sie unten oder auf der <Link to="/kontakt">Kontaktseite</Link>.
              </p>

              <div className="info-highlight" style={{ 
                background: 'rgba(247, 166, 0, 0.1)', 
                padding: '25px', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--orange)',
                marginBottom: '40px'
              }}>
                <h3 style={{ color: 'var(--dark-gray)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                  Wichtige Information
                </h3>
                <p style={{ lineHeight: '1.7', color: '#555' }}>
                  Anmeldungen für das neue Schuljahr sind grundsätzlich <strong>bis März</strong> möglich. 
                  Nach Rücksprache ist auch eine Anmeldung im laufenden Schuljahr möglich.
                </p>
                <p style={{ marginTop: '15px', lineHeight: '1.7', color: '#555' }}>
                  Für ein Erstgespräch oder bei Interesse an einer Hospitation vereinbaren Sie bitte einen Termin.
                </p>
              </div>

              <h3 style={{ color: 'var(--primary-green)', marginBottom: '25px', marginTop: '40px' }}>
                Termine für Informationsveranstaltungen
              </h3>

              <div className="event-cards" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="event-card glass" style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '2rem' }}>🚪</span>
                    <h4 style={{ margin: 0, color: 'var(--primary-green)' }}>Tage der offenen Tür</h4>
                  </div>
                  <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>
                    Oktober und März - jeweils ein Tag im Schuljahr
                  </p>
                </div>

                <div className="event-card glass" style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '2rem' }}>ℹ️</span>
                    <h4 style={{ margin: 0, color: 'var(--primary-green)' }}>Info-Nachmittage</h4>
                  </div>
                  <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>
                    Regelmäßig im Schuljahr - Termine unter <Link to="/schulleben/news" style={{ color: 'var(--primary-green)' }}>Aktuelles</Link>
                  </p>
                </div>

                <div className="event-card glass" style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '2rem' }}>📅</span>
                    <h4 style={{ margin: 0, color: 'var(--primary-green)' }}>Persönliche Termine</h4>
                  </div>
                  <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>
                    Nach Vereinbarung für Erstgespräche und Hospitationen
                  </p>
                </div>
              </div>

              <div className="news-cta" style={{ marginTop: '30px', padding: '20px', background: 'rgba(94, 147, 69, 0.05)', borderRadius: '8px' }}>
                <p style={{ margin: 0, color: '#555' }}>
                  Aktuelle Termine finden Sie unter <Link to="/schulleben/news" style={{ color: 'var(--primary-green)', fontWeight: '600' }}>Aktuelles</Link>
                </p>
              </div>

              <div className="cta-section" style={{ 
                marginTop: '50px', 
                padding: '40px', 
                background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--teal) 100%)',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.5rem' }}>
                  Wir freuen uns auf Sie!
                </h3>
                <p style={{ marginBottom: '25px', opacity: 0.95, maxWidth: '500px', margin: '0 auto 25px' }}>
                  Beginnen Sie jetzt den Weg zu einer ganzheitlichen Bildung für Ihr Kind. 
                  Kontaktieren Sie uns für ein Erstgespräch.
                </p>
                <Link to="/kontakt" className="btn btn-primary" style={{ 
                  background: 'white', 
                  color: 'var(--primary-green)',
                  fontSize: '1.1rem',
                  padding: '15px 35px'
                }}>
                  Kontakt aufnehmen
                </Link>
              </div>

              <div className="back-link" style={{ marginTop: '40px', textAlign: 'center' }}>
                <Link to="/eltern" style={{ color: '#666', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  ← Zurück zur Eltern-Übersicht
                </Link>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Navigation</h4>
                {sections.map((section) => (
                  <Link 
                    key={section.path} 
                    to={section.path} 
                    className={`sidebar-link ${section.path === '/eltern/anmeldung' ? 'active' : ''}`}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass">
                <h4>Fragen zur Anmeldung?</h4>
                <p>Wir beraten Sie gerne persönlich zu unserem Aufnahmeprozess.</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>

              <div className="sidebar-contact glass" style={{ marginTop: '25px' }}>
                <h4>Schnellkontakt</h4>
                <p style={{ marginBottom: '8px' }}>
                  <a href="tel:+4318874053" style={{ color: 'var(--primary-green)' }}>+43 1 887 40 53</a>
                </p>
                <p>
                  <a href="mailto:office@astrid-lindgren-zentrum.at" style={{ color: 'var(--primary-green)' }}>office@astrid-lindgren-zentrum.at</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElternAnmeldung;
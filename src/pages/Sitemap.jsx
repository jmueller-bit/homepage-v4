import { Link } from 'react-router-dom';
import './PageTemplate.css';

const sitemapData = [
  {
    title: 'Hauptseiten',
    links: [
      { path: '/', label: 'Startseite' },
      { path: '/kontakt', label: 'Kontakt' },
    ]
  },
  {
    title: 'Unsere Schule',
    links: [
      { path: '/schule', label: 'Übersicht' },
      { path: '/schule/paedagogik', label: 'Pädagogisches Konzept' },
      { path: '/schule/schulstufen', label: 'Schulstufen' },
      { path: '/schule/tagesablauf', label: 'Tagesablauf' },
      { path: '/schule/raeume', label: 'Räumlichkeiten' },
      { path: '/schule/downloads', label: 'Downloads' },
    ]
  },
  {
    title: 'Für Eltern',
    links: [
      { path: '/eltern', label: 'Übersicht' },
      { path: '/eltern/interessiert', label: 'Interessiert?' },
      { path: '/eltern/anmeldung', label: 'Anmeldung & Kosten' },
      { path: '/eltern/services', label: 'Eltern-Services' },
      { path: '/eltern/mitwirkung', label: 'Elternmitwirkung' },
      { path: '/eltern/organisatorisches', label: 'Organisatorisches' },
      { path: '/eltern/rechtliches', label: 'Rechtliches' },
    ]
  },
  {
    title: 'Schulleben',
    links: [
      { path: '/schulleben', label: 'Übersicht' },
      { path: '/schulleben/news', label: 'Aktuelles & News' },
      { path: '/schulleben/galerie', label: 'Galerie' },
      { path: '/schulleben/projekte', label: 'Projekte & Aktivitäten' },
      { path: '/schulleben/veranstaltungen', label: 'Veranstaltungen' },
      { path: '/schulleben/erfolge', label: 'Erfolgsgeschichten' },
    ]
  },
  {
    title: 'Über uns',
    links: [
      { path: '/ueber-uns', label: 'Übersicht' },
      { path: '/ueber-uns/vision', label: 'Unsere Vision' },
      { path: '/ueber-uns/team', label: 'Unser Team' },
      { path: '/ueber-uns/qualitaet', label: 'Qualität & Auszeichnungen' },
      { path: '/ueber-uns/netzwerk', label: 'Netzwerk & Partner' },
    ]
  },
  {
    title: 'Unterstützen',
    links: [
      { path: '/unterstuetzen', label: 'Übersicht' },
      { path: '/unterstuetzen/warum', label: 'Warum unterstützen?' },
      { path: '/unterstuetzen/spenden', label: 'Spenden' },
      { path: '/unterstuetzen/verein', label: 'Verein "Freunde des ALZ"' },
      { path: '/unterstuetzen/sachspenden', label: 'Sachspenden & Volunteering' },
      { path: '/unterstuetzen/sponsoring', label: 'Unternehmen & Sponsoring' },
    ]
  },
  {
    title: 'Karriere',
    links: [
      { path: '/karriere', label: 'Übersicht' },
      { path: '/karriere/arbeiten', label: 'Arbeiten im ALZ' },
      { path: '/karriere/stellen', label: 'Offene Stellen' },
      { path: '/karriere/praktikum', label: 'Praktikum & Hospitanz' },
      { path: '/karriere/initiativ', label: 'Initiativbewerbung' },
    ]
  },
  {
    title: 'Rechtliches',
    links: [
      { path: '/impressum', label: 'Impressum' },
      { path: '/datenschutz', label: 'Datenschutz' },
      { path: '/sitemap', label: 'Sitemap' },
    ]
  },
];

function Sitemap() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Sitemap</h1>
          <p className="hero-subtitle">Übersicht aller Seiten der Website</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <p style={{ marginBottom: '40px', lineHeight: '1.7', color: '#555' }}>
                Hier finden Sie eine vollständige Übersicht aller Seiten unserer Website. 
                Klicken Sie auf einen Link, um direkt zur gewünschten Seite zu gelangen.
              </p>

              <div className="sitemap-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '30px' 
              }}>
                {sitemapData.map((section, index) => (
                  <div key={index} className="sitemap-section" style={{ marginBottom: '20px' }}>
                    <h3 style={{ 
                      color: 'var(--primary-green)', 
                      marginBottom: '15px', 
                      paddingBottom: '10px',
                      borderBottom: '2px solid var(--primary-green)',
                      fontSize: '1.2rem'
                    }}>
                      {section.title}
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0 
                    }}>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex} style={{ marginBottom: '10px' }}>
                          <Link 
                            to={link.path}
                            style={{ 
                              color: '#555', 
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              transition: 'all 0.2s ease',
                              padding: '5px 0'
                            }}
                            className="sitemap-link"
                          >
                            <span style={{ color: 'var(--primary-green)' }}>→</span>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="quick-access" style={{ 
                marginTop: '50px', 
                padding: '30px', 
                background: 'rgba(94, 147, 69, 0.05)', 
                borderRadius: '12px',
                borderLeft: '4px solid var(--primary-green)'
              }}>
                <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>
                  Schnellzugriff
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
                  <Link to="/eltern/anmeldung" className="btn btn-outline">Anmeldung</Link>
                  <Link to="/karriere/stellen" className="btn btn-outline">Offene Stellen</Link>
                  <Link to="/schulleben/news" className="btn btn-outline">News</Link>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-cta glass">
                <h4>Hilfe benötigt?</h4>
                <p>Sie können die gewünschte Seite nicht finden?</p>
                <Link to="/kontakt" className="btn btn-primary">Kontaktieren Sie uns</Link>
              </div>

              <div className="sidebar-menu glass" style={{ marginTop: '25px' }}>
                <h4>Rechtliches</h4>
                <Link to="/impressum" className="sidebar-link">Impressum</Link>
                <Link to="/datenschutz" className="sidebar-link">Datenschutz</Link>
                <Link to="/sitemap" className="sidebar-link active">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sitemap;
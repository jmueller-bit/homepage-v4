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

function ElternServices() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Eltern-Services</h1>
          <p className="hero-subtitle">Downloads, Formulare und wichtige Dokumente</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Dokumente & Downloads</h2>
              <p>
                Hier finden Sie alle wichtigen Formulare, Informationsblätter und Dokumente 
                für Eltern. Die Dateien können direkt im Browser angesehen oder heruntergeladen werden.
              </p>

              <div className="drive-embed-container" style={{ marginTop: '30px' }}>
                <div className="drive-notice" style={{ 
                  background: 'rgba(94, 147, 69, 0.1)', 
                  padding: '15px 20px', 
                  borderRadius: '8px',
                  marginBottom: '20px',
                  borderLeft: '4px solid var(--primary-green)'
                }}>
                  <p style={{ margin: 0, color: '#555' }}>
                    <strong>💡 Hinweis:</strong> Klicken Sie auf eine Datei, um sie anzusehen oder herunterzuladen. 
                    Mit einem Rechtsklick können Sie Dateien direkt speichern.
                  </p>
                </div>

                <iframe 
                  src="https://drive.google.com/embeddedfolderview?id=1nhQtCRS9mCaVTaD9kg6zXjoBv3UlllpH#list" 
                  style={{
                    width: '100%',
                    height: '600px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    background: 'white'
                  }}
                  frameBorder="0"
                  title="Eltern-Services Dokumente"
                ></iframe>
              </div>

              <div className="alternative-access" style={{ marginTop: '30px', padding: '20px', background: 'rgba(247, 166, 0, 0.1)', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px' }}>Direkter Zugriff</h3>
                <p style={{ marginBottom: '15px' }}>
                  Falls die Einblendung nicht funktioniert, können Sie auch direkt auf Google Drive zugreifen:
                </p>
                <a 
                  href="https://drive.google.com/drive/folders/1nhQtCRS9mCaVTaD9kg6zXjoBv3UlllpH?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Auf Google Drive öffnen →
                </a>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Navigation</h4>
                {sections.map((section) => (
                  <Link 
                    key={section.path} 
                    to={section.path} 
                    className={`sidebar-link ${section.path === '/eltern/services' ? 'active' : ''}`}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass">
                <h4>Fragen?</h4>
                <p>Bei Problemen mit den Downloads kontaktieren Sie uns gerne.</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElternServices;
import { Link } from 'react-router-dom';
import './PageTemplate.css';

function Impressum() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Impressum</h1>
          <p className="hero-subtitle">Rechtliche Informationen gemäß österreichischem Recht</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <div className="legal-content">
                <h2>Angaben gemäß §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und §25 Mediengesetz</h2>
                
                <div className="legal-section">
                  <h3>Verein</h3>
                  <p><strong>Astrid Lindgren Zentrum – Verein für Pädagogik und Kultur</strong></p>
                  <p>Breitenfurter Straße 401-413/1/R02</p>
                  <p>1230 Wien</p>
                  <p>Österreich</p>
                  
                  <div className="contact-details" style={{marginTop: '20px'}}>
                    <p><strong>Telefon:</strong> <a href="tel:+4318874053">+43 1 887 40 53</a></p>
                    <p><strong>Fax:</strong> +43 1 887 40 53</p>
                    <p><strong>E-Mail:</strong> <a href="mailto:office@astrid-lindgren-zentrum.at">office@astrid-lindgren-zentrum.at</a></p>
                    <p><strong>ZVR:</strong> 960385266</p>
                  </div>
                </div>

                <div className="legal-section">
                  <h3>Organschaftliche Vertreter</h3>
                  <ul>
                    <li><strong>Obmann:</strong> Inno Fail</li>
                    <li><strong>Kassiererin:</strong> Ilona Müller-Pflegerl</li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>Vereinszweck</h3>
                  <p>Der Verein bezweckt u.a. die Förderung, Bildung und Persönlichkeitsentwicklung von Kindern, Jugendlichen und Erwachsenen, die Verbreitung und Förderung reformpädagogischer Ansätze und des Modells des ganzheitlichen Lernens, sowie die Vermittlung von Kunst und Kreativität, die Förderung von Künstler_innen.</p>
                </div>

                <div className="legal-section">
                  <h3>Haftung für Inhalte</h3>
                  <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns, korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden.</p>
                  <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie, uns umgehend zu kontaktieren.</p>
                </div>

                <div className="legal-section">
                  <h3>Haftung für Links</h3>
                  <p>Unsere Webseite enthält Links zu anderen Webseiten, für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht gemäß §17 ECG für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
                </div>

                <div className="legal-section">
                  <h3>Urheberrecht</h3>
                  <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Jegliche Nutzung, Verwertung, Bearbeitung und Veränderung ist nur mit Zustimmung der Seitenurheberin bzw. des Seitenurhebers zulässig.</p>
                  <p><strong>Fotos:</strong> © Astrid Lindgren Zentrum</p>
                  <p><strong>Gestaltungsbilder:</strong> © Petra Lehner (<a href="https://www.lehnerdesign.at" target="_blank" rel="noopener noreferrer">www.lehnerdesign.at</a>)</p>
                  <p><strong>Website Layout:</strong> Petra Lehner</p>
                </div>

                <div className="legal-section">
                  <h3>Datenschutz</h3>
                  <p>Informationen zum Datenschutz finden Sie auf unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Rechtliches</h4>
                <Link to="/impressum" className="sidebar-link active">Impressum</Link>
                <Link to="/datenschutz" className="sidebar-link">Datenschutz</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impressum;
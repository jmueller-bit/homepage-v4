import { Link } from 'react-router-dom';
import './PageTemplate.css';

function Kontakt() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Kontakt</h1>
          <p className="hero-subtitle">Wir freuen uns auf Ihre Nachricht oder Ihren Anruf</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Schreiben Sie uns</h2>
              <p>
                Haben Sie Fragen zu unserer Schule, möchten Sie einen Termin vereinbaren 
                oder brauchen Sie weitere Informationen? Wir freuen uns auf Ihre Kontaktaufnahme!
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Ihr Name" />
                </div>
                <div className="form-group">
                  <label>E-Mail</label>
                  <input type="email" placeholder="Ihre E-Mail-Adresse" />
                </div>
                <div className="form-group">
                  <label>Telefon</label>
                  <input type="tel" placeholder="Ihre Telefonnummer" />
                </div>
                <div className="form-group">
                  <label>Nachricht</label>
                  <textarea placeholder="Ihre Nachricht" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Absenden</button>
              </form>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Kontaktmöglichkeiten</h4>
                
                <div className="contact-info">
                  <h5>Adresse</h5>
                  <p><strong>Astrid Lindgren Zentrum</strong><br/>
                  Breitenfurter Straße 401-413/1/R02<br/>
                  1230 Wien</p>
                  <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#666'}}>
                    Der Eingang befindet sich an der Breitenfurter Straße fast unter dem Aquädukt (an der Ecke), neben dem Städtischen Kindergarten.
                  </p>
                </div>

                <div className="contact-info">
                  <h5>Anfahrt</h5>
                  <ul style={{marginLeft: '20px', fontSize: '0.9rem', color: '#555'}}>
                    <li>S-Bahn: Bahnhof Liesing</li>
                    <li>Straßenbahn: Linie 60</li>
                    <li>Bus: 60A, 253, 259, 354</li>
                  </ul>
                  <p style={{marginTop: '10px'}}>
                    <a href="https://goo.gl/maps/vqLKaruzByQ2" target="_blank" rel="noopener noreferrer">Google Maps →</a>
                  </p>
                </div>

                <div className="contact-info">
                  <h5>Telefon & Fax</h5>
                  <p><a href="tel:+4318874053">+43 1 887 40 53</a></p>
                </div>

                <div className="contact-info">
                  <h5>E-Mail</h5>
                  <p><a href="mailto:office@astrid-lindgren-zentrum.at">office@astrid-lindgren-zentrum.at</a></p>
                </div>

                <div className="contact-info">
                  <h5>Vereinsregisternummer</h5>
                  <p>ZVR: 960385266</p>
                </div>
              </div>

              <div className="sidebar-cta glass">
                <h4>Quick Links</h4>
                <Link to="/eltern/interessiert" className="sidebar-link">Interessiert?</Link>
                <Link to="/karriere" className="sidebar-link">Offene Stellen</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kontakt;

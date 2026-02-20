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
                  <p>123 Liesing Bahnhofplatz<br/>1230 Wien</p>
                </div>

                <div className="contact-info">
                  <h5>Telefon</h5>
                  <p><a href="tel:+4318874053">+43 1 887 40 53</a></p>
                </div>

                <div className="contact-info">
                  <h5>E-Mail</h5>
                  <p><a href="mailto:office@astrid-lindgren-zentrum.at">office@astrid-lindgren-zentrum.at</a></p>
                </div>

                <div className="contact-info">
                  <h5>Öffnungszeiten Büro</h5>
                  <p>Mo - Fr: 8:00 - 14:00</p>
                </div>
              </div>

              <div className="sidebar-cta glass">
                <h4>Quick Links</h4>
                <Link to="/eltern/interessiert" className="sidebar-link">Interessiert?</Link>
                <Link to="/karriere/stellen" className="sidebar-link">Offene Stellen</Link>
                <Link to="/anfrage" className="sidebar-link">Schnuppertag anfragen</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kontakt;

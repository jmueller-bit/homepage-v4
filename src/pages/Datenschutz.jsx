import { Link } from 'react-router-dom';
import './PageTemplate.css';

function Datenschutz() {
  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Datenschutzerklärung</h1>
          <p className="hero-subtitle">Informationen zum Datenschutz nach DSGVO</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <div className="legal-content">
                <h2>Einleitung und Überblick</h2>
                <p>Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir als Verantwortliche verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.</p>

                <div className="legal-section">
                  <h3>Anwendungsbereich</h3>
                  <p>Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Der Anwendungsbereich umfasst:</p>
                  <ul>
                    <li>Alle Onlineauftritte (Websites), die wir betreiben</li>
                    <li>Social Media Auftritte und E-Mail-Kommunikation</li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>Kontaktdaten des Verantwortlichen</h3>
                  <p><strong>Astrid Lindgren Zentrum</strong><br />
                  Breitenfurter Straße 401-413/1, R02<br />
                  1230 Wien<br />
                  Österreich<br />
                  E-Mail: <a href="mailto:office@astrid-lindgren-zentrum.at">office@astrid-lindgren-zentrum.at</a></p>
                </div>

                <div className="legal-section">
                  <h3>Rechtsgrundlagen</h3>
                  <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
                  <ul>
                    <li><strong>Einwilligung</strong> (Art. 6 Abs. 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten.</li>
                    <li><strong>Vertrag</strong> (Art. 6 Abs. 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen.</li>
                    <li><strong>Rechtliche Verpflichtung</strong> (Art. 6 Abs. 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen.</li>
                    <li><strong>Berechtigte Interessen</strong> (Art. 6 Abs. 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken.</li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>Ihre Rechte laut DSGVO</h3>
                  <p>Laut Artikel 13-22 DSGVO stehen Ihnen folgende Rechte zu:</p>
                  <ul>
                    <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Information über gespeicherte Daten</li>
                    <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Korrektur falscher Daten</li>
                    <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): "Recht auf Vergessenwerden"</li>
                    <li><strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO): Einschränkung der Verarbeitung</li>
                    <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Daten in maschinenlesbarem Format</li>
                    <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Widerspruch gegen Datenverarbeitung</li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>Kommunikation</h3>
                  <p>Wenn Sie mit uns Kontakt aufnehmen (Telefon, E-Mail, Online-Formular), verarbeiten wir folgende Daten:</p>
                  <ul>
                    <li>Name, E-Mail-Adresse, Telefonnummer</li>
                    <li>Eingegebene Formulardaten</li>
                    <li>Inhalt Ihrer Anfrage</li>
                  </ul>
                  <p><strong>Zweck:</strong> Abwicklung der Kommunikation mit Kunden und Interessenten</p>
                  <p><strong>Speicherdauer:</strong> Dauer des Geschäftsfalls und der gesetzlichen Vorschriften</p>
                  <p><strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a, b und f DSGVO</p>
                </div>

                <div className="legal-section">
                  <h3>Cookies</h3>
                  <p>Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern. Ein Cookie ist eine kleine Textdatei, die im Browser gespeichert wird.</p>
                  
                  <h4>Arten von Cookies:</h4>
                  <ul>
                    <li><strong>Notwendige Cookies:</strong> Erforderlich für grundlegende Funktionen</li>
                    <li><strong>Funktionale Cookies:</strong> Erleichtern die Bedienung (z.B. gespeicherte Formulardaten)</li>
                    <li><strong>Analyse-Cookies:</strong> Verwendung von Google Analytics</li>
                  </ul>
                  
                  <p><strong>Cookie-Einstellungen:</strong> Sie können Cookies in Ihren Browser-Einstellungen verwalten oder löschen.</p>
                </div>

                <div className="legal-section">
                  <h3>Google Analytics</h3>
                  <p>Wir verwenden Google Analytics, um das Nutzerverhalten anonym zu analysieren und unser Angebot zu verbessern.</p>
                  <ul>
                    <li><strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</li>
                    <li><strong>Verarbeitete Daten:</strong> IP-Adresse (anonymisiert), Browsertyp, verwendetes Gerät, besuchte Seiten, Verweildauer</li>
                    <li><strong>Speicherdauer:</strong> 14 Monate</li>
                    <li><strong>Opt-out:</strong> Sie können die Erfassung durch Google Analytics verhindern, indem Sie das <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">Browser-Add-on zur Deaktivierung von Google Analytics</a> installieren.</li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>TLS-Verschlüsselung mit https</h3>
                  <p>Wir verwenden HTTPS (Hypertext Transfer Protocol Secure), um Daten abhörsicher im Internet zu übertragen. Die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver ist abgesichert.</p>
                  <p>Sie erkennen die verschlüsselte Verbindung am Schloss-Symbol in der Adresszeile Ihres Browsers.</p>
                </div>

                <div className="legal-section">
                  <h3>Webhosting</h3>
                  <p>Unsere Website wird bei Vercel gehostet. Beim Besuch werden automatisch folgende Daten gespeichert:</p>
                  <ul>
                    <li>IP-Adresse (anonymisiert)</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Browsertyp und -version</li>
                    <li>Betriebssystem</li>
                    <li>Referrer URL</li>
                  </ul>
                  <p><strong>Speicherdauer:</strong> 2 Wochen, danach automatische Löschung</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                </div>

                <div className="legal-section">
                  <h3>Datenschutzbehörde</h3>
                  <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Datenschutzbehörde beschweren:</p>
                  <p><strong>Österreichische Datenschutzbehörde</strong><br />
                  Barichgasse 40-42<br />
                  1030 Wien<br />
                  Telefon: +43 1 52 152-0<br />
                  E-Mail: dsb@dsb.gv.at<br />
                  Web: <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a></p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Rechtliches</h4>
                <Link to="/impressum" className="sidebar-link">Impressum</Link>
                <Link to="/datenschutz" className="sidebar-link active">Datenschutz</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Datenschutz;
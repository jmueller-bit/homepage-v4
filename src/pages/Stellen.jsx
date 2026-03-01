import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getStellenAngebote } from '../services/contentful';
import './PageTemplate.css';

function Initiativbewerbung() {
  return <Navigate to="/kontakt" replace />;
}

function Stellen() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await getStellenAngebote();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error('Error loading jobs:', err);
        setError('Fehler beim Laden der Stellenangebote');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Offene Stellen</h1>
          <p className="hero-subtitle">Werden Sie Teil unseres Teams. Wir freuen uns auf Ihre Bewerbung!</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              {loading && (
                <div className="loading-state">
                  <p>Stellenangebote werden geladen...</p>
                </div>
              )}

              {error && (
                <div className="error-state">
                  <p>{error}</p>
                </div>
              )}

              {!loading && !error && jobs.length === 0 && (
                <div className="no-jobs">
                  <p>Aktuell sind keine offenen Stellen vorhanden.</p>
                  <div className="initiativ-cta" style={{ marginTop: '40px', padding: '30px', background: 'rgba(247, 166, 0, 0.1)', borderRadius: '12px' }}>
                    <h3>Keine passende Stelle gefunden?</h3>
                    <p>Wir freuen uns jederzeit über Ihre Initiativbewerbung. Werden Sie Teil unseres engagierten Teams!</p>
                    <Link to="/kontakt" className="btn btn-primary" style={{ marginTop: '15px' }}>Jetzt bewerben</Link>
                  </div>
                </div>
              )}

              {!loading && !error && jobs.length > 0 && (
                <div className="jobs-list">
                  {jobs.map((job) => (
                    <div key={job.id} className="job-card glass" style={{ marginBottom: '30px', padding: '30px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                        <h3 style={{ color: 'var(--primary-green)', margin: 0 }}>{job.title}</h3>
                        <span className="job-type" style={{ 
                          background: 'var(--primary-yellow)', 
                          padding: '5px 15px', 
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          {job.type}
                        </span>
                      </div>
                      
                      {job.department && (
                        <p style={{ color: '#666', marginBottom: '10px' }}>
                          <strong>Abteilung:</strong> {job.department}
                        </p>
                      )}
                      
                      <p style={{ color: '#666', marginBottom: '20px' }}>
                        <strong>Standort:</strong> {job.location}
                      </p>

                      {job.description && (
                        <div style={{ marginBottom: '20px' }}>
                          <h4 style={{ color: 'var(--primary-green)', marginBottom: '10px' }}>Aufgaben</h4>
                          <p style={{ lineHeight: '1.6' }}>{job.description}</p>
                        </div>
                      )}

                      {job.requirements && (
                        <div style={{ marginBottom: '20px' }}>
                          <h4 style={{ color: 'var(--primary-green)', marginBottom: '10px' }}>Anforderungen</h4>
                          <p style={{ lineHeight: '1.6' }}>{job.requirements}</p>
                        </div>
                      )}

                      {job.benefits && (
                        <div style={{ marginBottom: '20px' }}>
                          <h4 style={{ color: 'var(--primary-green)', marginBottom: '10px' }}>Wir bieten</h4>
                          <p style={{ lineHeight: '1.6' }}>{job.benefits}</p>
                        </div>
                      )}

                      <a 
                        href={`mailto:${job.contactEmail}?subject=Bewerbung: ${job.title}`}
                        className="btn btn-primary"
                        style={{ marginTop: '10px', display: 'inline-block' }}
                      >
                        Details & Bewerbung
                      </a>
                    </div>
                  ))}

                  <div className="initiativ-cta" style={{ marginTop: '40px', padding: '30px', background: 'rgba(247, 166, 0, 0.1)', borderRadius: '12px' }}>
                    <h3>Keine passende Stelle gefunden?</h3>
                    <p>Wir freuen uns jederzeit über Ihre Initiativbewerbung. Werden Sie Teil unseres engagierten Teams!</p>
                    <Link to="/kontakt" className="btn btn-primary" style={{ marginTop: '15px' }}>Jetzt bewerben</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Karriere-Bereiche</h4>
                <Link to="/karriere" className="sidebar-link">Übersicht</Link>
                <Link to="/karriere/arbeiten" className="sidebar-link">Arbeiten im ALZ</Link>
                <Link to="/karriere/stellen" className="sidebar-link active">Offene Stellen</Link>
                <Link to="/karriere/praktikum" className="sidebar-link">Praktikum & Hospitanz</Link>
              </div>

              <div className="sidebar-cta glass">
                <h4>Fragen?</h4>
                <p>Kontaktieren Sie uns für mehr Informationen zu unseren Stellenangeboten.</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Initiativbewerbung };
export default Stellen;
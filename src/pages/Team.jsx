import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTeamMembers } from '../services/contentful';
import './PageTemplate.css';

function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const members = await getTeamMembers();
        setTeam(members);
        setLoading(false);
      } catch (err) {
        setError('Fehler beim Laden der Team-Mitglieder');
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="page-template">
        <section className="page-hero">
          <div className="container">
            <h1>Unser Team</h1>
            <p className="hero-subtitle">Laden...</p>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-template">
        <section className="page-hero">
          <div className="container">
            <h1>Unser Team</h1>
            <p className="hero-subtitle error">{error}</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-template">
      <section className="page-hero">
        <div className="container">
          <h1>Unser Team</h1>
          <p className="hero-subtitle">
            Pädagog:innen, Geschäftsführung und alle, die das Astrid Lindgren Zentrum ausmachen
          </p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Das Team hinter dem Erfolg</h2>
              <p>
                Unser engagiertes Team aus erfahrenen Pädagog:innen und Mitarbeiter:innen 
                sorgt jeden Tag dafür, dass sich Kinder wohlfühlen und bestmöglich entwickeln können.
              </p>

              {team.length === 0 ? (
                <div className="info-box">
                  <p>Derzeit sind keine Team-Mitglieder verfügbar.</p>
                </div>
              ) : (
                <div className="team-grid">
                  {team.map((member) => (
                    <div key={member.id} className="team-card glass">
                      {member.photo && (
                        <div className="team-photo">
                          <img 
                            src={member.photo.url} 
                            alt={member.name}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="team-info">
                        <h3>{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        {member.bio && <p className="team-bio">{member.bio}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Über uns</h4>
                <Link to="/ueber-uns" className="sidebar-link">Übersicht</Link>
                <Link to="/ueber-uns/vision" className="sidebar-link">Unsere Vision</Link>
                <Link to="/ueber-uns/team" className="sidebar-link active">Unser Team</Link>
                <Link to="/ueber-uns/qualitaet" className="sidebar-link">Qualität</Link>
                <Link to="/ueber-uns/netzwerk" className="sidebar-link">Netzwerk</Link>
              </div>

              <div className="sidebar-cta glass">
                <h4>Werden Sie Teil des Teams</h4>
                <p>Wir suchen engagierte Pädagog:innen!</p>
                <Link to="/karriere" className="btn btn-primary">Karriere</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;

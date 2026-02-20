import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const navItems = [
  { path: '/schule', label: 'Unsere Schule', hasDropdown: true },
  { path: '/eltern', label: 'Für Eltern', hasDropdown: true },
  { path: '/schulleben', label: 'Schulleben', hasDropdown: true },
  { path: '/ueber-uns', label: 'Über uns', hasDropdown: true },
  { path: '/unterstuetzen', label: 'Unterstützen', hasDropdown: true },
  { path: '/karriere', label: 'Karriere', hasDropdown: true },
  { path: '/kontakt', label: 'Kontakt', hasDropdown: false },
];

const schoolDropdown = [
  { path: '/schule/paedagogik', label: 'Pädagogisches Konzept' },
  { path: '/schule/schulstufen', label: 'Schulstufen' },
  { path: '/schule/tagesablauf', label: 'Tagesablauf' },
  { path: '/schule/raeume', label: 'Räumlichkeiten' },
  { path: '/schule/downloads', label: 'Downloads' },
];

const elternDropdown = [
  { path: '/eltern/interessiert', label: 'Interessiert?' },
  { path: '/eltern/anmeldung', label: 'Anmeldung & Kosten' },
  { path: '/eltern/services', label: 'Eltern-Services' },
  { path: '/eltern/mitwirkung', label: 'Elternmitwirkung' },
  { path: '/eltern/organisatorisches', label: 'Organisatorisches' },
  { path: '/eltern/rechtliches', label: 'Rechtliches' },
];

const schullebenDropdown = [
  { path: '/schulleben/news', label: 'Aktuelles & News' },
  { path: '/schulleben/projekte', label: 'Projekte & Aktivitäten' },
  { path: '/schulleben/galerie', label: 'Galerie' },
  { path: '/schulleben/veranstaltungen', label: 'Veranstaltungen' },
  { path: '/schulleben/erfolge', label: 'Erfolgsgeschichten' },
];

const ueberUnsDropdown = [
  { path: '/ueber-uns/vision', label: 'Unsere Vision' },
  { path: '/ueber-uns/team', label: 'Unser Team' },
  { path: '/ueber-uns/qualitaet', label: 'Qualität & Auszeichnungen' },
  { path: '/ueber-uns/netzwerk', label: 'Netzwerk & Partner' },
];

const unterstuetzenDropdown = [
  { path: '/unterstuetzen/warum', label: 'Warum unterstützen?' },
  { path: '/unterstuetzen/spenden', label: 'Spenden' },
  { path: '/unterstuetzen/verein', label: 'Verein "Freunde des ALZ"' },
  { path: '/unterstuetzen/sachspenden', label: 'Sachspenden & Volunteering' },
  { path: '/unterstuetzen/sponsoring', label: 'Unternehmen & Sponsoring' },
];

const karriereDropdown = [
  { path: '/karriere/arbeiten', label: 'Arbeiten im ALZ' },
  { path: '/karriere/stellen', label: 'Offene Stellen' },
  { path: '/karriere/praktikum', label: 'Praktikum & Hospitanz' },
  { path: '/karriere/initiativ', label: 'Initiativbewerbung' },
];

const dropdowns = {
  '/schule': schoolDropdown,
  '/eltern': elternDropdown,
  '/schulleben': schullebenDropdown,
  '/ueber-uns': ueberUnsDropdown,
  '/unterstuetzen': unterstuetzenDropdown,
  '/karriere': karriereDropdown,
};

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = (path) => {
    if (dropdowns[path]) {
      setActiveDropdown(path);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header glass-dark">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-text">
            <span className="logo-main">Astrid Lindgren</span>
            <span className="logo-sub">Zentrum</span>
          </div>
        </Link>

        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <div
              key={item.path}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item.path)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMobileMenu}
              >
                {item.label}
                {item.hasDropdown && <span className="dropdown-arrow">▾</span>}
              </NavLink>
              
              {item.hasDropdown && dropdowns[item.path] && (
                <div className={`dropdown glass ${activeDropdown === item.path ? 'dropdown-active' : ''}`}>
                  {dropdowns[item.path].map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

# ALZ Homepage - Seiten-Struktur & Status

**Projekt:** Astrid Lindgren Zentrum Homepage v4  
**Letzte Aktualisierung:** Februar 2026  
**Repository:** jmueller-bit/homepage-v4

---

## Seiten-Struktur

```
homepage-v4/
└── alz-homepage/
    └── src/
        ├── pages/
        │   ├── Home.jsx                    ✅ Vollständig
        │   ├── Schule.jsx                  ⚠️  Nur Hauptseite
        │   ├── FuersEltern.jsx             ⚠️  Nur Hauptseite
        │   ├── Schulleben.jsx              ⚠️  Teilweise (News+Galerie)
        │   ├── UeberUns.jsx                ⚠️  Nur Hauptseite
        │   ├── Team.jsx                    ✅ Vollständig (Contentful)
        │   ├── Unterstuetzen.jsx           ⚠️  Nur Hauptseite
        │   ├── Karriere.jsx                ⚠️  Nur Hauptseite
        │   ├── Kontakt.jsx                 ✅ Aktualisiert
        │   ├── Gallery.jsx                 ✅ Vollständig (Contentful)
        │   ├── News.jsx                    ✅ Vollständig (Contentful)
        │   ├── NewsDetail.jsx              ✅ Vollständig
        │   ├── Impressum.jsx               ✅ Erstellt
        │   └── Datenschutz.jsx             ✅ Erstellt
        ├── components/
        │   ├── Header.jsx                  ✅ Alle Links definiert
        │   ├── Footer.jsx                  ⚠️  Links prüfen
        │   └── ...
        └── App.jsx                         ✅ Alle Routen
```

---

## Seiten-Status Detail

### ✅ Vollständige Seiten

| Seite | Route | Status | Content-Quelle |
|-------|-------|--------|----------------|
| **Home** | `/` | ✅ Fertig | Hardcoded |
| **Team** | `/ueber-uns/team` | ✅ Fertig | Contentful |
| **News** | `/schulleben/news` | ✅ Fertig | Contentful |
| **News Detail** | `/schulleben/news/:slug` | ✅ Fertig | Contentful |
| **Galerie** | `/schulleben/galerie` `/galerie` | ✅ Fertig | Contentful |
| **Kontakt** | `/kontakt` | ✅ Aktualisiert | Hardcoded |
| **Impressum** | `/impressum` | ✅ Erstellt | Hardcoded |
| **Datenschutz** | `/datenschutz` | ✅ Erstellt | Hardcoded |

### ⚠️ Fehlende Unterseiten

#### Schule (`/schule/*`)
- [ ] `/schule/paedagogik` - Pädagogisches Konzept
- [ ] `/schule/schulstufen` - Schulstufen  
- [ ] `/schule/tagesablauf` - Tagesablauf
- [ ] `/schule/raeume` - Räumlichkeiten
- [ ] `/schule/downloads` - Downloads

#### Für Eltern (`/eltern/*`)
- [ ] `/eltern/interessiert` - Interessiert? ⭐ **PRIORITÄT**
- [ ] `/eltern/anmeldung` - Anmeldung & Kosten ⭐ **PRIORITÄT**
- [ ] `/eltern/services` - Eltern-Services
- [ ] `/eltern/mitwirkung` - Elternmitwirkung
- [ ] `/eltern/organisatorisches` - Organisatorisches
- [ ] `/eltern/rechtliches` - Rechtliches

#### Über Uns (`/ueber-uns/*`)
- [ ] `/ueber-uns/vision` - Unsere Vision
- [ ] `/ueber-uns/qualitaet` - Qualität & Auszeichnungen
- [ ] `/ueber-uns/netzwerk` - Netzwerk & Partner
- [x] `/ueber-uns/team` - ✅ Vorhanden

#### Unterstützen (`/unterstuetzen/*`)
- [ ] `/unterstuetzen/warum` - Warum unterstützen?
- [ ] `/unterstuetzen/spenden` - Spenden
- [ ] `/unterstuetzen/verein` - Verein "Freunde des ALZ"
- [ ] `/unterstuetzen/sachspenden` - Sachspenden & Volunteering
- [ ] `/unterstuetzen/sponsoring` - Unternehmen & Sponsoring

#### Karriere (`/karriere/*`)
- [ ] `/karriere/arbeiten` - Arbeiten im ALZ
- [ ] `/karriere/stellen` - Offene Stellen
- [ ] `/karriere/praktikum` - Praktikum & Hospitanz
- [ ] `/karriere/initiativ` - Initiativbewerbung

#### Schulleben - Erweitert (`/schulleben/*`)
- [x] `/schulleben/news` - ✅ Vorhanden
- [x] `/schulleben/galerie` - ✅ Vorhanden
- [ ] `/schulleben/projekte` - Projekte & Aktivitäten
- [ ] `/schulleben/veranstaltungen` - Veranstaltungen
- [ ] `/schulleben/erfolge` - Erfolgsgeschichten

---

## Header-Navigation

### Hauptmenü (7 Items)
1. **Unsere Schule** `/schule` (Dropdown: 5 Items)
2. **Für Eltern** `/eltern` (Dropdown: 6 Items)
3. **Schulleben** `/schulleben` (Dropdown: 5 Items)
4. **Über uns** `/ueber-uns` (Dropdown: 4 Items)
5. **Unterstützen** `/unterstuetzen` (Dropdown: 5 Items)
6. **Karriere** `/karriere` (Dropdown: 4 Items)
7. **Kontakt** `/kontakt` (Kein Dropdown)

### Footer-Links (Zu prüfen)
- [ ] Impressum → `/impressum` ✅
- [ ] Datenschutz → `/datenschutz` ✅
- [ ] Sitemap → `/sitemap` ⚠️ **Fehlt noch**

---

## Contentful-Integration

### Aktive Content-Types

| Content-Type | Seite | Status |
|--------------|-------|--------|
| `newsArtikel` | News, NewsDetail | ✅ Funktioniert |
| `teamMitglied` | Team | ✅ Funktioniert |
| `galleryImage` | Gallery | ✅ Funktioniert |

### Contentful-Feldnamen (Deutsch!)

**newsArtikel:**
- `titel` (nicht `title`)
- `slug`
- `datum` (nicht `publishDate`)
- `vorschautext` (nicht `excerpt`)
- `inhalt` (nicht `content`)
- `kategorie` (nicht `category`)
- `autor` (nicht `author`)
- `titelbild` (nicht `featuredImage`)

**teamMitglied:**
- `name`
- `funktion` (nicht `role`)
- `beschreibung` (nicht `bio`) - Rich Text!
- `foto` (nicht `photo`)
- `reihenfolge` (optional)

**galleryImage:**
- `titel`
- `bild` (nicht `image`)
- `beschreibung`
- `kategorie`
- `reihenfolge`

---

## Bekannte Probleme

### ✅ Behoben
- [x] Team-Mitglieder wurden nicht angezeigt (falsches Feld `photo` statt `foto`)
- [x] News-Artikel Fehler 422 (falscher Content-Type `newsArticle` statt `newsArtikel`)
- [x] News-Sortierung Fehler (feld `publishDate` statt `datum`)
- [x] Kontakt-Adresse war Platzhalter

### ⚠️ Noch zu tun
- [ ] Home: Zoom-Link Zeile 76 hat `href="#"` - braucht echten Link oder Entfernung
- [ ] Kontakt: Formular hat keinen Submit-Handler (nur HTML-Formular)
- [ ] Sitemap-Seite fehlt komplett
- [ ] Alle Unterseiten (siehe Liste oben)

---

## Prioritäten für nächste Schritte

### 🔴 Kritisch (Rechtlich erforderlich)
1. ✅ Impressum - Erstellt
2. ✅ Datenschutz - Erstellt

### 🟡 Hoch (Wichtig für Nutzer)
3. `/eltern/interessiert` - Haupt-Einstieg für neue Eltern
4. `/eltern/anmeldung` - Anmeldeinformationen
5. `/schule/paedagogik` - Kerngeschäft erklären

### 🟢 Mittel (Nice to have)
6. Weitere Schule-Unterseiten
7. Über Uns - Vision/Qualität/Netzwerk
8. Karriere-Unterseiten
9. Unterstützen-Bereich

---

## Technische Details

### Routing
- React Router v6 mit `BrowserRouter`
- Wildcard-Routen (`/*`) für Hauptkategorien
- Spezifische Routen vor Wildcards definieren

### Styling
- CSS-Variablen für ALZ-Farben
- Glassmorphism-Effekte
- Responsive Grid-Layouts

### Deployment
- Vercel Hosting
- Automatisches Deployment bei Git-Push
- Environment-Variablen für Contentful in Vercel

---

## Kontakt-Informationen (Aktuell)

**Astrid Lindgren Zentrum**  
Verein für Pädagogik und Kultur  
Breitenfurter Straße 401-413/1/R02  
1230 Wien  

**Telefon:** +43 1 887 40 53  
**E-Mail:** office@astrid-lindgren-zentrum.at  
**ZVR:** 960385266

**Anfahrt:**
- S-Bahn: Bahnhof Liesing
- Straßenbahn: Linie 60
- Bus: 60A, 253, 259, 354

**Eingang:** An der Breitenfurter Straße fast unter dem Aquädukt (an der Ecke), neben dem Städtischen Kindergarten.

---

## Letzte Änderungen

- **27.02.2026:** Team-Seite mit Modal-Design überarbeitet
- **27.02.2026:** ALZ Logo SVG erstellt und integriert
- **27.02.2026:** Contentful-Feldnamen korrigiert (deutsche Namen)
- **27.02.2026:** Impressum & Datenschutz erstellt
- **27.02.2026:** Kontakt-Seite mit echter Adresse aktualisiert

---

*Diese Dokumentation sollte regelmäßig aktualisiert werden, wenn neue Seiten erstellt oder bestehende geändert werden.*

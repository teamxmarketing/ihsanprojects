# Ihsanprojects – Initiative für Gesundheit und Bildung e.V.

Offizielle, maßgeschneiderte Website für die **Initiative für Gesundheit und Bildung e.V. (Ihsanprojects)** zur medizinischen Grundversorgung von Straßen- und Waisenkinder sowie bedürftigen Familien in Mbour, Senegal.

---

## Highlights der Website

- **Header-Video ohne Ton (Autoplay Loop):**
  - Original-Trailer `hero.mp4` (4K) direkt im Header integriert.
  - Automatischer, tonloser Endlos-Loop (`autoplay`, `loop`, `playsinline`, `muted`).
  - Optimiert mit HTTP Byte-Range Streaming im Server für nahtlose Ladezeiten.
- **Editorial NGO Design (Anti-AI Aesthetic):**
  - Klassisch-seriöses deutsches Stiftungslayout.
  - Typografie: *Newsreader* (Serif) & *Plus Jakarta Sans*.
  - Farbpalette: Deep Navy (`#0A1C2A`), Ocean Blue (`#20639B`), Senegal-Warmgold (`#D4A338`) und Naturweiß (`#FAFAF8`).
  - Authentische Fotodokumentation der Kinderpraxis und Solidarischen Apotheke in Mbour.
- **Interaktive Module:**
  - **4-Stufen-Versorgungskreislauf:** Visualisierung des Prozesses von Partnern über Behandlungscoupons bis zur Apotheke inkl. Infografik-Modal.
  - **Spendenrechner:** Spendenstufen (15 €, 35 €, 100 €) und freie Betragseingabe mit direkter Übergabe an das offizielle Twingle-Spendenformular.
  - **B2B / Partner-Anbindung:** Kooperationsbereich für internationale Hilfsorganisationen, Schulen und Waisenhäuser mit interaktivem Aufnahmeformular.
  - **Rechtssicherheit & Transparenz:** Vollständiges deutsches Impressum & Datenschutz (IWQ e.V., VR 25621 Hamburg), Bankverbindung (FINOM PAYMENTS IBAN & BIC) und Nachweise (BMW Group Award 2025, Initiative Transparente Zivilgesellschaft).

---

## Projektstruktur

```
├── index.html        # Semantische HTML5-Seitenstruktur mit interaktiven Modals
├── styles.css        # Modulares CSS-Designsystem (mobiloptimiert, responsive)
├── app.js            # Frontend-Logik (Muted Autoplay, Spendenrechner, Modals)
├── server.js         # Lokaler Node.js HTTP-Server mit MP4 Streaming-Unterstützung
├── assets/
│   ├── video/        # Optimiertes Header-Video (hero.mp4)
│   └── img/          # Logos, Grafiken & Originalfotos aus Mbour
├── Textbausteine/    # Verifizierte Quelltexte (PDFs)
├── Logo & Grafiken/  # Original-Vektoren & Bildmarken
└── Bilder & Video/   # Rohmaterialien & Fotodokumentation
```

---

## Lokaler Schnellstart

1. **Repository klonen:**
   ```bash
   git clone https://github.com/teamxmarketing/ihsanprojects.git
   cd ihsanprojects
   ```

2. **Server starten:**
   ```bash
   npm start
   ```

3. **Im Browser aufrufen:**
   `http://localhost:3000/`

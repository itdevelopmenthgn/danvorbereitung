# Dan-Vorbereitung - Judo 1. Dan

Ein umfassendes Ausbildungsprogramm zur Vorbereitung auf die Dan-Prüfung im Judo mit Fokus auf modularem Lernen.

## Projekt-Übersicht

Diese Webanwendung bietet ein strukturiertes Trainingsprogramm für die Vorbereitung auf den 1. Dan im Judo. Die Prüfung erfolgt in drei Modulen:

1. **Katame-Waza** (Bodentechniken) - Aktueller Schwerpunkt
2. **Nage-Waza** (Wurftechniken)
3. **Kata** (Formenlauf)

## Funktionen

### Aktuell implementiert (Mockup-Version)
- Dashboard mit Fortschrittsübersicht
- Modulare Navigation für alle 3 Prüfungsmodule
- Detaillierte Katame-Waza Sektion mit allen 24 Techniken
- Beispiel-Detailseite für Kesa-gatame mit:
  - Video-Platzhalter
  - Technische Beschreibung
  - Anwendung aus Standardsituationen
  - Übungsvarianten (Partner & Solo)
  - Trainingstipps
  - Prüfungsrelevante Details
- Wöchentlicher Trainingsplan (2x 90 min)
- Heimtrainingsplan (täglich 30 min)
- Fortschrittstracking
- Responsive Design

### Geplante Erweiterungen
- Video-Einbettung (YouTube/Vimeo) für alle Techniken
- Detailseiten für alle 24 Katame-Waza
- Detailseiten für alle 40 Nage-Waza (Gokyo-no-waza)
- Kata-Lernprogramm (Nage-no-kata / Ju-no-kata)
- Prüfungssimulator
- Fortschrittsdatenbank mit Login
- Video-Upload für eigene Techniken
- Feedback-System

## Installation & Start

### Lokale Nutzung
1. Alle Dateien in einen Ordner herunterladen
2. `index.html` im Browser öffnen
3. Fertig - keine Installation notwendig!

### Mit lokalem Server (empfohlen)
```bash
# Im Projektordner
python3 -m http.server 8000
# Oder mit Node.js
npx http-server
```

Dann im Browser: `http://localhost:8000`

## Dateistruktur

```
DanVorbereitung/
├── index.html          # Hauptseite mit allen Sektionen
├── styles.css          # Komplettes Styling
├── script.js           # Interaktivität & Navigation
├── FAHRPLAN.md         # Detaillierter Trainingsfahrplan
├── README.md           # Diese Datei
└── INfos.rtf          # Prüfungsanforderungen
```

## Nutzung

### Navigation
- **Dashboard**: Übersicht über alle Module und aktuellen Fortschritt
- **Katame-Waza**: 24 Bodentechniken in 3 Kategorien
  - Osaekomi-waza (9 Haltetechniken)
  - Kansetsu-waza (7 Gelenkhebel)
  - Shime-waza (8 Würgetechniken)
  - Standardsituationen (4 Situationen)
- **Nage-Waza**: Alle 40 Würfe der Gokyo-no-waza
- **Kata**: Nage-no-kata oder Ju-no-kata
- **Trainingsplan**: Wöchentlicher Plan + Heimtraining
- **Prüfungssimulation**: Selbsttests und Checklisten

### Interaktive Features
- **Doppelklick auf Technik**: Status ändern (nicht begonnen → in Arbeit → beherrscht)
- **Klick auf Aufgaben**: Abhaken/Zurücksetzen
- **Alt + ←/→**: Zwischen Sektionen wechseln
- **Fortschritt wird automatisch gespeichert** (LocalStorage)

## Trainingskonzept

### Phase 1: Katame-Waza Intensiv (Wochen 1-16)
**Fokus**: 80% Katame-Waza, 20% Nage-Waza Erhaltung

- Training 1: Osaekomi + Kansetsu + Situationen
- Training 2: Shime-Waza + Übergänge + Randori
- Heimtraining: Solo-Drills, Mobilität, Visualisierung

### Phase 2: Nage-Waza Intensiv (Wochen 17-32)
**Fokus**: 70% Nage-Waza, 30% Katame-Waza Erhaltung

- Training 1: Gokyo + Kombinationen/Finten
- Training 2: Konter + Griffkampf + Randori
- Heimtraining: Tai-sabaki, Uchi-komi

### Phase 3: Kata Intensiv (Wochen 33-40)
**Fokus**: 60% Kata, 20% Katame, 20% Nage

- Training 1: Kata-Gruppen
- Training 2: Kata-Wiederholung + Simulation
- Heimtraining: Schrittmuster, Bewegungsabläufe

### Phase 4: Prüfungsvorbereitung (Wochen 41-44)
**Fokus**: Integration und Prüfungssimulation

## Lernprinzipien für schnellen Erfolg

### 1. Progressive Overload
Wöchentliche Steigerung von statisch zu dynamisch, von kooperativ zu widerstandsbasiert.

### 2. Deliberate Practice
- 20-30 Wiederholungen pro Technik und Training
- Fokus auf schwache Seiten
- Video-Analyse

### 3. Situationstraining
Techniken nicht isoliert, sondern aus realen Situationen üben.

### 4. Heimtraining (täglich 30 min)
- Solo-Drills für Bewegungsabläufe
- Uchi-komi mit Gürtel/Band
- Beweglichkeitstraining
- Mentale Visualisierung

## Standardsituationen Katame-Waza

Für die Prüfung musst du aus jeder Situation Lösungen in Ober- UND Unterlage zeigen:

1. **Bank/Bauchlage**
   - Gegner in Bauchlage auf allen Vieren
   - Oberlage: Drehen und kontrollieren
   - Unterlage: Umdrehen und Position verbessern

2. **Beinklammer**
   - Gegner klammert deine Beine
   - Oberlage: Befreiung und Übergang zu Haltegriff
   - Unterlage: Guard-Work und Sweep

3. **Rückenlage (Partner zwischen Beinen)**
   - Du in Rückenlage, Gegner in deiner Guard
   - Oberlage: Guard passen und kontrollieren
   - Unterlage: Guard brechen und vorbeikommen

4. **Übergang Stand-Boden**
   - Nach Wurf sofort Bodentechnik
   - Oberlage: Vom Wurf direkt in Kontrolle
   - Unterlage: Nach geworfen werden Situation drehen

## Niveaustufen

### Niveaustufe 3 (Katame-Waza)
- Perfekte technische Ausführung
- Funktioniert unter vollem Widerstand
- Fließende Übergänge zwischen Techniken
- Situationsgerechte Anwendung

### Niveaustufe 2 (Nage-Waza erweitert & Kata)
- Sehr gute technische Ausführung
- Funktioniert im Übungskampf
- Korrekte Prinzipien erkennbar

## Erfolgskriterien

### Katame-Waza
- ✓ Alle 24 Techniken beherrschen
- ✓ Mind. 2 Lösungen pro Situation (Ober-/Unterlage)
- ✓ Flüssige Übergänge
- ✓ Sicheres Abklopfen

### Nage-Waza
- ✓ Alle 40 Würfe sauber
- ✓ 2 Kombinationen
- ✓ 2 Finten
- ✓ 2 Konter
- ✓ Ai-yotsu & Kenka-yotsu verstehen

### Kata
- ✓ Alle Gruppen auswendig
- ✓ Saubere Ausführung
- ✓ Korrekte Abstände
- ✓ Etikette beherrschen

## Video-Integration (für spätere Erweiterung)

Für jede Technik sollten Videos eingebettet werden:
- Technische Demonstration (Slow-Motion)
- Anwendung aus verschiedenen Situationen
- Häufige Fehler (Was nicht tun)
- Prüfungsbeispiele

### Beispiel YouTube-Einbettung
```html
<iframe width="100%" height="500"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0" allowfullscreen>
</iframe>
```

## Weitere Entwicklung

### Nächste Schritte
1. ✓ Mockup-Website erstellt
2. ✓ Trainingsplan entwickelt
3. Video-Quellen recherchieren
4. Detailseiten für alle Techniken erstellen
5. Backend für Fortschrittsspeicherung (optional)
6. Mobile App-Version (optional)

### Empfohlene Video-Quellen
- **IJF (International Judo Federation)**: Offizielle Technik-Videos
- **Judo Inside**: Technik-Breakdowns
- **Kodokan YouTube**: Traditionelle Ausführung
- **Eigene Aufnahmen**: Trainer-Demonstrationen

## Tipps für effektives Training

### Im Dojo
1. **Qualität vor Quantität**: Lieber 10x perfekt als 50x schlampig
2. **Video-Analyse**: Lass dich filmen und analysiere
3. **Verschiedene Partner**: Übe mit unterschiedlichen Körpertypen
4. **Fragen stellen**: Nutze die Expertise deiner Lehrer

### Zuhause
1. **Tägliche Routine**: Auch 10 min helfen!
2. **Beweglichkeit**: Hüfte und Schultern sind essentiell
3. **Visualisierung**: Mental Training ist unterschätzt
4. **Uchi-komi**: Mit Gürtel an Türklinke üben

### Mental
1. **Realistische Ziele**: Woche für Woche
2. **Fehler akzeptieren**: Teil des Lernprozesses
3. **Geduld**: Dan-Niveau braucht Zeit
4. **Spaß haben**: Motivation aufrechterhalten

## Prüfungsvorbereitung

### 4 Wochen vorher
- Alle Techniken nochmal durchgehen
- Schwachstellen identifizieren
- Prüfungssimulation im Training

### 2 Wochen vorher
- Tägliche Wiederholung der schwierigen Techniken
- Mentale Vorbereitung
- Ausreichend Schlaf

### 1 Woche vorher
- Nur leichtes Training
- Verletzungen vermeiden
- Technik mental durchgehen
- Judogi vorbereiten

### Prüfungstag
- Gut frühstücken
- Rechtzeitig da sein
- Aufwärmen
- Selbstvertrauen haben - du bist vorbereitet!

## Lizenz & Verwendung

Dieses Projekt ist für private Ausbildungszwecke entwickelt.
Verwendung, Anpassung und Weitergabe sind erwünscht.

## Kontakt & Feedback

Bei Fragen, Verbesserungsvorschlägen oder Problemen:
- Erstelle ein Issue auf GitHub
- Kontaktiere deinen Trainer
- Diskutiere mit Trainingspartnern

---

**Viel Erfolg bei deiner Dan-Vorbereitung! Oss!**

// Datenbank für alle Shime-Waza (Würgetechniken)
// 8 Techniken komplett und ausführlich

const SHIME_WAZA = [
    {
        id: "hadaka-jime",
        name: "Hadaka-jime",
        nameDE: "Nackter Würger / Rear Naked Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du bist hinter dem Gegner (Back Control), dein Arm umschließt seinen Hals ohne Gi-Griffe.",
            kontrolle: [
                "Ein Arm geht um Gegners Hals (Würgearm)",
                "Deine Armbeuge ist an seiner Halsseite/Karotis",
                "Anderer Arm stützt Kopf von hinten oder greift eigenen Bizeps",
                "Hand des Würgearms greift eigene Schulter/Bizeps",
                "Kopf presst gegen seinen Hinterkopf für Druck"
            ],
            beinarbeit: [
                "Hooks (Fersen) innen an seinen Oberschenkeln",
                "Oder Body Triangle (Beine verschränkt um Körper)",
                "Hüfte eng an seinem Rücken",
                "Beine kontrollieren seine Beine",
                "Verhindert Escape"
            ],
            schlüsselpunkte: [
                "OHNE Gi-Griffe - daher 'nackt' (Hadaka)",
                "Druck auf Karotis (Halsschlagader) - Blutwürger!",
                "NICHT auf Luftröhre drücken - gefährlich und ineffektiv!",
                "Ellenbogen zusammenpressen wichtiger als Arm-Ziehen",
                "Sehr effektiv und schnell - Partner klopft ab in Sekunden",
                "Funktioniert mit und ohne Gi"
            ]
        },

        fehler: [
            "❌ Arm zu hoch am Kopf → Kein Druck auf Karotis, ineffektiv",
            "❌ Zu viel auf Luftröhre → Schmerzhaft aber ineffektiv, gefährlich!",
            "❌ Kopf nicht gegen Hinterkopf → Weniger Druck",
            "❌ Ellenbogen nicht zusammen → Würge funktioniert nicht",
            "❌ Hooks zu schwach → Gegner escaped",
            "❌ Zu langsam ansetzen → Gegner hat Zeit zu verteidigen"
        ],

        situationen: [
            {
                name: "Von Back Control - Klassisch (Oberlage)",
                position: "Du hast Rückenkontrolle",
                schritte: [
                    "1. Du hast Back Control (beide Hooks drin)",
                    "2. Gegner liegt/sitzt vor dir, du hinter ihm",
                    "3. Schlinge Würgearm um seinen Hals (Hand zu gegenüberliegender Schulter)",
                    "4. Deine Armbeuge ist an Seite seines Halses (Karotis!)",
                    "5. Andere Hand hinter seinen Kopf oder greift deinen Bizeps",
                    "6. Drücke Kopf gegen seinen Hinterkopf",
                    "7. Presse Ellenbogen zusammen (wie Schere schließen)",
                    "8. Partner klopft ab in 3-5 Sekunden - sofort loslassen!"
                ],
                details: "Klassischste Anwendung! Von Back Control ist Hadaka-jime König der Submissions.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Turtle - Rücken nehmen (Oberlage)",
                position: "Gegner in Vierfüßler/Turtle",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Du bist hinter/über ihm",
                    "3. Schlinge Arm um seinen Hals (noch keine Würge)",
                    "4. Lege erste Hook ein (ein Fuß innen an Oberschenkel)",
                    "5. Lege zweite Hook ein",
                    "6. Falle/rolle zur Seite oder nach hinten",
                    "7. Beide landen mit dir hinter ihm",
                    "8. Finalisiere Hadaka-jime (Ellenbogen zusammen, Kopf presst)"
                ],
                details: "Von Turtle sehr häufig! Turtle → Back → Hadaka-jime ist Standard-Sequenz.",
                videotimestamp: "1:30"
            },
            {
                name: "Übergang von Kami-shiho-gatame (Oberlage)",
                position: "Von Osaekomi zu Shime",
                schritte: [
                    "1. Du hältst Kami-shiho-gatame",
                    "2. Gegner bridged/dreht sich",
                    "3. Lasse Kami-shiho los, behalte aber Kontrolle",
                    "4. Er dreht auf den Bauch/Turtle",
                    "5. Du nimmst seinen Rücken während Drehung",
                    "6. Schlinge Arm um Hals",
                    "7. Hooks einlegen",
                    "8. Finalisiere Hadaka-jime"
                ],
                details: "Fließender Übergang! Wenn Osaekomi nicht hält, gehe zu Shime.",
                videotimestamp: "3:00"
            },
            {
                name: "Nach gescheitertem Wurf - Rücken nehmen (Stand→Boden)",
                position: "Wurf klappt nicht, du nimmst Rücken",
                schritte: [
                    "1. Du versuchst Wurf (z.B. Sode-tsurikomi-goshi)",
                    "2. Gegner verteidigt, dreht seinen Rücken zu dir",
                    "3. Nutze die Position - nimm seinen Rücken!",
                    "4. Schlinge Arm um Hals",
                    "5. Lege Hooks ein während ihr zu Boden geht",
                    "6. Beide landen am Boden, du hinter ihm",
                    "7. Finalisiere Hadaka-jime"
                ],
                details: "Opportunistisch! Gescheiterter Wurf wird zu Würger.",
                videotimestamp: "4:30"
            },
            {
                name: "Von Seite - Rolling Back Take (Oberlage)",
                position: "Seitliche Position, du rollst zu Back",
                schritte: [
                    "1. Du hast Side Control oder Kesa-gatame",
                    "2. Gegner dreht sich weg (Escape-Versuch)",
                    "3. Gehe mit seiner Bewegung mit",
                    "4. Rolle über ihn zu seinem Rücken",
                    "5. Während Rolle: Arm um Hals, Hooks einlegen",
                    "6. Lande in Back Control",
                    "7. Finalisiere Hadaka-jime"
                ],
                details: "Dynamische Anwendung! Nutze Gegners Escape-Versuch.",
                videotimestamp: "6:00"
            },
            {
                name: "Aus Ura-gatame Position (Unterlage)",
                position: "Du liegst unten mit Back Control",
                schritte: [
                    "1. Du hast Ura-gatame (beide auf Rücken, du unten)",
                    "2. Hooks sind schon drin",
                    "3. Schlinge Arm um Hals für Hadaka-jime",
                    "4. Finalisiere von unten",
                    "5. Partner klopft ab"
                ],
                details: "Von Ura-gatame zu Hadaka-jime ist sehr natürlich! Oft kombiniert.",
                videotimestamp: "7:15"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Technik Lernen - Armposition (Woche 1-2)",
                    intensität: "Partner passiv, klopft sofort ab",
                    dauer: "Bis korrekte Position",
                    sets: "20 Wiederholungen",
                    fokus: "Armbeuge an Karotis, NICHT Luftröhre! Ellenbogen-Druck verstehen",
                    wiederholungen: 20
                },
                {
                    phase: "Back Control → Hadaka-jime (Woche 3-5)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "25 Wiederholungen",
                    fokus: "Von Back Control ansetzen, schnell und sauber",
                    wiederholungen: 25
                },
                {
                    phase: "Verschiedene Entries (Woche 6-9)",
                    intensität: "Partner 40%",
                    dauer: "Alle Situationen",
                    sets: "10 pro Entry",
                    fokus: "Von Turtle, von Kami-shiho, nach Wurf, von Side Control",
                    wiederholungen: 60
                },
                {
                    phase: "Gegen Verteidigung (Woche 10-13)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Hals-Verteidigung brechen (Hände weg), schnell finalisieren",
                    wiederholungen: 20
                },
                {
                    phase: "Live Rolling (Woche 14+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Hadaka-jime im freien Training, IMMER sofort loslassen bei Abklopfen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Armposition mit Kissen/Dummy",
                    beschreibung: "Großes Kissen als Kopf/Hals, übe Armposition: Armbeuge an Seite, Ellenbogen zusammen",
                    dauer: "15 Min",
                    wiederholungen: "40x beide Seiten",
                    fokus: "Muskelgedächtnis für korrekte Armposition"
                },
                {
                    übung: "Hooks-Drill am Boden",
                    beschreibung: "Lege dich auf Rücken, übe Hooks einlegen mit Kissen zwischen Beinen",
                    dauer: "10 Min",
                    wiederholungen: "50 Hook-Ins",
                    fokus: "Schnelle Hook-Platzierung"
                },
                {
                    übung: "Arm-Squeeze Kraft",
                    beschreibung: "Umfasse großes Kissen, presse Ellenbogen zusammen, halte 20 Sek",
                    dauer: "10 Min",
                    wiederholungen: "6x20 Sek",
                    fokus: "Kraft um Würge zu halten"
                },
                {
                    übung: "Nacken-Stärke",
                    beschreibung: "Neck Bridges, Neck Nods, Isometric Neck Holds",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x15",
                    fokus: "Nacken-Kraft zum Kopf pressen"
                },
                {
                    übung: "Back Control Beweglichkeit",
                    beschreibung: "Hip Flexibility, Hamstring Stretches",
                    dauer: "10 Min",
                    wiederholungen: "3x30 Sek",
                    fokus: "Flexibilität für Back Control halten"
                },
                {
                    übung: "Mentale Visualisierung",
                    beschreibung: "Stelle dir alle Wege zu Back Control vor, dann Hadaka-jime",
                    dauer: "10 Min abends",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: Armbeuge an KAROTIS (Halsseite), NICHT Luftröhre!",
                "✓ Back Control mit Hooks demonstrieren",
                "✓ Aus 2-3 Situationen (Back Control, von Turtle, Übergang)",
                "✓ Ellenbogen zusammenpressen zeigen",
                "✓ Kopf gegen Hinterkopf pressen",
                "✓ Partner klopft sofort ab - sofort loslassen!",
                "✓ Erklären: Blutwürger, nicht Luftwürger"
            ],
            tipps: [
                "Hadaka-jime ist DER wichtigste Würger - absolute Priorität!",
                "Erkläre: 'Hadaka = nackt, keine Gi-Griffe nötig'",
                "Zeige von Back Control (klassisch und am klarsten)",
                "Demonstriere auch: Turtle → Back → Hadaka-jime",
                "WICHTIG: Betone dass es BLUTWÜRGER ist (Karotis), nicht Luftwürger!",
                "Zeige schnelle Ausführung - ist ein 'Finishing Move'",
                "Partner muss sofort abklopfen - Bewusstlosigkeit in 3-5 Sekunden möglich!",
                "Auch bekannt als 'Rear Naked Choke' (RNC) in BJJ/MMA"
            ]
        },

        varianten: [
            {
                name: "Mata-Leão (Lion Killer)",
                unterschied: "Gleiche Technik, anderer Name (Portugiesisch/BJJ)",
                wann: "Gleich wie Hadaka-jime"
            },
            {
                name: "Short Choke",
                unterschied: "Arm geht nicht tief um Hals, nur Handfläche am Hals",
                wann: "Wenn voller Hadaka-jime schwierig anzusetzen"
            },
            {
                name: "Body Triangle RNC",
                unterschied: "Beine verschränkt um Körper (Triangle) statt Hooks",
                wann: "Extra Kontrolle, modern"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️⚠️⚠️ BLUTWÜRGER - Partner wird bewusstlos in 3-5 Sekunden!",
                "⚠️ SOFORT loslassen bei Abklopfen - KEINE Sekunde zögern!",
                "⚠️ Partner kann nicht verbal abklopfen (Hals!) - achte auf Hand-Tapping!",
                "⚠️ Bei Bewusstlosigkeit: SOFORT loslassen, Partner in stabile Seitenlage!",
                "⚠️ NIEMALS 'testen' wie lange Partner durchhält - lebensgefährlich!",
                "⚠️ NICHT auf Luftröhre drücken - kann Luftröhre verletzen!",
                "⚠️ Mit Anfängern: Nur leichter Druck, sofort loslassen!",
                "⚠️ Bei Kindern/Jugendlichen: Extra Vorsicht, weniger Druck!",
                "⚠️ Respektiere die Technik - ist lebensbedrohlich bei Missbrauch!"
            ]
        }
    },

    {
        id: "okuri-eri-jime",
        name: "Okuri-eri-jime",
        nameDE: "Sliding Lapel Choke / Schiebekragenwürger",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Von hinten, eine Hand greift tief in Gegners Kragen, andere Hand zieht anderen Kragen - Kreuz-Würge von hinten.",
            kontrolle: [
                "Du bist hinter Gegner (Back Control)",
                "Eine Hand greift TIEF in seinen Kragen (nahe am Hals)",
                "Daumen INNEN im Kragen",
                "Andere Hand greift anderen Kragen von außen",
                "Hände ziehen in entgegengesetzte Richtungen (Scherenbewegung)",
                "Hooks kontrollieren Beine"
            ],
            beinarbeit: [
                "Hooks (wie Hadaka-jime)",
                "Oder Body Triangle",
                "Hüfte eng am Rücken",
                "Beine verhindern Escape",
                "Gute Basis wichtig"
            ],
            schlüsselpunkte: [
                "Hand muss TIEF im Kragen sein (wichtig!)",
                "Kreuz-Griff (Hände kreuzen sich)",
                "Scherenbewegung der Hände",
                "Kragen würgt seitlich am Hals (Karotis)",
                "Sehr technisch - Griffe müssen perfekt sein",
                "Funktioniert NUR mit Gi"
            ]
        },

        fehler: [
            "❌ Hand nicht tief genug im Kragen → Würge funktioniert nicht",
            "❌ Daumen außen statt innen → Schwach und ineffektiv",
            "❌ Nicht kreuzgreifen → Kein Druck",
            "❌ Zu viel ziehen, zu wenig Scherenbewe

gung → Kraftverschwendung",
            "❌ Hooks verloren → Gegner escaped bevor Würge wirkt",
            "❌ Falsche Hand tief (sollte meist die untere sein)"
        ],

        situationen: [
            {
                name: "Von Back Control - Klassisch (Oberlage)",
                position: "Du hast Rückenkontrolle mit Hooks",
                schritte: [
                    "1. Du hast Back Control (beide Hooks drin)",
                    "2. Greife mit einer Hand TIEF in seinen Kragen (Daumen innen)",
                    "3. Hand muss wirklich tief sein - fast am Nacken!",
                    "4. Andere Hand greift seinen anderen Kragen von außen",
                    "5. Hände sind jetzt gekreuzt",
                    "6. Ziehe Hände auseinander (Scherenbewegung)",
                    "7. Ein Kragen zieht nach oben, anderer nach unten",
                    "8. Partner klopft ab in Sekunden - sofort loslassen!"
                ],
                details: "Klassischste Gi-Würge von hinten! Sehr effektiv wenn Griffe richtig.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Turtle - Kragengriff zuerst (Oberlage)",
                position: "Gegner in Turtle, du greifst Kragen",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Greife ZUERST tief in seinen Kragen (wichtig!)",
                    "3. Jetzt nimm Back Control: Hooks einlegen",
                    "4. Zweite Hand greift anderen Kragen",
                    "5. Kreuzgriff etabliert",
                    "6. Finalisiere Okuri-eri-jime (Schere schließen)"
                ],
                details: "Von Turtle: Erst Griff, dann Back Control. Reihenfolge ist wichtig!",
                videotimestamp: "1:45"
            },
            {
                name: "Nach gescheitertem Hadaka-jime (Oberlage)",
                position: "Hadaka-jime klappt nicht, wechsle zu Okuri-eri-jime",
                schritte: [
                    "1. Du hast Back Control",
                    "2. Du versuchst Hadaka-jime",
                    "3. Gegner verteidigt Hals gut (Hände vor Hals)",
                    "4. Wechsle Strategie - nutze Gi!",
                    "5. Greife tief in Kragen",
                    "6. Andere Hand greift anderen Kragen",
                    "7. Finalisiere Okuri-eri-jime"
                ],
                details: "Backup für Hadaka-jime! Wenn eine Würge nicht klappt, versuche andere.",
                videotimestamp: "3:15"
            },
            {
                name: "Von Seite - Rolling zu Back (Oberlage)",
                position: "Kragengriff von Seite, dann zu Back",
                schritte: [
                    "1. Du hast Side Control/Kesa-gatame",
                    "2. Greife schon mal tief in seinen Kragen",
                    "3. Gegner dreht sich weg",
                    "4. Rolle mit zu seinem Rücken",
                    "5. Lege Hooks ein während du Kragen hältst",
                    "6. Andere Hand greift anderen Kragen",
                    "7. Finalisiere"
                ],
                details: "Vorausschauend! Greife Kragen bevor du Back hast.",
                videotimestamp: "5:00"
            },
            {
                name: "Aus Kami-shiho - Kragengriff (Oberlage)",
                position: "Von vorne zu hinten mit Kragen",
                schritte: [
                    "1. Du hältst Kami-shiho-gatame",
                    "2. Greife tief in seinen Kragen (schon von vorne!)",
                    "3. Gegner bridged/dreht",
                    "4. Lasse Kami-shiho los, gehe zu seinem Rücken",
                    "5. Hooks einlegen",
                    "6. Andere Hand greift anderen Kragen",
                    "7. Finalisiere Okuri-eri-jime"
                ],
                details: "Übergang Osaekomi → Shime mit Kragengriff!",
                videotimestamp: "6:30"
            },
            {
                name: "Von Ura-gatame (Unterlage)",
                position: "Du liegst unten, Gegner oben auf Rücken",
                schritte: [
                    "1. Ura-gatame Position (beide auf Rücken)",
                    "2. Hooks sind drin",
                    "3. Greife tief in Kragen",
                    "4. Andere Hand greift anderen Kragen",
                    "5. Finalisiere von unten"
                ],
                details: "Von Ura-gatame funktioniert Okuri-eri-jime genauso gut!",
                videotimestamp: "8:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Griff-Technik Lernen (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "Bis Griffe perfekt",
                    sets: "30 Wiederholungen",
                    fokus: "TIEFER Griff im Kragen, Daumen innen, Kreuzgriff, Scherenbewegung",
                    wiederholungen: 30
                },
                {
                    phase: "Von Back Control (Woche 4-6)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "25 Wiederholungen",
                    fokus: "Von Back Control sauber ansetzen",
                    wiederholungen: 25
                },
                {
                    phase: "Verschiedene Entries (Woche 7-10)",
                    intensität: "Partner 40%",
                    dauer: "Alle Situationen",
                    sets: "10 pro Entry",
                    fokus: "Von Turtle, nach Hadaka-jime, von Seite, von Kami-shiho",
                    wiederholungen: 60
                },
                {
                    phase: "Gegen Kragen-Verteidigung (Woche 11-14)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Tiefen Griff bekommen gegen Widerstand",
                    wiederholungen: 20
                },
                {
                    phase: "Live (Woche 15+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Okuri-eri-jime im Gi-Randori, sofort loslassen bei Abklopfen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Griff-Drill mit eigenem Gi",
                    beschreibung: "Ziehe dein Gi an, übe tiefe Griffe in Kragen - beide Seiten",
                    dauer: "15 Min",
                    wiederholungen: "100x Griffe setzen",
                    fokus: "Geschwindigkeit und Tiefe des Griffs"
                },
                {
                    übung: "Scherenbewegung",
                    beschreibung: "Mit Gürtel/Handtuch: Simuliere Scherenbewegung der Hände",
                    dauer: "10 Min",
                    wiederholungen: "50x",
                    fokus: "Bewegungsmuster internalisieren"
                },
                {
                    übung: "Grip Strength - Gi",
                    beschreibung: "Halte Gi-Kragen fest, hänge Gewicht dran, halte 30 Sek",
                    dauer: "10 Min",
                    wiederholungen: "6x30 Sek",
                    fokus: "Griffkraft für Kragen halten"
                },
                {
                    übung: "Back Control Drill",
                    beschreibung: "Mit Kissen: Übe Back Control Position mit Kragengriff-Simulation",
                    dauer: "15 Min",
                    wiederholungen: "30x komplett",
                    fokus: "Gesamte Sequenz"
                },
                {
                    übung: "Hooks Drill",
                    beschreibung: "Wie bei Hadaka-jime: Hooks üben",
                    dauer: "10 Min",
                    wiederholungen: "50 Hook-Ins",
                    fokus: "Back Control halten"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ TIEFER Griff im Kragen demonstrieren (Hand fast am Nacken!)",
                "✓ Daumen INNEN im Kragen",
                "✓ Kreuzgriff zeigen (Hände kreuzen sich)",
                "✓ Scherenbewegung demonstrieren",
                "✓ Aus 2-3 Situationen (Back Control, Turtle, Übergang)",
                "✓ Back Control mit Hooks halten",
                "✓ Sofort loslassen bei Abklopfen"
            ],
            tipps: [
                "Okuri-eri-jime ist DIE klassische Gi-Würge von hinten!",
                "WICHTIG: Betone wie TIEF die Hand im Kragen sein muss!",
                "Zeige deutlich: Daumen innen, nicht außen",
                "Demonstriere Kreuzgriff klar",
                "Erkläre Scherenbewegung: 'Eine Hand hoch, eine runter'",
                "Zeige von Back Control (klassisch)",
                "Demonstriere auch: Turtle → Kragengriff → Back → Würge",
                "Häufiger Fehler: Hand nicht tief genug - betone das!"
            ]
        },

        varianten: [
            {
                name: "High Okuri-eri-jime",
                unterschied: "Beide Hände greifen hoch im Kragen",
                wann: "Wenn tiefer Griff schwierig"
            },
            {
                name: "Bow and Arrow Choke",
                unterschied: "Ein Bein greift Gegners Bein (wie Pfeil und Bogen)",
                wann: "Extra Kontrolle, sehr effektiv"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Blutwürger - schnelle Wirkung (3-5 Sekunden)!",
                "⚠️ SOFORT loslassen bei Abklopfen!",
                "⚠️ Gi-Kragen können sehr fest würgen - kontrolliert arbeiten!",
                "⚠️ Partner kann nicht verbal abklopfen - achte auf Tapping!",
                "⚠️ Bei Bewusstlosigkeit sofort loslassen!"
            ]
        }
    }

    ,

    {
        id: "gyaku-juji-jime",
        name: "Gyaku-juji-jime",
        nameDE: "Umgekehrter Kreuzwürger / Reverse Cross Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Von oben, beide Hände greifen Kragen gekreuzt, Daumen AUSSEN - daher 'umgekehrt'.",
            kontrolle: [
                "Du bist meist in Mount oder Guard (oben)",
                "Beide Hände greifen Gegners Kragen",
                "WICHTIG: Daumen AUSSEN (nicht innen wie normal)",
                "Hände sind gekreuzt",
                "Ellenbogen spreizen nach außen für Würge",
                "Kragen würgt seitlich am Hals"
            ],
            beinarbeit: [
                "Meist von Mount (Tate-shiho-gatame)",
                "Oder von Gegners Guard (du oben)",
                "Gewicht auf Gegner für Druck",
                "Knie kontrollieren seine Bewegung",
                "Stabile Basis wichtig"
            ],
            schlüsselpunkte: [
                "Daumen AUSSEN - das ist der Unterschied!",
                "Kreuzgriff (wie normaler Juji-jime aber umgekehrt)",
                "Ellenbogen spreizen statt zusammen",
                "Funktioniert von Mount und Guard",
                "Gi-Technik, benötigt Kragen",
                "Sehr kraftvoll wenn richtig ausgeführt"
            ]
        },

        fehler: [
            "❌ Daumen innen statt außen → Wäre normaler Juji-jime, nicht Gyaku!",
            "❌ Nicht kreuzen → Ineffektiv",
            "❌ Ellenbogen zusammen statt auseinander → Falsche Bewegung",
            "❌ Zu wenig Gewicht nach vorne → Schwache Würge",
            "❌ Griffe zu hoch am Kragen → Kein Druck auf Hals",
            "❌ Mount verloren während Setup → Gegner escaped"
        ],

        situationen: [
            {
                name: "Von Mount/Tate-shiho (Oberlage)",
                position: "Du sitzt auf Gegner",
                schritte: [
                    "1. Du hast Mount (Tate-shiho-gatame)",
                    "2. Greife mit rechter Hand in seinen linken Kragen (Daumen AUSSEN!)",
                    "3. Greife mit linker Hand in seinen rechten Kragen (Daumen AUSSEN!)",
                    "4. Hände sind jetzt gekreuzt über seiner Brust",
                    "5. Ziehe Kragen fest",
                    "6. Spreize Ellenbogen nach außen (nicht zusammen!)",
                    "7. Lehne Gewicht nach vorne über ihn",
                    "8. Partner klopft ab - sofort loslassen!"
                ],
                details: "Von Mount ist Gyaku-juji-jime sehr stark! Gegner ist eingeklemmt.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Gegners Guard (Oberlage)",
                position: "Du kniest in seiner Guard",
                schritte: [
                    "1. Gegner hat dich in seiner Guard",
                    "2. Greife beide Kragen (Daumen außen, gekreuzt)",
                    "3. Stehe auf oder knie hoch",
                    "4. Spreize Ellenbogen nach außen",
                    "5. Lehne Gewicht nach vorne",
                    "6. Würge wirkt auch in Guard",
                    "7. Partner klopft ab"
                ],
                details: "Von Guard gefährlich für denjenigen in Guard! Überraschend effektiv.",
                videotimestamp: "1:45"
            },
            {
                name: "Übergang von Kesa-gatame (Oberlage)",
                position: "Von Seite zu Mount zu Würge",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Greife schon einen Kragen (Daumen außen)",
                    "3. Wechsle Position zu Mount",
                    "4. Greife zweiten Kragen",
                    "5. Finalisiere Gyaku-juji-jime"
                ],
                details: "Vorausschauend Greifen während Positionswechsel!",
                videotimestamp: "3:15"
            },
            {
                name: "Von Guard - Du oben, er unten",
                position: "Du kontrollierst von oben in seiner Guard",
                schritte: [
                    "1. Gegner in Guard, du stehst/kniest",
                    "2. Greife Kragen gekreuzt (Daumen außen)",
                    "3. Öffne seine Guard (steh auf, drücke Beine runter)",
                    "4. Passe Guard",
                    "5. Komme zu Mount",
                    "6. Finalisiere Würge (hast Griffe schon!)"
                ],
                details: "Griffe VOR Guard-Pass setzen, dann passen, dann würgen!",
                videotimestamp: "5:00"
            },
            {
                name: "Als Setup für Mount-Übergang",
                position: "Würge zwingt Gegner sich zu bewegen",
                schritte: [
                    "1. Du hast Gegner in schwieriger Position",
                    "2. Setze Gyaku-juji-jime an (nicht voll!)",
                    "3. Gegner reagiert - versucht Würge zu verteidigen",
                    "4. Nutze seine Reaktion für Positions-Verbesserung",
                    "5. Z.B. zu Mount oder besserem Winkel",
                    "6. Dann finalisiere Würge oder andere Technik"
                ],
                details: "Würge als Ablenkung/Setup für andere Techniken - fortgeschritten!",
                videotimestamp: "6:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Daumen-Position Lernen (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "Bis korrekt",
                    sets: "25 Wiederholungen",
                    fokus: "Daumen AUSSEN! Unterschied zu normalem Juji-jime verstehen",
                    wiederholungen: 25
                },
                {
                    phase: "Von Mount (Woche 3-5)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "30 Wiederholungen",
                    fokus: "Von Mount ansetzen, Ellenbogen spreizen, Gewicht nach vorne",
                    wiederholungen: 30
                },
                {
                    phase: "Von Guard (Woche 6-8)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Von Guard würgen (weniger intuitiv, wichtig zu üben!)",
                    wiederholungen: 20
                },
                {
                    phase: "Gegen Verteidigung (Woche 9-12)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "15 Versuche",
                    fokus: "Griffe bekommen gegen Kragen-Verteidigung",
                    wiederholungen: 15
                },
                {
                    phase: "Live (Woche 13+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Gyaku-juji-jime im Gi-Randori, sofort loslassen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Griff-Drill mit Gi",
                    beschreibung: "Eigenes Gi: Übe gekreuzten Griff mit Daumen AUSSEN",
                    dauer: "15 Min",
                    wiederholungen: "100x korrekte Griffe",
                    fokus: "Daumen-Position automatisieren"
                },
                {
                    übung: "Ellenbogen-Spreiz-Bewegung",
                    beschreibung: "Mit Gürtel: Simuliere Ellenbogen nach außen spreizen",
                    dauer: "10 Min",
                    wiederholungen: "50x",
                    fokus: "Bewegungsmuster"
                },
                {
                    übung: "Mount-Druck",
                    beschreibung: "Planks, Gewicht nach vorne lehnen-Übungen",
                    dauer: "10 Min",
                    wiederholungen: "3x30 Sek",
                    fokus: "Kraft um Gewicht nach vorne zu halten"
                },
                {
                    übung: "Grip Strength",
                    beschreibung: "Gi-Kragen fest halten, Gewicht anhängen",
                    dauer: "10 Min",
                    wiederholungen: "6x30 Sek",
                    fokus: "Kragengriff-Kraft"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: Daumen AUSSEN demonstrieren (Unterschied zu normalem Juji-jime!)",
                "✓ Kreuzgriff zeigen",
                "✓ Ellenbogen SPREIZEN (nicht zusammen!)",
                "✓ Von Mount demonstrieren (am klarsten)",
                "✓ Gewicht nach vorne lehnen zeigen",
                "✓ Unterschied zu Nami-juji-jime erklären können",
                "✓ Sofort loslassen bei Abklopfen"
            ],
            tipps: [
                "KRITISCH: Erkläre Unterschied zu normalem Juji-jime!",
                "Gyaku = umgekehrt, Daumen AUSSEN statt innen",
                "Nami-juji-jime = normaler (Daumen innen), Gyaku-juji-jime = umgekehrt (Daumen außen)",
                "Zeige klar: Ellenbogen spreizen statt zusammen",
                "Von Mount zeigen ist am einfachsten",
                "Demonstriere auch von Guard - zeigt Vielseitigkeit",
                "Viele verwechseln die beiden Juji-jime - sei sehr klar!"
            ]
        },

        varianten: [
            {
                name: "Nami-juji-jime",
                unterschied: "Normaler Kreuzwürger - Daumen INNEN (andere Technik!)",
                wann: "Alternative, andere Situation"
            },
            {
                name: "Baseball Choke",
                unterschied: "Ähnlicher Griff aber von Seite",
                wann: "Von anderen Winkeln"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Blutwürger - schnelle Wirkung!",
                "⚠️ SOFORT loslassen bei Abklopfen!",
                "⚠️ Gi-Kragen können sehr fest sein - kontrolliert!",
                "⚠️ Partner kann Hände nicht so leicht zum Tapping frei bekommen - extra achtsam!"
            ]
        }
    },

    {
        id: "kata-ha-jime",
        name: "Kata-ha-jime",
        nameDE: "Einschulter-Würger / Single Wing Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Von hinten/seitlich, eine Hand greift Kragen, anderer Arm geht unter Achsel - asymmetrische Würge.",
            kontrolle: [
                "Du bist hinter/seitlich vom Gegner",
                "Eine Hand greift tief in seinen Kragen",
                "Anderer Arm geht unter seiner Achsel durch",
                "Diese Hand greift deinen eigenen Arm oder Gi",
                "Asymmetrisch - eine Seite Kragen, eine Seite Achsel",
                "Körper presst für Würge"
            ],
            beinarbeit: [
                "Oft von Back Control",
                "Oder von Seite/Turtle",
                "Hooks wenn von hinten",
                "Gewicht auf Gegner",
                "Variable Position"
            ],
            schlüsselpunkte: [
                "EINE Schulter/Seite - daher 'Kata-ha' (einschulterig)",
                "Kombination Kragen UND Achselgriff",
                "Sehr vielseitig - von vielen Positionen",
                "Kann Uki-gatame ähnlich sein (aber ist Würger!)",
                "Gi-Technik",
                "Weniger bekannt aber sehr effektiv"
            ]
        },

        fehler: [
            "❌ Hand nicht tief genug im Kragen → Schwache Würge",
            "❌ Achselarm zu locker → Kein Druck",
            "❌ Nicht genug Körperdruck → Ineffektiv",
            "❌ Verwechslung mit Uki-gatame → Klarheit fehlt",
            "❌ Falsche Seite tief greifen → Suboptimal",
            "❌ Zu weit vom Gegner weg → Hebel funktioniert nicht"
        ],

        situationen: [
            {
                name: "Von Back Control - Seitlich (Oberlage)",
                position: "Du hast Rücken, greifst asymmetrisch",
                schritte: [
                    "1. Du hast Back Control oder seitlich hinter ihm",
                    "2. Greife mit einer Hand tief in seinen Kragen (z.B. rechts)",
                    "3. Anderer Arm (links) geht unter seiner linken Achsel durch",
                    "4. Diese Hand greift deinen rechten Arm oder dein Gi",
                    "5. Presse deinen Körper/Brust gegen seinen Rücken",
                    "6. Kragen würgt eine Seite, Achselarm verstärkt Druck",
                    "7. Partner klopft ab"
                ],
                details: "Von Back Control asymmetrisch - wenn Hadaka-jime schwierig ist!",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Turtle - Von hinten/seitlich (Oberlage)",
                position: "Gegner in Vierfüßler",
                schritte: [
                    "1. Gegner in Turtle",
                    "2. Positioniere dich seitlich hinter ihm",
                    "3. Greife tief in seinen Kragen",
                    "4. Anderer Arm unter Achsel",
                    "5. Fasse zusammen (Arm oder Gi)",
                    "6. Rolle ihn zur Seite oder ziehe nach hinten",
                    "7. Finalisiere Kata-ha-jime"
                ],
                details: "Von Turtle sehr praktisch! Schneller als Back Control aufbauen.",
                videotimestamp: "1:45"
            },
            {
                name: "Übergang von Uki-gatame (Oberlage)",
                position: "Uki-gatame zu Kata-ha-jime",
                schritte: [
                    "1. Du hast Uki-gatame (Osaekomi)",
                    "2. Position ist schon ähnlich!",
                    "3. Adjustiere: Greife Kragen statt nur Kopf",
                    "4. Achselarm bleibt ähnlich",
                    "5. Wechsle von Osaekomi-Version zu Shime-Version",
                    "6. Finalisiere als Würger"
                ],
                details: "Uki-gatame und Kata-ha-jime sind sehr verwandt! Fließender Übergang.",
                videotimestamp: "3:15"
            },
            {
                name: "Von Kesa-gatame - Seitlich (Oberlage)",
                position: "Von Seite zu Würge",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Greife in seinen Kragen",
                    "3. Anderer Arm geht unter seine Achsel",
                    "4. Adjustiere Position leicht",
                    "5. Finalisiere Kata-ha-jime"
                ],
                details: "Von Kesa-gatame opportunistisch zu Würger wechseln!",
                videotimestamp: "5:00"
            },
            {
                name: "Als Konter gegen Escape (Oberlage)",
                position: "Gegner dreht sich, du nimmst Kata-ha-jime",
                schritte: [
                    "1. Du hast irgendeine Kontrolle",
                    "2. Gegner dreht sich/escaped",
                    "3. Während Drehung: Greife Kragen",
                    "4. Arm unter Achsel",
                    "5. Nutze seine Bewegung",
                    "6. Finalisiere"
                ],
                details: "Opportunistisch in Scrambles! Kata-ha-jime oft aus Chaos.",
                videotimestamp: "6:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Asymmetrische Position Verstehen (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "Variable",
                    sets: "20 Wiederholungen",
                    fokus: "Kragen + Achsel Kombination, Körperdruck, Unterschied zu Uki-gatame",
                    wiederholungen: 20
                },
                {
                    phase: "Von Turtle (Woche 4-6)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "25 Versuche",
                    fokus: "Von Turtle ansetzen - häufigste Anwendung",
                    wiederholungen: 25
                },
                {
                    phase: "Von Back Control (Woche 7-9)",
                    intensität: "Partner 40%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Als Alternative zu Hadaka-jime/Okuri-eri-jime",
                    wiederholungen: 20
                },
                {
                    phase: "Übergang von Uki-gatame (Woche 10-12)",
                    intensität: "Partner 50%",
                    dauer: "Variable",
                    sets: "15 Versuche",
                    fokus: "Osaekomi → Shime fließend wechseln",
                    wiederholungen: 15
                },
                {
                    phase: "Live (Woche 13+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Kata-ha-jime opportunistisch im Randori",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Asymmetrischer Griff mit Gi",
                    beschreibung: "Eigenes Gi: Übe Kragen + Achsel Kombination",
                    dauer: "15 Min",
                    wiederholungen: "50x beide Seiten",
                    fokus: "Griff-Koordination"
                },
                {
                    übung: "Körperdruck-Bewegung",
                    beschreibung: "Mit Kissen: Simuliere Brust gegen Rücken pressen",
                    dauer: "10 Min",
                    wiederholungen: "30x",
                    fokus: "Druck-Gefühl"
                },
                {
                    übung: "Unterscheidung Uki-gatame vs Kata-ha-jime",
                    beschreibung: "Mentales Training: Verstehe Unterschied (Osaekomi vs Shime)",
                    dauer: "10 Min",
                    wiederholungen: "Einmal gründlich",
                    fokus: "Konzeptverständnis - wichtig für Prüfung!"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Asymmetrischen Griff demonstrieren (Kragen + Achsel)",
                "✓ Als WÜRGER zeigen, nicht Osaekomi!",
                "✓ Von 1-2 Positionen (Turtle, Back Control)",
                "✓ Körperdruck zeigen",
                "✓ Unterschied zu Uki-gatame erklären können",
                "✓ Sofort loslassen bei Abklopfen"
            ],
            tipps: [
                "WICHTIG: Kata-ha-jime = WÜRGER, Uki-gatame = kann beides sein!",
                "Erkläre: 'Kata-ha = eine Schulter/Seite, asymmetrisch'",
                "Zeige von Turtle (am klarsten)",
                "Demonstriere dass es Würger ist, nicht Haltegriff",
                "Manche verwechseln mit Uki-gatame - sei klar!",
                "Weniger bekannt - erkläre gut!",
                "Zeige auch Übergang von Uki-gatame wenn möglich"
            ]
        },

        varianten: [
            {
                name: "Uki-gatame (Shime-Version)",
                unterschied: "Sehr ähnlich, manchmal gleich kategorisiert",
                wann: "Verwandt/überlappend"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Kombination aus Druck - kontrolliert arbeiten!",
                "⚠️ SOFORT loslassen bei Abklopfen!",
                "⚠️ Kann schnell wirken - aufmerksam sein!"
            ]
        }
    }

    ,

    {
        id: "sode-guruma-jime",
        name: "Sode-guruma-jime",
        nameDE: "Ärmelrad-Würger / Sleeve Wheel Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Von vorne oder Seite, beide Hände greifen Gegners Ärmel, Unterarme würgen seitlich am Hals - wie ein Rad.",
            kontrolle: [
                "Du bist über/vor Gegner",
                "Beide Hände greifen seine ÄRMEL (nicht Kragen!)",
                "Meist hohe Ärmel-Griffe (nahe Schulter/Ellenbogen)",
                "Unterarme pressen gegen seine Halsseiten",
                "Wie ein 'Rad' um seinen Kopf - daher Guruma",
                "Hände ziehen Ärmel fest"
            ],
            beinarbeit: [
                "Meist von Mount, Side Control oder Gegners Guard",
                "Variable Position",
                "Gewicht kontrolliert Gegner",
                "Oft von oben",
                "Knie/Beine stabilisieren"
            ],
            schlüsselpunkte: [
                "ÄRMEL-Griffe, nicht Kragen! (Sode = Ärmel)",
                "Guruma = Rad/Wheel - kreisförmige Anordnung",
                "Unterarme sind die Würge-Flächen",
                "Funktioniert mit langem Gi (Ärmel müssen lang genug sein)",
                "Weniger üblich aber sehr effektiv",
                "Überraschend - Gegner erwartet Kragen-Würge"
            ]
        },

        fehler: [
            "❌ Kragen statt Ärmel greifen → Wäre andere Technik!",
            "❌ Zu niedrig an Ärmeln greifen → Zu weit vom Hals",
            "❌ Nicht genug Unterarm-Druck → Ineffektiv",
            "❌ Zu weit vom Gegner → Hebel fehlt",
            "❌ Ärmel zu locker → Kein Druck übertragen",
            "❌ Position nicht kontrolliert → Gegner escaped"
        ],

        situationen: [
            {
                name: "Von Mount - Ärmel hochziehen (Oberlage)",
                position: "Du sitzt auf Gegner",
                schritte: [
                    "1. Du hast Mount (Tate-shiho-gatame)",
                    "2. Greife beide Ärmel hoch (nahe Ellenbogen/Schulter)",
                    "3. Ziehe Ärmel fest",
                    "4. Bringe deine Unterarme an seine Halsseiten",
                    "5. Presse Unterarme gegen seinen Hals (wie zwei Balken)",
                    "6. Lehne Gewicht nach vorne",
                    "7. Würge entsteht durch Unterarm-Druck",
                    "8. Partner klopft ab - sofort loslassen!"
                ],
                details: "Von Mount klassisch! Ärmel geben guten Griff für Würge.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Side Control - Kesa-Variante (Oberlage)",
                position: "Von Seite mit Ärmel-Kontrolle",
                schritte: [
                    "1. Du hast Side Control oder Kesa-gatame",
                    "2. Greife seinen nahen Ärmel hoch",
                    "3. Greife anderen Ärmel über seinen Kopf",
                    "4. Positioniere Unterarme an Hals",
                    "5. Presse zusammen",
                    "6. Finalisiere Würge"
                ],
                details: "Von Seite möglich! Asymmetrischer Winkel.",
                videotimestamp: "1:45"
            },
            {
                name: "Von Gegners Guard - Von oben (Oberlage)",
                position: "Du bist in seiner Guard, würgst von oben",
                schritte: [
                    "1. Gegner hat dich in Guard",
                    "2. Greife beide Ärmel hoch",
                    "3. Stehe auf oder knie hoch",
                    "4. Unterarme an Hals positionieren",
                    "5. Presse runter/zusammen",
                    "6. Partner klopft ab"
                ],
                details: "Von Guard gefährlich! Viele erwarten Gi-Würge nicht von dort.",
                videotimestamp: "3:15"
            },
            {
                name: "Übergang von gescheitertem Armlock (Oberlage)",
                position: "Armlock klappt nicht, wechsle zu Würge",
                schritte: [
                    "1. Du versuchst Armlock (z.B. Juji-gatame)",
                    "2. Gegner verteidigt Arm gut",
                    "3. Du hast bereits Ärmel-Griffe vom Armlock!",
                    "4. Wechsle zu Sode-guruma-jime",
                    "5. Positioniere um zu Würge",
                    "6. Finalisiere"
                ],
                details: "Clever! Ärmel-Griffe vom Armlock-Versuch zu Würge umnutzen.",
                videotimestamp: "5:00"
            },
            {
                name: "Als Setup/Ablenkung (Oberlage)",
                position: "Würge zwingt Reaktion",
                schritte: [
                    "1. Du hast Kontrolle über Gegner",
                    "2. Setze Sode-guruma-jime an (nicht voll)",
                    "3. Gegner reagiert - verteidigt Hals",
                    "4. Nutze Reaktion für andere Technik",
                    "5. Z.B. Armlock, Mount-Verbesserung, etc.",
                    "6. Oder finalisiere Würge wenn Chance"
                ],
                details: "Fortgeschritten! Ärmel-Würge als Drohung/Setup.",
                videotimestamp: "6:30"
            },
            {
                name: "Von hinten - Ärmel über Schulter (Oberlage)",
                position: "Back Control mit Ärmeln",
                schritte: [
                    "1. Du hast Back Control",
                    "2. Statt Hadaka-jime: Greife Ärmel",
                    "3. Ziehe Ärmel über/an seinen Hals",
                    "4. Unterarme würgen seitlich",
                    "5. Hooks kontrollieren",
                    "6. Finalisiere"
                ],
                details: "Alternative zu Hadaka-jime mit Gi-Nutzung!",
                videotimestamp: "8:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Ärmel-Griffe Lernen (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "Bis korrekte Griffe",
                    sets: "25 Wiederholungen",
                    fokus: "ÄRMEL greifen (nicht Kragen!), hoch an Ärmeln, Unterarm-Positionierung",
                    wiederholungen: 25
                },
                {
                    phase: "Von Mount (Woche 4-6)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "30 Wiederholungen",
                    fokus: "Von Mount sauber ansetzen, Unterarm-Druck entwickeln",
                    wiederholungen: 30
                },
                {
                    phase: "Verschiedene Positionen (Woche 7-10)",
                    intensität: "Partner 40%",
                    dauer: "Variable",
                    sets: "15 pro Position",
                    fokus: "Von Mount, Side Control, Guard - Vielseitigkeit",
                    wiederholungen: 45
                },
                {
                    phase: "Gegen Verteidigung (Woche 11-13)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Ärmel-Griffe gegen Widerstand bekommen",
                    wiederholungen: 20
                },
                {
                    phase: "Live (Woche 14+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Sode-guruma-jime opportunistisch im Gi-Randori",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Ärmel-Griff Drill",
                    beschreibung: "Eigenes Gi: Übe Ärmel hochgreifen, beide Seiten, schnell und präzise",
                    dauer: "15 Min",
                    wiederholungen: "100x",
                    fokus: "Griff-Geschwindigkeit und Position"
                },
                {
                    übung: "Unterarm-Druck mit Kissen",
                    beschreibung: "Großes Kissen: Simuliere Unterarme gegen Hals pressen",
                    dauer: "10 Min",
                    wiederholungen: "40x",
                    fokus: "Druck-Gefühl und Kraft"
                },
                {
                    übung: "Grip Strength - Ärmel",
                    beschreibung: "Halte Ärmel fest (oder Handtuch), hänge Gewicht, halte 30 Sek",
                    dauer: "10 Min",
                    wiederholungen: "6x30 Sek",
                    fokus: "Kraft um Ärmel festzuhalten"
                },
                {
                    übung: "Armposition-Drill",
                    beschreibung: "Mit Stab/Besenstiel: Simuliere kreisförmige Position um Kopf (Guruma)",
                    dauer: "10 Min",
                    wiederholungen: "30x",
                    fokus: "Bewegungsmuster"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: ÄRMEL greifen, nicht Kragen! (Sode = Ärmel)",
                "✓ Hoch an Ärmeln greifen demonstrieren",
                "✓ Unterarme an Hals positionieren zeigen",
                "✓ 'Guruma' (Rad) erklären - kreisförmige Anordnung",
                "✓ Von 1-2 Positionen (Mount, Guard oder Side Control)",
                "✓ Sofort loslassen bei Abklopfen",
                "✓ Unterschied zu Kragen-Würgen erklären"
            ],
            tipps: [
                "KRITISCH: Betone dass es ÄRMEL-Würge ist, nicht Kragen!",
                "Sode = Ärmel, Guruma = Rad/Wheel",
                "Erkläre: 'Unterarme bilden Rad um Kopf/Hals'",
                "Zeige von Mount (am klarsten)",
                "Demonstriere auch von Guard - zeigt Vielseitigkeit",
                "Weniger bekannt - erkläre Konzept gut!",
                "Funktioniert nur mit Gi (Ärmel nötig)"
            ]
        },

        varianten: [
            {
                name: "Kata-guruma-jime (verwandt)",
                unterschied: "Schulter-Rad-Würger, ähnliches Konzept",
                wann: "Andere Position aber ähnliches Prinzip"
            },
            {
                name: "Ryo-te-jime (verwandt)",
                unterschied: "Beide Hände würgen, aber direkt",
                wann: "Andere Technik"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Unterarm-Druck kann sehr stark sein - kontrolliert!",
                "⚠️ SOFORT loslassen bei Abklopfen!",
                "⚠️ Blutwürger - Partner kann bewusstlos werden!",
                "⚠️ Mit Anfängern vorsichtig - unbekannte Technik überrascht"
            ]
        }
    },

    {
        id: "sankaku-jime",
        name: "Sankaku-jime",
        nameDE: "Dreieck-Würger / Triangle Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Deine Beine bilden Dreieck um Gegners Hals und einen Arm - würgen mit Beinen und eigenem Arm.",
            kontrolle: [
                "Ein Bein über Gegners Schulter/Nacken",
                "Anderes Bein hakt ein (Knie in Kniekehle des ersten Beins)",
                "Bildet Dreieck (Sankaku) um Hals + einen Arm",
                "Gegners eigene Schulter würgt eine Seite seines Halses",
                "Dein Bein würgt andere Seite",
                "Enge zusammenziehen (squeeze)"
            ],
            beinarbeit: [
                "DIE zentrale Technik - BEINE sind die Würge!",
                "Ein Bein über Nacken, anderes hakt ein",
                "Knöchel in Kniekehle",
                "Hüfte angewinkelt",
                "Squeeze mit Beinen + Hüfte runterziehen",
                "Wie eine Schlange die zusammenzieht"
            ],
            schlüsselpunkte: [
                "Sankaku = Dreieck (Triangle)",
                "WÜRGER mit BEINEN (nicht mit Händen!)",
                "Unterschied zu Sankaku-GATAME (das ist ARMLOCK!)",
                "Eine der wichtigsten modernen Würgetechniken",
                "Funktioniert mit und ohne Gi",
                "Sehr kraftvoll wenn richtig",
                "Oft von Guard (du unten)"
            ]
        },

        fehler: [
            "❌ Bein nicht über Nacken, nur Schulter → Kein Druck auf Hals",
            "❌ Knöchel nicht eingehakt → Dreieck öffnet sich",
            "❌ Zu flacher Winkel → Ineffektiv",
            "❌ Nicht zusammenziehen → Schwache Würge",
            "❌ Falscher Arm im Dreieck → Suboptimal",
            "❌ Verwechslung mit Sankaku-gatame (Armlock) → Klarheit fehlt!"
        ],

        situationen: [
            {
                name: "Von Guard - Klassisch (Unterlage)",
                position: "Du liegst unten in Guard",
                schritte: [
                    "1. Du hast Gegner in deiner Closed Guard",
                    "2. Öffne Guard, kontrolliere einen Arm (z.B. rechts)",
                    "3. Schwinge linkes Bein über seinen Nacken/Schulter",
                    "4. Rechtes Bein geht hinter seinen Kopf",
                    "5. Hake rechten Knöchel in linke Kniekehle ein",
                    "6. Dreieck ist geschlossen!",
                    "7. Ziehe seinen Kopf runter, squeeze Beine zusammen",
                    "8. Seine eigene Schulter würgt eine Seite, dein Bein die andere",
                    "9. Partner klopft ab in Sekunden - sofort loslassen!"
                ],
                details: "Klassischste Anwendung! Von Guard ist Sankaku-jime König.",
                videotimestamp: "0:00"
            },
            {
                name: "Von Gegners Guard Pass Versuch (Unterlage)",
                position: "Gegner versucht zu passen, du fängst ab",
                schritte: [
                    "1. Du in Guard, Gegner steht auf zum Passen",
                    "2. Er versucht durchzukommen",
                    "3. Fange einen Arm ab",
                    "4. Schwinge Bein hoch über Nacken",
                    "5. Schließe Dreieck",
                    "6. Finalisiere"
                ],
                details: "Konter gegen Guard Pass! Sehr häufig und effektiv.",
                videotimestamp: "2:00"
            },
            {
                name: "Von gescheitertem Armlock - Juji-gatame (Unterlage)",
                position: "Juji-gatame klappt nicht, wechsle zu Sankaku-jime",
                schritte: [
                    "1. Du versuchst Juji-gatame (Armlock)",
                    "2. Gegner zieht Arm raus",
                    "3. Beine sind schon in guter Position!",
                    "4. Adjustiere zu Dreieck",
                    "5. Ein Bein über Nacken, andere einhaken",
                    "6. Finalisiere Sankaku-jime"
                ],
                details: "Fließender Übergang! Juji-gatame und Sankaku-jime kombinieren sich perfekt.",
                videotimestamp: "4:00"
            },
            {
                name: "Von Mount - Inverted/Umgekehrt (Oberlage)",
                position: "Du auf Mount, rollst zu Dreieck",
                schritte: [
                    "1. Du hast Mount",
                    "2. Gegner versucht dich abzuwerfen",
                    "3. Nutze Bewegung: Schwinge Bein über Nacken",
                    "4. Rolle zur Seite",
                    "5. Lande in Sankaku-Position",
                    "6. Schließe Dreieck",
                    "7. Finalisiere"
                ],
                details: "Dynamisch! Von oben zu Sankaku - fortgeschritten.",
                videotimestamp: "5:45"
            },
            {
                name: "Von Arm Drag - Seitlich (Variable)",
                position: "Nach Arm ziehen zu Dreieck",
                schritte: [
                    "1. Du ziehst Gegners Arm vorbei (Arm Drag)",
                    "2. Komme zu seinem Rücken oder Seite",
                    "3. Schwinge Beine für Dreieck",
                    "4. Schließe um Hals + Arm",
                    "5. Finalisiere"
                ],
                details: "Opportunistisch aus Arm Drag! Kreativ.",
                videotimestamp: "7:15"
            },
            {
                name: "Von Side Control Bottom - Reverse (Unterlage)",
                position: "Du unten in Side Control, drehst zu Dreieck",
                schritte: [
                    "1. Gegner hat Side Control über dich",
                    "2. Du drehst dich, schaffst Raum",
                    "3. Fange Arm oder Kopf",
                    "4. Schwinge Beine hoch",
                    "5. Schließe Dreieck",
                    "6. Finalisiere"
                ],
                details: "Escape zu Submission! Aus schlechter Position zu Würger.",
                videotimestamp: "9:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Dreieck-Form Lernen (Woche 1-4)",
                    intensität: "Partner passiv",
                    dauer: "Bis Form korrekt",
                    sets: "40 Wiederholungen",
                    fokus: "Bein über Nacken, Knöchel einhaken, Dreieck schließen - KRITISCH!",
                    wiederholungen: 40
                },
                {
                    phase: "Von Guard (Woche 5-8)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "35 Versuche",
                    fokus: "Von Closed/Open Guard klassisch ansetzen",
                    wiederholungen: 35
                },
                {
                    phase: "Verschiedene Entries (Woche 9-13)",
                    intensität: "Partner 50%",
                    dauer: "Alle Situationen",
                    sets: "10 pro Entry",
                    fokus: "Von Guard, nach Juji-gatame, von Mount, Arm Drag, Side Control",
                    wiederholungen: 60
                },
                {
                    phase: "Gegen Verteidigung (Woche 14-17)",
                    intensität: "Partner 70%",
                    dauer: "Variable",
                    sets: "25 Versuche",
                    fokus: "Dreieck schließen gegen aktive Verteidigung, adjustieren",
                    wiederholungen: 25
                },
                {
                    phase: "Live Rolling (Woche 18+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Sankaku-jime im freien Training - IMMER sofort loslassen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Dreieck-Form mit Kissen",
                    beschreibung: "Großes Kissen als Gegner: Übe Beine zu Dreieck schließen",
                    dauer: "20 Min täglich",
                    wiederholungen: "50x beide Seiten",
                    fokus: "Muskelgedächtnis für Dreieck-Form - ESSENTIELL!"
                },
                {
                    übung: "Hüft-Mobilität",
                    beschreibung: "Hip Flexibility Drills, Butterfly Stretch, Frog Stretch",
                    dauer: "15 Min täglich",
                    wiederholungen: "3x45 Sek pro Übung",
                    fokus: "Flexibilität für hohe Beine"
                },
                {
                    übung: "Bein-Squeeze Kraft",
                    beschreibung: "Kissen zwischen Beinen, squeeze 30 Sek, entspanne, wiederhole",
                    dauer: "10 Min",
                    wiederholungen: "8x30 Sek",
                    fokus: "Kraft um Dreieck zu halten"
                },
                {
                    übung: "Core Strength - Crunch Varianten",
                    beschreibung: "Bicycle Crunches, Leg Raises, V-Ups",
                    dauer: "15 Min",
                    wiederholungen: "3x20",
                    fokus: "Core-Kraft für Hüfte runterziehen"
                },
                {
                    übung: "Beinposition-Drill",
                    beschreibung: "Auf Rücken: Übe Bein über imaginären Nacken schwingen",
                    dauer: "10 Min",
                    wiederholungen: "100x",
                    fokus: "Geschwindigkeit und Präzision"
                },
                {
                    übung: "Mentale Visualisierung",
                    beschreibung: "Stelle dir alle Wege zu Sankaku vor, visualisiere Form",
                    dauer: "10 Min abends",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung und perfekte Form"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ KRITISCH: Als WÜRGER demonstrieren (Sankaku-JIME), nicht Armlock!",
                "✓ Bein über Nacken/Schulter zeigen",
                "✓ Dreieck-Form korrekt schließen (Knöchel in Kniekehle)",
                "✓ Squeeze demonstrieren (Beine zusammenziehen)",
                "✓ Von Guard zeigen (klassisch)",
                "✓ Unterschied zu Sankaku-GATAME erklären!",
                "✓ Sofort loslassen bei Abklopfen"
            ],
            tipps: [
                "ABSOLUT KRITISCH: Sankaku-JIME (Würger) vs Sankaku-GATAME (Armlock) - UNTERSCHIED KLAR MACHEN!",
                "Sankaku-JIME = Triangle CHOKE (mit BEINEN würgen)",
                "Sankaku-GATAME = Triangle ARMLOCK (Arm strecken)",
                "Beide nutzen Dreieck-Form, aber VERSCHIEDENE Techniken!",
                "Zeige von Guard (klassischste Position)",
                "Demonstriere Dreieck-Form sehr deutlich",
                "Erkläre: 'Sankaku = Dreieck, Beine bilden Dreieck'",
                "Betone: 'Gegners eigene Schulter würgt eine Seite'",
                "Moderne sehr wichtige Technik - gut erklären!",
                "Auch bekannt als Triangle Choke (BJJ/MMA)"
            ]
        },

        varianten: [
            {
                name: "Arm-In Triangle",
                unterschied: "Gegners Arm ist im Dreieck (klassisch - was wir zeigten)",
                wann: "Standard-Version"
            },
            {
                name: "Arm-Out Triangle (No-Arm Triangle)",
                unterschied: "Kein Arm im Dreieck, nur Kopf - schwieriger aber möglich",
                wann: "Wenn Arm-In nicht möglich"
            },
            {
                name: "Inverted Triangle",
                unterschied: "Von oben statt unten",
                wann: "Von Mount oder Top Position"
            },
            {
                name: "Sankaku-gatame",
                unterschied: "ARMLOCK mit Dreieck - ANDERE Technik! (Kansetsu-waza, nicht Shime-waza!)",
                wann: "Verwandt aber völlig anderes Ziel"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️⚠️⚠️ Blutwürger - Partner wird bewusstlos in 5-8 Sekunden!",
                "⚠️ SOFORT loslassen bei Abklopfen - KEINE Verzögerung!",
                "⚠️ Sehr kraftvoll - kontrolliert würgen!",
                "⚠️ Partner kann nicht verbal abklopfen - achte auf Hand-Tapping!",
                "⚠️ Bei Bewusstlosigkeit: Sofort loslassen, Beine öffnen, Seitenlage!",
                "⚠️ NIEMALS halten nachdem Partner abklopft!",
                "⚠️ Mit Anfängern: Langsam ansetzen, viel kommunizieren",
                "⚠️ Kann auch Nacken belasten - sauber arbeiten!"
            ]
        }
    },

    {
        id: "tsukkomi-jime",
        name: "Tsukkomi-jime",
        nameDE: "Stoß-Würger / Thrust Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Von oben, eine oder beide Hände stoßen/drücken Kragen tief in Gegners Hals - direkter Druck.",
            kontrolle: [
                "Du bist über Gegner (Mount, Guard, Side Control)",
                "Eine oder beide Hände greifen seinen Kragen",
                "WICHTIG: Fäuste/Knöchel stoßen TIEF und DIREKT in Hals",
                "Nicht ziehen - DRÜCKEN/STOßEN!",
                "Daumen können innen oder außen sein",
                "Gewicht des Körpers verstärkt Druck"
            ],
            beinarbeit: [
                "Meist von Mount (beste Position)",
                "Oder von Gegners Guard (du oben)",
                "Oder von Side Control",
                "Gewicht nach vorne für maximalen Druck",
                "Stabile Basis wichtig",
                "Knie/Beine kontrollieren Gegner"
            ],
            schlüsselpunkte: [
                "Tsukkomi = Stoßen/Eindringen/Thrust",
                "DIREKTER Druck in Hals, nicht seitlich",
                "Unterschied zu ziehenden Würgen - dies drückt!",
                "Sehr aggressive, direkte Technik",
                "Kann Luftwürger UND Blutwürger sein",
                "Funktioniert nur mit Gi (Kragen nötig)",
                "Weniger technisch, mehr direkter Kraft"
            ]
        },

        fehler: [
            "❌ Ziehen statt Drücken → Wäre andere Technik",
            "❌ Zu flacher Winkel → Kein Druck auf Hals",
            "❌ Nicht tief genug → Ineffektiv",
            "❌ Zu viel auf Luftröhre (frontal) → Gefährlich, vermeide!",
            "❌ Gewicht nicht nach vorne → Schwache Würge",
            "❌ Position verloren während Setup → Gegner escaped"
        ],

        situationen: [
            {
                name: "Von Mount - Einhändig (Oberlage)",
                position: "Du sitzt auf Gegner",
                schritte: [
                    "1. Du hast Mount (Tate-shiho-gatame)",
                    "2. Greife mit einer Hand tief in einen Kragen",
                    "3. Faust/Knöchel zeigt zu seinem Hals",
                    "4. STOßE Faust tief in seine Halsseite",
                    "5. Andere Hand kann auf Boden stützen oder zweiten Kragen",
                    "6. Lehne Gewicht nach vorne über die stoßende Faust",
                    "7. Direkter Druck auf Karotis",
                    "8. Partner klopft ab - sofort loslassen!"
                ],
                details: "Von Mount mit einer Hand - direkter Druck!",
                videotimestamp: "0:00"
            },
            {
                name: "Von Mount - Beidhändig (Oberlage)",
                position: "Du sitzt auf Gegner, beide Hände drücken",
                schritte: [
                    "1. Du hast Mount",
                    "2. Greife beide Kragen (beide Seiten)",
                    "3. Beide Fäuste tief",
                    "4. STOßE beide Fäuste gleichzeitig in Hals (beidseitig)",
                    "5. Lehne Gewicht nach vorne",
                    "6. Beide Halsseiten werden gewürgt",
                    "7. Partner klopft sehr schnell ab"
                ],
                details: "Beidhändige Version - sehr kraftvoll! Doppelter Druck.",
                videotimestamp: "1:30"
            },
            {
                name: "Von Gegners Guard - Von oben drücken (Oberlage)",
                position: "Du kniest in seiner Guard",
                schritte: [
                    "1. Gegner hat dich in Guard",
                    "2. Greife Kragen (ein oder beide)",
                    "3. Stehe auf oder knie hoch",
                    "4. STOßE Fäuste runter in seinen Hals",
                    "5. Gewicht nach unten",
                    "6. Partner klopft ab"
                ],
                details: "Von Guard möglich - Druck von oben nach unten!",
                videotimestamp: "3:00"
            },
            {
                name: "Von Side Control - Seitlich (Oberlage)",
                position: "Von Seite mit Druck",
                schritte: [
                    "1. Du hast Side Control",
                    "2. Greife nahen Kragen",
                    "3. STOßE Faust in Halsseite",
                    "4. Gewicht nach unten/über ihn",
                    "5. Finalisiere"
                ],
                details: "Von Seite - seitlicher Winkel.",
                videotimestamp: "4:30"
            },
            {
                name: "Als Übergang von Kesa-gatame (Oberlage)",
                position: "Kesa zu Würge",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Greife Kragen",
                    "3. Adjustiere Position leicht",
                    "4. STOßE in Hals",
                    "5. Finalisiere Tsukkomi-jime"
                ],
                details: "Von Kesa opportunistisch!",
                videotimestamp: "6:00"
            },
            {
                name: "Nach Guard Pass - Direkt würgen (Oberlage)",
                position: "Sofort nach dem Passen",
                schritte: [
                    "1. Du passt Gegners Guard",
                    "2. Kommst zu Mount oder Side Control",
                    "3. SOFORT Kragen greifen",
                    "4. STOßE für Tsukkomi-jime",
                    "5. Gegner hat keine Zeit zu reagieren",
                    "6. Finalisiere"
                ],
                details: "Schnelle Ausführung nach Pass! Timing wichtig.",
                videotimestamp: "7:15"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Stoß-Bewegung Lernen (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "Bis Bewegung klar",
                    sets: "25 Wiederholungen",
                    fokus: "STOßEN nicht Ziehen! Faust tief, direkter Druck",
                    wiederholungen: 25
                },
                {
                    phase: "Von Mount - Einhändig (Woche 3-5)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "30 Versuche",
                    fokus: "Eine Hand tief stoßen, Gewicht nach vorne",
                    wiederholungen: 30
                },
                {
                    phase: "Von Mount - Beidhändig (Woche 6-8)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "25 Versuche",
                    fokus: "Beide Hände gleichzeitig - doppelter Druck",
                    wiederholungen: 25
                },
                {
                    phase: "Verschiedene Positionen (Woche 9-11)",
                    intensität: "Partner 40%",
                    dauer: "Variable",
                    sets: "15 pro Position",
                    fokus: "Von Mount, Guard, Side Control - Vielseitigkeit",
                    wiederholungen: 45
                },
                {
                    phase: "Gegen Verteidigung (Woche 12-14)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Tiefen Griff und Druck gegen Kragen-Verteidigung",
                    wiederholungen: 20
                },
                {
                    phase: "Live (Woche 15+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Tsukkomi-jime opportunistisch im Gi-Randori",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Stoß-Drill mit Gi",
                    beschreibung: "Eigenes Gi: Übe Faust tief in Kragen stoßen, beide Hände",
                    dauer: "15 Min",
                    wiederholungen: "100x pro Hand",
                    fokus: "Stoß-Bewegung automatisieren"
                },
                {
                    übung: "Gewicht-nach-vorne-Drill",
                    beschreibung: "Planks mit Gewicht nach vorne schieben",
                    dauer: "10 Min",
                    wiederholungen: "5x30 Sek",
                    fokus: "Kraft und Balance für Druck"
                },
                {
                    übung: "Faust-Druck mit Kissen",
                    beschreibung: "Kissen an Wand, drücke Faust tief rein, halte",
                    dauer: "10 Min",
                    wiederholungen: "40x",
                    fokus: "Druck-Gefühl"
                },
                {
                    übung: "Grip Strength - Kragen",
                    beschreibung: "Halte Kragen fest, hänge Gewicht",
                    dauer: "10 Min",
                    wiederholungen: "6x30 Sek",
                    fokus: "Kraft für festen Griff"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: STOßEN demonstrieren, nicht ziehen!",
                "✓ Faust/Knöchel tief in Kragen zeigen",
                "✓ Direkten Druck in Hals demonstrieren",
                "✓ Von Mount zeigen (am klarsten)",
                "✓ Ein- und beidhändige Version zeigen",
                "✓ Gewicht nach vorne lehnen demonstrieren",
                "✓ Sofort loslassen bei Abklopfen"
            ],
            tipps: [
                "KRITISCH: Erkläre 'Tsukkomi = Stoßen/Thrust'!",
                "Demonstriere Unterschied: Ziehen vs Drücken",
                "Zeige einhändige Version von Mount (grundlegend)",
                "Zeige auch beidhändige Version (sehr effektiv)",
                "Betone: Direkter Druck, nicht seitlich!",
                "Weniger bekannt - erkläre Konzept gut",
                "VORSICHT: Nicht zu viel frontal auf Luftröhre - seitlicher Druck besser!"
            ]
        },

        varianten: [
            {
                name: "Kata-te-jime (verwandt)",
                unterschied: "Einhändiger Würger, ähnliches Prinzip",
                wann: "Eine Hand statt beide"
            },
            {
                name: "Morote-jime",
                unterschied: "Beidhändiger Würger - kann ähnlich sein",
                wann: "Beide Hände, direkter Druck"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ VORSICHT: Kann auf Luftröhre drücken - gefährlich!",
                "⚠️ Seitlich auf Karotis drücken, NICHT frontal auf Luftröhre!",
                "⚠️ SOFORT loslassen bei Abklopfen!",
                "⚠️ Direkter Druck - kann schmerzhaft sein, kontrolliert!",
                "⚠️ Mit Anfängern extra vorsichtig - aggressive Technik!"
            ]
        }
    },

    {
        id: "koshi-jime",
        name: "Koshi-jime",
        nameDE: "Hüft-Würger / Hip Choke",
        kategorie: "Shime-waza",
        videoUrl: "",

        beschreibung: {
            position: "Deine Hüfte drückt gegen Gegners Hals während Kragen-Griffe würgen - Kombination aus Kragen und Hüft-Druck.",
            kontrolle: [
                "Du greifst Gegners Kragen (eine oder beide Hände)",
                "Deine HÜFTE presst gegen seinen Hals/Kopf",
                "Kombination: Kragen zieht + Hüfte drückt = Würge",
                "Meist von Seite oder schräg",
                "Gewicht über Gegner",
                "Hüfte ist zentrales Element!"
            ],
            beinarbeit: [
                "Variable Position - oft von Seite",
                "Oder von verdrehten Positionen",
                "Ein Knie oft neben seinem Kopf",
                "Hüfte/Becken presst auf Hals",
                "Gewicht auf Gegner",
                "Balance wichtig"
            ],
            schlüsselpunkte: [
                "Koshi = Hüfte/Becken",
                "HÜFTE ist Hauptelement - drückt!",
                "Kombination aus Gi-Griff und Körperdruck",
                "Unkonventionelle Würge - überrascht Gegner",
                "Weniger bekannt",
                "Nur mit Gi",
                "Oft opportunistisch aus komischen Positionen"
            ]
        },

        fehler: [
            "❌ Hüfte nicht auf Hals → Würge fehlt das Hauptelement!",
            "❌ Nur Kragen ziehen ohne Hüftdruck → Ineffektiv",
            "❌ Falscher Winkel → Kein Druck",
            "❌ Zu weit vom Gegner → Hebel fehlt",
            "❌ Balance verloren → Fällst runter",
            "❌ Verwechslung mit normalen Kragen-Würgen"
        ],

        situationen: [
            {
                name: "Von Side Control - Knie bei Kopf (Oberlage)",
                position: "Seitlich mit Hüft-Druck",
                schritte: [
                    "1. Du hast Side Control",
                    "2. Greife Gegners Kragen (eine oder beide Hände)",
                    "3. Positioniere dich so dass dein Knie/Hüfte neben seinem Kopf ist",
                    "4. Ziehe Kragen",
                    "5. Gleichzeitig: Drücke Hüfte/Becken gegen seinen Hals",
                    "6. Kombination aus Ziehen und Drücken würgt",
                    "7. Partner klopft ab - sofort loslassen!"
                ],
                details: "Von Side Control - klassische Anwendung!",
                videotimestamp: "0:00"
            },
            {
                name: "Von Kesa-gatame - Hüfte dreht (Oberlage)",
                position: "Kesa mit Hüft-Einsatz",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Greife seinen Kragen",
                    "3. Drehe deine Hüfte so dass sie auf seinen Hals kommt",
                    "4. Ziehe Kragen + drücke Hüfte",
                    "5. Finalisiere Koshi-jime"
                ],
                details: "Von Kesa opportunistisch zu Hüft-Würger!",
                videotimestamp: "1:45"
            },
            {
                name: "Von Nord-Süd - Reverse Koshi-jime (Oberlage)",
                position: "Nord-Süd Position mit Hüfte",
                schritte: [
                    "1. Du bist in Nord-Süd (Kopf zu seinen Füßen)",
                    "2. Greife Kragen",
                    "3. Deine Hüfte ist schon nahe seinem Kopf/Hals",
                    "4. Drücke Hüfte runter auf Hals",
                    "5. Ziehe Kragen",
                    "6. Finalisiere"
                ],
                details: "Von Nord-Süd - ungewöhnlicher Winkel!",
                videotimestamp: "3:15"
            },
            {
                name: "Nach gescheitertem Übergang (Oberlage)",
                position: "Aus Scramble",
                schritte: [
                    "1. Du wechselst Position (z.B. zu Mount)",
                    "2. Etwas schief gelaufen, komische Position",
                    "3. Deine Hüfte ist nahe seinem Hals",
                    "4. Opportunistisch: Greife Kragen",
                    "5. Nutze Hüft-Position",
                    "6. Finalisiere Koshi-jime"
                ],
                details: "Opportunistisch! Koshi-jime oft aus Scrambles.",
                videotimestamp: "5:00"
            },
            {
                name: "Von Turtle Defense - Seitlich (Oberlage)",
                position: "Gegner in Turtle, du seitlich",
                schritte: [
                    "1. Gegner in Turtle",
                    "2. Du seitlich neben ihm",
                    "3. Greife Kragen",
                    "4. Drücke Hüfte gegen Halsseite",
                    "5. Kombiniere für Würge",
                    "6. Finalisiere"
                ],
                details: "Von Turtle seitlich - unerwarteter Winkel!",
                videotimestamp: "6:30"
            },
            {
                name: "Als Konter gegen Escape (Oberlage)",
                position: "Gegner escaped, du nutzt Hüfte",
                schritte: [
                    "1. Du hast Kontrolle, Gegner escaped",
                    "2. Während Bewegung: Deine Hüfte nahe seinem Hals",
                    "3. Greife schnell Kragen",
                    "4. Drücke Hüfte",
                    "5. Nutze seine Bewegung gegen ihn",
                    "6. Finalisiere"
                ],
                details: "In Scrambles! Situationsbewusstsein wichtig.",
                videotimestamp: "8:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Hüft-Druck Verstehen (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "Bis Konzept klar",
                    sets: "20 Wiederholungen",
                    fokus: "Hüfte auf Hals positionieren, Kombination Ziehen+Drücken",
                    wiederholungen: 20
                },
                {
                    phase: "Von Side Control (Woche 4-6)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "25 Versuche",
                    fokus: "Von Side Control klassisch ansetzen",
                    wiederholungen: 25
                },
                {
                    phase: "Von verschiedenen Winkeln (Woche 7-10)",
                    intensität: "Partner 40%",
                    dauer: "Variable",
                    sets: "15 pro Position",
                    fokus: "Kesa-gatame, Nord-Süd, Turtle - Vielseitigkeit",
                    wiederholungen: 45
                },
                {
                    phase: "Opportunistisch in Scrambles (Woche 11-13)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Situationen erkennen wo Hüfte nahe Hals ist",
                    wiederholungen: 20
                },
                {
                    phase: "Live (Woche 14+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Koshi-jime opportunistisch im Randori erkennen",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Hüft-Position mit Kissen",
                    beschreibung: "Kissen als Kopf/Hals, übe Hüfte dagegen drücken + Kragen ziehen",
                    dauer: "15 Min",
                    wiederholungen: "40x",
                    fokus: "Hüft-Positionierung und Druck"
                },
                {
                    übung: "Hüft-Mobilität",
                    beschreibung: "Hip Circles, Kosaken Squats, Hip Flexor Stretches",
                    dauer: "15 Min täglich",
                    wiederholungen: "3x30 Sek",
                    fokus: "Beweglichkeit für Hüft-Positionierung"
                },
                {
                    übung: "Balance-Drill",
                    beschreibung: "Auf einem Bein, lehne Gewicht zur Seite, halte Balance",
                    dauer: "10 Min",
                    wiederholungen: "10x15 Sek pro Seite",
                    fokus: "Balance für seitliche Hüft-Würge"
                },
                {
                    übung: "Kragengriff-Drill",
                    beschreibung: "Mit eigenem Gi: Übe Kragen greifen in komischen Winkeln",
                    dauer: "10 Min",
                    wiederholungen: "50x",
                    fokus: "Griff in ungewöhnlichen Positionen"
                },
                {
                    übung: "Mentale Visualisierung",
                    beschreibung: "Stelle dir Situationen vor wo Hüfte nahe Hals kommt",
                    dauer: "10 Min",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung - wichtig für opportunistische Technik!"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: HÜFTE als Hauptelement demonstrieren!",
                "✓ Kombination zeigen: Kragen ziehen + Hüfte drücken",
                "✓ Von 1-2 Positionen (Side Control, Kesa-gatame oder Nord-Süd)",
                "✓ Hüft-Position klar zeigen",
                "✓ Erklären: 'Koshi = Hüfte'",
                "✓ Sofort loslassen bei Abklopfen"
            ],
            tipps: [
                "KRITISCH: Betone dass HÜFTE das zentrale Element ist!",
                "Koshi = Hüfte/Becken",
                "Erkläre: 'Kombination aus Gi-Griff und Körperdruck'",
                "Zeige von Side Control (am verständlichsten)",
                "Demonstriere wie Hüfte auf Hals drückt",
                "Weniger bekannt - erkläre Konzept sehr gut!",
                "Zeige opportunistische Natur - aus komischen Positionen",
                "Unterscheidet sich von reinen Kragen-Würgen durch Hüft-Einsatz"
            ]
        },

        varianten: [
            {
                name: "Kesa-gatame Choke (verwandt)",
                unterschied: "Von Kesa mit Hüftdruck, ähnlich",
                wann: "Spezifisch von Kesa-gatame"
            },
            {
                name: "Reverse Koshi-jime",
                unterschied: "Von Nord-Süd oder umgekehrten Positionen",
                wann: "Anderer Winkel"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Kombination aus Druck - kontrolliert arbeiten!",
                "⚠️ Hüftdruck kann unerwartet stark sein!",
                "⚠️ SOFORT loslassen bei Abklopfen!",
                "⚠️ Nacken-Belastung möglich - sauber positionieren!",
                "⚠️ Mit Anfängern vorsichtig - ungewöhnliche Technik!"
            ]
        }
    }
];

// Export für Verwendung in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SHIME_WAZA };
}

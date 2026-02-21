// Datenbank für alle Kansetsu-Waza (Armhebel)
// Wird in techniken-data.js integriert

const KANSETSU_WAZA = [
    {
        id: "juji-gatame",
        name: "Juji-gatame",
        nameDE: "Armstreckhebel / Kreuz-Armhebel",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/OWgSOlCuMXw", // Kodokan Official (Ude-hishigi-juji-gatame)

        beschreibung: {
            position: "Du kontrollierst den gestreckten Arm des Gegners zwischen deinen Beinen, sein Ellenbogen zeigt nach oben, du hebst deine Hüfte.",
            kontrolle: [
                "Beide Hände greifen Gegners Handgelenk/Unterarm",
                "Seine Hand wird zu deiner Brust gezogen",
                "Dein Daumen zeigt in Richtung seines Daumens (wichtig!)",
                "Deine Knie pressen gegen seine Schultern/Kopf",
                "Sein Ellenbogen zeigt nach oben über dein Becken"
            ],
            beinarbeit: [
                "Ein Bein über seiner Brust/Bauch",
                "Ein Bein über seinem Gesicht/Hals",
                "Knie zusammenpressen",
                "Füße sind zusammen oder überkreuzt",
                "Hüfte wird angehoben für Hebel"
            ],
            schlüsselpunkte: [
                "Daumen-zu-Daumen Regel ist KRITISCH",
                "Ellenbogen muss über deine Hüfte gestreckt werden",
                "Kontrolle des Handgelenks, nicht nur Hand",
                "Langsam und kontrolliert ansetzen - sehr gefährlich!",
                "Gegner MUSS abklopfen können - Hand frei lassen!"
            ]
        },

        fehler: [
            "❌ Falsche Daumenrichtung → Keine Hebelwirkung, Gegner kann drehen",
            "❌ Ellenbogen nicht über Hüfte → Kein Hebel auf Gelenk",
            "❌ Knie zu weit auseinander → Gegner zieht Arm raus",
            "❌ Zu schnell/ruckartig → VERLETZUNGSGEFAHR! Unsportlich!",
            "❌ Hand komplett festhalten → Gegner kann nicht abklopfen → Gefährlich!",
            "❌ Zu viel Kraft, zu wenig Technik → Ineffektiv und gefährlich"
        ],

        situationen: [
            {
                name: "Aus Oberlage - Mount/Kami-shiho (Klassisch)",
                position: "Du bist in Mount oder Kami-shiho Position",
                schritte: [
                    "1. Du hast Mount (Tate-shiho) oder Kami-shiho-gatame",
                    "2. Gegner schiebt dich mit gestreckten Armen weg (häufiger Fehler!)",
                    "3. Fange einen seiner gestreckten Arme mit beiden Händen",
                    "4. Kontrolliere sein Handgelenk fest",
                    "5. Schwinge ein Bein über seinen Kopf/Gesicht",
                    "6. Falle nach hinten/zur Seite",
                    "7. Lande in Juji-gatame Position, Knie zusammen",
                    "8. Überprüfe Daumenrichtung, dann hebe Hüfte LANGSAM"
                ],
                details: "Von Mount ist Juji-gatame einer der häufigsten Submissions. Gegner schiebt oft weg - das ist deine Chance!",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Unterlage - Closed Guard (Modern)",
                position: "Gegner in deiner Guard",
                schritte: [
                    "1. Gegner kniet/steht in deiner Closed Guard",
                    "2. Greife einen seiner Arme (Arm Drag oder direkt)",
                    "3. Öffne deine Guard",
                    "4. Schwinge ein Bein über seinen Kopf",
                    "5. Zweites Bein über seine Brust",
                    "6. Falle zur Seite mit Armkontrolle",
                    "7. Knie zusammen, Füße überkreuzen oder zusammen",
                    "8. Daumen-Check, Hüfte langsam heben"
                ],
                details: "Aus Guard ist Juji-gatame sehr häufig im modernen Judo/BJJ. Viele Varianten möglich!",
                videotimestamp: "1:15"
            },
            {
                name: "Übergang von Kesa-gatame",
                position: "Gegner versucht aus Kesa zu entkommen",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Gegner schiebt mit seinem freien Arm gegen dich (Escape-Versuch)",
                    "3. Fange diesen Arm mit beiden Händen",
                    "4. Halte Armkontrolle fest",
                    "5. Schwinge dein nahes Bein über seinen Kopf",
                    "6. Zweites Bein folgt über Körper",
                    "7. Drehe dich in Juji-gatame Position",
                    "8. Finalisiere: Knie zusammen, Hüfte hoch"
                ],
                details: "Klassischer Übergang! Wenn Kesa nicht hält, gehe zu Juji-gatame. Zeigt hohe Technik.",
                videotimestamp: "2:30"
            },
            {
                name: "Übergang von Yoko-shiho-gatame",
                position: "Gegner bridged und gibt Arm",
                schritte: [
                    "1. Du hältst Yoko-shiho-gatame",
                    "2. Gegner macht Bridge (Brücke) und schiebt gegen dich",
                    "3. Er überstreckt einen Arm (häufiger Fehler)",
                    "4. Fange den Arm sofort",
                    "5. Lasse Yoko-shiho los, konzentriere auf Arm",
                    "6. Schwinge Bein über Kopf",
                    "7. Rotiere in Juji-gatame",
                    "8. Abschließen"
                ],
                details: "Opportunistischer Juji-gatame - nutze Gegners Fehler aus!",
                videotimestamp: "3:45"
            },
            {
                name: "Übergang Stand-Boden - Flying Armbar",
                position: "Aus Stand direkt zu Juji-gatame (Fortgeschritten)",
                schritte: [
                    "1. Stand-Position, Gegner greift dich",
                    "2. Kontrolliere einen seiner Arme fest",
                    "3. Springe/schwinge hoch",
                    "4. Ein Bein über seine Schulter/Kopf",
                    "5. Zweites Bein um seine Hüfte/Rücken",
                    "6. Falle nach hinten während du Arm kontrollierst",
                    "7. Lande in Juji-gatame am Boden",
                    "8. Adjustiere Position, dann Hebel"
                ],
                details: "Spektakuläre Technik! Sehr schwierig, zeigt Meisterschaft. Nur für Fortgeschrittene!",
                videotimestamp: "5:00"
            },
            {
                name: "Aus Turtle - Rolling Armbar",
                position: "Gegner in Turtle/Vierfüßler",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Isoliere einen seiner Arme",
                    "3. Greife sein Handgelenk mit beiden Händen",
                    "4. Setze ein Bein über seinen Rücken/Schulter",
                    "5. Rolle über ihn/zur Seite",
                    "6. Nehme ihn mit in der Rolle",
                    "7. Lande in Juji-gatame Position",
                    "8. Finalisiere"
                ],
                details: "Von Turtle sehr effektiv! Die Rolle gibt Momentum und Überraschung.",
                videotimestamp: "6:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Technik Lernen (Woche 1-3)",
                    intensität: "Partner passiv, klopft ab bei leichtem Druck",
                    dauer: "Bis korrekte Ausführung",
                    sets: "20 Wiederholungen pro Seite",
                    fokus: "DAUMEN-REGEL lernen! Ellenbogen-Position, Hüftarbeit. LANGSAM!",
                    wiederholungen: 40
                },
                {
                    phase: "Verschiedene Entries (Woche 4-6)",
                    intensität: "Partner 20% Widerstand",
                    dauer: "Alle 6 Situationen üben",
                    sets: "10 Wiederholungen pro Situation",
                    fokus: "Von Mount, von Guard, von Kesa, von Yoko-shiho üben",
                    wiederholungen: 60
                },
                {
                    phase: "Gegen Verteidigung (Woche 7-10)",
                    intensität: "Partner 50% - verteidigt aktiv",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Armkontrolle gegen Widerstand, Verteidigung brechen",
                    wiederholungen: 20
                },
                {
                    phase: "Live Rolling (Woche 11+)",
                    intensität: "Partner 100% - voller Widerstand",
                    dauer: "Im Randori",
                    sets: "Unbegrenzt",
                    fokus: "Juji-gatame im freien Training landen, SICHER arbeiten!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Hüft-Escape Bewegung",
                    beschreibung: "Lege dich auf Rücken, Knie angewinkelt, hebe Hüfte hoch und halte. Simuliert Hebel-Bewegung",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x20 Reps",
                    fokus: "Hüftkraft für Hebel"
                },
                {
                    übung: "Juji-gatame Position mit Kissen",
                    beschreibung: "Großes Kissen als Arm-Simulation, übe komplette Position: Griff, Beine, Hüfte",
                    dauer: "15 Min",
                    wiederholungen: "30x beide Seiten",
                    fokus: "Bewegungsablauf internalisieren"
                },
                {
                    übung: "Daumen-Drill",
                    beschreibung: "Mit Gürtel/Stab: Übe Griff mit Daumen-zu-Daumen, wechsle Seiten",
                    dauer: "5 Min",
                    wiederholungen: "100x",
                    fokus: "Daumen-Regel automatisieren - KRITISCH!"
                },
                {
                    übung: "Beinkontrolle",
                    beschreibung: "Mit Kissen zwischen Knien: Übe Knie zusammenpressen, Füße überkreuzen",
                    dauer: "5 Min",
                    wiederholungen: "50x",
                    fokus: "Beinkontrolle für Armfixierung"
                },
                {
                    übung: "Mentale Visualisierung alle Entries",
                    beschreibung: "Stelle dir alle 6 Wege zu Juji-gatame vor, langsam und detailliert",
                    dauer: "10 Min abends",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung im Kampf"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ KRITISCH: Daumen-zu-Daumen Regel perfekt demonstrieren",
                "✓ Aus mindestens 3 verschiedenen Situationen zeigen",
                "✓ Langsam und kontrolliert ansetzen (Sicherheit!)",
                "✓ Ellenbogen korrekt über Hüfte positionieren",
                "✓ Beinkontrolle perfekt (Knie zusammen)",
                "✓ Partner kann jederzeit abklopfen",
                "✓ Erklären können WARUM Daumen-Regel wichtig ist"
            ],
            tipps: [
                "Juji-gatame ist DER wichtigste Armhebel - absolute Priorität!",
                "VORSICHT: Sehr verletzungsgefährlich! In Prüfung extra langsam!",
                "Zeige: Von Mount, von Guard, von Kesa (Minimum)",
                "Erkläre Daumen-Regel: 'Mein Daumen zu seinem Daumen für Außenrotation'",
                "Häufigster Fehler in Prüfungen: Falsche Daumenrichtung!",
                "Zeige dass Partner abklopfen kann - Hand nicht komplett fixieren!",
                "Prüfer achten SEHR auf Sicherheit - sei extra vorsichtig!"
            ]
        },

        varianten: [
            {
                name: "Flying Juji-gatame",
                unterschied: "Aus Stand direkt ohne Bodenkontakt",
                wann: "Spektakulär, fortgeschritten, Wettkampf"
            },
            {
                name: "Rolling Juji-gatame",
                unterschied: "Mit Rolle über Gegner",
                wann: "Von Turtle, dynamisch"
            },
            {
                name: "Reverse Armbar",
                unterschied: "Ellenbogen zeigt nach unten statt oben",
                wann: "Spezielle Situationen, weniger häufig"
            },
            {
                name: "S-Mount Armbar",
                unterschied: "Von S-Mount Position (ein Bein gestreckt)",
                wann: "Modern, sehr effektiv von Mount"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ NIEMALS ruckartig ziehen - langsam und kontrolliert!",
                "⚠️ Sofort loslassen bei Abklopfen - keine Sekunde zögern!",
                "⚠️ Nicht 'testen' wie weit Arm geht - respektiere Abklopfen!",
                "⚠️ Mit neuen Partnern extra vorsichtig - manche klopfen zu spät ab!",
                "⚠️ Bei Kindern/Jugendlichen: Nur leichtester Druck, mehr Kontrolle!",
                "⚠️ Ellenbogen-Verletzungen sind schwerwiegend - Karriere-Ende möglich!"
            ]
        }
    },

    {
        id: "ude-garami",
        name: "Ude-garami",
        nameDE: "Armschlüssel / Americana / Figure-4 Armlock",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/AIlTvZb4RlE", // Kodokan Official

        beschreibung: {
            position: "Du kontrollierst Gegners Arm in Figure-4 Position (dein Arm durch seinen Arm), sein Ellenbogen ist angewinkelt, Druck nach unten/hinten.",
            kontrolle: [
                "Deine eine Hand greift Gegners Handgelenk",
                "Dein anderer Arm geht unter/durch seinen Ellenbogen",
                "Deine Hände fassen zusammen (Figure-4)",
                "Sein Ellenbogen zeigt nach oben (90 Grad Winkel)",
                "Druck: Sein Handgelenk nach unten zur Matte, Ellenbogen fixiert"
            ],
            beinarbeit: [
                "Meist in Side Control oder Mount",
                "Gewicht kontrolliert seine Schulter",
                "Knie stabilisieren Position",
                "Hüfte tief für Druck"
            ],
            schlüsselpunkte: [
                "Figure-4 Griff muss fest sein",
                "Ellenbogen als Drehpunkt auf Matte/nah am Körper",
                "Rotation des Schultergelenks (nicht Ellenbogen!)",
                "Langsam drehen - sehr schmerzhaft!",
                "Partner muss abklopfen können"
            ]
        },

        fehler: [
            "❌ Ellenbogen zu weit vom Körper → Kein Hebel, Gegner zieht Arm raus",
            "❌ Zu schnell/ruckartig → SCHULTER-VERLETZUNG! Sehr gefährlich!",
            "❌ Figure-4 zu locker → Gegner befreit Arm",
            "❌ Druck am Handgelenk statt Rotation → Ineffektiv, falsche Technik",
            "❌ Gegners Ellenbogen nicht fixiert → Hebel funktioniert nicht"
        ],

        situationen: [
            {
                name: "Aus Side Control (Klassisch)",
                position: "Du hast seitliche Kontrolle",
                schritte: [
                    "1. Du bist in Side Control (Kesa oder Yoko-shiho Variante)",
                    "2. Gegner hat einen Arm am Boden, versucht zu pushen",
                    "3. Isoliere diesen Arm",
                    "4. Greife sein Handgelenk mit deiner Hand",
                    "5. Dein anderer Arm geht unter seinem Ellenbogen durch",
                    "6. Fasse deine Hände zusammen (Figure-4)",
                    "7. Drücke seinen Ellenbogen zur Matte (Fixierung)",
                    "8. Rotiere sein Handgelenk LANGSAM nach unten/hinten zur Matte"
                ],
                details: "Von Side Control ist Ude-garami sehr häufig. Gegner schiebt oft weg - perfekte Gelegenheit!",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Mount (Americana)",
                position: "Du sitzt auf Gegner",
                schritte: [
                    "1. Du hast Mount (Tate-shiho-gatame)",
                    "2. Gegner legt Arme zum Schutz auf Boden",
                    "3. Greife einen Arm am Handgelenk",
                    "4. Drücke Handgelenk zur Matte (neben seinem Kopf)",
                    "5. Dein anderer Arm geht unter Ellenbogen",
                    "6. Figure-4 Griff",
                    "7. Halte Ellenbogen mit deinem Gewicht am Boden",
                    "8. Rotiere Handgelenk nach unten - LANGSAM!"
                ],
                details: "Als 'Americana' bekannt in BJJ. Eine der häufigsten Submissions von Mount!",
                videotimestamp: "1:30"
            },
            {
                name: "Aus Closed Guard (Unterlage)",
                position: "Gegner in deiner Guard",
                schritte: [
                    "1. Gegner kniet in deiner Closed Guard",
                    "2. Er postet mit einer Hand am Boden",
                    "3. Fange diesen Arm - greife Handgelenk",
                    "4. Dein anderer Arm schlingt unter Ellenbogen",
                    "5. Figure-4 Griff während du Guard hältst",
                    "6. Öffne Guard, drehe zur Seite",
                    "7. Bringe seinen Ellenbogen zum Boden",
                    "8. Finalisiere Rotation"
                ],
                details: "Von Guard weniger häufig aber möglich. Oft als Setup für andere Techniken.",
                videotimestamp: "3:00"
            },
            {
                name: "Übergang von Yoko-shiho-gatame",
                position: "Gegner verteidigt mit Arm",
                schritte: [
                    "1. Du hältst Yoko-shiho-gatame",
                    "2. Gegner schiebt mit einem Arm gegen dich (Defensive)",
                    "3. Lasse Bein-Kontrolle teilweise los",
                    "4. Fange seinen schiebenden Arm",
                    "5. Greife Handgelenk",
                    "6. Schlinge anderen Arm unter Ellenbogen",
                    "7. Figure-4, drücke Ellenbogen zum Boden",
                    "8. Rotiere für Submission"
                ],
                details: "Fließender Übergang von Osaekomi zu Kansetsu. Zeigt Vielseitigkeit!",
                videotimestamp: "4:15"
            },
            {
                name: "Aus Turtle - Rollthrough",
                position: "Gegner in Turtle, du nimmst Arm",
                schritte: [
                    "1. Gegner in Turtle/Vierfüßler",
                    "2. Greife unter ihm einen Arm",
                    "3. Fasse sein Handgelenk",
                    "4. Rolle ihn zur Seite/über sich",
                    "5. Während Rolle: Figure-4 setzen",
                    "6. Lande in Side Control mit Ude-garami angesetzt",
                    "7. Fixiere Ellenbogen",
                    "8. Finalisiere"
                ],
                details: "Dynamische Anwendung! Die Rolle gibt Momentum für Armkontrolle.",
                videotimestamp: "5:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Figure-4 Griff lernen (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "Bis Griff sitzt",
                    sets: "30 Wiederholungen",
                    fokus: "Korrekter Figure-4 Griff, Hand-Position, Ellenbogen-Fixierung",
                    wiederholungen: 30
                },
                {
                    phase: "Verschiedene Positionen (Woche 3-5)",
                    intensität: "Partner 20%",
                    dauer: "Alle 5 Situationen üben",
                    sets: "10 pro Situation",
                    fokus: "Von Mount, Side Control, Guard, Yoko-shiho, Turtle",
                    wiederholungen: 50
                },
                {
                    phase: "Gegen Arm-Verteidigung (Woche 6-9)",
                    intensität: "Partner 50%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Arm isolieren gegen Widerstand, Breaking Grips",
                    wiederholungen: 20
                },
                {
                    phase: "Live Application (Woche 10+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Ude-garami im freien Training, LANGSAM ansetzen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Figure-4 Griff-Drill",
                    beschreibung: "Mit Gürtel/Besenstiel: Übe Figure-4 Griff, wechsle Seiten schnell",
                    dauer: "10 Min",
                    wiederholungen: "100x pro Seite",
                    fokus: "Griffgeschwindigkeit und Festigkeit"
                },
                {
                    übung: "Rotationsbewegung",
                    beschreibung: "Mit Kissen: Simuliere Handgelenk-Rotation, LANGSAM und kontrolliert",
                    dauer: "10 Min",
                    wiederholungen: "50x",
                    fokus: "Gefühl für korrekte Rotationsrichtung"
                },
                {
                    übung: "Schulter-Mobilität",
                    beschreibung: "Shoulder Dislocates mit Band, Schulter-Rotations-Übungen",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x15",
                    fokus: "Verstehen der Schulter-Mechanik (wichtig für Sicherheit!)"
                },
                {
                    übung: "Positions-Drill",
                    beschreibung: "Nimm Mount/Side Control Position am Boden ein, simuliere Ude-garami",
                    dauer: "10 Min",
                    wiederholungen: "30x",
                    fokus: "Bewegungsablauf komplett"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Korrekter Figure-4 Griff demonstrieren",
                "✓ Ellenbogen-Fixierung am Boden/Körper zeigen",
                "✓ Aus 2-3 Positionen anwenden (Mount, Side Control mindestens)",
                "✓ LANGSAM rotieren - Schulter ist empfindlich!",
                "✓ Erklären können: Druck auf Schultergelenk (Rotation)",
                "✓ Unterschied zu Kimura zeigen können"
            ],
            tipps: [
                "Ude-garami vs. Kimura: Ude-garami = Hand nach unten, Kimura = Hand hoch zum Rücken",
                "Von Mount als 'Americana' bekannt - erwähne beide Namen",
                "VORSICHT: Schulter reißt schnell! Extra langsam in Prüfung!",
                "Demonstriere von Mount UND Side Control",
                "Zeige dass du Ellenbogen fest am Boden hältst",
                "Häufiger Fehler: Zu schnell rotieren → Verletzen Partner!"
            ]
        },

        varianten: [
            {
                name: "Kimura",
                unterschied: "Hand geht nach oben/hinten (Richtung Rücken) statt nach unten",
                wann: "Andere Richtung, andere Situation, aber ähnlicher Griff"
            },
            {
                name: "Bent Armlock",
                unterschied: "Arm ist angewinkelt aber Figure-4 anders gesetzt",
                wann: "Von verschiedenen Winkeln"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ SCHULTER ist SEHR verletzungsanfällig - extreme Vorsicht!",
                "⚠️ Langsam rotieren - Schulter reißt oft ohne Vorwarnung!",
                "⚠️ Viele klopfen zu spät ab bei Schulter-Locks!",
                "⚠️ Sofort loslassen bei Abklopfen!",
                "⚠️ Mit Anfängern: Nur demonstrieren, nicht finalisieren!",
                "⚠️ Schulter-Operationen sind schwerwiegend - respektiere die Technik!"
            ]
        }
    }

    ,

    {
        id: "waki-gatame",
        name: "Waki-gatame",
        nameDE: "Achselhebel / Armpit Armlock",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/8F5p1zuJRG0", // Kodokan Official (Ude-hishigi-waki-gatame)

        beschreibung: {
            position: "Du kontrollierst Gegners gestreckten Arm, deine Achsel klemmt seinen Ellenbogen, du hebst sein Handgelenk.",
            kontrolle: [
                "Gegners Arm ist gestreckt",
                "Deine Achsel/Seite klemmt seinen Ellenbogen fest",
                "Beide Hände greifen sein Handgelenk",
                "Sein Arm wird nach oben gebogen (gegen Gelenk)",
                "Dein Körper ist die Hebelwirkung"
            ],
            beinarbeit: [
                "Oft aus Stand oder halb-stehend",
                "Gewicht nach hinten lehnen für Hebel",
                "Stabile Basis mit Beinen",
                "Hüfte als Drehpunkt"
            ],
            schlüsselpunkte: [
                "Arm MUSS gestreckt sein",
                "Achsel klemmt Ellenbogen fest",
                "Hände kontrollieren Handgelenk nicht Finger",
                "Langsam nach oben heben - sehr gefährlich!",
                "Oft aus Stand/Übergang angewendet"
            ]
        },

        fehler: [
            "❌ Ellenbogen nicht fest geklemmt → Arm rutscht raus",
            "❌ Zu schnell hebeln → ELLENBOGEN-BRUCH! Extrem gefährlich!",
            "❌ Arm nicht gestreckt → Kein Hebel möglich",
            "❌ Nur Finger greifen statt Handgelenk → Schwache Kontrolle",
            "❌ Zu viel nach vorne lehnen → Hebel funktioniert nicht"
        ],

        situationen: [
            {
                name: "Aus Stand - Armkontrolle (Klassisch)",
                position: "Stehend, du kontrollierst einen Arm",
                schritte: [
                    "1. Stand-Position, Gegner greift dich oder du greifst ihn",
                    "2. Fange einen seiner Arme am Handgelenk",
                    "3. Ziehe Arm gerade/gestreckt",
                    "4. Drehe dich zur Seite",
                    "5. Klemme seinen Ellenbogen unter deine Achsel",
                    "6. Beide Hände halten sein Handgelenk fest",
                    "7. Lehne zurück und hebe Handgelenk LANGSAM nach oben",
                    "8. Ellenbogen wird über-gestreckt"
                ],
                details: "Aus Stand ist Waki-gatame klassisch. Sehr direkt und effektiv!",
                videotimestamp: "0:00"
            },
            {
                name: "Übergang Stand-Boden - Nach Wurf-Versuch",
                position: "Gegner wehrt Wurf ab, du nimmst Arm",
                schritte: [
                    "1. Du versuchst Wurf (z.B. Seoi-nage)",
                    "2. Gegner verteidigt/blockt",
                    "3. Du behältst Armkontrolle vom Wurf-Versuch",
                    "4. Drehe zur Seite statt Wurf",
                    "5. Klemme Arm unter Achsel",
                    "6. Falle/gehe nach hinten",
                    "7. Finalisiere Waki-gatame"
                ],
                details: "Gescheiterter Wurf wird zu Armhebel - taktisch clever!",
                videotimestamp: "1:15"
            },
            {
                name: "Als Konter gegen Griff",
                position: "Gegner greift dich, du konterst",
                schritte: [
                    "1. Gegner greift deinen Gi/Arm",
                    "2. Fange seinen greifenden Arm",
                    "3. Strecke seinen Arm",
                    "4. Drehe schnell",
                    "5. Achsel klemmt Ellenbogen",
                    "6. Kontrolliere Handgelenk",
                    "7. Lehne zurück für Hebel"
                ],
                details: "Defensiv/Konter-Anwendung. Zeigt Reaktionsfähigkeit!",
                videotimestamp: "2:30"
            },
            {
                name: "Aus Uki-gatame Übergang",
                position: "Von Osaekomi zu Kansetsu",
                schritte: [
                    "1. Du hast Uki-gatame (Osaekomi)",
                    "2. Gegner versucht Arm zu befreien",
                    "3. Lasse Position los aber behalte Armkontrolle",
                    "4. Strecke seinen Arm",
                    "5. Klemme unter Achsel",
                    "6. Wechsle zu Waki-gatame",
                    "7. Finalisiere"
                ],
                details: "Uki-gatame zu Waki-gatame ist natürlicher Übergang!",
                videotimestamp: "3:45"
            },
            {
                name: "Von Guard - Arm gestreckt",
                position: "Gegner postet in deiner Guard",
                schritte: [
                    "1. Gegner in deiner Guard",
                    "2. Er streckt Arm zum Posten/Balance",
                    "3. Fange den gestreckten Arm",
                    "4. Schwinge dich zur Seite",
                    "5. Klemme Arm mit Achsel/Oberkörper",
                    "6. Beide Hände am Handgelenk",
                    "7. Hebe für Hebel"
                ],
                details: "Modern/BJJ Anwendung. Weniger traditionell aber funktioniert!",
                videotimestamp: "5:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Technik Lernen - Stand (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "Bis korrekt",
                    sets: "20 Wiederholungen",
                    fokus: "Armstrecken, Achsel-Klemmung, LANGSAM heben!",
                    wiederholungen: 20
                },
                {
                    phase: "Aus verschiedenen Griffen (Woche 3-5)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "30 Versuche",
                    fokus: "Von Stand, nach Wurf-Versuch, als Konter",
                    wiederholungen: 30
                },
                {
                    phase: "Gegen Verteidigung (Woche 6-9)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Arm strecken gegen Widerstand, schnelle Ausführung",
                    wiederholungen: 20
                },
                {
                    phase: "Live Anwendung (Woche 10+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Waki-gatame im Stand-Randori, SICHERHEIT!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Achsel-Klemmung mit Besenstiel",
                    beschreibung: "Klemme Besenstiel unter Achsel, simuliere Hebel-Bewegung",
                    dauer: "10 Min",
                    wiederholungen: "50x pro Seite",
                    fokus: "Gefühl für Klemmung"
                },
                {
                    übung: "Tai-sabaki für Waki-gatame",
                    beschreibung: "Übe Drehbewegung aus Stand, als würdest du Arm fangen",
                    dauer: "10 Min",
                    wiederholungen: "30x",
                    fokus: "Schnelle Positionierung"
                },
                {
                    übung: "Grip-Kraft Handgelenk",
                    beschreibung: "Halte schweren Gegenstand nur mit Fingerspitzen",
                    dauer: "5 Min",
                    wiederholungen: "3x30 Sek",
                    fokus: "Handgelenk-Kontrolle Kraft"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Aus Stand demonstrieren (klassische Anwendung)",
                "✓ Arm komplett gestreckt zeigen",
                "✓ Achsel-Klemmung korrekt",
                "✓ SEHR langsam heben - Ellenbogen bricht leicht!",
                "✓ Als Konter oder nach Wurf-Versuch zeigen",
                "✓ Sicherheit betonen!"
            ],
            tipps: [
                "Waki-gatame ist sehr gefährlich - extra vorsichtig!",
                "Aus Stand zeigen ist am klarsten",
                "Demonstriere auch: Gescheiterter Wurf → Waki-gatame",
                "WARNUNG: Ellenbogen bricht ohne Vorwarnung bei Waki-gatame!",
                "Partner muss sofort abklopfen können - nicht zu fest halten!"
            ]
        },

        sicherheit: {
            wichtig: [
                "⚠️⚠️⚠️ EXTREM GEFÄHRLICH - Ellenbogen bricht sehr leicht!",
                "⚠️ Langsamer als bei allen anderen Techniken!",
                "⚠️ Bei geringstem Widerstand sofort stoppen!",
                "⚠️ Mit Anfängern: NUR zeigen, NICHT ansetzen!",
                "⚠️ Im Wettkampf oft verboten bei Jugendlichen!",
                "⚠️ Respektiere diese Technik - kann Karriere beenden!"
            ]
        }
    },

    {
        id: "ude-gatame",
        name: "Ude-gatame",
        nameDE: "Armstrecker / Straight Armbar",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/SBf0aTma1VI", // Kodokan Official (Ude-hishigi-ude-gatame)

        beschreibung: {
            position: "Gegners Arm wird über deine Schulter/Unterarm gestreckt, ähnlich Juji-gatame aber ohne Beine.",
            kontrolle: [
                "Gegners Arm ist gestreckt",
                "Sein Ellenbogen liegt auf deiner Schulter/Unterarm",
                "Deine Hände kontrollieren sein Handgelenk",
                "Dein Körper/Schulter ist Hebelwirkung",
                "Druck nach unten auf Handgelenk, Ellenbogen auf Schulter"
            ],
            beinarbeit: [
                "Variable - oft aus Osaekomi-Positionen",
                "Oder aus Stand/knien",
                "Gewicht kontrolliert Gegner",
                "Position hängt von Entry ab"
            ],
            schlüsselpunkte: [
                "Ellenbogen über Schulter/Unterarm als Hebelpunkt",
                "Arm muss gestreckt sein",
                "Handgelenk wird nach unten gedrückt",
                "Schulter hebt/presst gegen Ellenbogen",
                "Oft Übergang von Osaekomi"
            ]
        },

        fehler: [
            "❌ Ellenbogen nicht auf Schulter → Kein Hebel",
            "❌ Arm nicht gestreckt → Technik funktioniert nicht",
            "❌ Zu viel Kraft, zu wenig Technik → Ineffektiv",
            "❌ Falsche Handgelenk-Kontrolle → Arm rutscht weg",
            "❌ Zu schnell → Verletzungsgefahr"
        ],

        situationen: [
            {
                name: "Aus Kesa-gatame / Side Control",
                position: "Übergang von Osaekomi",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Gegner schiebt mit seinem Arm (Escape-Versuch)",
                    "3. Fange diesen Arm",
                    "4. Ziehe Arm über deine Schulter",
                    "5. Strecke seinen Arm komplett",
                    "6. Deine Schulter presst gegen seinen Ellenbogen",
                    "7. Hände kontrollieren Handgelenk",
                    "8. Drücke Handgelenk nach unten LANGSAM"
                ],
                details: "Von Kesa sehr natürlich! Gegner gibt oft Arm beim Escape-Versuch.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Tate-shiho (Mount)",
                position: "Gegner schiebt gegen dich",
                schritte: [
                    "1. Du hast Mount",
                    "2. Gegner schiebt dich mit einem Arm weg",
                    "3. Fange den schiebenden Arm",
                    "4. Strecke Arm über deine Schulter/Unterarm",
                    "5. Lehne zurück",
                    "6. Ellenbogen auf deiner Schulter",
                    "7. Drücke Handgelenk runter"
                ],
                details: "Von Mount opportunistisch. Gegner macht oft Fehler beim Pushen.",
                videotimestamp: "1:30"
            },
            {
                name: "Aus Turtle - Armkontrolle",
                position: "Gegner in Vierfüßler",
                schritte: [
                    "1. Gegner in Turtle",
                    "2. Greife einen seiner Arme",
                    "3. Ziehe Arm nach vorne/oben",
                    "4. Strecke Arm über deinen Unterarm",
                    "5. Knie/setze für Stabilität",
                    "6. Finalisiere Ude-gatame"
                ],
                details: "Von Turtle weniger häufig aber möglich.",
                videotimestamp: "3:00"
            },
            {
                name: "Übergang von Uki-gatame",
                position: "Uki-gatame zu Ude-gatame",
                schritte: [
                    "1. Du hast Uki-gatame",
                    "2. Arm ist schon kontrolliert",
                    "3. Adjustiere Position",
                    "4. Strecke Arm über Schulter",
                    "5. Wechsle zu Ude-gatame",
                    "6. Finalisiere"
                ],
                details: "Natürlicher Übergang! Uki-gatame und Ude-gatame sind verwandt.",
                videotimestamp: "4:15"
            },
            {
                name: "Aus Stand - Arm gestreckt",
                position: "Stehend, Armkontrolle",
                schritte: [
                    "1. Stand-Position",
                    "2. Fange Gegners Arm",
                    "3. Strecke Arm über deine Schulter",
                    "4. Halte sein Handgelenk",
                    "5. Sinke/beuge dich für Hebel",
                    "6. Schulter presst Ellenbogen"
                ],
                details: "Aus Stand möglich aber weniger stabil als am Boden.",
                videotimestamp: "5:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Grundtechnik (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "Variable",
                    sets: "25 Wiederholungen",
                    fokus: "Arm strecken, Schulter als Hebelpunkt, Handgelenk-Kontrolle",
                    wiederholungen: 25
                },
                {
                    phase: "Von Osaekomi-Übergänge (Woche 4-6)",
                    intensität: "Partner 30%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Von Kesa, von Mount, von Uki-gatame",
                    wiederholungen: 20
                },
                {
                    phase: "Gegen Verteidigung (Woche 7-10)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "15 Versuche",
                    fokus: "Arm strecken trotz Widerstand",
                    wiederholungen: 15
                },
                {
                    phase: "Live (Woche 11+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Opportunistisch anwenden",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Schulter-Stärke",
                    beschreibung: "Pike Push-ups, Shoulder Taps",
                    dauer: "10 Min",
                    wiederholungen: "3x10",
                    fokus: "Schulter-Kraft für Hebel"
                },
                {
                    übung: "Armstreck-Bewegung",
                    beschreibung: "Mit Gürtel: Simuliere Armstrecken über Schulter",
                    dauer: "10 Min",
                    wiederholungen: "40x",
                    fokus: "Bewegungsablauf"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Von Kesa-gatame Übergang zeigen",
                "✓ Arm komplett gestreckt",
                "✓ Ellenbogen korrekt auf Schulter",
                "✓ Langsam ansetzen",
                "✓ Unterschied zu Waki-gatame erklären können"
            ],
            tipps: [
                "Zeige hauptsächlich von Kesa-gatame (klassisch)",
                "Ude-gatame vs Waki-gatame: Ude-gatame = über Schulter, Waki = unter Achsel",
                "Oft verwechselt - klare Demonstration wichtig!",
                "Zeige auch Übergang von Uki-gatame wenn bekannt"
            ]
        }
    },

    {
        id: "hiza-gatame",
        name: "Hiza-gatame",
        nameDE: "Kniehebel / Knee Bar",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/H2HtAJdiJcE", // Kodokan Official (Ude-hishigi-hiza-gatame)

        beschreibung: {
            position: "Du kontrollierst Gegners Bein, sein Knie wird über deine Hüfte gestreckt, ähnlich wie Juji-gatame aber für Bein.",
            kontrolle: [
                "Gegners Bein ist zwischen deinen Armen",
                "Sein Knie liegt über deiner Hüfte",
                "Beide Hände umfassen sein Unterschenkel/Fuß",
                "Deine Hüfte presst gegen sein Knie",
                "Sein Fuß wird zu deiner Brust gezogen"
            ],
            beinarbeit: [
                "Deine Beine kontrollieren seinen Oberkörper/andere Bein",
                "Ein Bein über seiner Brust",
                "Ein Bein über seinem Kopf/Gesicht (ähnlich Juji-gatame)",
                "Oder Beine kontrollieren sein anderes Bein",
                "Hüfte wird angehoben für Hebel"
            ],
            schlüsselpunkte: [
                "Knie MUSS über Hüfte sein (Hebelpunkt)",
                "Bein wird gestreckt durch Hüftheben",
                "Fuß/Unterschenkel fest kontrollieren",
                "SEHR gefährlich - Knie bricht leicht!",
                "Langsam und kontrolliert - keine ruckartigen Bewegungen!",
                "Im Judo seltener als Armhebel aber erlaubt"
            ]
        },

        fehler: [
            "❌ Knie nicht über Hüfte → Kein Hebel auf Gelenk",
            "❌ Zu schnell/ruckartig → KNIE-VERLETZUNG! Extrem gefährlich!",
            "❌ Fuß nicht fest kontrolliert → Bein rutscht raus",
            "❌ Beine zu weit auseinander → Gegner escaped leichter",
            "❌ Falsche Hüftposition → Hebel funktioniert nicht",
            "❌ Zu viel Kraft, zu wenig Technik → Gefährlich und ineffektiv"
        ],

        situationen: [
            {
                name: "Aus Unterlage - Gegner steht in Guard (Modern)",
                position: "Gegner steht in deiner Guard",
                schritte: [
                    "1. Gegner steht in deiner Closed Guard",
                    "2. Öffne deine Guard",
                    "3. Fange eines seiner Beine mit beiden Händen",
                    "4. Ziehe sein Bein zu dir während du zur Seite fällst",
                    "5. Sein Knie kommt über deine Hüfte",
                    "6. Kontrolliere seinen Oberkörper mit deinen Beinen",
                    "7. Umfasse seinen Unterschenkel/Fuß fest",
                    "8. Hebe Hüfte LANGSAM an für Hebel auf Knie"
                ],
                details: "Häufigste Anwendung im modernen Judo/BJJ. Gegner steht oft in Guard auf - deine Chance!",
                videotimestamp: "0:00"
            },
            {
                name: "Aus 50/50 Guard Position",
                position: "Beide Spieler ineinander verschränkt",
                schritte: [
                    "1. Du und Gegner seid in 50/50 Position (Beine ineinander)",
                    "2. Isoliere eines seiner Beine",
                    "3. Befreie dein eigenes Bein",
                    "4. Falle zur Seite mit seinem Bein kontrolliert",
                    "5. Bringe sein Knie über deine Hüfte",
                    "6. Kontrolliere Fuß/Unterschenkel",
                    "7. Hebe Hüfte für Hiza-gatame"
                ],
                details: "50/50 ist komplexe Position, führt oft zu Hiza-gatame. Modern und technisch!",
                videotimestamp: "1:30"
            },
            {
                name: "Aus Übergang Stand-Boden - Bein gefangen",
                position: "Nach Wurf-Versuch, Bein kontrolliert",
                schritte: [
                    "1. Wurf-Versuch (z.B. Ashi-waza - Beintechnik)",
                    "2. Wurf klappt nicht ganz",
                    "3. Du behältst Beinkontrolle vom Wurf",
                    "4. Beide gehen zu Boden",
                    "5. Halte sein Bein fest",
                    "6. Positioniere Knie über Hüfte",
                    "7. Kontrolliere mit deinen Beinen seinen Körper",
                    "8. Finalisiere Hiza-gatame"
                ],
                details: "Opportunistisch! Gescheiterter Beinwurf wird zu Beinhebel.",
                videotimestamp: "3:00"
            },
            {
                name: "Gegen Turtle - Bein isoliert (Fortgeschritten)",
                position: "Gegner in Turtle, du nimmst Bein",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Statt Rücken zu nehmen, isoliere ein Bein",
                    "3. Ziehe Bein nach hinten/zur Seite",
                    "4. Falle mit Beinkontrolle",
                    "5. Bringe Knie über Hüfte",
                    "6. Sichere mit deinen Beinen",
                    "7. Hebe Hüfte"
                ],
                details: "Ungewöhnlich aber möglich. Zeigt Kreativität!",
                videotimestamp: "4:30"
            },
            {
                name: "Als Konter gegen Übersteigen (Passing)",
                position: "Gegner versucht deine Guard zu passen",
                schritte: [
                    "1. Gegner versucht um deine Guard herum",
                    "2. Er hebt/bewegt ein Bein zum Passen",
                    "3. Fange dieses Bein während Bewegung",
                    "4. Ziehe zu dir",
                    "5. Drehe/falle zur Seite",
                    "6. Etabliere Hiza-gatame Position",
                    "7. Finalisiere"
                ],
                details: "Defensive Anwendung. Aus gescheitertem Pass des Gegners.",
                videotimestamp: "6:00"
            },
            {
                name: "Aus X-Guard oder Single Leg X",
                position: "Spezielle Guard-Variante",
                schritte: [
                    "1. Du hast X-Guard oder Single Leg X Guard",
                    "2. Gegners Bein ist schon kontrolliert",
                    "3. Adjustiere Kontrolle für Hiza-gatame",
                    "4. Falle zur Seite",
                    "5. Bringe Knie über Hüfte",
                    "6. Umfasse Fuß/Unterschenkel",
                    "7. Hebe Hüfte"
                ],
                details: "Fortgeschrittene Guard-Varianten führen oft zu Hiza-gatame. Sehr modern!",
                videotimestamp: "7:15"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Technik Verstehen (Woche 1-3)",
                    intensität: "Partner SEHR passiv, klopft sofort ab",
                    dauer: "Bis korrekte Position",
                    sets: "15 Wiederholungen LANGSAM",
                    fokus: "Position lernen, Knie über Hüfte, EXTREM VORSICHTIG!",
                    wiederholungen: 15
                },
                {
                    phase: "Verschiedene Entries (Woche 4-7)",
                    intensität: "Partner 20% - sehr kontrolliert",
                    dauer: "Alle Situationen üben",
                    sets: "10 Wiederholungen pro Entry",
                    fokus: "Von Guard, von 50/50, nach Wurf, SICHERHEIT PRIORITÄT!",
                    wiederholungen: 60
                },
                {
                    phase: "Positionskontrolle (Woche 8-12)",
                    intensität: "Partner 40% - verteidigt leicht",
                    dauer: "Variable",
                    sets: "15 Versuche",
                    fokus: "Bein kontrollieren gegen Widerstand, NIEMALS voll ansetzen im Training!",
                    wiederholungen: 15
                },
                {
                    phase: "Live - NUR Positionstraining (Woche 13+)",
                    intensität: "Partner 60% - KEIN voller Hebel!",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Position erreichen, Partner klopft ab bei leichtem Druck. NIEMALS voll durchziehen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Hüft-Lift Kraft",
                    beschreibung: "Glute Bridges, Single Leg Bridges, Hip Thrusts mit Gewicht",
                    dauer: "15 Min täglich",
                    wiederholungen: "4x12 pro Seite",
                    fokus: "Hüftkraft für Hebel (essentiell!)"
                },
                {
                    übung: "Beinkontrolle mit Kissen",
                    beschreibung: "Großes Kissen als Bein-Simulation, übe Hiza-gatame Position komplett",
                    dauer: "15 Min",
                    wiederholungen: "25x beide Seiten",
                    fokus: "Bewegungsablauf, Kontrolle, Positionierung"
                },
                {
                    übung: "Grip-Kraft Unterschenkel",
                    beschreibung: "Umfasse dickes Objekt (Sandsack), halte fest 30 Sekunden",
                    dauer: "10 Min",
                    wiederholungen: "6x30 Sek",
                    fokus: "Kraft um Bein festzuhalten"
                },
                {
                    übung: "Knie-Anatomie Studium",
                    beschreibung: "Lerne Knie-Anatomie! Verstehe was du kontrollierst!",
                    dauer: "20 Min einmalig",
                    wiederholungen: "1x gründlich",
                    fokus: "WISSEN um sicher zu arbeiten - KRITISCH!"
                },
                {
                    übung: "Mentale Visualisierung + Sicherheit",
                    beschreibung: "Stelle dir alle Entries vor, visualisiere LANGSAME Ausführung, Sicherheit",
                    dauer: "10 Min täglich",
                    wiederholungen: "Täglich",
                    fokus: "Sicherheits-Mindset entwickeln"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ KRITISCH: NUR Position zeigen, NICHT voll ansetzen in Prüfung!",
                "✓ Knie korrekt über Hüfte positioniert",
                "✓ Beinkontrolle mit Armen demonstrieren",
                "✓ Aus 1-2 Situationen zeigen (Guard häufigste)",
                "✓ Erklären WARUM sehr gefährlich",
                "✓ Sicherheitsaspekte betonen",
                "✓ Partner MUSS sofort abklopfen können"
            ],
            tipps: [
                "⚠️⚠️⚠️ WICHTIG: In Prüfung oft nur POSITION zeigen, nicht finalisieren!",
                "Sprich mit Prüfer vorher: Soll ich nur Position oder leichten Druck?",
                "Hiza-gatame ist im Judo umstritten - manche Prüfer mögen es nicht!",
                "Erkläre: 'Knie ist sehr empfindlich, ich zeige nur Position'",
                "Demonstriere von Guard (stehender Gegner) - am sichersten!",
                "NIEMALS volle Kraft in Prüfung - kann disqualifizieren!",
                "Zeige dass du Anatomie verstehst und Respekt hast",
                "Falls Prüfer sagt 'nicht nötig' - überspringe es ohne Diskussion!"
            ]
        },

        varianten: [
            {
                name: "Straight Knee Bar",
                unterschied: "Klassische Form, Knie gerade über Hüfte",
                wann: "Standard-Version"
            },
            {
                name: "Inverted Knee Bar",
                unterschied: "Umgekehrte Richtung, Fuß zeigt andere Richtung",
                wann: "Von anderen Winkeln, fortgeschritten"
            },
            {
                name: "Calf Slicer",
                unterschied: "Unterschenkel wird komprimiert (andere Technik, sehr schmerzhaft)",
                wann: "Andere Technik, nicht für Anfänger"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️⚠️⚠️ EXTREM GEFÄHRLICH - Knie bricht sehr leicht!",
                "⚠️ Knie hat KEINE Schmerzwarnung - bricht ohne Vorwarnung!",
                "⚠️ Partner klopft oft zu spät ab - sei EXTRA vorsichtig!",
                "⚠️ NIEMALS volle Kraft - auch nicht im Wettkampf wenn vermeidbar!",
                "⚠️ Knie-Operationen sind schwerwiegend - oft Karriere-Ende!",
                "⚠️ Mit Anfängern: NUR Position zeigen, NIEMALS Druck!",
                "⚠️ Im Training: Bei leichtem Widerstand SOFORT stoppen!",
                "⚠️ Respektiere Partner - Knie-Verletzung ist ernste Sache!",
                "⚠️ Viele Dojos verbieten Hiza-gatame komplett - respektiere Regeln!",
                "⚠️ Bei Jugendlichen oft VERBOTEN - prüfe Regeln!"
            ]
        }
    },

    {
        id: "sankaku-gatame",
        name: "Sankaku-gatame",
        nameDE: "Dreieck-Armhebel / Triangle Armlock",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/WefAmW4azhk", // Kodokan Official (Ude-hishigi-sankaku-gatame)

        beschreibung: {
            position: "Deine Beine bilden Dreieck um Gegners Arm und Kopf, sein Arm wird durch Beindruck gestreckt/gehebelt.",
            kontrolle: [
                "Ein Bein über Gegners Nacken/Schulter",
                "Anderes Bein über sein Gesicht",
                "Beine sind verschränkt (Dreieck/Triangle)",
                "Sein Arm ist gefangen im Dreieck",
                "Sein Ellenbogen wird durch Beindruck gestreckt",
                "Oft kombiniert mit Handgelenk ziehen"
            ],
            beinarbeit: [
                "Beine bilden Figure-4 / Dreieck",
                "Ein Knie presst gegen seinen Kopf/Nacken",
                "Anderes Bein über Gesicht verschränkt",
                "Hüfte hebt für Druck",
                "Winkel ist kritisch für Hebel"
            ],
            schlüsselpunkte: [
                "Dreieck muss fest verschlossen sein",
                "Sein Arm ist isoliert im Dreieck",
                "Kombination aus Beindruck UND Armzug",
                "Winkel wichtig - oft 45 Grad zur Seite",
                "Kann als Würger ODER Armhebel funktionieren",
                "Sehr technisch und vielseitig"
            ]
        },

        fehler: [
            "❌ Dreieck nicht fest verschlossen → Arm rutscht raus",
            "❌ Falscher Winkel → Kein Druck auf Arm",
            "❌ Nur ziehen ohne Beindruck → Ineffektiv",
            "❌ Zu viel Fokus auf Würgen statt Armhebel → Verwechslung mit Sankaku-jime",
            "❌ Hüfte nicht angehoben → Kein Hebel",
            "❌ Beine zu locker → Kontrolle verloren"
        ],

        situationen: [
            {
                name: "Aus Closed Guard - Klassischer Entry",
                position: "Gegner in deiner Guard",
                schritte: [
                    "1. Gegner kniet in deiner Closed Guard",
                    "2. Er postet mit einem Arm am Boden oder greift dich",
                    "3. Ziehe diesen Arm über deine Körpermitte",
                    "4. Öffne Guard",
                    "5. Schwinge ein Bein hoch über seinen Nacken/Schulter",
                    "6. Anderes Bein über sein Gesicht",
                    "7. Verschränke Beine (sein Arm + Kopf im Dreieck)",
                    "8. Für Armhebel: Greife sein Handgelenk, ziehe zu dir während Hüfte hebt",
                    "9. Sein Ellenbogen wird über dein Bein gestreckt"
                ],
                details: "Häufigste Anwendung! Von Guard ist Triangle-Position sehr natürlich.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Mount - Mounted Triangle",
                position: "Du sitzt auf Gegner, er verteidigt",
                schritte: [
                    "1. Du hast Mount",
                    "2. Gegner schiebt dich mit Armen weg (Defensive)",
                    "3. Fange einen seiner Arme",
                    "4. Schwinge Bein über seinen Arm und Kopf",
                    "5. Falle zur Seite während Dreieck schließt",
                    "6. Verschränke Beine",
                    "7. Ziehe Handgelenk für Armhebel"
                ],
                details: "Von Mount sehr effektiv! Gegner gibt oft Arme in Defense.",
                videotimestamp: "1:45"
            },
            {
                name: "Aus Übergang Juji-gatame",
                position: "Von Armbar zu Triangle-Armlock",
                schritte: [
                    "1. Du versuchst Juji-gatame",
                    "2. Gegner verteidigt - zieht Arm raus oder rollt",
                    "3. Statt Juji-gatame zu verlieren, adjustiere",
                    "4. Lasse ein Bein über seinen Kopf/Nacken",
                    "5. Anderes Bein kommt über Gesicht",
                    "6. Verschränke zu Dreieck",
                    "7. Sein Arm ist jetzt im Triangle gefangen",
                    "8. Finalisiere als Sankaku-gatame (Armhebel-Version)"
                ],
                details: "Fließender Übergang! Wenn Juji-gatame nicht klappt, gehe zu Sankaku-gatame.",
                videotimestamp: "3:15"
            },
            {
                name: "Von Rückenlage - Back Triangle (Fortgeschritten)",
                position: "Du hast Gegners Rücken",
                schritte: [
                    "1. Du hast Back Control (Rückenkontrolle)",
                    "2. Gegner verteidigt Würger gut",
                    "3. Greife einen seiner Arme",
                    "4. Ziehe Arm hoch/über",
                    "5. Schwinge Bein über Arm und Schulter",
                    "6. Verschränke Dreieck von hinten",
                    "7. Finalisiere Armhebel"
                ],
                details: "Von Back Control möglich! Zeigt hohe Technik und Vielseitigkeit.",
                videotimestamp: "5:00"
            },
            {
                name: "Als Konter gegen Stack Pass",
                position: "Gegner versucht deine Guard zu passen",
                schritte: [
                    "1. Gegner macht Stack Pass (drückt Beine über Kopf)",
                    "2. Während er sich vorbeugt, fange einen Arm",
                    "3. Ziehe Arm zur Seite",
                    "4. Schwinge Bein über Arm und Kopf",
                    "5. Verschränke Dreieck während er noch im Pass",
                    "6. Finalisiere Sankaku-gatame"
                ],
                details: "Defensive/Konter Anwendung. Aus gescheitertem Pass des Gegners!",
                videotimestamp: "6:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Triangle Position Lernen (Woche 1-4)",
                    intensität: "Partner passiv",
                    dauer: "Bis Dreieck sitzt",
                    sets: "30 Wiederholungen",
                    fokus: "Beine verschränken, Dreieck fest schließen, Winkel verstehen",
                    wiederholungen: 30
                },
                {
                    phase: "Armhebel vs. Würger (Woche 5-7)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Unterschied zwischen Sankaku-jime (Würger) und Sankaku-gatame (Armhebel) verstehen!",
                    wiederholungen: 20
                },
                {
                    phase: "Verschiedene Entries (Woche 8-12)",
                    intensität: "Partner 40%",
                    dauer: "Alle Situationen",
                    sets: "10 pro Entry",
                    fokus: "Von Guard, von Mount, von Back, von Juji-gatame Übergang",
                    wiederholungen: 50
                },
                {
                    phase: "Gegen Verteidigung (Woche 13-16)",
                    intensität: "Partner 60%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Triangle gegen Widerstand schließen, Arm isolieren",
                    wiederholungen: 20
                },
                {
                    phase: "Live Application (Woche 17+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Sankaku-gatame im freien Training, bewusst als Armhebel nicht Würger!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Triangle Drill mit Kissen",
                    beschreibung: "Großes Kissen, übe Triangle-Position komplett: Beine verschränken, Winkel finden",
                    dauer: "15 Min",
                    wiederholungen: "30x pro Seite",
                    fokus: "Bewegungsablauf, Bein-Verschränkung"
                },
                {
                    übung: "Hüft-Escape Bewegung",
                    beschreibung: "Auf Rücken, hebe Hüfte an während Beine in Triangle-Form",
                    dauer: "10 Min",
                    wiederholungen: "4x15 Reps",
                    fokus: "Hüftkraft für Hebel"
                },
                {
                    übung: "Beinflexibilität für Triangle",
                    beschreibung: "Butterfly Stretch, Figure-4 Stretch, Hüftöffner",
                    dauer: "15 Min täglich",
                    wiederholungen: "3x45 Sek halten",
                    fokus: "Flexibilität um Triangle eng zu schließen"
                },
                {
                    übung: "Armzug-Kraft",
                    beschreibung: "Mit Gürtel: Simuliere Handgelenk ziehen während Triangle-Position",
                    dauer: "10 Min",
                    wiederholungen: "40x",
                    fokus: "Koordination Beine + Arme"
                },
                {
                    übung: "Mentale Unterscheidung",
                    beschreibung: "Visualisiere: Sankaku-jime (Würger) vs. Sankaku-gatame (Armhebel) - UNTERSCHIED!",
                    dauer: "10 Min",
                    wiederholungen: "Täglich",
                    fokus: "Konzeptverständnis - WICHTIG für Prüfung!"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: Als ARMHEBEL zeigen, NICHT als Würger (das wäre Sankaku-jime)!",
                "✓ Dreieck fest und korrekt verschlossen",
                "✓ Arm isoliert im Dreieck zeigen",
                "✓ Handgelenk ziehen + Beindruck demonstrieren",
                "✓ Aus 2-3 Situationen (Guard, Mount, Übergang von Juji-gatame)",
                "✓ Unterschied zu Sankaku-jime erklären können",
                "✓ Korrekter Winkel (45 Grad zur Seite oft optimal)"
            ],
            tipps: [
                "KRITISCH: Sankaku-gatame = ARMHEBEL, Sankaku-jime = WÜRGER!",
                "Viele verwechseln diese beiden - sei klar in Demonstration!",
                "Zeige deutlich: Du ziehst Handgelenk für Ellenbogen-Hebel",
                "Erkläre: 'Triangle kann Würger ODER Armhebel sein, ich zeige Armhebel-Version'",
                "Von Guard zeigen ist am klarsten",
                "Demonstriere auch Übergang von Juji-gatame → Sankaku-gatame",
                "Wenn Prüfer fragt nach Sankaku-jime, erkläre Unterschied klar!"
            ]
        },

        varianten: [
            {
                name: "Sankaku-jime",
                unterschied: "WÜRGER-Version! Beine würgen Hals, kein Armhebel",
                wann: "Andere Technik (Shime-waza), nicht Kansetsu-waza!"
            },
            {
                name: "Mounted Triangle Armlock",
                unterschied: "Von Mount statt Guard",
                wann: "Gegner in Defense auf Rücken, du oben"
            },
            {
                name: "Inverted Triangle Armlock",
                unterschied: "Umgekehrte Orientierung",
                wann: "Von anderen Winkeln, fortgeschritten"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Kombination aus Druck auf Hals UND Arm - kontrolliert arbeiten!",
                "⚠️ Partner kann gleichzeitig würgen + Arm hebeln fühlen - kommunizieren!",
                "⚠️ Sofort loslassen bei Abklopfen!",
                "⚠️ Nicht verwirren mit Sankaku-jime - verschiedene Techniken!",
                "⚠️ Ellenbogen ist empfindlich - langsam ansetzen!"
            ]
        }
    },

    {
        id: "ashi-gatame",
        name: "Ashi-gatame",
        nameDE: "Beinhebel / Leg Lock",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/BWWb0GoAtZw", // Kodokan Official (Ashi-garami - verwandt)

        beschreibung: {
            position: "Allgemeiner Begriff für Beinhebel - ähnlich Hiza-gatame aber kann auch Knöchel/Fuß betreffen.",
            kontrolle: [
                "Gegners Bein ist kontrolliert",
                "Verschiedene Varianten: Knie, Knöchel, Fuß",
                "Dein Körper (Arme/Beine/Hüfte) ist Hebelwirkung",
                "Rotation oder Streckung des Beingelenks",
                "Sehr technisch und vielfältig"
            ],
            beinarbeit: [
                "Abhängig von Variante",
                "Oft ähnlich Hiza-gatame",
                "Oder Kontrolle von Knöchel/Fuß",
                "Beine kontrollieren Gegners Körper",
                "Hüfte als Drehpunkt"
            ],
            schlüsselpunkte: [
                "Ashi-gatame ist OBERBEGRIFF für verschiedene Beinhebel",
                "Kann Knie, Knöchel, oder Fuß betreffen",
                "ALLE Beinhebel sind gefährlich!",
                "Langsam und kontrolliert - Gelenke brechen leicht",
                "Im Judo weniger häufig als im BJJ",
                "Manche Varianten in Wettkampf verboten"
            ]
        },

        fehler: [
            "❌ Unklar welche Variante gemeint → Kommunikation wichtig!",
            "❌ Zu schnell/ruckartig → GELENK-VERLETZUNG!",
            "❌ Falsche Kontrolle → Bein rutscht raus",
            "❌ Nicht wissen welche Variante erlaubt ist → Regelverstoß!",
            "❌ Verwechslung mit Hiza-gatame → Klarheit fehlt"
        ],

        situationen: [
            {
                name: "Straight Ankle Lock (Häufigste Ashi-gatame Variante)",
                position: "Knöchel wird gestreckt/rotiert",
                schritte: [
                    "1. Fange Gegners Bein (von Guard oder scramble)",
                    "2. Klemme sein Bein unter deine Achsel",
                    "3. Dein Unterarm geht über seinen Fußrücken",
                    "4. Hand greift dein eigenes Handgelenk (Figure-4 ähnlich)",
                    "5. Deine Hüfte presst gegen seine Achillessehne",
                    "6. Ziehe/rotiere Fuß nach oben",
                    "7. Hüfte presst nach vorne",
                    "8. Knöchel wird über-streckt LANGSAM"
                ],
                details: "Straight Ankle Lock ist häufigste und sicherste Ashi-gatame Variante. Am ehesten im Judo erlaubt.",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Übergang 50/50 Guard",
                position: "Beide Spieler ineinander, Bein isoliert",
                schritte: [
                    "1. 50/50 Guard Position",
                    "2. Isoliere sein Bein",
                    "3. Je nach Position: Knöchel oder Knie angreifen",
                    "4. Für Knöchel: Achsel-Klemmung + Fuß-Rotation",
                    "5. Für Knie: Position wie Hiza-gatame",
                    "6. Finalisiere gewählte Variante LANGSAM"
                ],
                details: "50/50 führt oft zu Beinhebeln. Technisch komplex!",
                videotimestamp: "2:00"
            },
            {
                name: "Von X-Guard - Bein gefangen",
                position: "Spezielle Guard-Form",
                schritte: [
                    "1. Du hast X-Guard",
                    "2. Gegners Bein ist zwischen deinen Beinen",
                    "3. Adjustiere für Ashi-gatame",
                    "4. Wähle Variante (Knöchel oder Knie)",
                    "5. Finalisiere"
                ],
                details: "Von X-Guard sehr natürlich zu Beinhebeln.",
                videotimestamp: "3:30"
            },
            {
                name: "Als Konter gegen Guard Pass",
                position: "Gegner passt deine Guard",
                schritte: [
                    "1. Gegner versucht deine Guard zu passen",
                    "2. Fange sein vorderes Bein während Pass",
                    "3. Ziehe Bein zu dir",
                    "4. Etabliere Ashi-gatame Position",
                    "5. Wähle Variante und finalisiere"
                ],
                details: "Defensive Anwendung aus gescheitertem Pass.",
                videotimestamp: "5:00"
            },
            {
                name: "Von Turtle - Bein isoliert (Selten)",
                position: "Gegner in Turtle",
                schritte: [
                    "1. Gegner in Turtle",
                    "2. Isoliere ein Bein statt Rücken zu nehmen",
                    "3. Ziehe Bein raus",
                    "4. Etabliere Kontrolle",
                    "5. Wähle Ashi-gatame Variante"
                ],
                details: "Ungewöhnlich aber möglich. Zeigt Kreativität!",
                videotimestamp: "6:15"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Varianten Verstehen (Woche 1-4)",
                    intensität: "Partner passiv",
                    dauer: "Lernen",
                    sets: "Verschiedene Varianten ausprobieren",
                    fokus: "Unterschied Knöchel vs. Knie verstehen, WELCHE Variante ist sicher/erlaubt",
                    wiederholungen: 20
                },
                {
                    phase: "Straight Ankle Lock (Sicherste Variante) (Woche 5-8)",
                    intensität: "Partner 20%",
                    dauer: "Variable",
                    sets: "25 Wiederholungen",
                    fokus: "NUR sichere Variante üben, LANGSAM!",
                    wiederholungen: 25
                },
                {
                    phase: "Positionskontrolle (Woche 9-12)",
                    intensität: "Partner 40%",
                    dauer: "Variable",
                    sets: "15 Versuche",
                    fokus: "Bein kontrollieren, Position halten, NIEMALS voll ansetzen!",
                    wiederholungen: 15
                },
                {
                    phase: "Nur Positionstraining (Woche 13+)",
                    intensität: "Partner 60%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "NUR Position erreichen, Partner klopft bei leichtem Druck ab. KEIN voller Hebel!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Knöchel-Mobilität",
                    beschreibung: "Ankle Circles, Dorsiflexion Stretches, Calf Raises",
                    dauer: "15 Min täglich",
                    wiederholungen: "3x20",
                    fokus: "Verstehe Knöchel-Anatomie (wichtig für Sicherheit!)"
                },
                {
                    übung: "Figure-4 Griff für Ankle Lock",
                    beschreibung: "Mit Besenstiel: Übe Figure-4 Griff für Straight Ankle Lock",
                    dauer: "10 Min",
                    wiederholungen: "50x",
                    fokus: "Griffposition"
                },
                {
                    übung: "Hüftdruck-Bewegung",
                    beschreibung: "Hip Thrusts, übe Hüfte nach vorne pressen (kontrolliert!)",
                    dauer: "10 Min",
                    wiederholungen: "3x15",
                    fokus: "Kraft für Hebel"
                },
                {
                    übung: "Regelkunde Studium",
                    beschreibung: "Lerne welche Ashi-gatame Varianten in Judo erlaubt/verboten sind!",
                    dauer: "30 Min einmalig",
                    wiederholungen: "1x gründlich",
                    fokus: "WISSEN um legal zu bleiben!"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: Kläre mit Prüfer WELCHE Variante gewünscht ist!",
                "✓ Straight Ankle Lock zeigen (sicherste Variante)",
                "✓ Oder zeigen dass du Hiza-gatame schon demonstriert hast",
                "✓ SEHR langsam ansetzen",
                "✓ Erklären dass Beinhebel gefährlich sind",
                "✓ Unterschied zu Hiza-gatame erklären können",
                "✓ Sicherheitsaspekte betonen"
            ],
            tipps: [
                "⚠️ WICHTIG: 'Ashi-gatame' ist Oberbegriff - frage Prüfer welche Variante!",
                "Manche Prüfer erwarten Hiza-gatame unter 'Ashi-gatame'",
                "Andere wollen Straight Ankle Lock sehen",
                "Sei vorbereitet BEIDES zeigen zu können!",
                "Erkläre: 'Ashi-gatame umfasst verschiedene Beinhebel'",
                "Zeige Straight Ankle Lock wenn unklar - ist sicherste Variante",
                "NIEMALS voll ansetzen in Prüfung!",
                "Manche Prüfer überspringen Beinhebel ganz - kein Problem!"
            ]
        },

        varianten: [
            {
                name: "Straight Ankle Lock (Achilles Lock)",
                unterschied: "Knöchel wird gestreckt, Achillessehne gepresst",
                wann: "Sicherste Variante, am häufigsten erlaubt"
            },
            {
                name: "Hiza-gatame",
                unterschied: "Knie-Hebel (eigene Technik, siehe Hiza-gatame)",
                wann: "Oft unter Ashi-gatame kategorisiert"
            },
            {
                name: "Toe Hold",
                unterschied: "Fuß wird rotiert",
                wann: "Gefährlicher, oft verboten"
            },
            {
                name: "Heel Hook",
                unterschied: "Ferse wird rotiert",
                wann: "SEHR gefährlich, im Judo oft verboten!"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️⚠️⚠️ ALLE Beinhebel sind gefährlich!",
                "⚠️ Knöchel/Knie haben KEINE Schmerzwarnung - brechen ohne Vorwarnung!",
                "⚠️ Heel Hook ist VERBOTEN in vielen Judo-Organisationen!",
                "⚠️ Toe Hold kann Fuß zerstören - extreme Vorsicht!",
                "⚠️ Straight Ankle Lock ist sicherste Variante - beginne damit!",
                "⚠️ NIEMALS volle Kraft - auch bei Straight Ankle Lock!",
                "⚠️ Partner klopft oft zu spät - sei EXTRA vorsichtig!",
                "⚠️ Bei Jugendlichen oft komplett VERBOTEN!",
                "⚠️ Prüfe Dojo/Wettkampf-Regeln VOR dem Üben!",
                "⚠️ Im Zweifel: NUR Hiza-gatame üben und Ashi-gatame überspringen!"
            ]
        }
    },

    {
        id: "hara-gatame",
        name: "Hara-gatame",
        nameDE: "Bauchhebel / Stomach Armlock",
        kategorie: "Kansetsu-waza",
        videoUrl: "https://youtu.be/ZzEycg8R_9M", // Kodokan Official (Ude-hishigi-hara-gatame)

        beschreibung: {
            position: "Gegners gestreckter Arm wird über deinen Bauch/Hüfte gehebelt, du liegst oft auf Rücken oder Seite.",
            kontrolle: [
                "Gegners Arm ist gestreckt",
                "Sein Ellenbogen liegt auf deinem Bauch/Hüfte",
                "Deine Hände umfassen sein Handgelenk",
                "Dein Bauch/Hüfte ist Hebelpunkt (wie Juji-gatame aber Bauch statt Beine)",
                "Du ziehst Handgelenk zu dir, Bauch presst gegen Ellenbogen"
            ],
            beinarbeit: [
                "Du liegst oft auf Rücken oder Seite",
                "Beine können Gegners Körper/Bein kontrollieren",
                "Oder Beine sind frei für Bewegung",
                "Hüfte wird angehoben für Hebel"
            ],
            schlüsselpunkte: [
                "Ähnlich Juji-gatame aber ohne Beine um Arm",
                "Bauch/Hüfte als Hebelpunkt statt Hüfte zwischen Beinen",
                "Arm muss gestreckt sein",
                "Oft aus Scrambles oder ungewöhnlichen Positionen",
                "Weniger stabil als Juji-gatame aber schneller anzusetzen",
                "Daumen-zu-Daumen Regel gilt auch hier!"
            ]
        },

        fehler: [
            "❌ Ellenbogen nicht auf Bauch → Kein Hebel",
            "❌ Arm nicht gestreckt → Technik funktioniert nicht",
            "❌ Falsche Daumenrichtung → Keine Hebelwirkung",
            "❌ Zu wenig Hüftdruck → Schwacher Hebel",
            "❌ Position zu instabil → Gegner escaped leicht",
            "❌ Verwechslung mit Juji-gatame → Klarheit fehlt"
        ],

        situationen: [
            {
                name: "Aus Scramble - Opportunistisch",
                position: "Chaotische Boden-Situation",
                schritte: [
                    "1. Chaotischer Bodenkampf (Scramble)",
                    "2. Gegner gibt einen Arm (Fehler)",
                    "3. Fange diesen Arm schnell",
                    "4. Falle auf Rücken/Seite mit Armkontrolle",
                    "5. Ziehe Arm über deinen Bauch",
                    "6. Ellenbogen auf Bauch positionieren",
                    "7. Daumen-Check (zu seinem Daumen!)",
                    "8. Hebe Hüfte/Bauch für Hebel LANGSAM"
                ],
                details: "Hara-gatame entsteht oft opportunistisch in chaotischen Momenten!",
                videotimestamp: "0:00"
            },
            {
                name: "Aus Guard - Arm über Körper",
                position: "Gegner in deiner Guard, postet",
                schritte: [
                    "1. Gegner in deiner Closed Guard",
                    "2. Er postet mit einem Arm (Balance)",
                    "3. Fange diesen Arm",
                    "4. Ziehe Arm über deine Körpermitte",
                    "5. Öffne Guard",
                    "6. Falle zur Seite während Arm über Bauch kommt",
                    "7. Ellenbogen auf Bauch",
                    "8. Finalisiere Hara-gatame"
                ],
                details: "Von Guard möglich als Alternative zu Juji-gatame oder Triangle.",
                videotimestamp: "1:45"
            },
            {
                name: "Aus gescheitertem Juji-gatame",
                position: "Juji-gatame klappt nicht, wechsle zu Hara",
                schritte: [
                    "1. Du versuchst Juji-gatame",
                    "2. Gegner verteidigt - zieht Arm oder dreht",
                    "3. Du kannst Beine nicht gut positionieren",
                    "4. Aber Armkontrolle behältst du",
                    "5. Lasse Bein-Kontrolle los",
                    "6. Bringe Arm über Bauch statt zwischen Beine",
                    "7. Wechsle zu Hara-gatame",
                    "8. Finalisiere"
                ],
                details: "Backup wenn Juji-gatame nicht funktioniert. Flexibilität!",
                videotimestamp: "3:15"
            },
            {
                name: "Von Seiten-Position - Arm gefangen",
                position: "Du bist seitlich vom Gegner",
                schritte: [
                    "1. Du hast Side Control oder ähnliche Position",
                    "2. Gegner schiebt mit einem Arm",
                    "3. Fange diesen Arm",
                    "4. Falle/rolle zur Seite mit Arm",
                    "5. Bringe Arm über deinen Bauch",
                    "6. Stabilisiere Position",
                    "7. Hebe Hüfte für Hebel"
                ],
                details: "Von Side Control weniger häufig aber möglich.",
                videotimestamp: "5:00"
            },
            {
                name: "Als Konter gegen Übersteigen",
                position: "Gegner steht über dich",
                schritte: [
                    "1. Gegner versucht über dich zu steigen (Pass)",
                    "2. Fange seinen führenden Arm",
                    "3. Ziehe Arm zu dir während du zur Seite rollst",
                    "4. Bringe Arm über Bauch",
                    "5. Finalisiere Hara-gatame",
                    "6. Gegners Pass wird zu deinem Armhebel!"
                ],
                details: "Defensive Anwendung. Konter gegen Pass-Versuch!",
                videotimestamp: "6:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Position Verstehen (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "Variable",
                    sets: "20 Wiederholungen",
                    fokus: "Unterschied zu Juji-gatame verstehen, Bauch als Hebelpunkt, Daumen-Regel!",
                    wiederholungen: 20
                },
                {
                    phase: "Aus Scrambles üben (Woche 4-6)",
                    intensität: "Partner 30%",
                    dauer: "Flow-Rolling",
                    sets: "15 Min Scramble-Drill",
                    fokus: "Opportunistisch Hara-gatame finden in chaotischen Situationen",
                    wiederholungen: 25
                },
                {
                    phase: "Als Backup für Juji-gatame (Woche 7-10)",
                    intensität: "Partner 50%",
                    dauer: "Variable",
                    sets: "20 Versuche",
                    fokus: "Von Juji-gatame zu Hara-gatame wechseln wenn nötig",
                    wiederholungen: 20
                },
                {
                    phase: "Live Anwendung (Woche 11+)",
                    intensität: "Partner 100%",
                    dauer: "Randori",
                    sets: "Unbegrenzt",
                    fokus: "Hara-gatame im freien Training, LANGSAM ansetzen!",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Bauch-Kraft für Hebel",
                    beschreibung: "Planks, Dead Bugs, Hollow Body Holds",
                    dauer: "15 Min täglich",
                    wiederholungen: "3x45 Sek",
                    fokus: "Bauchkraft um Ellenbogen zu pressen"
                },
                {
                    übung: "Hara-gatame Position mit Kissen",
                    beschreibung: "Großes Kissen als Arm-Simulation über Bauch, übe Position",
                    dauer: "15 Min",
                    wiederholungen: "30x beide Seiten",
                    fokus: "Bewegungsablauf, Daumen-Regel"
                },
                {
                    übung: "Daumen-Drill (wie Juji-gatame)",
                    beschreibung: "Mit Gürtel: Übe Daumen-zu-Daumen Griff",
                    dauer: "5 Min",
                    wiederholungen: "100x",
                    fokus: "Automatisierung - KRITISCH!"
                },
                {
                    übung: "Scramble-Simulation",
                    beschreibung: "Bewege dich chaotisch am Boden, simuliere Armfang",
                    dauer: "10 Min",
                    wiederholungen: "Variable",
                    fokus: "Situationserkennung"
                },
                {
                    übung: "Hüft-Lift mit Gewicht",
                    beschreibung: "Bridge Holds mit Gewicht auf Hüfte",
                    dauer: "10 Min",
                    wiederholungen: "3x20",
                    fokus: "Hüftkraft für Hebel"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Daumen-zu-Daumen Regel demonstrieren (wie Juji-gatame!)",
                "✓ Ellenbogen korrekt auf Bauch/Hüfte",
                "✓ Aus 1-2 Situationen zeigen (Scramble, oder von Guard)",
                "✓ Unterschied zu Juji-gatame erklären können",
                "✓ LANGSAM ansetzen",
                "✓ Als Backup/Alternative zu Juji-gatame zeigen"
            ],
            tipps: [
                "Hara-gatame ist weniger bekannt - klare Demonstration wichtig!",
                "Erkläre: 'Wie Juji-gatame aber Bauch statt Beine als Hebel'",
                "Zeige aus Scramble oder als Übergang von Juji-gatame",
                "Daumen-Regel ist GLEICH wie bei Juji-gatame - betone das!",
                "Demonstriere dass es schneller anzusetzen ist als Juji-gatame",
                "Aber auch weniger stabil - erkläre Pro/Contra",
                "Manche Prüfer kennen Hara-gatame nicht gut - sei geduldig beim Erklären!"
            ]
        },

        varianten: [
            {
                name: "Hara-gatame von Seite",
                unterschied: "Du liegst auf Seite statt Rücken",
                wann: "Von Side Control oder Scramble"
            },
            {
                name: "Rolling Hara-gatame",
                unterschied: "Mit Rolle in Position",
                wann: "Dynamische Anwendung"
            }
        ],

        sicherheit: {
            wichtig: [
                "⚠️ Ellenbogen ist empfindlich - LANGSAM!",
                "⚠️ Daumen-Regel ist KRITISCH (gleich wie Juji-gatame)!",
                "⚠️ Position ist instabiler als Juji-gatame - Gegner kann schneller raus",
                "⚠️ Aber auch schneller anzusetzen - doppelte Vorsicht!",
                "⚠️ Sofort loslassen bei Abklopfen!",
                "⚠️ Nicht zu viel Kraft - Technik ist wichtiger!"
            ]
        }
    }
];

// Export für Verwendung in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KANSETSU_WAZA };
}

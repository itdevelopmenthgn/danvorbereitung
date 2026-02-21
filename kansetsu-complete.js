// Datenbank für alle Kansetsu-Waza (Armhebel)
// Wird in techniken-data.js integriert

const KANSETSU_WAZA = [
    {
        id: "juji-gatame",
        name: "Juji-gatame",
        nameDE: "Armstreckhebel / Kreuz-Armhebel",
        kategorie: "Kansetsu-waza",
        videoUrl: "",

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
        videoUrl: "",

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

    // Weitere Kansetsu-waza folgen...
];

// Wird in Haupt-Datenbank integriert
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KANSETSU_WAZA };
}
// Restliche 6 Kansetsu-waza...

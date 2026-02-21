// Datenbank für alle Katame-Waza Techniken
// Wird verwendet um dynamisch Detailseiten zu generieren

const OSAEKOMI_WAZA = [
    {
        id: "kesa-gatame",
        name: "Kesa-gatame",
        nameDE: "Schärpenhaltegriff",
        kategorie: "Osaekomi-waza",
        videoUrl: "https://www.youtube.com/watch?v=guJ-HlAKEA8", // Kodokan Osaekomi-waza Demo
        videos: [
            {
                titel: "Kodokan Judo - Osaekomi-waza Demonstration",
                url: "https://www.youtube.com/watch?v=guJ-HlAKEA8",
                kanal: "Kodokan Judo",
                beschreibung: "Offizielle Kodokan Demonstration aller Osaekomi-waza"
            },
            {
                titel: "Kesa-gatame Tutorial - Judo HD",
                url: "https://www.youtube.com/watch?v=PLACEHOLDER1", // Hier spezifisches Video einfügen
                kanal: "Judo HD",
                beschreibung: "Detaillierte Erklärung auf Deutsch"
            },
            {
                titel: "Kesa-gatame im Wettkampf",
                url: "https://www.youtube.com/watch?v=PLACEHOLDER2", // Wettkampf-Beispiele
                kanal: "IJF Judo",
                beschreibung: "Anwendungsbeispiele aus dem Wettkampf"
            }
        ]

        beschreibung: {
            position: "Du sitzt seitlich neben dem Gegner, der auf dem Rücken liegt. Deine Brust drückt auf seine Brust.",
            kontrolle: [
                "Rechter Arm umschließt den Kopf des Gegners",
                "Linker Arm kontrolliert den rechten Arm des Gegners",
                "Brust-zu-Brust Druck",
                "Kopf tief halten, Kinn zur eigenen Brust"
            ],
            beinarbeit: [
                "Rechtes Bein angewinkelt, nah am Gegner",
                "Linkes Bein gestreckt für Stabilität",
                "Hüfte flach auf dem Boden",
                "Gewicht auf den Gegner verlagern"
            ],
            schlüsselpunkte: [
                "Maximaler Druck mit der Brust",
                "Hüfte bleibt tief",
                "Kopf des Gegners fest kontrollieren",
                "Gegner kann sich nicht zur Seite drehen"
            ]
        },

        fehler: [
            "❌ Zu wenig Druck mit der Brust → Gegner kann sich drehen",
            "❌ Hüfte zu hoch → Gegner kann überbrücken (Bridge Escape)",
            "❌ Kopfkontrolle zu locker → Gegner kann Kopf befreien und aussteigen",
            "❌ Zu viel Gewicht auf den Armen → Verlust der Basis und Kontrolle",
            "❌ Beine zu nah beieinander → Instabil gegen seitliche Bewegungen"
        ],

        situationen: [
            {
                name: "Bank/Bauchlage (Oberlage)",
                position: "Gegner auf allen Vieren oder Bauch",
                schritte: [
                    "1. Gegner liegt in Bauchlage/Vierfüßlerstand",
                    "2. Positioniere dich seitlich rechts vom Gegner",
                    "3. Greife mit rechtem Arm unter seinen Kopf/Hals",
                    "4. Greife mit linkem Arm seinen rechten Arm",
                    "5. Rolle ihn auf die rechte Seite zu dir",
                    "6. Während er sich dreht, gleite in Kesa-Position",
                    "7. Stabilisiere sofort: Hüfte runter, Druck aufbauen"
                ],
                details: "Von der Turtle-Position (Schildkröte) ist dies der klassischste Einstieg. Der Gegner schützt sich in Bauchlage, aber die seitliche Position gibt dir Hebel zum Drehen.",
                videotimestamp: "0:00"
            },
            {
                name: "Übergang Stand-Boden (Oberlage)",
                position: "Nach erfolgreichem Wurf",
                schritte: [
                    "1. Nach Wurf (z.B. O-goshi, Seoi-nage) sofort nachrücken",
                    "2. Gegner liegt auf dem Rücken",
                    "3. Greife sofort den Kopf mit rechtem Arm",
                    "4. Sichere den nahen Arm (rechts) mit linker Hand",
                    "5. Setze dich seitlich neben ihn",
                    "6. Stabilisiere die Beinposition",
                    "7. Baue Druck auf bevor Gegner reagieren kann"
                ],
                details: "Timing ist entscheidend! Die ersten 2 Sekunden nach dem Wurf sind kritisch. Der Gegner ist noch desorientiert - nutze das aus.",
                videotimestamp: "0:45"
            },
            {
                name: "Beinklammer (Oberlage)",
                position: "Gegner klammert deine Beine von unten",
                schritte: [
                    "1. Gegner hat Guard (deine Hüfte zwischen seinen Beinen)",
                    "2. Passe die Guard: Stehe auf, schaffe Distanz",
                    "3. Schiebe sein rechtes Bein nach unten",
                    "4. Bewege dich schnell zur rechten Seite",
                    "5. Greife sofort seinen Kopf",
                    "6. Sichere seinen rechten Arm",
                    "7. Etabliere Kesa bevor er neue Guard aufbauen kann"
                ],
                details: "Guard-Passing ist eine der wichtigsten Skills. Sobald du vorbei bist, lasse keine Lücke für Re-Guard.",
                videotimestamp: "1:30"
            },
            {
                name: "Rückenlage - Partner zwischen Beinen (Unterlage)",
                position: "Du liegst in Rückenlage, Gegner in deiner Guard",
                schritte: [
                    "1. Du hast Gegner in deiner Closed Guard",
                    "2. Breche seine Haltung: Ziehe ihn nach vorne/unten",
                    "3. Schwinge deine Hüfte zur Seite (z.B. rechts)",
                    "4. Öffne Guard und platziere rechten Fuß auf seiner Hüfte",
                    "5. Schiebe ihn weg und drehe dich gleichzeitig auf die Seite",
                    "6. Sweep oder Tech-Stand um nach oben zu kommen",
                    "7. Sofort auf ihn setzen in Kesa-Position"
                ],
                details: "Aus der Unterlage ist Kesa schwieriger zu erreichen. Du musst zuerst Position umdrehen (Sweep/Reversal), dann Kesa ansetzen.",
                videotimestamp: "2:15"
            },
            {
                name: "Übergang von anderem Osaekomi",
                position: "Du hältst bereits mit anderer Technik",
                schritte: [
                    "1. Z.B. aus Yoko-shiho-gatame",
                    "2. Gegner versucht zu escaped nach vorne",
                    "3. Lasse Beine los, behalte Oberkörperkontrolle",
                    "4. Rolle mit seiner Bewegung zur Seite",
                    "5. Greife Kopf während der Drehung",
                    "6. Etabliere Kesa-Position",
                    "7. Stabilisiere neu"
                ],
                details: "Fließende Übergänge zwischen Osaekomi sind essentiell für Niveaustufe 3. Der Gegner soll nie eine Pause bekommen.",
                videotimestamp: "3:00"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Statisches Halten (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "30 Sekunden pro Wiederholung",
                    sets: "3 Sets à 3 Wiederholungen",
                    fokus: "Korrekte Position etablieren, Körpergefühl entwickeln",
                    wiederholungen: 9
                },
                {
                    phase: "Leichter Widerstand (Woche 3-4)",
                    intensität: "Partner 30% Kraft",
                    dauer: "45 Sekunden pro Wiederholung",
                    sets: "5 Sets à 2 Wiederholungen",
                    fokus: "Position halten lernen, kleine Korrekturen vornehmen",
                    wiederholungen: 10
                },
                {
                    phase: "Mittlerer Widerstand (Woche 5-8)",
                    intensität: "Partner 60% Kraft",
                    dauer: "60 Sekunden pro Wiederholung",
                    sets: "10 einzelne Wiederholungen",
                    fokus: "Reaktion auf Escape-Versuche, verschiedene Verteidigungen kennenlernen",
                    wiederholungen: 10
                },
                {
                    phase: "Voller Widerstand (Woche 9+)",
                    intensität: "Partner 100% Kraft",
                    dauer: "Variable (bis Escape oder Aufgabe)",
                    sets: "Freies Randori",
                    fokus: "Technik unter Wettkampfbedingungen, Übergänge integrieren",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Bewegungsablauf ohne Partner",
                    beschreibung: "Lege dich in Kesa-Position auf den Boden, simuliere die Armbewegungen, achte auf Hüftposition",
                    dauer: "10 Min täglich",
                    wiederholungen: "10x langsam + 10x Wettkampfgeschwindigkeit",
                    fokus: "Muskelgedächtnis aufbauen"
                },
                {
                    übung: "Mit Kissen/Sandsack",
                    beschreibung: "Platziere großes Kissen als Gegner-Simulation, übe Einnehmen der Position",
                    dauer: "5 Min",
                    wiederholungen: "15-20x",
                    fokus: "Druckausübung, Gewichtsverlagerung"
                },
                {
                    übung: "Hüftbeweglichkeit",
                    beschreibung: "Pigeon Pose, Hüftöffner, Rotationsübungen",
                    dauer: "5 Min täglich",
                    wiederholungen: "Je 30 Sek halten",
                    fokus: "Flexibilität für tiefe Hüftposition"
                },
                {
                    übung: "Mentale Visualisierung",
                    beschreibung: "Stelle dir vor, wie du aus verschiedenen Situationen in Kesa kommst, visualisiere Gegner-Reaktionen",
                    dauer: "5 Min vor Schlafengehen",
                    wiederholungen: "Alle 5 Situationen durchgehen",
                    fokus: "Neuronale Bahnen stärken"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Perfekte Körperhaltung und maximale Kontrolle zeigen",
                "✓ Saubere Ausführung unter vollem Widerstand demonstrieren",
                "✓ Aus mindestens 2 verschiedenen Situationen anwenden können",
                "✓ Fließende Übergänge zu anderen Techniken zeigen",
                "✓ Korrekte japanische Bezeichnung verwenden",
                "✓ Sicheres Arbeiten (Partner darf nicht verletzt werden)",
                "✓ 20-25 Sekunden Haltezeit unter Widerstand"
            ],
            tipps: [
                "Übe alle 5 Eingangssituationen gleichermaßen",
                "In der Prüfung werden oft 2-3 Varianten verlangt",
                "Zeige Confidence - zögere nicht beim Ausführen",
                "Kommuniziere mit Partner (besonders bei neuen Partnern)"
            ]
        },

        varianten: [
            {
                name: "Kuzure-kesa-gatame",
                unterschied: "Arm geht unter beide Arme des Gegners statt nur um den Kopf",
                wann: "Wenn Gegner Kopf gut verteidigt"
            },
            {
                name: "Makura-kesa-gatame",
                unterschied: "Gegners Kopf wird als 'Kissen' benutzt, höhere Position",
                wann: "Gegen größere Gegner"
            }
        ]
    },

    {
        id: "yoko-shiho-gatame",
        name: "Yoko-shiho-gatame",
        nameDE: "Seitliche Vierpunkthaltegriff",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du liegst quer über dem Gegner (90-Grad-Winkel zu seinem Körper), deine Brust auf seiner Brust.",
            kontrolle: [
                "Linker Arm greift unter seinen Kopf/Hals, hält sein linkes Revers",
                "Rechter Arm greift zwischen seine Beine, hält seinen Gürtel/Hose",
                "Vollständiger Brust-auf-Brust Kontakt",
                "Knie weit gespreizt für Basis"
            ],
            beinarbeit: [
                "Beide Knie weit auseinander (breite Basis)",
                "Füße graben sich in die Matte",
                "Knie blockieren Bewegung nach oben/unten",
                "Gewicht gleichmäßig verteilt"
            ],
            schlüsselpunkte: [
                "Spreize die Beine maximal weit",
                "Drücke mit der Brust nach unten",
                "Halte Kopf und Hüfte fest",
                "Gegner kann sich nicht drehen"
            ]
        },

        fehler: [
            "❌ Beine zu eng → Gegner kann dich zur Seite rollen",
            "❌ Zu wenig Druck → Gegner schafft Platz und dreht sich",
            "❌ Hüftkontrolle verloren → Gegner kann Hüfte bewegen und entkommen",
            "❌ Zu hohe Position → Gewicht nicht effektiv",
            "❌ Kopfkontrolle zu locker → Gegner dreht Schultern frei"
        ],

        situationen: [
            {
                name: "Beinklammer (Oberlage)",
                position: "Gegner hat dich in Guard (Beinklammer)",
                schritte: [
                    "1. Starte in Gegners Closed Guard",
                    "2. Stehe auf oder knie hoch (Hüfte hoch bringen)",
                    "3. Öffne seine Guard (klassisch: Ein Ellenbogen in Oberschenkel)",
                    "4. Passe ein Bein (z.B. sein rechtes Bein nach unten schieben)",
                    "5. Bewege dich sofort zur Seite (nicht nach vorne!)",
                    "6. Lege dich quer über ihn",
                    "7. Greife Kopf und Hüfte, spreize Beine weit"
                ],
                details: "Guard-Passing zur Seite ist der direkteste Weg zu Yoko-shiho. Vermeide es, direkt nach vorne zu passen - das führt zu anderen Positionen.",
                videotimestamp: "0:00"
            },
            {
                name: "Rückenlage - Partner zwischen Beinen (Unterlage)",
                position: "Du hast Gegner in deiner Guard, führst Sweep aus",
                schritte: [
                    "1. Gegner steht/kniet in deiner Guard",
                    "2. Führe Scissor Sweep oder Flower Sweep aus",
                    "3. Während des Sweeps, halte Kopfkontrolle",
                    "4. Lande quer auf ihm (nicht in Mount!)",
                    "5. Sofort Hüfte greifen mit rechter Hand",
                    "6. Linke Hand sichert Kopf/Revers",
                    "7. Beine spreizen und stabilisieren"
                ],
                details: "Der Sweep muss direkt in Yoko-shiho enden. Plane das Ende des Sweeps - wo wirst du landen?",
                videotimestamp: "1:00"
            },
            {
                name: "Bank/Bauchlage (Oberlage)",
                position: "Gegner in Turtle (Vierfüßler)",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Positioniere dich seitlich (z.B. rechts)",
                    "3. Greife mit linkem Arm unter seinen Hals, sichere Revers",
                    "4. Greife mit rechtem Arm zwischen seine Beine zum Gürtel",
                    "5. Hebe ihn leicht an und rolle ihn zur Seite",
                    "6. Lande mit ihm zusammen in Yoko-shiho",
                    "7. Spreize Beine sofort weit für Stabilität"
                ],
                details: "Aus Turtle ist Yoko-shiho technisch anspruchsvoll. Du musst ihn quer rollen, nicht geradeaus.",
                videotimestamp: "2:00"
            },
            {
                name: "Übergang Stand-Boden (Oberlage)",
                position: "Nach Wurf in seitlicher Position",
                schritte: [
                    "1. Wurf landet dich seitlich vom Gegner (z.B. nach Harai-goshi)",
                    "2. Gegner liegt auf dem Rücken",
                    "3. Lege dich sofort quer über ihn",
                    "4. Sichere Kopf mit linker Hand",
                    "5. Sichere Hüfte/Gürtel mit rechter Hand",
                    "6. Spreize Beine weit",
                    "7. Baue Druck auf bevor Gegner reagiert"
                ],
                details: "Manche Würfe (Harai-goshi, Osoto-gari) enden natürlich in seitlicher Position - perfekt für Yoko-shiho.",
                videotimestamp: "2:45"
            },
            {
                name: "Übergang von Kesa-gatame",
                position: "Gegner versucht aus Kesa zu entkommen",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Gegner macht Bridge (Brücke) und dreht sich zur Seite",
                    "3. Gehe mit seiner Bewegung mit",
                    "4. Lasse Kopfkontrolle von Kesa, behalte aber Körperkontakt",
                    "5. Drehe dich quer über ihn",
                    "6. Etabliere Yoko-shiho Griffe (Kopf + Hüfte)",
                    "7. Spreize Beine und stabilisiere"
                ],
                details: "Wenn Gegner aus Kesa escaped, nutze seine Bewegungsenergie um in Yoko-shiho zu wechseln. Kämpfe nicht gegen die Bridge an.",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Statisches Halten (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "30 Sekunden",
                    sets: "3x3",
                    fokus: "Korrekte Beinposition, maximale Spreizung",
                    wiederholungen: 9
                },
                {
                    phase: "Escape-Defense (Woche 3-6)",
                    intensität: "Partner 40-60%",
                    dauer: "60 Sekunden",
                    sets: "5x2",
                    fokus: "Standard-Escapes kontern (Bridge & Roll, Elbow Escape)",
                    wiederholungen: 10
                },
                {
                    phase: "Wettkampfsimulation (Woche 7+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Randori",
                    fokus: "Unter Druck halten, Übergänge nutzen",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Beinspreizung & Flexibilität",
                    beschreibung: "Grätsche-Dehnung, Hüftöffner, Middle Splits üben",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x30 Sek halten",
                    fokus: "Maximale Beinspreizung erreichen"
                },
                {
                    übung: "Positionsübung mit Kissen",
                    beschreibung: "Lege großes Kissen quer vor dich, übe Yoko-shiho Position",
                    dauer: "5 Min",
                    wiederholungen: "20x",
                    fokus: "Griffpositionen, Gewichtsverlagerung"
                },
                {
                    übung: "Mentale Simulation",
                    beschreibung: "Visualisiere alle 5 Eingangssituationen",
                    dauer: "5 Min",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Maximale Beinspreizung demonstrieren",
                "✓ Griffe fest und korrekt",
                "✓ Aus 2-3 verschiedenen Situationen zeigen",
                "✓ Übergang von/zu anderen Techniken",
                "✓ Mindestens 25 Sekunden unter Widerstand halten"
            ],
            tipps: [
                "Beine WIRKLICH weit spreizen - häufigster Fehler ist zu enge Beine",
                "Zeige Guard-Passing → Yoko-shiho (sehr häufig in Prüfung)",
                "Übe Übergang von Kesa (wird oft verlangt)"
            ]
        },

        varianten: [
            {
                name: "Kuzure-yoko-shiho-gatame",
                unterschied: "Arm unter Kopf greift nicht Revers sondern umschlingt Kopf komplett",
                wann: "Wenn Gegner Gi-Kontrolle gut verteidigt"
            }
        ]
    },

    {
        id: "tate-shiho-gatame",
        name: "Tate-shiho-gatame",
        nameDE: "Längsvie

rpunkthaltegriff / Reiter-Position",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du sitzt auf dem Gegner in Reiter-Position (Mount), dein Körper ist längs über seinem Körper.",
            kontrolle: [
                "Beide Arme greifen unter seine Schultern/Achseln",
                "Hände fassen zusammen hinter seinem Rücken oder greifen seinen Gürtel",
                "Brust drückt auf seine Brust",
                "Kopf ist tief, Kinn zur eigenen Brust"
            ],
            beinarbeit: [
                "Knie eng an seinen Körper gepresst",
                "Füße greifen unter seine Beine (Haken)",
                "Gewicht auf den Gegner, Hüfte tief",
                "Beine stabilisieren die Position seitlich"
            ],
            schlüsselpunkte: [
                "Hüfte bleibt tief und schwer",
                "Knie eng am Körper - keine Lücken",
                "Arme kontrollieren Schultern fest",
                "Gegner kann sich nicht aufsetzen oder zur Seite drehen"
            ]
        },

        fehler: [
            "❌ Hüfte zu hoch → Gegner kann Hüfte heben (Upa/Bridge Escape)",
            "❌ Knie zu weit vom Körper → Gegner kann Bein einhaken und umdrehen",
            "❌ Arme zu locker → Gegner kann Schultern befreien und entkommen",
            "❌ Zu viel Gewicht auf den Knien → Leicht zu kippen",
            "❌ Kopf zu hoch → Anfällig für Submissions vom Gegner"
        ],

        situationen: [
            {
                name: "Übergang Stand-Boden (Oberlage)",
                position: "Nach Wurf direkt in Mount",
                schritte: [
                    "1. Erfolgreicher Wurf (z.B. O-goshi, Uchi-mata)",
                    "2. Gegner liegt auf dem Rücken",
                    "3. Springe/steige sofort auf ihn (Mount)",
                    "4. Knie eng an seinen Körper pressen",
                    "5. Greife unter seine Schultern",
                    "6. Fasse Hände zusammen hinter seinem Rücken",
                    "7. Hüfte runter, Gewicht aufbauen"
                ],
                details: "Nach einem Wurf ist der direkte Weg zu Tate-shiho oft der schnellste. Der Gegner hat keine Zeit zu reagieren.",
                videotimestamp: "0:00"
            },
            {
                name: "Beinklammer - Guard Pass (Oberlage)",
                position: "Von Guard zu Mount",
                schritte: [
                    "1. Du bist in Gegners Closed Guard",
                    "2. Stehe auf, öffne seine Guard",
                    "3. Passe beide Beine gleichzeitig zur Seite",
                    "4. Bewege dich schnell nach vorne (nicht seitlich!)",
                    "5. Steige in Mount Position",
                    "6. Knie eng ran, bevor er reagiert",
                    "7. Sichere Schultern und baue Kontrolle auf"
                ],
                details: "Der direkte Pass nach vorne (Stack Pass) führt oft in Mount. Timing ist kritisch - sei explosiv!",
                videotimestamp: "1:00"
            },
            {
                name: "Rückenlage - Sweep zu Mount (Unterlage)",
                position: "Von deiner Guard zum Mount",
                schritte: [
                    "1. Gegner ist in deiner Guard",
                    "2. Führe Elevator Sweep oder Flower Sweep aus",
                    "3. Während des Sweeps, kontrolliere seine Arme",
                    "4. Lande direkt in Mount (nicht zur Seite!)",
                    "5. Knie sofort eng an Körper",
                    "6. Greife Schultern",
                    "7. Stabilisiere Position"
                ],
                details: "Viele Sweeps enden natürlich in Mount. Plane das Ende deines Sweeps - wohin gehst du?",
                videotimestamp: "2:00"
            },
            {
                name: "Übergang von Kesa-gatame",
                position: "Gegner versucht zu bridgen",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Gegner macht Bridge und schiebt dich nach vorne",
                    "3. Gehe mit der Bewegung mit (kämpfe nicht dagegen)",
                    "4. Lasse Kesa los, schwinge Bein über ihn",
                    "5. Lande in Mount Position",
                    "6. Greife sofort unter Schultern",
                    "7. Etabliere Tate-shiho"
                ],
                details: "Wenn Gegner aus Kesa escaped, nutze seine Energie. Mount ist oft das natürliche Ergebnis.",
                videotimestamp: "2:45"
            },
            {
                name: "Bank/Bauchlage (Oberlage)",
                position: "Von Turtle zu Mount",
                schritte: [
                    "1. Gegner in Turtle (Schildkröte)",
                    "2. Positioniere dich an seiner Seite",
                    "3. Greife unter seinen nahen Arm",
                    "4. Rolle ihn zur Seite/Rücken",
                    "5. Folge der Bewegung und steige in Mount",
                    "6. Bevor er sich stabilisiert, Knie eng ran",
                    "7. Sichere Schultern für Tate-shiho"
                ],
                details: "Von Turtle ist es schwieriger direkt zu Mount zu kommen. Oft gehst du erst zu Kesa, dann zu Mount.",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Statisches Mount (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "30 Sekunden",
                    sets: "3x3",
                    fokus: "Korrekte Mount-Position, Gewichtsverteilung lernen",
                    wiederholungen: 9
                },
                {
                    phase: "Mount Maintenance (Woche 3-4)",
                    intensität: "Partner 40%",
                    dauer: "45 Sekunden",
                    sets: "4x3",
                    fokus: "Standard-Escapes verhindern (Upa, Elbow-Knee Escape)",
                    wiederholungen: 12
                },
                {
                    phase: "Dynamisches Mount (Woche 5-8)",
                    intensität: "Partner 70%",
                    dauer: "60 Sekunden",
                    sets: "5x2",
                    fokus: "Position halten bei vollem Escape-Versuch, Re-Mount nach High Mount",
                    wiederholungen: 10
                },
                {
                    phase: "Wettkampf Mount (Woche 9+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Randori",
                    fokus: "Mount unter Wettkampfbedingungen, Übergänge zu Submissions",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Mount-Position mit Kissen",
                    beschreibung: "Großes Kissen zwischen die Knie, übe Mount-Position am Boden",
                    dauer: "10 Min",
                    wiederholungen: "20x Position einnehmen",
                    fokus: "Knie-Enge, Hüft-Tiefe"
                },
                {
                    übung: "Hüftbeweglichkeit für Mount",
                    beschreibung: "Deep Squat Holds, Cossack Squats, Hip Flexor Stretches",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x30 Sekunden halten",
                    fokus: "Hüfte tief halten können ohne Ermüdung"
                },
                {
                    übung: "Arm-Unterhaken Bewegung",
                    beschreibung: "Simuliere das Untergreifen der Schultern mit einem Gürtel",
                    dauer: "5 Min",
                    wiederholungen: "50x",
                    fokus: "Schnelles, festes Greifen"
                },
                {
                    übung: "Mentale Visualisierung",
                    beschreibung: "Stelle dir alle 5 Wege zu Mount vor, visualisiere Gegner-Escapes und deine Reaktionen",
                    dauer: "5 Min abends",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung und Reflexe"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Perfekte Mount-Position demonstrieren",
                "✓ Griffe fest und tief unter den Schultern",
                "✓ Aus mindestens 2 verschiedenen Situationen zeigen",
                "✓ Escape-Versuche souverän abwehren",
                "✓ 25+ Sekunden halten unter Widerstand",
                "✓ Fließender Übergang von/zu anderen Positionen"
            ],
            tipps: [
                "Mount ist eine der wichtigsten Positionen - übe sie täglich!",
                "Zeige Guard Pass → Mount (sehr häufig in Prüfung verlangt)",
                "Demonstriere auch High Mount und Re-Mount nach Escape-Versuch",
                "Knie MÜSSEN eng sein - häufigster Fehler!"
            ]
        },

        varianten: [
            {
                name: "High Mount",
                unterschied: "Knie sind höher, näher an Achseln statt Hüfte",
                wann: "Wenn Gegner Arme gut verteidigt, für Submissions"
            },
            {
                name: "S-Mount",
                unterschied: "Ein Bein ist gestreckt, anderes Knie am Kopf",
                wann: "Setup für Armbar, gegen Elbow-Knee Escape"
            }
        ]
    },

    {
        id: "kami-shiho-gatame",
        name: "Kami-shiho-gatame",
        nameDE: "Vier-Ecken-Haltegriff von oben",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du kniest hinter dem Kopf des Gegners, deine Brust drückt auf sein Gesicht/Brust.",
            kontrolle: [
                "Beide Arme greifen unter seine Arme von außen",
                "Hände fassen seinen Gürtel/Hose an der Hüfte",
                "Ellenbogen eng am Boden",
                "Brust presst nach unten auf seinen Oberkörper"
            ],
            beinarbeit: [
                "Knie weit gespreizt (breite Basis)",
                "Füße graben sich in die Matte",
                "Hüfte ist tief, Gewicht nach vorne",
                "Zehenspitzen nach außen für Stabilität"
            ],
            schlüsselpunkte: [
                "Maximale Beinspreizung für niedrigen Schwerpunkt",
                "Arme sind gestreckt, greifen tief am Gürtel",
                "Druck nach vorne-unten (nicht nur nach unten)",
                "Gegner kann Schultern nicht vom Boden heben"
            ]
        },

        fehler: [
            "❌ Beine zu eng → Leicht zur Seite zu kippen",
            "❌ Ellenbogen zu hoch → Verlust der Kontrolle",
            "❌ Griff zu hoch (an Rippen statt Hüfte) → Gegner kann drehen",
            "❌ Gewicht zu weit hinten → Gegner bridged dich weg",
            "❌ Zu viel Druck aufs Gesicht → Unsportlich, Strafe möglich"
        ],

        situationen: [
            {
                name: "Bank/Bauchlage (Oberlage)",
                position: "Gegner in Turtle, Flip zu Kami-shiho",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Positioniere dich vor/neben seinem Kopf",
                    "3. Greife unter beide Arme von außen",
                    "4. Fasse seinen Gürtel an der Hüfte",
                    "5. Rolle/ziehe ihn nach hinten über dich",
                    "6. Lande mit ihm in Kami-shiho Position",
                    "7. Spreize Beine sofort weit, baue Druck auf"
                ],
                details: "Der 'Turtle Flip' ist der klassischste Eingang zu Kami-shiho. Timing und Technik sind wichtiger als Kraft.",
                videotimestamp: "0:00"
            },
            {
                name: "Rückenlage - Guard Pass (Oberlage)",
                position: "Guard Pass über den Kopf",
                schritte: [
                    "1. Du bist in Gegners Closed Guard",
                    "2. Stehe auf, öffne Guard",
                    "3. Stack Pass: Schiebe seine Beine über seinen Kopf",
                    "4. Seine Hüfte ist hoch, Schultern am Boden",
                    "5. Gehe über seinen Kopf",
                    "6. Greife Gürtel während du vorbeigehst",
                    "7. Lande in Kami-shiho, spreize Beine"
                ],
                details: "Stack Pass ist modern und effektiv. Erfordert gute Technik um Gegners Beine zu kontrollieren.",
                videotimestamp: "1:00"
            },
            {
                name: "Übergang von Yoko-shiho-gatame",
                position: "Gegner bridged aus Yoko-shiho",
                schritte: [
                    "1. Du hältst Yoko-shiho-gatame",
                    "2. Gegner bridged stark und dreht zur Seite",
                    "3. Lasse seitliche Position, folge seiner Bewegung",
                    "4. Rolle über seinen Kopf",
                    "5. Greife Gürtel während der Drehung",
                    "6. Lande in Kami-shiho",
                    "7. Stabilisiere mit weiten Beinen"
                ],
                details: "Fließende Übergänge sind essentiell. Kämpfe nie gegen eine Bridge - nutze die Energie!",
                videotimestamp: "2:00"
            },
            {
                name: "Übergang Stand-Boden (Oberlage)",
                position: "Nach Wurf mit Kopfkontrolle",
                schritte: [
                    "1. Wurf landet mit dir bei seinem Kopf (z.B. nach Tomoe-nage)",
                    "2. Gegner liegt auf Rücken",
                    "3. Du bist bereits bei seinem Kopf positioniert",
                    "4. Greife sofort unter beide Arme",
                    "5. Fasse Gürtel/Hose",
                    "6. Knie dich hin, Beine weit",
                    "7. Baue Druck auf"
                ],
                details: "Manche Würfe (besonders Opferwürfe) enden natürlich bei Gegners Kopf - perfekt für Kami-shiho!",
                videotimestamp: "2:45"
            },
            {
                name: "Beinklammer befreit (Oberlage)",
                position: "Nach Escape aus Guard",
                schritte: [
                    "1. Du hast gerade Guard gepasst",
                    "2. Gegner versucht Re-Guard oder dreht sich",
                    "3. Statt zur Seite zu gehen, gehe über Kopf",
                    "4. Greife unter Arme für Kami-shiho Griffe",
                    "5. Setze dich in Position",
                    "6. Spreize Beine maximal",
                    "7. Drücke nach vorne-unten"
                ],
                details: "Wenn seitliches Passing schwierig ist, ist der Weg über den Kopf oft frei.",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Statisches Halten (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "30 Sekunden",
                    sets: "3x3",
                    fokus: "Korrekte Griffposition, Beinspreizung maximieren",
                    wiederholungen: 9
                },
                {
                    phase: "Turtle Flip Üben (Woche 2-4)",
                    intensität: "Partner 20%",
                    dauer: "10 Wiederholungen",
                    sets: "5 Sets",
                    fokus: "Technik des Rollens, nicht Kraft verwenden",
                    wiederholungen: 50
                },
                {
                    phase: "Escape Defense (Woche 5-8)",
                    intensität: "Partner 60%",
                    dauer: "60 Sekunden",
                    sets: "5x2",
                    fokus: "Bridge & Roll Defense, Arm-Escapes verhindern",
                    wiederholungen: 10
                },
                {
                    phase: "Vollwiderstand (Woche 9+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Randori",
                    fokus: "Kami-shiho im Live-Rolling halten",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Beinspreizung & Flexibilität",
                    beschreibung: "Middle Splits, Frog Stretch, Butterfly Stretch",
                    dauer: "15 Min täglich",
                    wiederholungen: "3x45 Sekunden halten",
                    fokus: "Maximale Spreizung für stabilen Kami-shiho"
                },
                {
                    übung: "Griffstärke Training",
                    beschreibung: "Halte schweren Gegenstand mit gestreckten Armen",
                    dauer: "5 Min",
                    wiederholungen: "3x30 Sek",
                    fokus: "Gürtelgriff fest halten können"
                },
                {
                    übung: "Turtle Flip Bewegung",
                    beschreibung: "Mit Kissen/Dummy den Roll-Bewegungsablauf üben",
                    dauer: "10 Min",
                    wiederholungen: "30x",
                    fokus: "Flüssige Bewegung, Timing"
                },
                {
                    übung: "Position am Boden",
                    beschreibung: "Nimm Kami-shiho Position ein (ohne Partner), halte 60 Sek",
                    dauer: "5 Min",
                    wiederholungen: "5x60 Sek",
                    fokus: "Muskelausdauer, korrekte Haltung"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Maximale Beinspreizung zeigen (mindestens 120 Grad)",
                "✓ Griffe tief am Gürtel/Hüfte",
                "✓ Turtle Flip sauber demonstrieren",
                "✓ Aus 2-3 verschiedenen Situationen anwenden",
                "✓ 25+ Sekunden gegen vollen Widerstand",
                "✓ Übergänge zu/von anderen Osaekomi"
            ],
            tipps: [
                "Der Turtle Flip wird SEHR oft in Prüfungen verlangt - meistere ihn!",
                "Beine müssen WIRKLICH weit sein - übe Flexibilität täglich",
                "Zeige Stack Pass → Kami-shiho (modernes Ne-waza)",
                "Achte auf Gesichtsdruck - zu viel ist unsportlich!"
            ]
        },

        varianten: [
            {
                name: "Kuzure-kami-shiho-gatame",
                unterschied: "Ein Arm geht unter Arm, anderer um Kopf",
                wann: "Wenn Gegner Arme gut verteidigt"
            }
        ]
    }

    ,

    {
        id: "ushiro-kesa-gatame",
        name: "Ushiro-kesa-gatame",
        nameDE: "Umgekehrter Schärpenhaltegriff / Reverse Kesa",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du sitzt seitlich neben dem Gegner, aber dein Kopf zeigt in Richtung seiner Füße (umgekehrt zu normalem Kesa).",
            kontrolle: [
                "Linker Arm umschließt seinen Kopf/Hals von unten",
                "Rechter Arm greift sein linkes Bein/Knie",
                "Deine rechte Schulter presst auf seine Brust",
                "Dein Rücken ist zu seinem Gesicht gedreht"
            ],
            beinarbeit: [
                "Linkes Bein angewinkelt, nah am Gegner",
                "Rechtes Bein gestreckt für Basis",
                "Hüfte tief am Boden",
                "Gewicht auf Gegner, besonders auf Brust"
            ],
            schlüsselpunkte: [
                "Kopfkontrolle ist entscheidend",
                "Beinkontrolle verhindert Escape nach unten",
                "Schulter drückt auf Brust - nicht auf Gesicht",
                "Position ist weniger stabil als normales Kesa - muss gut sein!"
            ]
        },

        fehler: [
            "❌ Zu wenig Druck auf Brust → Gegner kann sich drehen",
            "❌ Kopfkontrolle zu locker → Gegner befreit Kopf und escaped",
            "❌ Beinkontrolle verloren → Gegner kann nach unten scrollen",
            "❌ Zu weit vom Gegner weg → Lücken entstehen",
            "❌ Hüfte zu hoch → Anfällig für Rollbewegung"
        ],

        situationen: [
            {
                name: "Rückenlage - Escape Versuch (Unterlage → Oberlage)",
                position: "Du escaped aus gegnerischer Seite-Kontrolle",
                schritte: [
                    "1. Gegner hält dich in Seiten-Position (z.B. Side Control)",
                    "2. Du schaffst es, dich auf die Seite zu drehen",
                    "3. Gegner verliert Kontrolle für einen Moment",
                    "4. Du drehst dich schnell komplett um",
                    "5. Greife seinen Kopf während du dich drehst",
                    "6. Lande in Ushiro-kesa Position auf ihm",
                    "7. Greife sein Bein, stabilisiere"
                ],
                details: "Ushiro-kesa entsteht oft durch Scrambles und Reversals. Es ist eine opportunistische Position.",
                videotimestamp: "0:00"
            },
            {
                name: "Übergang von Kesa-gatame",
                position: "Gegner bridged und dreht",
                schritte: [
                    "1. Du hältst normales Kesa-gatame",
                    "2. Gegner macht starke Bridge und dreht zu dir",
                    "3. Statt zu kämpfen, drehe dich mit",
                    "4. Rolle über ihn, aber behalte Kopfkontrolle",
                    "5. Lande auf der anderen Seite in Ushiro-kesa",
                    "6. Greife sofort sein Bein",
                    "7. Stabilisiere die neue Position"
                ],
                details: "Wenn normal Kesa schwierig zu halten ist, kann Ushiro-kesa die Lösung sein. Nutze Gegners Bewegung!",
                videotimestamp: "1:00"
            },
            {
                name: "Bank/Bauchlage (Oberlage)",
                position: "Gegner in Turtle, Angriff von hinten",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Du bist hinter ihm",
                    "3. Greife um seinen Hals mit linkem Arm",
                    "4. Ziehe ihn nach hinten zu dir",
                    "5. Rolle ihn über deine Hüfte zur Seite",
                    "6. Lande in Ushiro-kesa (du bist zur Seite, Kopf zu Füßen)",
                    "7. Greife sein Bein, drücke mit Schulter"
                ],
                details: "Von hinten kann Ushiro-kesa manchmal einfacher sein als andere Positionen.",
                videotimestamp: "2:00"
            },
            {
                name: "Beinklammer - Scramble (Oberlage)",
                position: "Chaotischer Guard Pass",
                schritte: [
                    "1. Du versuchst Guard zu passen",
                    "2. Gegner widersetzt sich, Position wird chaotisch (Scramble)",
                    "3. Du schaffst es, auf seine Seite zu kommen",
                    "4. Aber du bist 'verkehrt herum' (Kopf zu Füßen)",
                    "5. Nutze die Position: Greife Kopf",
                    "6. Greife nahes Bein",
                    "7. Etabliere Ushiro-kesa"
                ],
                details: "Im Scramble nimmst du die Position die du kriegen kannst. Ushiro-kesa ist besser als nichts!",
                videotimestamp: "2:45"
            },
            {
                name: "Übergang von Tate-shiho (Mount)",
                position: "Gegner escaped zur Seite",
                schritte: [
                    "1. Du hast Mount (Tate-shiho-gatame)",
                    "2. Gegner macht Elbow-Knee Escape",
                    "3. Er schiebt dich zur Seite",
                    "4. Statt Mount zu verlieren, drehe dich",
                    "5. Lande auf seiner Seite in Ushiro-kesa",
                    "6. Kopf ist bei seinen Füßen, aber du kontrollierst",
                    "7. Greife Kopf und Bein"
                ],
                details: "Von Mount zu Ushiro-kesa ist ungewöhnlich, aber rettet die Position bei Escape-Versuch.",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Position verstehen (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "30 Sekunden",
                    sets: "4x3",
                    fokus: "Ungewöhnliche Position kennenlernen, Griffe verstehen",
                    wiederholungen: 12
                },
                {
                    phase: "Aus Scrambles üben (Woche 3-5)",
                    intensität: "Partner 40%",
                    dauer: "Freies Üben",
                    sets: "10 Min Scramble-Drill",
                    fokus: "Ushiro-kesa in chaotischen Situationen finden",
                    wiederholungen: 20
                },
                {
                    phase: "Halten üben (Woche 6-8)",
                    intensität: "Partner 60%",
                    dauer: "45 Sekunden",
                    sets: "5x3",
                    fokus: "Position halten trotz Instabilität, Übergänge zu stabileren Positionen",
                    wiederholungen: 15
                },
                {
                    phase: "Im Randori anwenden (Woche 9+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Live Rolling",
                    fokus: "Opportunistisch Ushiro-kesa nehmen wenn es sich ergibt",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Umgekehrte Bewegungen üben",
                    beschreibung: "Lege dich in Ushiro-kesa Position am Boden (ohne Partner), übe Drehbewegungen",
                    dauer: "10 Min",
                    wiederholungen: "20x einnehmen aus verschiedenen Startpositionen",
                    fokus: "Bewegungsmuster internalisieren"
                },
                {
                    übung: "Hüft- und Schulter-Mobilität",
                    beschreibung: "Thread the Needle, Shoulder Rotations, Hip Circles",
                    dauer: "10 Min täglich",
                    wiederholungen: "15 pro Seite",
                    fokus: "Flexibilität für verdrehte Position"
                },
                {
                    übung: "Griffkraft - ungewöhnliche Winkel",
                    beschreibung: "Übe Greifen in verdrehten Positionen mit Gürtel/Handtuch",
                    dauer: "5 Min",
                    wiederholungen: "30x pro Seite",
                    fokus: "Kraft in ungewohnten Winkeln"
                },
                {
                    übung: "Scramble-Visualisierung",
                    beschreibung: "Stelle dir chaotische Situationen vor und wie du zu Ushiro-kesa kommst",
                    dauer: "5 Min",
                    wiederholungen: "Täglich",
                    fokus: "Situationserkennung in chaotischen Momenten"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Korrekte Griffe demonstrieren (Kopf + Bein)",
                "✓ Position stabil halten trotz Ungewöhnlichkeit",
                "✓ Aus mindestens 1-2 Situationen zeigen (oft Scramble/Transition)",
                "✓ Übergang zu stabilerer Position zeigen können",
                "✓ 20+ Sekunden halten",
                "✓ Zeigen dass du die taktische Anwendung verstehst"
            ],
            tipps: [
                "Ushiro-kesa ist selten - aber zeigt Vielseitigkeit!",
                "Demonstriere es als Übergang von normalem Kesa",
                "Erkläre WANN du es verwenden würdest (Scramble, Reversal)",
                "Zeige auch Übergang zu stabilerer Position (z.B. zu normalem Kesa)",
                "Vorsicht: Nicht zu viel Druck auf Hals - unsportlich!"
            ]
        },

        varianten: [
            {
                name: "Ushiro-kesa mit Bein-Hook",
                unterschied: "Dein gestrecktes Bein hakt um sein Bein für mehr Kontrolle",
                wann: "Wenn Gegner versucht wegzurollen"
            }
        ]
    },

    {
        id: "kuzure-kami-shiho-gatame",
        name: "Kuzure-kami-shiho-gatame",
        nameDE: "Variante des Vier-Ecken-Haltegriffs",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Ähnlich wie Kami-shiho, aber mit asymmetrischen Griffen - ein Arm um Kopf, ein Arm unter Arm.",
            kontrolle: [
                "Linker Arm geht um den Kopf des Gegners (Kopfumklammerung)",
                "Rechter Arm greift unter seinen linken Arm zum Gürtel",
                "Brust drückt auf seine Brust/Schulter",
                "Mehr Gewicht auf einer Seite als bei normalem Kami-shiho"
            ],
            beinarbeit: [
                "Knie weit gespreizt (wie Kami-shiho)",
                "Füße in Matte",
                "Leichte Asymmetrie - mehr Gewicht zur Seite des Kopfgriffs",
                "Hüfte tief"
            ],
            schlüsselpunkte: [
                "Kopfkontrolle ist der Hauptfokus",
                "Ein-Arm-Kontrolle reicht am Gürtel",
                "Flexibler als normales Kami-shiho",
                "Gegner kann eine Seite schwerer befreien als andere"
            ]
        },

        fehler: [
            "❌ Kopfgriff zu locker → Hauptkontrolle verloren",
            "❌ Zu viel Gewicht auf eine Seite → Kippgefahr",
            "❌ Beine nicht weit genug → Instabil",
            "❌ Würgegriff statt Kopfkontrolle → Unsportlich, Strafe!",
            "❌ Gürtelgriff zu hoch → Gegner kann drehen"
        ],

        situationen: [
            {
                name: "Bank/Bauchlage (Oberlage)",
                position: "Turtle Flip Variante",
                schritte: [
                    "1. Gegner in Turtle-Position",
                    "2. Positioniere dich bei seinem Kopf, leicht seitlich",
                    "3. Greife mit linkem Arm um seinen Kopf",
                    "4. Greife mit rechtem Arm unter seinen linken Arm zum Gürtel",
                    "5. Rolle ihn nach hinten über dich",
                    "6. Lande in Kuzure-kami-shiho",
                    "7. Spreize Beine, baue Druck auf"
                ],
                details: "Kuzure-kami ist oft einfacher als normales Kami-shiho wenn Gegner einen Arm gut verteidigt.",
                videotimestamp: "0:00"
            },
            {
                name: "Übergang von Kami-shiho-gatame",
                position: "Gegner verteidigt einen Arm",
                schritte: [
                    "1. Du versuchst Kami-shiho (beide Arme unter)",
                    "2. Gegner verteidigt einen Arm erfolgreich",
                    "3. Statt zu kämpfen, adaptiere",
                    "4. Ändere Griff auf der blockierten Seite",
                    "5. Gehe um seinen Kopf statt unter Arm",
                    "6. Etabliere Kuzure-kami-shiho",
                    "7. Stabilisiere"
                ],
                details: "Flexibilität ist key! Wenn Plan A nicht klappt, gehe zu Plan B ohne Kontrolle zu verlieren.",
                videotimestamp: "1:00"
            },
            {
                name: "Rückenlage - Guard Pass (Oberlage)",
                position: "Stack Pass Variante",
                schritte: [
                    "1. Gegner in Guard, du startest Stack Pass",
                    "2. Seine Beine sind über seinem Kopf",
                    "3. Du gehst über seinen Kopf (wie zu Kami-shiho)",
                    "4. Aber ein Arm ist blockiert oder schwer zu platzieren",
                    "5. Nimm Kopfgriff statt zweiter Arm-Unter",
                    "6. Etabliere Kuzure-kami-shiho",
                    "7. Beine spreizen"
                ],
                details: "Im schnellen Pass ist perfektes Kami-shiho oft nicht möglich - Kuzure ist der Kompromiss.",
                videotimestamp: "2:00"
            },
            {
                name: "Übergang von Yoko-shiho-gatame",
                position: "Gegner escaped zur Seite",
                schritte: [
                    "1. Du hältst Yoko-shiho-gatame",
                    "2. Gegner macht starke Bridge und dreht",
                    "3. Du rollst mit über seinen Kopf",
                    "4. Während der Rolle, ändere Griffe",
                    "5. Ein Arm um Kopf, einer zum Gürtel",
                    "6. Lande in Kuzure-kami-shiho",
                    "7. Stabilisiere Position"
                ],
                details: "Fließende Übergänge erfordern Griff-Anpassungen. Kuzure ist oft die Zwischenstation.",
                videotimestamp: "2:45"
            },
            {
                name: "Beinklammer - Asymmetrischer Pass (Oberlage)",
                position: "Guard Pass mit Kopfkontrolle",
                schritte: [
                    "1. Gegner in Guard",
                    "2. Du passt mit Kopfkontrolle (Head & Arm Control)",
                    "3. Beine sind vorbei, du bist bei seinem Kopf",
                    "4. Du hast bereits Kopfgriff vom Pass",
                    "5. Greife mit freiem Arm unter Arm zum Gürtel",
                    "6. Etabliere Kuzure-kami-shiho",
                    "7. Knie dich hin, Beine weit"
                ],
                details: "Wenn du schon Kopfkontrolle hast vom Pass, ist Kuzure der natürliche Finish.",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Griff-Varianten verstehen (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "20 Minuten",
                    sets: "Flow-Drill",
                    fokus: "Von Kami-shiho zu Kuzure wechseln und zurück, Griffe verstehen",
                    wiederholungen: 30
                },
                {
                    phase: "Turtle Flip mit Kuzure (Woche 3-4)",
                    intensität: "Partner 30%",
                    dauer: "10 Wiederholungen",
                    sets: "5 Sets",
                    fokus: "Kuzure-Griffe während des Flips setzen",
                    wiederholungen: 50
                },
                {
                    phase: "Gegen Verteidigung (Woche 5-8)",
                    intensität: "Partner 60%",
                    dauer: "60 Sekunden",
                    sets: "5x2",
                    fokus: "Halten wenn Gegner versucht Kopf zu befreien",
                    wiederholungen: 10
                },
                {
                    phase: "Wettkampfanwendung (Woche 9+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Randori",
                    fokus: "Kuzure als Backup wenn normales Kami nicht klappt",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Griff-Wechsel Drill",
                    beschreibung: "Mit Gürtel/Handtuch: Übe schnell zwischen Kami und Kuzure Griffen zu wechseln",
                    dauer: "10 Min",
                    wiederholungen: "50x Wechsel",
                    fokus: "Fließende Griff-Änderungen"
                },
                {
                    übung: "Kopfgriff-Kraft",
                    beschreibung: "Halte schweres Kissen mit Kopfumklammerung 30 Sek",
                    dauer: "5 Min",
                    wiederholungen: "6x30 Sek",
                    fokus: "Kraft für Kopfkontrolle"
                },
                {
                    übung: "Asymmetrische Position",
                    beschreibung: "Nimm Kuzure-Position am Boden ein, halte 60 Sek",
                    dauer: "5 Min",
                    wiederholungen: "5x60 Sek",
                    fokus: "Balance in asymmetrischer Position"
                },
                {
                    übung: "Beinspreizung",
                    beschreibung: "Wie Kami-shiho: Middle Splits, Butterfly",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x45 Sek",
                    fokus: "Maximale Spreizung"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Unterschied zu normalem Kami-shiho klar demonstrieren",
                "✓ Korrekte Griffe (ein Arm Kopf, ein Arm Gürtel)",
                "✓ Aus 1-2 Situationen anwenden",
                "✓ Zeigen WANN Kuzure besser ist als normales Kami",
                "✓ 20+ Sekunden halten",
                "✓ Keine Würge-Technik! (Häufiger Fehler)"
            ],
            tipps: [
                "Erkläre den Unterschied zu Kami-shiho verbal",
                "Zeige Wechsel Kami → Kuzure → Kami",
                "Vorsicht beim Kopfgriff - darf NICHT würgen!",
                "Demonstriere als 'Problemlösung' wenn normales Kami schwierig ist",
                "Zeige dass Kuzure flexibler aber etwas weniger stabil ist"
            ]
        },

        varianten: [
            {
                name: "Kuzure-kami-shiho mit Bein-Trap",
                unterschied: "Der Arm unter Arm greift zusätzlich ein Bein",
                wann: "Extra Kontrolle gegen Escape-Versuche"
            }
        ]
    },

    {
        id: "uki-gatame",
        name: "Uki-gatame",
        nameDE: "Schwebende Haltegriff / Arm-Nacken-Würge Position",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du liegst quer über dem Gegner, ähnlich Yoko-shiho, aber mit spezieller Armkontrolle die auch zu Würge führen kann.",
            kontrolle: [
                "Dein rechter Arm umschlingt Gegners Kopf/Hals",
                "Dein linker Arm kontrolliert Gegners rechten Arm (gefangen zwischen euren Körpern)",
                "Dein Körper liegt schräg/quer über ihm",
                "Position ist Hybrid: Kann Osaekomi ODER Shime sein"
            ],
            beinarbeit: [
                "Beine gespreizt für Basis",
                "Hüfte seitlich vom Gegner",
                "Gewicht auf Gegner verlagern",
                "Füße graben sich für Stabilität ein"
            ],
            schlüsselpunkte: [
                "Armkontrolle ist essentiell - sein Arm ist gefangen",
                "Kann als Haltegriff ODER als Würger gewertet werden",
                "Sehr gefährliche Position für Gegner",
                "Erfordert präzise Technik um nicht zu würgen (für Osaekomi)",
                "Für Prüfung: Als Osaekomi zeigen, nicht als Shime!"
            ]
        },

        fehler: [
            "❌ Versehentlich würgen statt halten → Wird als Shime gewertet, nicht Osaekomi!",
            "❌ Armkontrolle verlieren → Gegner befreit Arm und escaped",
            "❌ Zu wenig Druck → Position ist nicht stabil genug",
            "❌ Falsche Winkel → Entweder ineffektiv oder unsportlich",
            "❌ Verwechslung mit Kata-ha-jime (Würger) → Technik-Fehler"
        ],

        situationen: [
            {
                name: "Übergang Stand-Boden (Oberlage)",
                position: "Nach Wurf mit Armkontrolle",
                schritte: [
                    "1. Erfolgreicher Wurf (z.B. Seoi-nage, Uchi-mata)",
                    "2. Du hältst Gegners Arm noch vom Wurf",
                    "3. Gegner liegt auf Rücken",
                    "4. Halte seinen Arm fest gefangen",
                    "5. Lege dich quer über ihn",
                    "6. Greife mit anderem Arm um seinen Kopf (NICHT Hals!)",
                    "7. Stabilisiere als Osaekomi, nicht würgen"
                ],
                details: "Uki-gatame entsteht natürlich nach Würfen wo du Armkontrolle behältst. Sehr effektiv!",
                videotimestamp: "0:00"
            },
            {
                name: "Beinklammer - Armfang (Oberlage)",
                position: "Guard Pass mit gefangenem Arm",
                schritte: [
                    "1. Gegner in Guard",
                    "2. Du fängst einen seiner Arme (z.B. Arm-Drag)",
                    "3. Passe die Guard während du Arm hältst",
                    "4. Komme zur Seite",
                    "5. Lege dich quer, Arm bleibt gefangen zwischen euch",
                    "6. Greife um Kopf für Kontrolle",
                    "7. Etabliere Uki-gatame (als Osaekomi!)"
                ],
                details: "Armkontrolle ist der Schlüssel. Ohne gefangenen Arm ist es kein Uki-gatame!",
                videotimestamp: "1:00"
            },
            {
                name: "Übergang von Kesa-gatame",
                position: "Armlock-Setup wird zu Osaekomi",
                schritte: [
                    "1. Du hältst Kesa-gatame",
                    "2. Gegner versucht zu escaped",
                    "3. Du fängst seinen escape-versuchenden Arm",
                    "4. Ziehe Arm hoch und klemme zwischen euren Körpern",
                    "5. Adjustiere Position leicht",
                    "6. Greife um Kopf",
                    "7. Halte als Uki-gatame (Option: Auch Ude-gatame möglich)"
                ],
                details: "Uki-gatame ist oft Zwischenstation zwischen Osaekomi und Kansetsu-waza!",
                videotimestamp: "2:00"
            },
            {
                name: "Rückenlage - Armbar-Setup Reversal (Unterlage)",
                position: "Von gescheitertem Armbar zu Uki-gatame",
                schritte: [
                    "1. Gegner versuchte Armbar/Juji-gatame auf dich",
                    "2. Du verteidigst erfolgreich",
                    "3. Drehe dich aus der Gefahr",
                    "4. Fange seinen Arm während der Drehung",
                    "5. Komme nach oben",
                    "6. Lande quer über ihm mit seinem Arm gefangen",
                    "7. Etabliere Uki-gatame"
                ],
                details: "Uki-gatame kann auch als Counter/Reversal entstehen. Zeigt hohe Technik!",
                videotimestamp: "2:45"
            },
            {
                name: "Bank/Bauchlage - Armkontrolle (Oberlage)",
                position: "Turtle mit Armfang",
                schritte: [
                    "1. Gegner in Turtle",
                    "2. Du isolierst einen seiner Arme",
                    "3. Ziehe Arm zu dir/hoch",
                    "4. Rolle ihn zur Seite während Arm gefangen bleibt",
                    "5. Lande quer über ihm",
                    "6. Sein Arm ist zwischen euren Körpern",
                    "7. Greife Kopf, etabliere Uki-gatame"
                ],
                details: "Von Turtle ist Uki-gatame technisch anspruchsvoll aber sehr wirksam.",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Technik verstehen (Woche 1-3)",
                    intensität: "Partner passiv",
                    dauer: "30 Minuten",
                    sets: "Technik-Drill",
                    fokus: "Unterschied zwischen Osaekomi und Shime-Version verstehen!",
                    wiederholungen: 20
                },
                {
                    phase: "Armkontrolle üben (Woche 4-6)",
                    intensität: "Partner 40%",
                    dauer: "10 Min",
                    sets: "Drill",
                    fokus: "Arm fangen und halten, auch wenn Gegner widersetzt",
                    wiederholungen: 30
                },
                {
                    phase: "Nach Würfen anwenden (Woche 7-9)",
                    intensität: "Partner 50%",
                    dauer: "Variable",
                    sets: "Uchi-komi + Übergang",
                    fokus: "Von Wurf direkt zu Uki-gatame",
                    wiederholungen: 40
                },
                {
                    phase: "Vollwiderstand (Woche 10+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Randori",
                    fokus: "Uki-gatame im Live-Rolling, bewusst als Osaekomi halten",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Armkontroll-Drill mit Gürtel",
                    beschreibung: "Übe mit Gürtel/Gi-Ärmel das Fangen und Halten eines Arms",
                    dauer: "15 Min",
                    wiederholungen: "50x pro Seite",
                    fokus: "Schnelles, sicheres Armfangen"
                },
                {
                    übung: "Positions-Drill am Boden",
                    beschreibung: "Mit Kissen: Lege dich in Uki-gatame Position, simuliere Armkontrolle",
                    dauer: "10 Min",
                    wiederholungen: "20x",
                    fokus: "Korrekte Körperposition und Winkel"
                },
                {
                    übung: "Kopf vs. Hals Griff-Unterscheidung",
                    beschreibung: "Mit Kissen: Übe Griff um KOPF (nicht Hals!) für Osaekomi-Version",
                    dauer: "10 Min",
                    wiederholungen: "30x bewusst korrekt platzieren",
                    fokus: "Technik-Präzision für Prüfung"
                },
                {
                    übung: "Visualisierung: Osaekomi vs Shime",
                    beschreibung: "Mentales Training: Unterschied zwischen beiden Versionen",
                    dauer: "5 Min",
                    wiederholungen: "Täglich",
                    fokus: "Konzeptverständnis"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ WICHTIG: Als Osaekomi demonstrieren, NICHT als Shime-waza!",
                "✓ Armkontrolle klar zeigen (Arm ist gefangen)",
                "✓ Griff um Kopf, nicht Hals",
                "✓ Aus 1-2 Situationen anwenden (idealerweise nach Wurf)",
                "✓ Erklären können dass Uki-gatame Dual-Purpose ist",
                "✓ 20+ Sekunden als Osaekomi halten"
            ],
            tipps: [
                "KRITISCH: Viele verwechseln Uki-gatame Osaekomi mit Kata-ha-jime Shime!",
                "Für Prüfung: Demonstriere es als Haltegriff, erkläre aber dass es auch Würger sein kann",
                "Zeige nach Wurf mit Armkontrolle - das ist am klarsten",
                "Betone die Armkontrolle verbal: 'Sein Arm ist gefangen'",
                "Wenn unsicher, frage Prüfer ob Osaekomi oder Shime-Version gewünscht ist!"
            ]
        },

        varianten: [
            {
                name: "Uki-gatame als Kata-ha-jime",
                unterschied: "Griff geht um Hals statt Kopf → wird zu Würgetechnik",
                wann: "Für Shime-waza Demonstration (andere Kategorie!)"
            },
            {
                name: "Uki-gatame zu Ude-gatame",
                unterschied: "Von Osaekomi zu Kansetsu-waza übergehen",
                wann: "Wenn Osaekomi nicht klappt, Armhebel versuchen"
            }
        ]
    },

    {
        id: "ura-gatame",
        name: "Ura-gatame",
        nameDE: "Rückseitige Haltegriff",
        kategorie: "Osaekomi-waza",
        videoUrl: "",

        beschreibung: {
            position: "Du liegst auf dem Rücken, Gegner liegt auf dir (auch auf seinem Rücken), du kontrollierst ihn von unten.",
            kontrolle: [
                "Beide Arme umschlingen seinen Oberkörper von hinten",
                "Deine Brust presst gegen seinen Rücken",
                "Deine Beine haken um seine Beine (Hooks) oder kontrollieren Hüfte",
                "Gegners Rücken ist zur Matte, dein Rücken auch zur Matte"
            ],
            beinarbeit: [
                "Hooks (Fersen) innen an seinen Oberschenkeln",
                "Oder Beine umschlingen seine Hüfte/Beine",
                "Hüfte hochdrücken um Gegner zu liften",
                "Beide liegen auf dem Rücken"
            ],
            schlüsselpunkte: [
                "Sehr ungewöhnliche Position - DU liegst unten!",
                "Funktioniert weil Gegners Schultern zur Matte zeigen",
                "Gilt als Osaekomi weil Gegner in Rückenlage ist",
                "Erfordert starke Hooks und Körperkontrolle",
                "Oft Übergangsposition zu Würgetechniken"
            ]
        },

        fehler: [
            "❌ Hooks zu schwach → Gegner dreht sich zur Seite",
            "❌ Zu wenig Körperkontakt → Gegner schafft Platz und escaped",
            "❌ Hüfte nicht hochdrücken → Position ist nicht stabil",
            "❌ Gegner kann Beine auf Matte bekommen → Kein Osaekomi mehr!",
            "❌ Zu defensive Mentalität (du bist ja unten) → Kontrolle verlieren"
        ],

        situationen: [
            {
                name: "Rückenlage - Reversal (Unterlage → Osaekomi)",
                position: "Von deiner Rückenlage zu Ura-gatame",
                schritte: [
                    "1. Du liegst auf Rücken, Gegner versucht dich zu kontrollieren",
                    "2. Du schaffst es, seinen Rücken zu nehmen (Back Control)",
                    "3. Lege deine Hooks ein (Füße innen an Oberschenkel)",
                    "4. Ziehe ihn nach hinten auf dich",
                    "5. Beide liegen auf Rücken",
                    "6. Umschließe seinen Oberkörper fest",
                    "7. Hüfte hoch, Gegner 'schwebt' über dir"
                ],
                details: "Ura-gatame entsteht wenn du Back Control hast aber nach hinten fällst. Taktisch interessant!",
                videotimestamp: "0:00"
            },
            {
                name: "Beinklammer - Back Take (Oberlage/Unterlage)",
                position: "Von Guard zum Rückennehmen",
                schritte: [
                    "1. Gegner in deiner Guard",
                    "2. Du nimmst seinen Rücken (Back Take aus Guard)",
                    "3. Lege Hooks ein",
                    "4. Gegner fällt nach hinten (oder du rollst zurück)",
                    "5. Beide landen auf Rücken",
                    "6. Du kontrollierst von unten",
                    "7. Etabliere Ura-gatame"
                ],
                details: "Back Takes aus Guard führen oft zu Ura-gatame Position. Sehr modern!",
                videotimestamp: "1:00"
            },
            {
                name: "Übergang von Tate-shiho (Mount)",
                position: "Gegner rollt dich",
                schritte: [
                    "1. Du hast Mount (Tate-shiho-gatame)",
                    "2. Gegner macht Upa/Bridge und rollt dich",
                    "3. Ihr rollt zusammen um",
                    "4. Statt Mount zu verlieren, nimm seinen Rücken",
                    "5. Lege Hooks ein während ihr rollt",
                    "6. Lande in Ura-gatame (beide auf Rücken)",
                    "7. Kontrolliere fest"
                ],
                details: "Wenn du aus Mount gerollt wirst, ist Ura-gatame die Rettung. Zeigt hohe Technik!",
                videotimestamp: "2:00"
            },
            {
                name: "Bank/Bauchlage - Rückennehmen (Oberlage)",
                position: "Von Turtle zu Back zu Ura",
                schritte: [
                    "1. Gegner in Turtle",
                    "2. Du nimmst seinen Rücken von hinten",
                    "3. Lege erste Hook ein",
                    "4. Lege zweite Hook ein",
                    "5. Gegner rollt nach hinten (oder du rollst ihn)",
                    "6. Beide landen auf Rücken",
                    "7. Du hast Ura-gatame"
                ],
                details: "Klassischer Weg: Turtle → Back Control → Ura-gatame. Sehr verbreitet im modernen Judo/BJJ.",
                videotimestamp: "2:45"
            },
            {
                name: "Übergang Stand-Boden - Sacrifice Throw",
                position: "Nach Opferwurf in Ura",
                schritte: [
                    "1. Du führst Opferwurf aus (z.B. Tomoe-nage, Sumi-gaeshi)",
                    "2. Während des Wurfs, nimm Rückenkontrolle",
                    "3. Lande auf deinem Rücken",
                    "4. Gegner landet auf seinem Rücken, auf dir",
                    "5. Hooks sind schon drin vom Wurf",
                    "6. Umschließe Oberkörper",
                    "7. Ura-gatame etabliert"
                ],
                details: "Opferwürfe mit Rückenkontrolle enden perfekt in Ura-gatame. Spektakulär!",
                videotimestamp: "3:30"
            }
        ],

        training: {
            mitPartner: [
                {
                    phase: "Position verstehen (Woche 1-2)",
                    intensität: "Partner passiv",
                    dauer: "20 Min",
                    sets: "Technik-Learning",
                    fokus: "Ungewöhnliche Position akzeptieren (du bist unten!), Hook-Platzierung",
                    wiederholungen: 15
                },
                {
                    phase: "Back Control zu Ura (Woche 3-5)",
                    intensität: "Partner 30%",
                    dauer: "15 Min",
                    sets: "Drill",
                    fokus: "Vom Rückennehmen zu Ura-gatame rollen",
                    wiederholungen: 30
                },
                {
                    phase: "Hooks & Control (Woche 6-9)",
                    intensität: "Partner 60%",
                    dauer: "45 Sekunden",
                    sets: "5x3",
                    fokus: "Hooks stark halten, Gegner kann sich nicht drehen",
                    wiederholungen: 15
                },
                {
                    phase: "Im Randori anwenden (Woche 10+)",
                    intensität: "Partner 100%",
                    dauer: "Variable",
                    sets: "Live Rolling",
                    fokus: "Back Control → Ura-gatame im freien Training",
                    wiederholungen: "Unbegrenzt"
                }
            ],

            solo: [
                {
                    übung: "Hook-Drill am Boden",
                    beschreibung: "Lege dich auf Rücken, übe Hook-Bewegungen (innen-außen) mit Kissen zwischen Beinen",
                    dauer: "15 Min",
                    wiederholungen: "100 Hook-Ins pro Seite",
                    fokus: "Hook-Kraft und Geschwindigkeit"
                },
                {
                    übung: "Rücken-Flexibilität",
                    beschreibung: "Bridge Holds, Back Extensions, Cobra Pose",
                    dauer: "10 Min täglich",
                    wiederholungen: "3x30 Sek",
                    fokus: "Rücken-Stärke für Position auf Rücken"
                },
                {
                    übung: "Hüft-Lift Kraft",
                    beschreibung: "Glute Bridges mit Gewicht (Hantel/Sandsack auf Hüfte)",
                    dauer: "10 Min",
                    wiederholungen: "3x15 Reps",
                    fokus: "Kraft um Gegner auf dir zu liften"
                },
                {
                    übung: "Back Control Visualisierung",
                    beschreibung: "Stelle dir verschiedene Wege zu Ura-gatame vor",
                    dauer: "5 Min",
                    wiederholungen: "Täglich",
                    fokus: "Taktisches Verständnis"
                }
            ]
        },

        prüfung: {
            niveaustufe: 3,
            anforderungen: [
                "✓ Korrekte Hooks demonstrieren (fest und tief)",
                "✓ Zeigen dass Gegners Schultern zur Matte zeigen (= Osaekomi)",
                "✓ Aus 1-2 Situationen (idealerweise Back Control → Ura)",
                "✓ Erklären können WARUM es Osaekomi ist (du bist ja unten!)",
                "✓ 15-20 Sekunden halten (kann kürzer sein als andere Osaekomi)",
                "✓ Übergang zu Shime-waza zeigen können (oft verlangt)"
            ],
            tipps: [
                "Ura-gatame ist selten und komplex - demonstriere es selbstbewusst!",
                "Erkläre: 'Gegners Schultern sind zur Matte = Osaekomi, auch wenn ich unten bin'",
                "Zeige Back Control → Ura-gatame (klarster Weg)",
                "Demonstriere auch Übergang zu Hadaka-jime oder Okuri-eri-jime",
                "Hooks MÜSSEN stark sein - sonst gilt Position nicht!",
                "Wenn Prüfer skeptisch ist, zeige dass Gegner sich nicht drehen kann"
            ]
        },

        varianten: [
            {
                name: "Ura-gatame mit Würge-Kombination",
                unterschied: "Während Ura-gatame, Hadaka-jime oder andere Würge ansetzen",
                wann: "Transition von Osaekomi zu Shime - sehr effektiv!"
            },
            {
                name: "Ura-gatame mit Bein-Triangle",
                unterschied: "Beine machen Triangle statt normale Hooks",
                wann: "Extra Kontrolle, verhindert Gegner dreht sich"
            }
        ]
    }
];

// Kansetsu-Waza (Armhebel) - 8 Techniken
const KANSETSU_WAZA = [
    // Juji-gatame und Ude-garami werden aus kansetsu-data.js kopiert
    // Dann die restlichen 6 hinzugefügt
];

// Export für Verwendung in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OSAEKOMI_WAZA, KANSETSU_WAZA };
}

// Navigation and Section Management
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-menu a:not(.dropdown > a)');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get target section
            const targetId = this.getAttribute('href').substring(1);

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Scroll to top of section
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funktion um Detailseite für Technik anzuzeigen
    function showTechniqueDetail(techniqueId) {
        console.log('=== showTechniqueDetail called ===');
        console.log('Technique ID:', techniqueId);

        // Debug: Check if databases are loaded
        console.log('OSAEKOMI_WAZA defined:', typeof OSAEKOMI_WAZA !== 'undefined', typeof OSAEKOMI_WAZA !== 'undefined' ? OSAEKOMI_WAZA.length : 0);
        console.log('KANSETSU_WAZA defined:', typeof KANSETSU_WAZA !== 'undefined', typeof KANSETSU_WAZA !== 'undefined' ? KANSETSU_WAZA.length : 0);
        console.log('SHIME_WAZA defined:', typeof SHIME_WAZA !== 'undefined', typeof SHIME_WAZA !== 'undefined' ? SHIME_WAZA.length : 0);
        console.log('NAGE_WAZA defined:', typeof NAGE_WAZA !== 'undefined', typeof NAGE_WAZA !== 'undefined' ? NAGE_WAZA.length : 0);

        // Finde Technik in Datenbank
        let technique = null;

        // Suche in Osaekomi-waza
        if (typeof OSAEKOMI_WAZA !== 'undefined') {
            technique = OSAEKOMI_WAZA.find(t => t.id === techniqueId);
            if (technique) console.log('✅ Found in OSAEKOMI_WAZA:', technique.name);
        }

        // Suche in Kansetsu-waza
        if (!technique && typeof KANSETSU_WAZA !== 'undefined') {
            technique = KANSETSU_WAZA.find(t => t.id === techniqueId);
            if (technique) console.log('✅ Found in KANSETSU_WAZA:', technique.name);
        }

        // Suche in Shime-waza
        if (!technique && typeof SHIME_WAZA !== 'undefined') {
            technique = SHIME_WAZA.find(t => t.id === techniqueId);
            if (technique) console.log('✅ Found in SHIME_WAZA:', technique.name);
        }

        // Suche in Nage-waza
        if (!technique && typeof NAGE_WAZA !== 'undefined') {
            technique = NAGE_WAZA.find(t => t.id === techniqueId);
            if (technique) console.log('✅ Found in NAGE_WAZA:', technique.name);
        }

        if (!technique) {
            console.log('❌ Technik noch nicht in Datenbank:', techniqueId);
            alert('Technik "' + techniqueId + '" wurde nicht in der Datenbank gefunden. Bitte Console öffnen für Details.');
            return;
        }

        console.log('✅ Technique found:', technique.name);

        // Generiere Detailseite
        const detailHTML = generateTechniqueDetailPage(technique);

        // Erstelle oder update Detailsektion
        let detailSection = document.getElementById(`detail-${techniqueId}`);
        if (!detailSection) {
            detailSection = document.createElement('section');
            detailSection.id = `detail-${techniqueId}`;
            detailSection.className = 'section';
            document.querySelector('.container').appendChild(detailSection);
        }
        detailSection.innerHTML = detailHTML;

        // Zeige Detailseite
        sections.forEach(s => s.classList.remove('active'));
        detailSection.classList.add('active');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Setup zurück-Button
        const backButton = detailSection.querySelector('.btn-back');
        if (backButton) {
            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                detailSection.classList.remove('active');

                // Finde heraus zu welcher Sektion wir zurück sollen
                if (technique.kategorie === 'Nage-waza') {
                    // Bei Nage-Waza zurück zur entsprechenden Gokyo-Gruppe
                    if (technique.gruppe.includes('Dai-ikkyo')) {
                        document.getElementById('dai-ikkyo').classList.add('active');
                    } else if (technique.gruppe.includes('Dai-nikyo')) {
                        document.getElementById('dai-nikyo').classList.add('active');
                    } else if (technique.gruppe.includes('Dai-sankyo')) {
                        document.getElementById('dai-sankyo').classList.add('active');
                    } else if (technique.gruppe.includes('Dai-yonkyo')) {
                        document.getElementById('dai-yonkyo').classList.add('active');
                    } else if (technique.gruppe.includes('Dai-gokyo')) {
                        document.getElementById('dai-gokyo').classList.add('active');
                    } else {
                        document.getElementById('nage').classList.add('active');
                    }
                } else {
                    // Katame-Waza zurück zu Katame
                    document.getElementById('katame').classList.add('active');
                }
            });
        }
    }

    // Generiere HTML für Technik-Detailseite
    function generateTechniqueDetailPage(tech) {
        // Prüfe ob Nage-Waza oder Katame-Waza
        const isNageWaza = tech.kategorie === 'Nage-waza';

        return `
            <div class="technique-detail">
                <div class="technique-header">
                    <h2>${tech.name}</h2>
                    <span class="technique-type">${tech.kategorie}</span>
                    ${tech.gruppe ? `<span class="technique-group">${tech.gruppe}</span>` : ''}
                    ${tech.wazaTyp ? `<span class="waza-type-badge">${tech.wazaTyp}</span>` : ''}
                </div>
                <p class="technique-subtitle">${tech.nameDE}</p>

                <div class="video-container">
                    ${tech.videoUrl ? (() => {
                        // Extract YouTube video ID from various formats
                        let videoId = '';
                        if (tech.videoUrl.includes('youtu.be/')) {
                            videoId = tech.videoUrl.split('youtu.be/')[1].split('?')[0];
                        } else if (tech.videoUrl.includes('youtube.com/watch?v=')) {
                            videoId = tech.videoUrl.split('watch?v=')[1].split('&')[0];
                        } else if (tech.videoUrl.includes('youtube.com/embed/')) {
                            videoId = tech.videoUrl.split('embed/')[1].split('?')[0];
                        }
                        return videoId ? `
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/${videoId}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        ` : `
                            <div class="video-placeholder">
                                <p>Video-Demonstration: ${tech.name}</p>
                                <p class="small-text">[Video-URL konnte nicht geladen werden]</p>
                            </div>
                        `;
                    })() : `
                        <div class="video-placeholder">
                            <p>Video-Demonstration: ${tech.name}</p>
                            <p class="small-text">[Kein Video verfügbar]</p>
                        </div>
                    `}
                </div>

                <div class="technique-content">
                    <div class="description-box">
                        <h3>Technische Beschreibung</h3>
                        <div class="technique-steps">
                            ${isNageWaza ? `
                                <div class="step">
                                    <h4>Grundprinzip</h4>
                                    <p>${tech.beschreibung.grundprinzip}</p>
                                </div>
                                <div class="step">
                                    <h4>Timing</h4>
                                    <p>${tech.beschreibung.timing}</p>
                                </div>
                                <div class="step">
                                    <h4>Richtung</h4>
                                    <p>${tech.beschreibung.richtung}</p>
                                </div>
                                <div class="step">
                                    <h4>Kuzushi (Gleichgewichtsbrechen)</h4>
                                    <p>${tech.beschreibung.kuzushi}</p>
                                </div>
                                <div class="step">
                                    <h4>Tsukuri (Vorbereitung/Eingang)</h4>
                                    <p>${tech.beschreibung.tsukuri}</p>
                                </div>
                                <div class="step">
                                    <h4>Kake (Ausführung)</h4>
                                    <p>${tech.beschreibung.kake}</p>
                                </div>
                            ` : `
                                <div class="step">
                                    <h4>Position</h4>
                                    <p>${tech.beschreibung.position}</p>
                                </div>
                                <div class="step">
                                    <h4>Kontrolle</h4>
                                    <ul>
                                        ${tech.beschreibung.kontrolle.map(k => `<li>${k}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="step">
                                    <h4>Beinarbeit</h4>
                                    <ul>
                                        ${tech.beschreibung.beinarbeit.map(b => `<li>${b}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="step">
                                    <h4>Schlüsselpunkte</h4>
                                    <ul>
                                        ${tech.beschreibung.schlüsselpunkte.map(s => `<li>${s}</li>`).join('')}
                                    </ul>
                                </div>
                            `}
                        </div>
                    </div>

                    ${isNageWaza && tech.schlüsselpunkte ? `
                        <div class="tips-box">
                            <h3>Schlüsselpunkte</h3>
                            <ul class="key-points-list">
                                ${tech.schlüsselpunkte.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    <div class="tips-box">
                        <h3>Häufige Fehler</h3>
                        <ul class="error-list">
                            ${tech.fehler.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>

                    ${!isNageWaza && tech.situationen ? `
                        <div class="application-box">
                            <h3>Anwendung aus Standardsituationen</h3>
                            ${tech.situationen.map(sit => `
                                <div class="application-item">
                                    <h4>${sit.name}</h4>
                                    <p><strong>Ausgangsposition:</strong> ${sit.position}</p>
                                    <ol>
                                        ${sit.schritte.map(s => `<li>${s}</li>`).join('')}
                                    </ol>
                                    <p class="detail-text"><em>${sit.details}</em></p>
                                    <div class="video-placeholder small">Video: ${sit.name}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <div class="training-box">
                        <h3>Übungsvarianten</h3>

                        <div class="practice-section">
                            <h4>Solo-Training (täglich zuhause)</h4>
                            ${tech.training.solo.map(übung => `
                                <div class="solo-exercise">
                                    <h5>${übung.übung}</h5>
                                    <p>${übung.beschreibung}</p>
                                    <ul>
                                        <li><strong>Dauer:</strong> ${übung.dauer}</li>
                                        <li><strong>Wiederholungen:</strong> ${übung.wiederholungen}</li>
                                        <li><strong>Fokus:</strong> ${übung.fokus}</li>
                                    </ul>
                                </div>
                            `).join('')}
                        </div>

                        <div class="practice-section">
                            <h4>Mit Partner</h4>
                            ${tech.training.mitPartner.map(phase => `
                                <div class="training-phase">
                                    <h5>${isNageWaza ? phase.phase : phase.phase}</h5>
                                    ${isNageWaza ? `
                                        <ul>
                                            <li><strong>Beschreibung:</strong> ${phase.beschreibung}</li>
                                            <li><strong>Intensität:</strong> ${phase.intensität}</li>
                                            <li><strong>Wiederholungen:</strong> ${phase.wiederholungen}</li>
                                        </ul>
                                    ` : `
                                        <ul>
                                            <li><strong>Intensität:</strong> ${phase.intensität}</li>
                                            <li><strong>Dauer:</strong> ${phase.dauer}</li>
                                            <li><strong>Sets:</strong> ${phase.sets}</li>
                                            <li><strong>Fokus:</strong> ${phase.fokus}</li>
                                            <li><strong>Wiederholungen:</strong> ${phase.wiederholungen}</li>
                                        </ul>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="exam-tips-box">
                        <h3>Prüfungsrelevante Details (Niveaustufe ${tech.prüfung.niveaustufe})</h3>
                        <ul>
                            ${tech.prüfung.anforderungen.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                        ${!isNageWaza && tech.prüfung.tipps ? `
                            <h4>Prüfungstipps</h4>
                            <ul>
                                ${tech.prüfung.tipps.map(t => `<li>${t}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>

                    ${tech.varianten && tech.varianten.length > 0 ? `
                        <div class="variants-box">
                            <h3>Varianten</h3>
                            ${tech.varianten.map(v => `
                                <div class="variant-item">
                                    <h4>${v.name}</h4>
                                    <p><strong>Unterschied:</strong> ${v.unterschied}</p>
                                    <p><strong>Wann verwenden:</strong> ${v.wann}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <div class="navigation-buttons">
                        <a href="#" class="btn btn-secondary btn-back">← Zurück zur Übersicht</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Handle technique item clicks (navigate to detail page)
    // Use event delegation to handle dynamically added items
    document.addEventListener('click', function(e) {
        const techniqueItem = e.target.closest('.technique-item');
        if (techniqueItem) {
            // Check if it has data-id attribute (new sections)
            let techniqueId = techniqueItem.getAttribute('data-id');

            // If not, get from technique name (old sections)
            if (!techniqueId) {
                const techniqueNameEl = techniqueItem.querySelector('.technique-name');
                if (techniqueNameEl) {
                    const techniqueName = techniqueNameEl.textContent;
                    techniqueId = techniqueName.toLowerCase().replace(/\s+/g, '-');
                }
            }

            if (techniqueId) {
                showTechniqueDetail(techniqueId);
            }
        }
    });

    // Progress tracking (example functionality)
    function updateProgress(moduleId, percentage) {
        const progressBar = document.querySelector(`#${moduleId} .progress-fill`);
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }

    // Task list checkbox simulation
    const taskItems = document.querySelectorAll('.task-list li');
    taskItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.textContent.startsWith('✓')) {
                this.textContent = this.textContent.replace('✓', '○');
                this.style.opacity = '0.6';
            } else if (this.textContent.startsWith('○')) {
                this.textContent = this.textContent.replace('○', '✓');
                this.style.opacity = '1';
            }
        });
    });

    // Technique status update
    const techniqueItemsStatus = document.querySelectorAll('.technique-item');
    techniqueItemsStatus.forEach(item => {
        item.addEventListener('dblclick', function() {
            const currentStatus = this.className.split(' ').find(c => c === 'mastered' || c === 'in-progress');

            this.classList.remove('mastered', 'in-progress');

            if (!currentStatus) {
                this.classList.add('in-progress');
                this.querySelector('.status-icon').textContent = '○';
            } else if (currentStatus === 'in-progress') {
                this.classList.add('mastered');
                this.querySelector('.status-icon').textContent = '✓';
            } else {
                this.querySelector('.status-icon').textContent = '−';
            }
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const targetSection = document.querySelector(href);
                if (targetSection && targetSection.classList.contains('section')) {
                    e.preventDefault();

                    // Hide all sections
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });

                    // Show target section
                    targetSection.classList.add('active');

                    // Update nav
                    navLinks.forEach(l => l.classList.remove('active'));
                    const navLink = document.querySelector(`.nav-menu a[href="${href}"]`);
                    if (navLink) {
                        navLink.classList.add('active');
                    }

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile menu toggle (for responsive design)
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const navMenu = document.querySelector('.nav-menu');
            const menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-toggle';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = 'background: var(--primary-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-size: 1.5rem;';

            menuButton.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            });

            const navContainer = document.querySelector('.nav-container');
            navContainer.insertBefore(menuButton, navMenu);
        }
    };

    // Initialize mobile menu if needed
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Alt + number keys to switch modules
        if (e.altKey) {
            const activeSection = document.querySelector('.section.active');
            const allSections = Array.from(sections);
            const currentIndex = allSections.indexOf(activeSection);

            if (e.key === 'ArrowRight' && currentIndex < allSections.length - 1) {
                sections.forEach(s => s.classList.remove('active'));
                allSections[currentIndex + 1].classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                sections.forEach(s => s.classList.remove('active'));
                allSections[currentIndex - 1].classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });

    // Local storage for progress tracking
    const saveProgress = () => {
        const progress = {
            katameProgress: 35,
            nageProgress: 15,
            kataProgress: 0,
            completedTechniques: [],
            lastVisit: new Date().toISOString()
        };

        // Collect completed techniques
        document.querySelectorAll('.technique-item.mastered').forEach(item => {
            const name = item.querySelector('.technique-name').textContent;
            progress.completedTechniques.push(name);
        });

        localStorage.setItem('danVorbereitung', JSON.stringify(progress));
    };

    const loadProgress = () => {
        const saved = localStorage.getItem('danVorbereitung');
        if (saved) {
            const progress = JSON.parse(saved);
            console.log('Fortschritt geladen:', progress);
            // Here you would update the UI with saved progress
        }
    };

    // Load progress on startup
    loadProgress();

    // Save progress every 30 seconds
    setInterval(saveProgress, 30000);

    // Save progress before leaving
    window.addEventListener('beforeunload', saveProgress);

    console.log('Dan-Vorbereitung App initialisiert!');
    console.log('Tastatur-Shortcuts:');
    console.log('  Alt + ← → : Zwischen Abschnitten navigieren');
    console.log('  Doppelklick auf Technik: Status ändern (−/○/✓)');

    // PWA Install Prompt
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later
        deferredPrompt = e;

        // Show install prompt after 30 seconds if not installed
        setTimeout(() => {
            if (!window.matchMedia('(display-mode: standalone)').matches) {
                showInstallPrompt();
            }
        }, 30000);
    });

    function showInstallPrompt() {
        const promptHTML = `
            <div class="install-prompt" id="installPrompt">
                <h3>App installieren</h3>
                <p>Installiere diese App auf deinem Gerät für schnelleren Zugriff und Offline-Nutzung!</p>
                <button class="btn btn-primary btn-install" id="installBtn">Jetzt installieren</button>
                <button class="btn btn-secondary" id="dismissBtn">Später</button>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', promptHTML);

        const prompt = document.getElementById('installPrompt');
        setTimeout(() => prompt.classList.add('show'), 100);

        document.getElementById('installBtn').addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to install prompt: ${outcome}`);
                deferredPrompt = null;
            }
            prompt.remove();
        });

        document.getElementById('dismissBtn').addEventListener('click', () => {
            prompt.remove();
        });
    }

    // Detect if running as installed PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('App läuft als installierte PWA!');
    }
});

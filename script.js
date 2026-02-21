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
        // Finde Technik in Datenbank
        let technique = null;

        // Suche in Osaekomi-waza
        if (typeof OSAEKOMI_WAZA !== 'undefined') {
            technique = OSAEKOMI_WAZA.find(t => t.id === techniqueId);
        }

        // Suche in Kansetsu-waza
        if (!technique && typeof KANSETSU_WAZA !== 'undefined') {
            technique = KANSETSU_WAZA.find(t => t.id === techniqueId);
        }

        // Suche in Shime-waza
        if (!technique && typeof SHIME_WAZA !== 'undefined') {
            technique = SHIME_WAZA.find(t => t.id === techniqueId);
        }

        if (!technique) {
            console.log('Technik noch nicht in Datenbank:', techniqueId);
            return;
        }

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
                document.getElementById('katame').classList.add('active');
            });
        }
    }

    // Generiere HTML für Technik-Detailseite
    function generateTechniqueDetailPage(tech) {
        return `
            <div class="technique-detail">
                <div class="technique-header">
                    <h2>${tech.name}</h2>
                    <span class="technique-type">${tech.kategorie}</span>
                </div>
                <p class="technique-subtitle">${tech.nameDE}</p>

                <div class="video-container">
                    <div class="video-placeholder">
                        <p>Video-Demonstration: ${tech.name}</p>
                        <p class="small-text">[Hier wird das YouTube/Vimeo Video eingebettet]</p>
                    </div>
                </div>

                <div class="technique-content">
                    <div class="description-box">
                        <h3>Technische Beschreibung</h3>
                        <div class="technique-steps">
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
                        </div>
                    </div>

                    <div class="tips-box">
                        <h3>Häufige Fehler</h3>
                        <ul class="error-list">
                            ${tech.fehler.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>

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

                    <div class="training-box">
                        <h3>Übungsvarianten</h3>

                        <div class="practice-section">
                            <h4>Mit Partner</h4>
                            ${tech.training.mitPartner.map(phase => `
                                <div class="training-phase">
                                    <h5>${phase.phase}</h5>
                                    <ul>
                                        <li><strong>Intensität:</strong> ${phase.intensität}</li>
                                        <li><strong>Dauer:</strong> ${phase.dauer}</li>
                                        <li><strong>Sets:</strong> ${phase.sets}</li>
                                        <li><strong>Fokus:</strong> ${phase.fokus}</li>
                                        <li><strong>Wiederholungen:</strong> ${phase.wiederholungen}</li>
                                    </ul>
                                </div>
                            `).join('')}
                        </div>

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
                    </div>

                    <div class="exam-tips-box">
                        <h3>Prüfungsrelevante Details (Niveaustufe ${tech.prüfung.niveaustufe})</h3>
                        <ul>
                            ${tech.prüfung.anforderungen.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                        <h4>Prüfungstipps</h4>
                        <ul>
                            ${tech.prüfung.tipps.map(t => `<li>${t}</li>`).join('')}
                        </ul>
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
                        <a href="#katame" class="btn btn-secondary btn-back">← Zurück zu Katame-Waza</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Handle technique item clicks (navigate to detail page)
    const techniqueItems = document.querySelectorAll('.technique-item');
    techniqueItems.forEach(item => {
        item.addEventListener('click', function() {
            const techniqueName = this.querySelector('.technique-name').textContent;
            // Konvertiere Name zu ID (z.B. "Kesa-gatame" -> "kesa-gatame")
            const techniqueId = techniqueName.toLowerCase().replace(/\s+/g, '-');
            showTechniqueDetail(techniqueId);
        });
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
});

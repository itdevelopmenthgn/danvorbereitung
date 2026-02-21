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

    // Handle technique item clicks (navigate to detail page)
    const techniqueItems = document.querySelectorAll('.technique-item');
    techniqueItems.forEach(item => {
        item.addEventListener('click', function() {
            const techniqueName = this.querySelector('.technique-name').textContent;
            // In a real implementation, this would navigate to a specific technique page
            console.log(`Navigate to: ${techniqueName}`);
            // For mockup, we'll show an alert
            // alert(`Technik-Detailseite für: ${techniqueName}\n\nHier würde die vollständige Technik-Seite mit Video, Beschreibung und Übungen geladen werden.`);
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

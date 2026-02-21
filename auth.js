// Passwortschutz für Dan-Vorbereitung Website
// Passwort: MaPhi2026!

(function() {
    'use strict';

    const CORRECT_PASSWORD = 'MaPhi2026!';
    const SESSION_KEY = 'dan_vorbereitung_authenticated';
    const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 Stunden in Millisekunden

    // Prüfe ob bereits authentifiziert
    function isAuthenticated() {
        const authData = localStorage.getItem(SESSION_KEY);
        if (!authData) return false;

        try {
            const { timestamp } = JSON.parse(authData);
            const now = new Date().getTime();

            // Prüfe ob Session noch gültig ist (24 Stunden)
            if (now - timestamp < SESSION_DURATION) {
                return true;
            } else {
                // Session abgelaufen
                localStorage.removeItem(SESSION_KEY);
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    // Setze Authentifizierung
    function setAuthenticated() {
        const authData = {
            timestamp: new Date().getTime()
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(authData));
    }

    // Zeige Login-Screen
    function showLoginScreen() {
        // Verstecke Hauptinhalt
        document.body.style.overflow = 'hidden';

        // Erstelle Login Overlay
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <div class="auth-container">
                <div class="auth-box">
                    <div class="auth-header">
                        <h1>Dan-Vorbereitung</h1>
                        <p class="auth-subtitle">1. Dan Judo</p>
                        <div class="judo-icon">柔道</div>
                    </div>

                    <div class="auth-content">
                        <p class="auth-message">Bitte gib das Passwort ein, um fortzufahren:</p>

                        <form id="auth-form">
                            <div class="input-group">
                                <input
                                    type="password"
                                    id="password-input"
                                    placeholder="Passwort eingeben"
                                    autocomplete="off"
                                    autofocus
                                />
                                <span class="input-icon">🔒</span>
                            </div>

                            <div id="error-message" class="error-message" style="display: none;">
                                ❌ Falsches Passwort. Bitte versuche es erneut.
                            </div>

                            <button type="submit" class="auth-button">
                                Anmelden
                            </button>
                        </form>

                        <div class="auth-footer">
                            <p class="hint">💡 Hinweis: Das Passwort besteht aus Name + Jahr + Sonderzeichen</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Styling für Login-Screen
        const style = document.createElement('style');
        style.textContent = `
            #auth-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .auth-container {
                width: 100%;
                max-width: 450px;
                padding: 20px;
            }

            .auth-box {
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                overflow: hidden;
                animation: slideUp 0.5s ease;
            }

            @keyframes slideUp {
                from {
                    transform: translateY(50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .auth-header {
                background: linear-gradient(135deg, #c41e3a 0%, #a01729 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }

            .auth-header h1 {
                margin: 0;
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 5px;
            }

            .auth-subtitle {
                margin: 0;
                font-size: 1.1rem;
                opacity: 0.9;
                margin-bottom: 15px;
            }

            .judo-icon {
                font-size: 3rem;
                margin-top: 10px;
                opacity: 0.8;
            }

            .auth-content {
                padding: 40px 30px;
            }

            .auth-message {
                text-align: center;
                color: #333;
                font-size: 1.1rem;
                margin-bottom: 30px;
            }

            #auth-form {
                margin-bottom: 20px;
            }

            .input-group {
                position: relative;
                margin-bottom: 20px;
            }

            .input-group input {
                width: 100%;
                padding: 15px 45px 15px 15px;
                font-size: 1.1rem;
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                transition: all 0.3s;
                box-sizing: border-box;
            }

            .input-group input:focus {
                outline: none;
                border-color: #c41e3a;
                box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.1);
            }

            .input-icon {
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1.2rem;
            }

            .error-message {
                background: #fee;
                color: #c00;
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 20px;
                text-align: center;
                font-weight: 500;
                animation: shake 0.5s;
            }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .auth-button {
                width: 100%;
                padding: 15px;
                font-size: 1.1rem;
                font-weight: 600;
                color: white;
                background: linear-gradient(135deg, #c41e3a 0%, #a01729 100%);
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .auth-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(196, 30, 58, 0.3);
            }

            .auth-button:active {
                transform: translateY(0);
            }

            .auth-footer {
                margin-top: 25px;
                padding-top: 25px;
                border-top: 1px solid #e0e0e0;
            }

            .hint {
                text-align: center;
                color: #666;
                font-size: 0.9rem;
                margin: 0;
                line-height: 1.5;
            }

            @media (max-width: 768px) {
                .auth-container {
                    padding: 10px;
                }

                .auth-header h1 {
                    font-size: 2rem;
                }

                .auth-content {
                    padding: 30px 20px;
                }
            }
        `;
        document.head.appendChild(style);

        // Event Listener für Form
        document.getElementById('auth-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password-input').value;
            const errorMsg = document.getElementById('error-message');

            if (password === CORRECT_PASSWORD) {
                // Erfolgreiche Authentifizierung
                setAuthenticated();

                // Erfolgs-Animation
                const authBox = document.querySelector('.auth-box');
                authBox.style.animation = 'slideDown 0.3s ease forwards';

                const slideDownKeyframes = `
                    @keyframes slideDown {
                        to {
                            transform: translateY(100vh);
                            opacity: 0;
                        }
                    }
                `;
                const styleSheet = document.createElement('style');
                styleSheet.textContent = slideDownKeyframes;
                document.head.appendChild(styleSheet);

                setTimeout(() => {
                    overlay.remove();
                    document.body.style.overflow = 'auto';
                }, 300);
            } else {
                // Falsches Passwort
                errorMsg.style.display = 'block';
                document.getElementById('password-input').value = '';
                document.getElementById('password-input').focus();

                // Shake Animation
                const inputGroup = document.querySelector('.input-group');
                inputGroup.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    inputGroup.style.animation = '';
                }, 500);
            }
        });

        // Focus auf Input-Feld
        setTimeout(() => {
            document.getElementById('password-input').focus();
        }, 100);
    }

    // Logout-Funktion (optional, kann später verwendet werden)
    window.danVorbereitungLogout = function() {
        localStorage.removeItem(SESSION_KEY);
        location.reload();
    };

    // Initialisierung beim Laden der Seite
    document.addEventListener('DOMContentLoaded', function() {
        if (!isAuthenticated()) {
            showLoginScreen();
        }
    });

})();

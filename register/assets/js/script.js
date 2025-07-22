// Get references to the loading screen element and the main body element
const loadingScreen = document.getElementById('loading-screen');
const body = document.body;

// Add an event listener that waits for the entire page to load.
// The 'load' event ensures all images, scripts, CSS, etc., are fully loaded.
window.addEventListener('load', () => {
    // 1. Add the 'hidden' class to the loading screen.
    //    This class (defined in CSS) will fade out the loading screen
    //    and then make it invisible and non-interactive.
    loadingScreen.classList.add('hidden');

    // 2. After the loading screen starts fading out, make the main body content visible.
    //    The CSS 'transition' property on the body will make this a smooth fade-in.
    body.style.opacity = '1';
});

function goBack() {
  window.history.back();
}

// --- Password Visibility Toggle ---
document.addEventListener('DOMContentLoaded', () => {
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.dataset.target; // Get the ID of the input to toggle
            const passwordInput = document.getElementById(targetId);

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggle.classList.add('visible'); // Add class to change icon
            } else {
                passwordInput.type = 'password';
                toggle.classList.remove('visible'); // Remove class to revert icon
            }
        });
    });

    // --- Password Strength Indicator ---
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('password-strength-bar').querySelector('.strength-bar');
    const strengthText = document.getElementById('password-strength-text');

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const score = calculatePasswordStrength(password);
        updateStrengthIndicator(score);
    });

    function calculatePasswordStrength(password) {
        let score = 0;

        // Rule 1: Length (min 8 characters)
        if (password.length >= 8) {
            score += 20;
        } else if (password.length > 0) {
            // Give partial score if less than 8 but more than 0
            score += password.length * 2;
        }

        // Rule 2: Uppercase letters
        if (/[A-Z]/.test(password)) {
            score += 20;
        }

        // Rule 3: Lowercase letters
        if (/[a-z]/.test(password)) {
            score += 20;
        }

        // Rule 4: Numbers
        if (/[0-9]/.test(password)) {
            score += 20;
        }

        // Rule 5: Symbols
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            score += 20;
        }

        // Cap score at 100
        return Math.min(score, 100);
    }

    function updateStrengthIndicator(score) {
        strengthBar.style.width = score + '%';
        strengthBar.className = 'strength-bar'; // Reset classes

        let strengthLabel = '';

        if (score === 0) {
            strengthLabel = '';
            strengthBar.style.width = '0%'; // Ensure bar is 0 if no input
        } else if (score < 40) {
            strengthBar.classList.add('weak');
            strengthLabel = 'Weak';
        } else if (score < 70) {
            strengthBar.classList.add('medium');
            strengthLabel = 'Medium';
        } else if (score < 90) {
            strengthBar.classList.add('strong');
            strengthLabel = 'Strong';
        } else {
            strengthBar.classList.add('very-strong');
            strengthLabel = 'Very Strong';
        }
        strengthText.textContent = strengthLabel;
    }
}); // End of DOMContentLoaded

window.addEventListener('load', () => {
  loadingScreen.classList.add('hidden');
  body.style.opacity = '1';
});

// --- Existing Go Back Function (keep as is) ---
function goBack() {
  window.history.back();
}
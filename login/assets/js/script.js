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
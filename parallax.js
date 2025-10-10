// Javascript for enabling the parallax function
// Courtesy of Google Gemini 2.5 Flash
const parallaxElements = document.querySelectorAll('.parallax-section');
const speed = 0.5; // Controls how fast the background moves (lower number = slower)

window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    let scrollPosition = window.scrollY;

    // Calculate the new Y translation
    let yTranslate = scrollPosition * speed;

    // Apply the translation to all parallax elements
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${yTranslate}px)`;
    });
});

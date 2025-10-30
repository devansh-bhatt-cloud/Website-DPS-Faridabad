// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // If you want it to only animate once, uncomment the line below:
                // observer.unobserve(entry.target);
            } else {
                // If you want the animation to reset when scrolling back up:
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden'); // Add a class to hide initially
        observer.observe(section);
    });
});

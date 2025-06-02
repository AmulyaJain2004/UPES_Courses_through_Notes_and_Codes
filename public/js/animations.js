// Function to apply animations on scroll
export function applyScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    elements.forEach(element => {
        observer.observe(element);
    });
} 
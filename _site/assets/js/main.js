document.addEventListener('DOMContentLoaded', () => {
    console.log('%cCyberPulse Initialized...', 'color: #00ff88; font-weight: bold; font-size: 1.2rem;');

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply reveal to headings and list items
    document.querySelectorAll('h1, h2, h3, p, li, img').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Add CSS for reveal dynamically if not present
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Interactive mouse trail (subtle)
    const handleMouseMove = (e) => {
        const logo = document.querySelector('.logo');
        if (logo) {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 50;
            const moveY = (clientY - window.innerHeight / 2) / 50;
            logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
});

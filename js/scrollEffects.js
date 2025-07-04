// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', function() {
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    // Hero Section
    scrollReveal.reveal('.hero-content .subtitle', { delay: 300 });
    scrollReveal.reveal('.hero-content .title', { delay: 400 });
    scrollReveal.reveal('.hero-content .profession', { delay: 500 });
    scrollReveal.reveal('.hero-content .hero-text', { delay: 600 });
    scrollReveal.reveal('.hero-content .hero-buttons', { delay: 700 });
    scrollReveal.reveal('.hero-image', { delay: 800, origin: 'right' });

    // About Section
    scrollReveal.reveal('.about-image', { origin: 'left' });
    scrollReveal.reveal('.about-text', { origin: 'right' });

    // Services Section
    scrollReveal.reveal('.service-card', { interval: 200 });

    // Portfolio Section
    scrollReveal.reveal('.portfolio-item', { interval: 200 });

    // Contact Section
    scrollReveal.reveal('.contact-info', { origin: 'left' });
    scrollReveal.reveal('.contact-form', { origin: 'right' });

    // Active Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // Typed.js Effect
    if (document.querySelector('.typed-text')) {
        const typed = new Typed('.typed-text', {
            strings: ['Front-end', 'UI/UX', 'Responsivo', 'Web'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

// Envio do Formulário para WhatsApp
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores do formulário
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[type="text"][placeholder="Assunto"]').value;
        const message = this.querySelector('textarea').value;
        
        // Formatando a mensagem para o WhatsApp
        const whatsappMessage = 
            `*Nova mensagem do site!*%0A%0A` +
            `*Nome:* ${encodeURIComponent(name)}%0A` +
            `*Email:* ${encodeURIComponent(email)}%0A` +
            `*Assunto:* ${encodeURIComponent(subject)}%0A` +
            `*Mensagem:*%0A${encodeURIComponent(message)}`;
        
        // Criar o link do WhatsApp
        const whatsappUrl = `https://wa.me/5513997833810?text=${whatsappMessage}`;
        
        // Abrir o WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Feedback para o usuário
        alert('Abrindo WhatsApp com sua mensagem pronta para enviar!');
        this.reset();
    });
}

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to a server
            // For demo purposes, we'll just log it and show an alert
            console.log('Newsletter subscription:', email);
            
            alert('Obrigado por se inscrever na nossa newsletter!');
            this.reset();
        });
    }
});
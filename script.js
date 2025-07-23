// ==========================================
// ASWINRAG K - PROFESSIONAL PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTypingEffect();
    initBackToTopButton();
});

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Scrolled navbar effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==========================================
// TYPING EFFECT
// ==========================================
function initTypingEffect() {
    const typedText = document.querySelector('.typed-text');
    if (!typedText) return;

    const textArray = [
        'Cybersecurity Analyst',
        'Security Specialist',
        'Threat Hunter',
        'Ethical Hacker',
        'Incident Responder'
    ];

    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textArray[textArrayIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 75 : 150;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

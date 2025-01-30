// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Typing animation configuration
const typingConfig = {
    phrases: ["Web Developer", "UI Designer", "Problem Solver"],
    currentPhrase: 0,
    currentChar: 0,
    isDeleting: false,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 1500
};

// Initial page load animations
function initPageLoadAnimations() {
    // Header animations
    gsap.from('.header-text h1', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power4.out"
    });

    gsap.from('.header-description', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: "power4.out"
    });

    gsap.from('.header-cta', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: "power4.out"
    });

    gsap.from('.header-scroll-indicator', {
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: "power4.out"
    });

    // Navbar animation
    gsap.from('nav', {
        duration: 1,
        y: -100,
        opacity: 0,
        delay: 0.5,
        ease: "power4.out"
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    });

    // About section animations
    ScrollTrigger.create({
        trigger: '.about',
        start: 'top 80%',
        onEnter: () => {
            gsap.from('.profile-picture', {
                duration: 1.2,
                y: 100,
                opacity: 0,
                rotationY: 15,
                ease: "power4.out"
            });

            gsap.from('.profile-badge', {
                duration: 0.8,
                y: 20,
                opacity: 0,
                delay: 0.5,
                ease: "back.out(1.7)"
            });

            gsap.from('.about-content', {
                duration: 1,
                x: 50,
                opacity: 0,
                delay: 0.3,
                ease: "power4.out"
            });

            gsap.from('.detail-item', {
                duration: 0.8,
                y: 30,
                opacity: 0,
                stagger: 0.2,
                delay: 0.5,
                ease: "power3.out"
            });
        },
        once: true
    });

    // Skills section animations
    gsap.from('.skills-headline', {
        scrollTrigger: {
            trigger: '.skills',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    ScrollTrigger.batch('.skill-card', {
        start: "top 85%",
        onEnter: batch => {
            gsap.from(batch, {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            });
        },
        once: true
    });

    // Project cards animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: "top 80%"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Contact form animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: "top 80%"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    // Social icons animation
    gsap.from('.social-icon', {
        scrollTrigger: {
            trigger: '.social-icons',
            start: "top 85%"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });
}

// Interactive animations and event listeners
function initInteractiveAnimations() {
    // Profile picture tilt effect
    const profilePicture = document.querySelector('.profile-picture');
    const aboutSection = document.querySelector('.about');

    if (aboutSection && profilePicture) {
        aboutSection.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 992) {
                const { left, top, width, height } = profilePicture.getBoundingClientRect();
                const x = (e.clientX - left - width/2) / 20;
                const y = (e.clientY - top - height/2) / 20;
                
                gsap.to(profilePicture, {
                    rotationY: x,
                    rotationX: -y,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

        aboutSection.addEventListener('mouseleave', () => {
            gsap.to(profilePicture, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        // Profile picture hover effect
        profilePicture.addEventListener('mouseenter', () => {
            gsap.to(profilePicture.querySelector('img'), {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        profilePicture.addEventListener('mouseleave', () => {
            gsap.to(profilePicture.querySelector('img'), {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    // Social icons hover animation
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon.querySelector('svg'), {
                scale: 1.2,
                rotation: 360,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon.querySelector('svg'), {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Parallax effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            const scrolled = window.pageYOffset;
            header.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });
}

// Typing animation function
function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingConfig.phrases[typingConfig.currentPhrase];
    
    if (typingConfig.isDeleting) {
        typingElement.textContent = currentText.substring(0, typingConfig.currentChar - 1);
        typingConfig.currentChar--;
        setTimeout(typeText, typingConfig.deletingSpeed);
    } else {
        typingElement.textContent = currentText.substring(0, typingConfig.currentChar + 1);
        typingConfig.currentChar++;
        setTimeout(typeText, typingConfig.typingSpeed);
    }
    
    if (!typingConfig.isDeleting && typingConfig.currentChar === currentText.length) {
        typingConfig.isDeleting = true;
        setTimeout(typeText, typingConfig.pauseDuration);
    } else if (typingConfig.isDeleting && typingConfig.currentChar === 0) {
        typingConfig.isDeleting = false;
        typingConfig.currentPhrase = (typingConfig.currentPhrase + 1) % typingConfig.phrases.length;
        setTimeout(typeText, typingConfig.typingSpeed);
    }
}

// Form submission handling
function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Message sent! (Note: This is a demo alert - add your own form handling)');
            this.reset();
        });
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPageLoadAnimations();
    initScrollAnimations();
    initInteractiveAnimations();
    initFormHandling();
    typeText(); // Start typing animation
});
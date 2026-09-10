document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Desplazamiento suave (Smooth Scroll) para la Navbar
    // ----------------------------------------------------
    const navLinksItems = document.querySelectorAll('.nav-links a');

    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ----------------------------------------------------
    // 2. Generación dinámica de partículas atmosféricas de fondo
    // ----------------------------------------------------
    const globalParticlesContainer = document.querySelector('.global-particles');
    
    if (globalParticlesContainer) {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('global-particle');
            
            const size = Math.random() * 4 + 2; 
            const leftPos = Math.random() * 100; 
            const duration = Math.random() * 15 + 10; 
            const delay = Math.random() * 10; 

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${leftPos}vw`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            globalParticlesContainer.appendChild(particle);
        }
    }

    // ----------------------------------------------------
    // 3. Control de disponibilidad / Ocultar barra superior
    // ----------------------------------------------------
    const availabilityBadge = document.querySelector('.availability-badge');
    const navbar = document.querySelector('.navbar');

    if (availabilityBadge && navbar) {
        availabilityBadge.addEventListener('click', () => {
            navbar.classList.toggle('nav-hidden');
        });
    }
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona links de filtro do menu desktop e mobile
    const navLinks = document.querySelectorAll('.header-nav .nav-link, .mobile-menu .nav-link');
    const propertyCards = document.querySelectorAll('.property-card');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            // Remove classe 'active' de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            // Adiciona no link clicado
            this.classList.add('active');

            // Mostra/oculta os cards
            propertyCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Fecha o menu mobile após o clique
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
            }
        });
    });
});

// Função para abrir/fechar menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

// Função para reduzir header ao rolar página
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

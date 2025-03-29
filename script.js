document.addEventListener("DOMContentLoaded", function () {
    // Efeito de rolagem suave ao clicar nos links do menu
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Menu responsivo para dispositivos móveis
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    // Efeito de fade-in ao carregar a página
    document.querySelectorAll(".fade-in").forEach(element => {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s ease-in-out";
        
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);
    });

    // Zoom ao passar o mouse nas imagens da galeria
    document.querySelectorAll(".gallery img").forEach(image => {
        image.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        image.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});

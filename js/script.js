document.addEventListener("DOMContentLoaded", function () {
    // Animação do título (Máquina de Escrever)
    const titulo = "Instituto Valentis";
    let index = 0;
    function escreverTitulo() {
        const tituloElemento = document.getElementById("titulo-principal");
        if (tituloElemento && index < titulo.length) {
            tituloElemento.textContent += titulo.charAt(index);
            index++;
            setTimeout(escreverTitulo, 150);
        }
    }
    escreverTitulo();

    // Carrossel de Imagens
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".carousel-container img");
        slides.forEach(slide => slide.style.display = "none"); 
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

    // Efeito de Rolagem Suave (apenas para âncoras internas)
    document.querySelectorAll(".navbar a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Botão "Voltar ao Topo"
    const btnTopo = document.createElement("button");
    btnTopo.textContent = "⬆ Voltar ao Topo";
    btnTopo.id = "btn-topo";
    btnTopo.style.display = "none";
    document.body.appendChild(btnTopo);
    
    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });
});

/*
 * © 2025 Instituto Valentis Todos os direitos reservados. 
 * Proibida a cópia ou reprodução sem autorização expressa.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Efeito de header ao rolar
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Botão "Voltar ao Topo"
    const btnTopo = document.createElement("button");
    btnTopo.textContent = "⬆";
    btnTopo.id = "btn-topo";
    btnTopo.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 20px;
        background-color: #4B6587;
        color: #FDF6E3;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        z-index: 1000;
        font-size: 1.2rem;
        transition: background-color 0.3s ease;
    `;
    btnTopo.addEventListener('mouseover', () => {
        btnTopo.style.backgroundColor = '#F7E8A4';
        btnTopo.style.color = '#4B6587';
    });
    btnTopo.addEventListener('mouseout', () => {
        btnTopo.style.backgroundColor = '#4B6587';
        btnTopo.style.color = '#FDF6E3';
    });
    document.body.appendChild(btnTopo);

    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTopo.style.display = "flex";
        } else {
            btnTopo.style.display = "none";
        }
    });
});

import siteVersion from './js/version.js';

   document.addEventListener('DOMContentLoaded', () => {
       const versionElement = document.getElementById('site-version');
       if (versionElement) {
           versionElement.textContent = siteVersion;
       }
   });
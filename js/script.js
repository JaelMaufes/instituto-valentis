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

document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js carregado com sucesso.');

    // Função para tentar preencher a versão, com retry
    function tryFillVersion(attempts = 5, delay = 500) {
        if (attempts <= 0) {
            console.error('Erro: Não foi possível encontrar o elemento com id="site-version" após várias tentativas.');
            return;
        }

        if (typeof siteVersion === 'undefined') {
            console.error('Erro: siteVersion não está definida. Verifique se version.js foi carregado corretamente.');
            const script = document.createElement('script');
            script.src = getScriptPath('version.js');
            script.onerror = () => {
                console.error('Erro: Não foi possível carregar version.js dinamicamente.');
            };
            script.onload = () => {
                console.log('version.js carregado dinamicamente.');
                fillVersionIfReady(attempts - 1, delay);
            };
            document.head.appendChild(script);
            return;
        }

        console.log('Versão do site:', siteVersion);

        var versionElement = document.getElementById('site-version');
        if (versionElement) {
            versionElement.textContent = siteVersion;
            console.log('Versão preenchida no rodapé com sucesso:', siteVersion);
        } else {
            console.warn('Elemento com id="site-version" não encontrado. Tentando novamente em', delay, 'ms...');
            setTimeout(() => tryFillVersion(attempts - 1, delay), delay);
        }
    }

    function fillVersionIfReady(attempts, delay) {
        if (typeof siteVersion !== 'undefined') {
            tryFillVersion(attempts, delay);
        } else {
            console.error('Erro: siteVersion ainda não está definida após carregamento dinâmico.');
        }
    }

    function getScriptPath(scriptName) {
        const isInPages = window.location.pathname.includes('/pages/');
        return isInPages ? `../js/${scriptName}` : `/js/${scriptName}`;
    }

    tryFillVersion();

    // Controle do Menu Lateral
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu .close-btn');
    const overlay = document.querySelector('.overlay');

    if (menuToggle && mobileMenu && closeBtn && overlay) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) firstMenuItem.focus();
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        });

        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        });
    } else {
        console.error('Erro: Elementos do menu lateral não encontrados no DOM.');
    }

    // Controle do Dropdown com Clique
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            const isActive = dropdownMenu.classList.contains('active');
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
            });
            if (!isActive) {
                dropdownMenu.classList.add('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });
});
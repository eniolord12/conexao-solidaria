// Espera o documento carregar antes de executar qualquer script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DO BOTÃO VOLTAR AO TOPO ---
    const btnVoltarAoTopo = document.getElementById("btnVoltarAoTopo");

    // Verifica se o botão existe na página atual
    if (btnVoltarAoTopo) {
        window.addEventListener("scroll", function () {
            let scrollPos = window.scrollY || document.documentElement.scrollTop;
            // Forma mais moderna de adicionar/remover classe
            btnVoltarAoTopo.classList.toggle("mostrar", scrollPos > 200);
        });
    }

    // --- 2. LÓGICA DO MENU HAMBURGER ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');

    // Verifica se os elementos do menu existem
    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // --- 3. LÓGICA DO MODO ESCURO ---
    const toggleIconsContainer = document.querySelector('.toggle-icons');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const body = document.body;

    // Verifica se os elementos do modo escuro existem
    if (toggleIconsContainer && darkModeIcon && lightModeIcon && body) {

        // Função para aplicar ou remover o modo escuro
        function applyDarkMode(isDark) {
            if (isDark) {
                body.classList.add('dark-mode');
                darkModeIcon.classList.remove('visible'); // Esconde o ícone de modo escuro
                lightModeIcon.classList.add('visible');   // Mostra o ícone de modo claro
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                lightModeIcon.classList.remove('visible'); // Esconde o ícone de modo claro
                darkModeIcon.classList.add('visible');    // Mostra o ícone de modo escuro
                localStorage.setItem('darkMode', 'disabled');
            }
        }

        // Verifica se o modo escuro estava ativado na última visita
        const savedDarkMode = localStorage.getItem('darkMode');

        // Aplica o modo salvo (true se 'enabled', false caso contrário)
        applyDarkMode(savedDarkMode === 'enabled');

        // Adiciona a classe 'ready' ao contêiner dos ícones após a verificação inicial
        // Isso evita um "piscar" do ícone errado no carregamento
        toggleIconsContainer.classList.add('ready');

        // Event listener para o clique no contêiner dos ícones
        toggleIconsContainer.addEventListener('click', () => {
            const isCurrentlyDark = body.classList.contains('dark-mode');
            applyDarkMode(!isCurrentlyDark); // Alterna o modo
        });
    }
});
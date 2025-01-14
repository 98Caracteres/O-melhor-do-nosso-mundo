document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-item');  // Seleciona todas as imagens
    const header = document.querySelector('#intro h1');  // Seleciona o título da primeira tela

    // Função para verificar se o elemento está visível
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Função para fazer a animação das imagens quando forem visíveis
    function handleScroll() {
        images.forEach(image => {
            if (isInViewport(image) && !image.classList.contains('visible')) {
                image.classList.add('visible');
                image.classList.remove('hidden');
            }
        });
    }

    // Adiciona evento de rolagem para ativar a animação
    window.addEventListener('scroll', handleScroll);

    // Inicializa a animação das imagens
    images.forEach(image => {
        image.classList.add('hidden');  // Esconde todas as imagens inicialmente
    });
    
    handleScroll();  // Aciona a animação quando a página for carregada
});

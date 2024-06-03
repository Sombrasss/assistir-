function public1() {
            // Abre o site quando o botão é clicado
            window.open('SWEETTOOTH.html ', '_blank');
        }


document.addEventListener('DOMContentLoaded', function() {
    // Captura todos os links na página
    const links = document.querySelectorAll('.link');

    // Adiciona um event listener a cada link
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Mostra o componente de carregamento quando um link é clicado
            document.getElementById('loading').style.display = 'block';
        });
    });

    // Adiciona um event listener ao evento "beforeunload" para mostrar o componente de carregamento antes de sair da página
    window.addEventListener('beforeunload', () => {
        // Mostra o componente de carregamento antes de sair da página
        document.getElementById('loading').style.display = 'block';
    });
});
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const filtro = params.get("filtro");

    if (filtro) {
        aplicarFiltro(filtro);
    }
};

function aplicarFiltro(categoria) {
    console.log("Filtro aplicado:", categoria);

    // EXEMPLO: mostrar apenas itens daquela categoria
    const livros = document.querySelectorAll('.livro');

    livros.forEach(livro => {
        if (livro.dataset.categoria === categoria) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }
    });
}
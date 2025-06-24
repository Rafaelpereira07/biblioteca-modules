const prompt = require('prompt-sync')();
const { livros } = require('../persistencia.js');

function pesquisarLivro() {
  console.log('\n--- Pesquisar Livro ---');
  const termo = prompt('Pesquisar por Título ou Autor: ').toLowerCase();

  if (!termo) {
    console.log('ERRO: Por favor, digite um termo para pesquisa.');
    prompt('Pressione Enter para continuar...');
    return;
  }

  const resultados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(termo) || livro.autor.toLowerCase().includes(termo),
  );

  if (resultados.length === 0) {
    console.log(`Nenhum livro encontrado para "${termo}".`);
    prompt('Pressione Enter para continuar...');
    return;
  }

  console.log(`\n--- ${resultados.length} livro(s) encontrado(s) para "${termo}": ---`);
  resultados.forEach((livro, index) => {
    console.log(`\n--- Resultado #${index + 1} ---`);
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Gênero: ${livro.genero}`);
    console.log(`Ano: ${livro.anoPublicacao}`);
    console.log(`Páginas: ${livro.numeroPaginas}`);
  });
  prompt('\nPressione Enter para continuar...');
}

module.exports = pesquisarLivro;

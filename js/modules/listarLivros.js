const prompt = require('prompt-sync')();
const { livros } = require('../persistencia.js');

function listarLivros() {
  console.log('\n--- Lista de Livros ---');
  if (livros.length === 0) {
    console.log('Nenhum livro cadastrado.');
    prompt('Pressione Enter para continuar...');
    return;
  }
  livros.forEach((livro, index) => {
    console.log(`\n--- Livro #${index + 1} ---`);
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Gênero: ${livro.genero}`);
    console.log(`Ano: ${livro.anoPublicacao}`);
    console.log(`Páginas: ${livro.numeroPaginas}`);
  });
  prompt('\nPressione Enter para continuar...');
}

module.exports = listarLivros;

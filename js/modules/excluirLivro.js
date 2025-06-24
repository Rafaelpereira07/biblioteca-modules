const prompt = require('prompt-sync')();
const { livros, salvarLivros } = require('../persistencia.js');

function excluirLivro() {
  console.log('\n--- Excluir Livro ---');
  const tituloExcluir = prompt('Título do livro a excluir: ').trim().toLowerCase();

  if (!tituloExcluir) {
    console.log('ERRO: Por favor, digite o título do livro que deseja excluir.');
    prompt('Pressione Enter para continuar...');
    return;
  }

  const indexParaExcluir = livros.findIndex(
    (livro) => livro.titulo.toLowerCase() === tituloExcluir,
  );

  if (indexParaExcluir === -1) {
    console.log(`Livro "${tituloExcluir}" não encontrado.`);
    prompt('Pressione Enter para continuar...');
    return;
  }

  const tituloRemovido = livros[indexParaExcluir].titulo;
  livros.splice(indexParaExcluir, 1);
  salvarLivros();
  console.log(`\nLivro "${tituloRemovido}" excluído com sucesso!`);
  prompt('Pressione Enter para continuar...');
}

module.exports = excluirLivro;

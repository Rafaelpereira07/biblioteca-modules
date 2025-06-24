const prompt = require('prompt-sync')();
const { livros, salvarLivros, carregarLivros } = require('../persistencia.js');

function incluirLivro() {
  carregarLivros();

  console.log('\n--- Incluir Novo Livro ---');
  const titulo = prompt('Título: ');
  const autor = prompt('Autor: ');
  const genero = prompt('Genero: ');
  const anoPublicacao = +prompt('Ano de Publicação: ');
  const numeroPaginas = +prompt('Número de Páginas: ');

  if (!titulo || !autor || !genero || isNaN(anoPublicacao) || isNaN(numeroPaginas)) {
    console.log('\nERRO: Por favor, preencha todos os campos corretamente.');
    prompt('Pressione Enter para continuar...');
    return;
  }

  if (livros.some((livro) => livro.titulo.toLowerCase() === titulo.toLowerCase())) {
    console.log(`\nERRO: O livro "${titulo}" já existe.`);
    prompt('Pressione Enter para continuar...');
    return;
  }

  const novoLivro = { titulo, autor, genero, anoPublicacao, numeroPaginas };
  livros.push(novoLivro);
  salvarLivros();
  console.log(`\nLivro "${titulo}" incluído com sucesso!`);
  console.log(livros);
  prompt('Pressione Enter para continuar...');
}

module.exports = incluirLivro;

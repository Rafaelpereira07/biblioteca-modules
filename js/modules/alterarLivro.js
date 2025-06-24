const prompt = require('prompt-sync')();
const { livros, salvarLivros } = require('../persistencia.js');

function alterarLivro() {
  console.log('\n--- Alterar Livro ---');
  const tituloOriginal = prompt('Título do livro a alterar: ').trim().toLowerCase();

  if (!tituloOriginal) {
    console.log('ERRO: Por favor, digite o título do livro que deseja alterar.');
    prompt('Pressione Enter para continuar...');
    return;
  }

  const livroExistenteIndex = livros.findIndex(
    (livro) => livro.titulo.toLowerCase() === tituloOriginal,
  );

  if (livroExistenteIndex === -1) {
    console.log(`Livro "${tituloOriginal}" não encontrado.`);
    prompt('Pressione Enter para continuar...');
    return;
  }

  const livroExistente = livros[livroExistenteIndex];
  console.log(
    `\nLivro "${livroExistente.titulo}" encontrado. Digite os novos dados (deixe em branco para manter o atual):`,
  );

  const novoTitulo = prompt(`Novo Título (atual: ${livroExistente.titulo}): `);
  const novoAutor = prompt(`Novo Autor (atual: ${livroExistente.autor}): `);
  const novoGenero = prompt(`Novo Gênero (atual: ${livroExistente.genero}): `);
  const novoAno = prompt(`Novo Ano de Publicação (atual: ${livroExistente.anoPublicacao}): `);
  const novasPaginas = prompt(`Novo Número de Páginas (atual: ${livroExistente.numeroPaginas}): `);

  livroExistente.titulo = novoTitulo || livroExistente.titulo;
  livroExistente.autor = novoAutor || livroExistente.autor;
  livroExistente.genero = novoGenero || livroExistente.genero;
  livroExistente.anoPublicacao = novoAno ? +novoAno : livroExistente.anoPublicacao;
  livroExistente.numeroPaginas = novasPaginas ? +novasPaginas : livroExistente.numeroPaginas;

  if (isNaN(livroExistente.anoPublicacao) || isNaN(livroExistente.numeroPaginas)) {
    console.log(
      '\nERRO: Ano de Publicação e Número de Páginas devem ser números. Alteração cancelada.',
    );
    prompt('Pressione Enter para continuar...');
    return;
  }

  const tituloDuplicado = livros.some(
    (livro, index) =>
      index !== livroExistenteIndex &&
      livro.titulo.toLowerCase() === livroExistente.titulo.toLowerCase(),
  );

  if (tituloDuplicado) {
    console.log(
      `\nERRO: O novo título "${livroExistente.titulo}" já existe para outro livro. Alteração cancelada.`,
    );
    prompt('Pressione Enter para continuar...');
    return;
  }

  salvarLivros();
  console.log(`\nLivro "${livroExistente.titulo}" alterado com sucesso!`);
  prompt('Pressione Enter para continuar...');
}

module.exports = alterarLivro;

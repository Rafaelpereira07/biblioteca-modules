const fs = require('fs');
const prompt = require('prompt-sync')();
const { livros } = require('../persistencia.js');

function gerarPaginaWebFiltrada() {
  console.log('\n--- Gerar Página Web com Filtro ---');
  const generoFiltro = prompt('Filtrar por Gênero: ').toLowerCase();

  if (!generoFiltro) {
    console.log('ERRO: Por favor, digite um gênero para filtrar.');
    prompt('Pressione Enter para continuar...');
    return;
  }

  const livrosFiltrados = livros.filter((livro) => livro.genero.toLowerCase() === generoFiltro);

  if (livrosFiltrados.length === 0) {
    console.log(`Nenhum livro encontrado para o gênero "${generoFiltro}".`);
    prompt('Pressione Enter para continuar...');
    return;
  }

  let htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Catálogo Completo de Livros</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Catálogo Completo de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
            <th>Ano</th>
            <th>Páginas</th>
          </tr>
        </thead>
        <tbody>`;

  livrosFiltrados.forEach((livro) => {
    htmlContent += `
          <tr>
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.genero}</td>
            <td>${livro.anoPublicacao}</td>
            <td>${livro.numeroPaginas}</td>
          </tr>`;
  });

  htmlContent += `
        </tbody>
      </table>
    </div>
  </body>
  </html>
  `;

  try {
    fs.writeFileSync(`catalogo_${generoFiltro}.html`, htmlContent, 'utf8');
    console.log(`\nPágina 'catalogo_${generoFiltro}.html' gerada com sucesso!`);
  } catch (error) {
    console.error('\nERRO ao gerar a página web filtrada:', error.message);
  }
  prompt('Pressione Enter para continuar...');
}

module.exports = gerarPaginaWebFiltrada;

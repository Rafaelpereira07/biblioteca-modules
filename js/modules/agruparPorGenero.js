const prompt = require('prompt-sync')();
const { livros } = require('../persistencia.js');

function agruparLivrosPorGenero() {
  console.log('\n--- Agrupar Livros por Gênero ---');
  if (livros.length === 0) {
    console.log('Nenhum livro cadastrado para agrupar.');
    prompt('Pressione Enter para continuar...');
    return;
  }

  const agrupados = {};
  livros.forEach((livro) => {
    const genero = livro.genero.toLowerCase();
    if (!agrupados[genero]) agrupados[genero] = [];
    agrupados[genero].push(livro);
  });

  for (const genero in agrupados) {
    console.log(`\n--- Gênero: ${genero.toUpperCase()} (${agrupados[genero].length} livros) ---`);
    agrupados[genero].forEach((livro) =>
      console.log(`  - ${livro.titulo} (Autor: ${livro.autor})`)
    );
  }
  prompt('\nPressione Enter para continuar...');
}

module.exports = agruparLivrosPorGenero;

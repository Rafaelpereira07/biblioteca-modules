const fs = require('fs');

const ARQUIVO_LIVROS = 'livros.txt';
let livros = [];

function carregarLivros() {
  try {
    const dadosArquivo = fs.readFileSync(ARQUIVO_LIVROS, 'utf8');
    if (dadosArquivo) {
      livros = JSON.parse(dadosArquivo);
      console.log('\n--- Livros carregados do arquivo! ---\n');
    } else {
      livros = [];
      console.log('\n--- Arquivo de livros vazio. Iniciando com lista vazia. ---\n');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      fs.writeFileSync(ARQUIVO_LIVROS, '[]', 'utf8');
      livros = [];
      console.log('\n--- Arquivo de livros não encontrado. Um novo foi criado. ---\n');
    } else {
      console.error('\n--- Erro ao carregar livros:', error.message, '---\n');
      livros = [];
    }
  }
}

function salvarLivros() {
  try {
    const livrosJSON = JSON.stringify(livros, null, 2);
    fs.writeFileSync(ARQUIVO_LIVROS, livrosJSON, 'utf8');
    console.log('\n--- Livros salvos no arquivo! ---\n');
  } catch (error) {
    console.error('\n--- Erro ao salvar livros:', error.message, '---\n');
  }
}

module.exports = {
  livros,
  carregarLivros,
  salvarLivros,
};

const prompt = require('prompt-sync')();
const { carregarLivros } = require('./persistencia.js');

// Importa cada função do menu de seu respectivo arquivo
const incluirLivro = require('./modules/incluirLivro.js');

function main() {
  carregarLivros(); // Carrega os dados ao iniciar

  let opcao = '';
  do {
    console.clear();
    console.log('\n--- Gerenciador de Livros ---');
    console.log('1. Incluir Livro');
    console.log('2. Listar Livros');
    console.log('3. Pesquisar por Título/Autor');
    console.log('4. Agrupar por Gênero');
    console.log('5. Gerar Página Web (Completa)');
    console.log('6. Gerar Página Web (Filtro por Gênero)');
    console.log('7. Alterar Livro');
    console.log('8. Excluir Livro');
    console.log('9. Finalizar');
    console.log('-'.repeat(27));

    opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        incluirLivro();
        break;
      case '2':
        listarLivros();
        break;
      case '3':
        pesquisarLivro();
        break;
      case '4':
        agruparLivrosPorGenero();
        break;
      case '5':
        gerarPaginaWebCompleta();
        break;
      case '6':
        gerarPaginaWebFiltrada();
        break;
      case '7':
        alterarLivro();
        break;
      case '8':
        excluirLivro();
        break;
      case '9':
        console.log('\nFinalizando programa. Os dados foram salvos.');
        break;
      default:
        console.log('\nOpção inválida. Tente novamente.');
        prompt('Pressione Enter para continuar...');
        break;
    }
  } while (opcao !== '9');
}

// Inicia o programa
main();

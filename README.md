# Buscador de CEP

Este é um projeto de busca de CEP desenvolvido em React. Ele utiliza a API de CEP para buscar informações com base no CEP inserido pelo usuário.

## Funcionalidades

- Permite ao usuário digitar um CEP no campo de busca.
- Ao clicar no botão de busca, a aplicação faz uma chamada assíncrona para a API de CEP e busca as informações relacionadas ao CEP digitado.
- Caso o CEP seja válido e exista, as informações são exibidas na tela, incluindo o CEP, logradouro, bairro, localidade e UF.
- Caso o CEP não exista ou não seja válido, é exibido um alerta informando ao usuário sobre o erro.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- React
- [API de CEP](https://viacep.com.br/.

## Como executar o projeto

1. Certifique-se de ter o Node.js e o NPM instalados em sua máquina.
2. Faça o download ou clone este repositório.
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a instalação das dependências, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
6. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.

## Estrutura do projeto

O projeto está estruturado da seguinte forma:

- O arquivo `api.js` contém a configuração da API de CEP e as funções para realizar a chamada à API.
- O arquivo `styles.css` contém a folha de estilos da aplicação.
- O componente principal é o arquivo `App.js`, que contém a lógica principal da aplicação, incluindo a manipulação dos estados do React e a renderização condicional dos elementos.
- A pasta `assets` contém os arquivos de imagens utilizados na aplicação.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, tiver sugestões ou quiser adicionar novos recursos, sinta-se à vontade para enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
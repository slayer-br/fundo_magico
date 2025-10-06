# Fundo Mágico

## Descrição                                                                                                                                        

O **Fundo Mágico** é uma aplicação web que transforma descrições de texto em backgrounds personalizados para sites e projetos, utilizando o poder
da Inteligência Artificial. Com uma interface simples e intuitiva, os usuários podem descrever o fundo que imaginam, e a aplicação gera o código
HTML e CSS correspondente, com uma visualização em tempo real. 

Este projeto foi desenvolvido como parte da "Semana do Zero ao Programador Contratado" (29/09/2025 a 05/10/2025), um evento com foco em ensinar
programação e desenvolvimento de software de forma prática e intensiva.

## Screenshot
![Screenshot](./src/images/background-magic-desktop.gif)

## Link
- Site ao vivo: <a href="https://slayer-br.github.io/fundo_magico/" target="_blank" rel="noopener noreferrer">Fundo Mágico</a>

## Funcionalidades

**Geração de Backgrounds com IA:** Crie backgrounds a partir de descrições em linguagem natural.
**Visualização em Tempo Real:** Veja o resultado do background gerado instantaneamente.
**Código Pronto para Uso:** Copie facilmente os códigos HTML e CSS gerados para usar em seus projetos.
**Interface Amigável:** Design limpo e focado na experiência do usuário.

## Tecnologias Utilizadas

 - **Frontend:**
   - HTML
   - CSS
   - JavaScript (ES6+)

 - **API:**
   - A aplicação consome uma API de Inteligência Artificial para a geração dos códigos.

 - **Automação:**
   - n8n para a criação do workflow que processa as requisições.

## Como Utilizar

1.  **Abra o projeto:**
  - Clone este repositório: `git clone https://github.com/seu-usuario/projeto-fundomagico.git`
  - Navegue até o diretório do projeto: `cd projeto-fundomagico`
2.  **Inicie a aplicação:**
  - Abra o arquivo `index.html` em seu navegador de preferência.
3.  **Gere seu background:**
  - No campo de texto, descreva o background que você deseja (ex: "um gradiente suave do roxo ao rosa").
  - Clique no botão "Gerar Background Mágico".
 - Visualize o resultado e copie os códigos HTML e CSS para seus projetos.

## Estrutura do Projeto

```
/
|-- index.html
|-- README.md
|-- .gitignore
|-- src/
|   |-- css/
|   |   |-- reset.css
|   |   `-- style.css
|   |-- js/
|   |   `-- script.js
|   `-- images/
|       `-- bg.JPG
```
 
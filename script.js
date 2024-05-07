const alteraTexto = () => {
  let texto = document.getElementsByTagName("p")[1];
  texto.innerText = "Daqui a 2 anos estarei sendo promovido no Banco do Brasil";
};

alteraTexto();

const alteraCorMain = () => {
  let mainTag = document.getElementsByTagName("main")[0];
  mainTag.style.backgroundColor = "rgb(76, 164, 109)";
};

alteraCorMain();

const alteraCorSection = () => {
  let sectionTag = document.getElementsByClassName("center-content")[0];
  sectionTag.style.backgroundColor = "white";
};

alteraCorSection();

const fixTextH1 = () => {
  let textH1 = document.getElementsByClassName("title")[0];
  textH1.innerText = "Desafio - JavaScript";
};

fixTextH1();

const changeLetters = () => {
  let paragraph = document.getElementsByTagName("p")[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
};

changeLetters();

const showParagraphs = () => {
  let paragraphs = document.getElementsByTagName("p");
  for (let index = 0; index < paragraphs.length; index++) {
    console.log(paragraphs[index]);
  }
};

const exibirConteudoTags = () => {
    let paragrafos = document.querySelectorAll('.center-content p')
    let conteudo = '';

    // Itera sobre os parágrafos, extrai o texto e adiciona à string de conteúdo
    for (let i = 0; i < paragrafos.length; i++) {
        // Adiciona o texto do parágrafo atual à string de conteúdo, seguido por um espaço
        conteudo += paragrafos[i].innerText + ' ';
    }

    // Seleciona a <p> do rodapé
    let paragrafoRodape = document.querySelector('footer p');

    // Define o conteúdo da <p> do rodapé como a string de conteúdo
    paragrafoRodape.innerText = conteudo;
};

// Chama a função para exibir o conteúdo das tags <p> da seção principal
exibirConteudoTags();


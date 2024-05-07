const alteraTexto = () => {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerText = 'Daqui a 2 anos estarei sendo promovido no Banco do Brasil'
};

alteraTexto();

const alteraCorMain = () => {
    let mainTag = document.getElementsByTagName('main')[0];
    mainTag.style.backgroundColor = 'rgb(76, 164, 109)';
}

alteraCorMain();

const alteraCorSection = () => {
    let sectionTag = document.getElementsByClassName('center-content')[0];
    sectionTag.style.backgroundColor = 'white';
}

alteraCorSection();


const fixTextH1 = () => {
    let textH1 = document.getElementsByClassName('title')[0];
    textH1.innerText = 'Desafio - JavaScript';
}

fixTextH1();
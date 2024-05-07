const alteraTexto = () => {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerText = 'Daqui a 2 anos estarei sendo promovido no Banco do Brasil'
};

alteraTexto();

const alteraCor = () => {
    let mainTag = document.getElementsByTagName('main')[0];
    mainTag.style.backgroundColor = 'rgb(76, 164, 109)';
}

alteraCor();


function gerarNumeroAleatorio(min, max){
    return Math.random() * (max - min) + min;
}



function adivinharPalavra(){
    let palavras = ["aguia", "bruxa", "cacto", "denso", "festa", "ganso", "hiena", "india", "jantar", "tempo"]

    const aleatorio = parseInt(gerarNumeroAleatorio(0, palavras.length - 1));
    console.log(palavras[aleatorio]);
    console.log(aleatorio);

}   
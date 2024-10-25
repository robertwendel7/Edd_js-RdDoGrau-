function gerarNumeroAleatorio(min, max){
    return Math.random() * (max - min) + min;
}

let palavras = ["aguia", "bruxa", "cacto", "denso", "festa", "ganso", "hiena", "india", "jantar", "tempo"]
console.log(palavras)
const aleatorio = parseInt(gerarNumeroAleatorio(0, palavras.length));

let tentativas = 1

function adivinharPalavra(){
    let p = document.getElementById('palavra').value;
    

    let acertou = false;

    while(!acertou){
        if(p != palavras[aleatorio]){
            alert("Tente novamente...");
            tentativas +=1;
            
        } 
        else{
            alert("Exato!");
            alert("Você acertou com " + tentativas + " tentativas!");

            acertou = true;
        }
        break;
    }
    
}   
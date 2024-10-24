function gerarNumeroAleatorio(min, max){
    return Math.random() * (max - min) + min;
}

const aleatorio = parseInt(gerarNumeroAleatorio(0, 100));

function adivinharNumero(){
    
    let numero = document.getElementById('num').value;
    let acertou = true

    while(acertou){
        
        if (numero == aleatorio){

            console.log("Exato!")
            acertou = true;
            
        }
        else if(numero > aleatorio){
            console.log("palpite muito alto...")
        }
        else{
            console.log("palpite mutio baixo...")
        }
        
        break;
    }

    
}
function mostrarResultado(){
    document.querySelector('#resultado').innerHTML = "Resultado: " + balanceamento();
}

function balanceamento(){
    let input = document.getElementById('input').value;

    const expressao = [];

    const simbolos = {
        ')': '(',
        ']': '[',
        '}': '{'
        
    };

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (['(', '{', '['].includes(char)) {
            expressao.push(char);


        } else if ([')', '}', ']'].includes(char)) {

            if (expressao.length === 0 || expressao.pop() !== simbolos[char]) {

                return "Desbalanceada";
            }
        }
    }

    if(expressao.length == 0){
        return "Balanceada";
    }
    else{
        return "Desbalanceada";
    }
      
}


function balanciar(){
    console.log(balanceamento());
    mostrarResultado()
}
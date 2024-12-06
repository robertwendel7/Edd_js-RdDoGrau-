pilha = []

function mostrarPilha(){
    document.querySelector('#resultado').innerHTML = "Resultado da pilha: " + pilha;
}
function mostrarTamanhoPilha(valor){
    document.querySelector('#resultadoSP').innerHTML = "Tamanho da pilha: " + valor;
}

function clickPush(){
    valor = document.getElementById("input").value;
    push(valor);
    console.log(pilha);
    mostrarPilha()

}
function clickPop(){
    
    pop();
    console.log(pilha);
    mostrarPilha()
}
function clickPeek(){
    
    peek();
    mostrarPilha()
    
}
function clickIsEmpty(){
   
    isEmpty();
    mostrarPilha()

    
}
function clickSize(){
    
    
    mostrarTamanhoPilha(size());
    console.log(size());
    
}


function push(valor){
    pilha.push(valor);
    
}

function pop(){
    pilha.pop();

}

function peek(){
    return pilha[pilha.length - 1];

}

function isEmpty(){
    return size() === 0

}

function size(){
    return pilha.length

}


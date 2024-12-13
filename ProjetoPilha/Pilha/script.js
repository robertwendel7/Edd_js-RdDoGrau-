pilha = []

function mostrarPilha(){
    document.querySelector('#resultado').innerHTML = "Resultado da pilha: " + pilha;

    
}
function mostrarTamanhoPilha(valor){
    document.querySelector('#resultadoSize').innerHTML = "Tamanho da pilha: " + valor;
}
function mostrarTopoPilha(valor){
    document.querySelector('#resultadoPeek').innerHTML = "Topo da pilha: " + valor;
}
function mostrarIsEmpty(valor){
    let valorFuncao = valor;

    if(valorFuncao === true){
        document.querySelector('#resultadoIsEmpty').innerHTML = "A pilha está vazia ";
    } else {
        document.querySelector('#resultadoIsEmpty').innerHTML = "A pilha não está vazia ";
    }

}

function clickPush(){
    let valor = document.getElementById("input").value;
    if(valor){
        push(valor);
        mostrarPilha()
        console.log(pilha);
    }

}
function clickPop(){
    
    pop();
    console.log(pilha);
    mostrarPilha()
}
function clickPeek(){
    
    peek();
    mostrarPilha()
    mostrarTopoPilha(peek());
    
}
function clickIsEmpty(){
   
    isEmpty();
    mostrarPilha()
    mostrarIsEmpty(isEmpty());
    
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


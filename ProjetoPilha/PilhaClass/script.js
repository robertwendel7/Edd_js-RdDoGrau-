class Pilha{
    constructor(){
        this.pilha = [];
    }
    
    push(valor){
        this.pilha.push(valor);
    }

    pop(){
        this.pilha.pop();
    }

    peek(){
        return this.pilha[this.size() - 1];
    }

    isEmpty(){
        return this.pilha.size() === 0
    }

    size(){
        return this.pilha.length
    }
}
function mostrarPilha(){
    document.querySelector('#resultado').innerHTML = "Resultado da pilha: " + p.pilha;
}


const p = new Pilha();
function clickPush(){
    let valor = document.getElementById("input").value;
    p.push(valor)
    console.log(p.pilha);
    mostrarPilha()

}
function clickPop(){
    
    p.pop();
    mostrarPilha()
}
function clickPeek(){
    let pe = p.peek()
    document.querySelector('#resultadoPeek').innerHTML = "Ùltimo elemento = " + pe;
}
function clickIsEmpty(){
   
    isEmpty();
    mostrarPilha()
}
function clickSize(){
    
    console.log(size());
    mostrarPilha()
}
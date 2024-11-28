function multiplicacao(n1, n2){
    if(n2 == 1){
        return n1
    }
    return n1 + multiplicacao(n1, n2 - 1)


}

function exponenciacao(n1, n2){
    if(n2 == 1){
        return n1
    }
    return n1 * exponenciacao(n1, n2 - 1)


}
    

console.log("soma: " + multiplicacao(5, 5))
console.log("soma: " + exponenciacao(5, 5))

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

let memo = []

function fibo(mes){
    if(mes === 0 || mes === 1){
        return mes
    }

    if(memo[mes]){
        return memo[mes]
    }else {
        memo[mes] = fibo(mes-1) + fibo(mes-2)
    }
    return memo[mes]
}

console.log("soma: " + multiplicacao(5, 5))
console.log("soma: " + exponenciacao(5, 5))
console.log("Coelhos: " + fibo(12))

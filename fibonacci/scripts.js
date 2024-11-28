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
    console.log(memo)
    document.innerHTML()
    return memo[mes]
}

console.log(fibo(500))
function mostrarPares(){
    
    let n  = document.getElementById('num').value
    var list = [];
    for(let i = 1; i <= n; i++){

        if ( i % 2 ==0 ){
            list.push(i);
        }

    }
    console.log(list);


}
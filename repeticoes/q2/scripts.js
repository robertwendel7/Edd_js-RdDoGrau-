function mostrarPares(){
    
    let n  = parseInt(document.getElementById('num').value,10);
    var list = []; 

    for(let i = 0; i <= n; i++){
        
        if ( i % 2 ==0 ){
            list.push(i);
        }

    }

    document.querySelector('#resultado').innerHTML = "Resultado: " + list;

    // alert(list);


}
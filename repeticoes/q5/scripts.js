function imprimirContrario(){
    var p = document.getElementById('palavra').value;
    console.log(p);
    for( i = 0; i <= p.length; i--){
        console.log(p[i]);
    }
}
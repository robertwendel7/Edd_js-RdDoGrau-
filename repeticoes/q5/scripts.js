function imprimirContrario(){
    var p = document.getElementById('palavra').value;
    let palavra = "";
    for( i = p.length - 1; i >= 0; i--){
        palavra += p[i];
    }

    console.log(palavra);
}

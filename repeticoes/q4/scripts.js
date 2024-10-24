function vogais(){
    var v = document.getElementById('num').value;
    var contar = 0
    for(i = 0; i <= v.length; i++){
        if(v[i] == "a" | v[i] == "e" | v[i] == "i" | v[i] == "o" | v[i] == "u" ){
            contar +=1;
        }
    }

    alert("Existem " + contar + " vogais nesse texto");
    



}
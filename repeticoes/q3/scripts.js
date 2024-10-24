function tabuada(){
    let numero = document.getElementById('num').value;
    
    let list = [];

    for(i = 1; i <= 10; i++){
        list.push(numero * i);
    }

    alert(list);



}
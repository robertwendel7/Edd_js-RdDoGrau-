function progrecaoAritmetica() {
    let npa = parseInt(document.getElementById('npa').value, 10);
    let a1 = parseInt(document.getElementById('a1').value, 10);
    let r = parseInt(document.getElementById('r').value, 10);

    let list = []

    let soma = 0;

    for (i = 0; i < npa; i++) {

        let an = a1 + i * r
        soma += an;
        list.push(an);



    }

    console.log(list);
    console.log(soma);
}
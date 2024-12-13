class pilha{
    constructor(texto, data){
        this.texto = texto;
        this.data = data;
    }
    exibirPilha(){
        console.log(this.texto, this.data);
    }

}  
function adicionarNaClass(){
    const texto = document.getElementById("input").value;
    const data = document.getElementById("data").value

    const p = new pilha(texto, data);

    p.exibirPilha();
}


var table = [{altura:1.80 , peso:90 ,   idade:10},{altura:1.80 , peso:70 ,   idade:20},{altura:1.80 , peso:70 ,   idade:20},{altura:1.80 , peso:70 ,   idade:20}]


function carregarTabela(conteudoTabela) {
    document.getElementById("tbody").innerHTML = "";
    var mediaIdade = 0
    var menoresIdade = 0
    var mediaAltura = 0
    var acimapeso = 0
    
    table.forEach(element => {
        element.idade
        if (element.idade < 18 ){
            ++ menoresIdade;
        }
        mediaIdade = mediaIdade + element.idade
        mediaAltura = mediaAltura + element.altura

        if(element.peso >80){
            ++ acimapeso;  
        }
    
    });
    var tr  = document.createElement("tr");
    var tdidade = document.createElement("td");
    tdidade.appendChild( document.createTextNode(menoresIdade))
    tr.appendChild(tdidade);

    var tdmediaIdade = document.createElement("td");
    tdmediaIdade.appendChild( document.createTextNode(mediaIdade/table.length))
    tr.appendChild(tdmediaIdade);

    var tdmediaAltura = document.createElement("td");
    tdmediaAltura.appendChild( document.createTextNode(mediaAltura/table.length))
    tr.appendChild(tdmediaAltura);

    var tdacimapeso = document.createElement("td");
    tdacimapeso.appendChild( document.createTextNode( acimapeso * table.length + " %"))
    tr.appendChild(tdacimapeso);

    document.getElementById("tbody").appendChild(tr)


}
carregarTabela(table)

function adicionar(param){
    table.push(param)

}
document.getElementById("cadastrar").addEventListener("click", function(){
    var altura = +document.getElementById("altura").value;
    var peso = +document.getElementById("peso").value;
    var idade = +document.getElementById("idade").value;
    adicionar({
    idade:idade,
    altura: altura,
    peso: peso,
    })
    carregarTabela(table);
})
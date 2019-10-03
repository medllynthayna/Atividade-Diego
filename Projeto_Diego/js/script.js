var table = [{nomeAluno:"Medllyn", notaTrabalho:10, notaProva:10, media:0,}]

function carregarTabela(conteudoTabela) {
    document.getElementById("tbody").innerHTML = "";
    conteudoTabela.forEach(element => {
        var tr  = document.createElement("tr");
        var tdNome  = document.createElement("td");
        var tdNotaProva  = document.createElement("td");
        var tdNotaTrabalho  = document.createElement("td");
        var tdMedia  = document.createElement("td");
        var tdMsg  = document.createElement("td");

       
        tdNome.appendChild( document.createTextNode(element.nomeAluno));
        tdNotaProva.appendChild( document.createTextNode(element.notaProva));
        tdNotaTrabalho.appendChild( document.createTextNode(element.notaTrabalho));
        tdMedia.appendChild( document.createTextNode((element.notaProva+element.notaTrabalho)/2));
        tdMsg.appendChild( document.createTextNode(((element.notaTrabalho + element.notaProva) / 2 ) < 30 ? "Reprovado" : ((element.notaTrabalho + element.notaProva) / 2 ) < 60 ? "Ativadade Especial" : "Aprovado",));

       
        tr.appendChild(tdNome);
        tr.appendChild(tdNotaProva);
        tr.appendChild(tdNotaTrabalho);
        tr.appendChild(tdMedia);
        tr.appendChild(tdMsg);
            document.getElementById("tbody").appendChild(tr)

    });

}
carregarTabela(table)

function adicionar(param){
    table.push(param)

}
document.getElementById("cadastrar").addEventListener("click", function(){
    var notaTrabalho = +document.getElementById("notaTrabalho").value;
    var notaProva = +document.getElementById("notaProva").value;
    adicionar({nomeAluno: document.getElementById("nomeAluno").value,
    notaTrabalho: notaTrabalho,
    notaProva: notaProva,
    })
    carregarTabela(table);
})
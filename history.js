/* ==========================================
   LH CONTROL V4.2
   history.js
========================================== */


function registrarHistorico(tipo, dados){


    const registro = {


        id: Date.now(),


        data: new Date()
        .toLocaleString("pt-BR"),


        tipo: tipo,


        ...dados


    };



    Storage.adicionarHistorico(
        registro
    );



}








function carregarHistorico(){


    return Storage.carregarHistorico();


}









function mostrarHistorico(){


    const lista =
    document.getElementById(
        "historico"
    );



    if(!lista) return;



    const historico =
    carregarHistorico();



    lista.innerHTML = "";





    if(historico.length === 0){


        lista.innerHTML = `

        <div class="itemPrioridade">

        Nenhuma movimentação registrada

        </div>

        `;


        return;

    }








    historico.slice(0,10)
    .forEach(item=>{



        const div =
        document.createElement("div");



        div.className =
        "card";



        div.innerHTML = `


        <strong>

        ${item.tipo}

        </strong>


        <p>

        ${item.data}

        </p>



        <p>

        ${JSON.stringify(item)}

        </p>


        `;



        lista.appendChild(div);



    });



}








function limparHistorico(){


    localStorage.removeItem(

        APP.storage.historico

    );


    mostrarHistorico();


}

/* ==========================================
   LH CONTROL V4.2
   dashboard.js
========================================== */



function atualizarDashboard(){


    atualizarTotalStage();


    atualizarDocas();


    atualizarPrioridades();


}






function atualizarTotalStage(){


    const elemento = document.getElementById(
        "totalPallets"
    );



    if(!elemento) return;



    let total = stage.reduce(

        (soma,regiao)=> soma + regiao.valor,

        0

    );



    elemento.innerText = total;



}









function atualizarDocas(){


    const docas = Storage.carregarDocas();



    const ocupadas = docas.filter(

        d=>d.ocupada

    ).length;



    const livres = APP.totalDocas - ocupadas;





    const elementoOcupadas =
    document.getElementById(
        "docasAtivas"
    );



    const elementoLivres =
    document.getElementById(
        "docasLivres"
    );




    if(elementoOcupadas){

        elementoOcupadas.innerText =
        ocupadas;

    }



    if(elementoLivres){

        elementoLivres.innerText =
        livres;

    }



}









function atualizarPrioridades(){


    const painel =
    document.getElementById(
        "painelPrioridades"
    );



    if(!painel) return;



    painel.innerHTML = "";





    const prioridades =
    stage.filter(

        r=>r.prioridade && r.valor > 0

    );






    if(prioridades.length === 0){


        painel.innerHTML = `

        <div class="itemPrioridade">

            <span>
            ✅ Sem prioridades
            </span>

            <div class="valor">
            -
            </div>

        </div>

        `;


        return;

    }








    prioridades.forEach(regiao=>{



        const item =
        document.createElement("div");



        item.className =
        "itemPrioridade";



        item.style.borderLeftColor =
        regiao.cor;





        item.innerHTML = `


        <span>

        🚨 ${regiao.nome}
        ${regiao.codigo}

        </span>


        <div class="valor">

        ${regiao.valor}

        </div>



        `;



        painel.appendChild(item);



    });



}








function atualizarTudo(){


    atualizarDashboard();


}

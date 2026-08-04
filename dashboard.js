/* ==========================================
   LH CONTROL V4.2
   dashboard.js
========================================== */


function atualizarDashboard(){


    calcularTotalStage();


    atualizarDocas();


    atualizarPrioridades();


}







function calcularTotalStage(){


    const elemento =
    document.getElementById(
        "totalPallets"
    );


    if(!elemento || typeof stage === "undefined"){

        return;

    }



    const total =
    stage.reduce(

        (soma,regiao)=> 
        soma + Number(regiao.valor || 0),

        0

    );



    elemento.innerText = total;



}









function atualizarDocas(){


    if(typeof Storage === "undefined"){

        return;

    }


    const docas =
    Storage.carregarDocas() || [];



    const ocupadas =
    docas.filter(

        d=>d.ocupada

    ).length;



    const livres =
    APP.totalDocas - ocupadas;





    const campoOcupadas =
    document.getElementById(
        "docasAtivas"
    );



    const campoLivres =
    document.getElementById(
        "docasLivres"
    );





    if(campoOcupadas){

        campoOcupadas.innerText =
        ocupadas;

    }




    if(campoLivres){

        campoLivres.innerText =
        livres;

    }


}









function atualizarPrioridades(){



    const painel =
    document.getElementById(
        "painelPrioridades"
    );



    if(!painel || typeof stage === "undefined"){

        return;

    }




    painel.innerHTML = "";





    const prioridades =
    stage.filter(

        r => 
        r.prioridade === true &&
        Number(r.valor) > 0

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
        document.createElement(
            "div"
        );



        item.className =
        "itemPrioridade";



        item.style.borderLeftColor =
        regiao.cor || "#999";




        item.innerHTML = `


        <span>

        🚨 ${regiao.nome}
        ${regiao.codigo || ""}

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





function atualizarDocas(){


    const docas =
    Storage.carregarDocas();



    const ocupadas =
    docas.filter(

        d=>d.ocupada

    ).length;



    const livres =
    APP.totalDocas - ocupadas;





    const campoOcupadas =
    document.getElementById(
        "docasAtivas"
    );



    const campoLivres =
    document.getElementById(
        "docasLivres"
    );





    if(campoOcupadas){

        campoOcupadas.innerText =
        ocupadas;

    }




    if(campoLivres){

        campoLivres.innerText =
        livres;

    }


}









function atualizarPrioridades(){



    const painel =
    document.getElementById(
        "painelPrioridades"
    );



    if(!painel || !stage){

        return;

    }




    painel.innerHTML = "";





    const prioridades =
    stage.filter(

        r=>r.prioridade === true 
        &&
        r.valor > 0

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
        document.createElement(
            "div"
        );



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

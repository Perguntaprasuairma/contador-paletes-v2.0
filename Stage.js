/* ==========================================
   LH CONTROL V4.2
   stage.js
========================================== */


let stage = [];





function iniciarStage(){


    stage = Storage.carregarStage() || [];


    renderizarStage();


}







function renderizarStage(){


    const container =
    document.getElementById(
        "regions"
    );


    if(!container){

        return;

    }



    container.innerHTML = "";





    stage.forEach(regiao=>{



        const card =
        document.createElement("div");



        card.className =
        "card";



        card.style.borderLeftColor =
        regiao.cor || "#999";





        card.innerHTML = `


        <div class="topo">


            <div class="nome">


                ${regiao.nome}


                <br>


                <small>
                ${regiao.codigo || ""}
                </small>


            </div>



            <div class="valor">

                ${regiao.valor || 0}

            </div>


        </div>





        <div class="botoes">


            <button onclick="alterarStage(${regiao.id},-10)">
            -10
            </button>


            <button onclick="alterarStage(${regiao.id},-5)">
            -5
            </button>


            <button onclick="alterarStage(${regiao.id},-1)">
            -1
            </button>



            <button onclick="alterarStage(${regiao.id},1)">
            +1
            </button>


            <button onclick="alterarStage(${regiao.id},5)">
            +5
            </button>


            <button onclick="alterarStage(${regiao.id},10)">
            +10
            </button>


        </div>


        `;




        container.appendChild(card);



    });



    atualizarTotalStage();


}









function alterarStage(id, quantidade){



    const destino =
    stage.find(
        r=>r.id === id
    );



    if(!destino){

        return;

    }





    destino.valor =
    Number(destino.valor || 0)
    + quantidade;




    if(destino.valor < 0){

        destino.valor = 0;

    }





    Storage.salvarStage(stage);



    renderizarStage();



}









function atualizarTotalStage(){



    const campo =
    document.getElementById(
        "totalPallets"
    );



    if(!campo){

        return;

    }





    const total =
    stage.reduce(

        (soma,r)=>
        soma + Number(r.valor || 0),

        0

    );



    campo.innerText =
    total;


}        card.className = "card";



        card.style.borderLeftColor =
        regiao.cor || "#999";





        if(
            regiao.prioridade &&
            Number(regiao.valor) > 0
        ){

            card.classList.add("prioridade-alta");

        }






        card.innerHTML = `


        <div class="topo">


            <div class="nome">

                ${regiao.nome}

                <br>

                <small>${regiao.codigo || ""}</small>

            </div>



            <div class="valor">

                ${regiao.valor || 0}

            </div>


        </div>





        <div class="botoes">


            <button class="menos"
            onclick="alterarStage(${regiao.id},-10)">
            -10
            </button>


            <button class="menos"
            onclick="alterarStage(${regiao.id},-5)">
            -5
            </button>


            <button class="menos"
            onclick="alterarStage(${regiao.id},-1)">
            -1
            </button>



            <button class="mais"
            onclick="alterarStage(${regiao.id},1)">
            +1
            </button>


            <button class="mais"
            onclick="alterarStage(${regiao.id},5)">
            +5
            </button>


            <button class="mais"
            onclick="alterarStage(${regiao.id},10)">
            +10
            </button>


        </div>


        `;



        container.appendChild(card);



    });




    atualizarTotalStage();



    if(typeof atualizarPrioridades === "function"){

        atualizarPrioridades();

    }



}









function alterarStage(id, quantidade){



    const destino =
    stage.find(
        r => r.id === id
    );



    if(!destino) return;





    destino.valor =
    Number(destino.valor || 0)
    + quantidade;





    if(destino.valor < 0){

        destino.valor = 0;

    }






    Storage.salvarStage(stage);



    renderizarStage();




    if(typeof atualizarDashboard === "function"){

        atualizarDashboard();

    }



}









function atualizarTotalStage(){



    const campo =
    document.getElementById(
        "totalPallets"
    );



    if(!campo) return;





    const total =
    stage.reduce(

        (soma,r)=>
        soma + Number(r.valor || 0),

        0

    );



    campo.innerText = total;



}

        <div class="topo">


            <div class="nome">

                ${regiao.nome}

                <br>

                <small>${regiao.codigo || ""}</small>

            </div>


            <div class="valor">

                ${regiao.valor || 0}

            </div>


        </div>




        <div class="botoes">


            <button class="menos" onclick="alterarStage(${regiao.id},-10)">-10</button>

            <button class="menos" onclick="alterarStage(${regiao.id},-5)">-5</button>

            <button class="menos" onclick="alterarStage(${regiao.id},-1)">-1</button>

            <button class="mais" onclick="alterarStage(${regiao.id},1)">+1</button>

            <button class="mais" onclick="alterarStage(${regiao.id},5)">+5</button>

            <button class="mais" onclick="alterarStage(${regiao.id},10)">+10</button>


        </div>


        `;


        container.appendChild(card);


    });



    atualizarTotalStage();


    if(typeof atualizarPrioridades === "function"){
        atualizarPrioridades();
    }


}








function alterarStage(id, quantidade){



    const destino = stage.find(
        r => r.id === id
    );



    if(!destino) return;



    destino.valor = (destino.valor || 0) + quantidade;



    if(destino.valor < 0){

        destino.valor = 0;

    }



    Storage.salvarStage(stage);



    renderizarStage();



    if(typeof atualizarDashboard === "function"){
        atualizarDashboard();
    }


}








function atualizarTotalStage(){



    const campo = document.getElementById("totalPallets");



    if(!campo) return;



    const total = stage.reduce(

        (soma,r)=> soma + (r.valor || 0),

        0

    );



    campo.innerText = total;



}                ${regiao.nome}

                <br>

                <small>${regiao.codigo}</small>

            </div>


            <div class="valor">

                ${regiao.valor}

            </div>


        </div>




        <div class="botoes">


            <button class="menos"
            onclick="alterarStage(${regiao.id},-10)">
            -10
            </button>


            <button class="menos"
            onclick="alterarStage(${regiao.id},-5)">
            -5
            </button>


            <button class="menos"
            onclick="alterarStage(${regiao.id},-1)">
            -1
            </button>


            <button class="mais"
            onclick="alterarStage(${regiao.id},1)">
            +1
            </button>


            <button class="mais"
            onclick="alterarStage(${regiao.id},5)">
            +5
            </button>


            <button class="mais"
            onclick="alterarStage(${regiao.id},10)">
            +10
            </button>


        </div>


        `;


        container.appendChild(card);


    });



    atualizarTotalStage();

    atualizarPrioridades();


}





function alterarStage(id, quantidade){



    const destino = stage.find(

        r => r.id === id

    );



    if(!destino) return;



    destino.valor += quantidade;



    if(destino.valor < 0){

        destino.valor = 0;

    }



    Storage.salvarStage(stage);



    renderizarStage();


    atualizarDashboard();


}








function atualizarTotalStage(){



    const campo =
    document.getElementById(
        "totalPallets"
    );



    if(!campo) return;



    const total = stage.reduce(

        (soma,r)=> soma+r.valor,

        0

    );



    campo.innerText = total;



}

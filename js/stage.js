/* ==========================================
   LH CONTROL V4.2
   stage.js
========================================== */


let stage = [];





function iniciarStage(){


    stage = Storage.carregarStage();


    renderizarStage();


    atualizarDashboard();


}






function renderizarStage(){


    const container = document.getElementById("regions");


    if(!container) return;


    container.innerHTML = "";



    stage.forEach(regiao => {



        const card = document.createElement("div");


        card.className = "card";



        if(regiao.valor > 0){

            card.classList.add("emdoca");

        }




        card.style.borderLeftColor = regiao.cor;





        card.innerHTML = `


        <div class="topo">


            <div class="nome">

                ${regiao.nome}
                <small>${regiao.codigo}</small>

            </div>


            <div class="valor">

                ${regiao.valor}

            </div>


        </div>




        <div class="botoes">


            <button class="menos"
            onclick="alterarPalete(${regiao.id},-10)">
            -10
            </button>


            <button class="menos"
            onclick="alterarPalete(${regiao.id},-5)">
            -5
            </button>


            <button class="menos"
            onclick="alterarPalete(${regiao.id},-1)">
            -1
            </button>



            <button class="mais"
            onclick="alterarPalete(${regiao.id},1)">
            +1
            </button>


            <button class="mais"
            onclick="alterarPalete(${regiao.id},5)">
            +5
            </button>


            <button class="mais"
            onclick="alterarPalete(${regiao.id},10)">
            +10
            </button>



        </div>



        `;



        container.appendChild(card);



    });



}








function alterarPalete(id, quantidade){



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








function totalPaletes(){


    return stage.reduce(

        (total,r)=> total + r.valor,

        0

    );


}







function atualizarDashboard(){



    const total = document.getElementById(
        "totalPallets"
    );



    if(total){

        total.innerText = totalPaletes();

    }



}

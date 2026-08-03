
// ======================================
// dashboard.js
// Atualização do Dashboard
// ======================================

function atualizarDashboard() {

    atualizarTotalStage();

    atualizarDocas();
    
    atualizarPrioridades();
}

function atualizarTotalStage() {

    let total = 0;

    if (typeof regioes !== "undefined") {

        regioes.forEach(r => {

            total += Number(r.valor);

        });

    }

    const totalEl = document.getElementById("totalPallets");

    if (totalEl)
        totalEl.textContent = total;

}

function atualizarDocas() {

    if (typeof docas === "undefined")
        return;

    const ocupadas = docas.filter(d => d.ocupada).length;

    const livres = TOTAL_DOCAS - ocupadas;

    const ocupadasEl = document.getElementById("docasAtivas");

    const livresEl = document.getElementById("docasLivres");

    if (ocupadasEl)
        ocupadasEl.textContent = ocupadas;

    if (livresEl)
        livresEl.textContent = livres;

}

function atualizarTudo(){

    atualizarDashboard();

    if(typeof render==="function")
        render();

    if(typeof renderDocas==="function")
        renderDocas();

}

document.addEventListener("DOMContentLoaded",()=>{

    atualizarDashboard();
function atualizarPrioridades(){

    if(typeof regioes==="undefined") return;

    const painel=document.getElementById("painelPrioridades");

    if(!painel) return;

    painel.innerHTML="";

    const lista=[...regioes]
        .sort((a,b)=>b.valor-a.valor);

    lista.forEach((r,index)=>{

        const item=document.createElement("div");

        item.className="itemPrioridade";

        item.style.borderLeftColor=r.cor;

        let emoji="⚪";

        if(index===0) emoji="🔴";
        else if(index===1) emoji="🟠";
        else if(index===2) emoji="🟡";
        else emoji="🟢";

        item.innerHTML=`
            <span>${emoji} ${r.nome}</span>
            <span class="valor">${r.valor}</span>
        `;

        painel.appendChild(item);

    });

}
});

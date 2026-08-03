
// ======================================
// dashboard.js
// Atualização do Dashboard
// ======================================

function atualizarDashboard() {

    atualizarTotalStage();

    atualizarDocas();

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

});

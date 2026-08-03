// ======================================
// LH CONTROL V4
// docks.js
// Controle das Docas
// ======================================

const TOTAL_DOCAS = 6;

let docas = JSON.parse(localStorage.getItem("LH_DOCAS")) || [];

if(docas.length === 0){

    for(let i=1;i<=TOTAL_DOCAS;i++){

        docas.push({
            numero:i,
            ocupada:false,
            regiao:"",
            motorista:"",
            placa:"",
            id:"",
            chegada:""
        });

    }

    salvarDocas();

   atualizarDashboard(); 

}

function salvarDocas(){

    localStorage.setItem(
        "LH_DOCAS",
        JSON.stringify(docas)
    );

}

function ocuparDoca(numero, dados){

    const doca = docas.find(d=>d.numero===numero);

    if(!doca) return;

    doca.ocupada=true;

    doca.regiao=dados.regiao;

    doca.motorista=dados.motorista;

    doca.placa=dados.placa;

    doca.id=dados.id;

    doca.chegada=new Date().toLocaleTimeString(
        "pt-BR",
        {
            hour:"2-digit",
            minute:"2-digit"
        }
    );

    salvarDocas();

    renderDocas();

}

function liberarDoca(numero){

    const doca=docas.find(d=>d.numero===numero);

    if(!doca) return;

    doca.ocupada=false;

    doca.regiao="";

    doca.motorista="";

    doca.placa="";

    doca.id="";

    doca.chegada="";

    salvarDocas();

    renderDocas();

}

function docasOcupadas(){

    return docas.filter(d=>d.ocupada).length;

}

function docasLivres(){

    return TOTAL_DOCAS-docasOcupadas();

}

function renderDocas(){

    let painel=document.getElementById("painelDocas");

    if(!painel){

        painel=document.createElement("section");

        painel.id="painelDocas";

        document.body.appendChild(painel);

    }

    painel.innerHTML="<h2>🚚 Docas</h2>";

    docas.forEach(d=>{

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

<h3>Doca ${d.numero}</h3>

<p><b>Status:</b> ${
d.ocupada
?
"🟢 Ocupada"
:
"⚪ Livre"
}</p>

<p><b>Destino:</b> ${d.regiao||"-"}</p>

<p><b>Motorista:</b> ${d.motorista||"-"}</p>

<p><b>ID:</b> ${d.id||"-"}</p>

<p><b>Placa:</b> ${d.placa||"-"}</p>

<p><b>Chegada:</b> ${d.chegada||"-"}</p>

`;

        painel.appendChild(card);

    });

}
// js/docks.js

const TOTAL_DOCAS = 6;
const DOCK_STORAGE = "LH_DOCAS_V41";

let docas = carregarDocas();

function carregarDocas() {
    const salvo = localStorage.getItem(DOCK_STORAGE);

    if (salvo) return JSON.parse(salvo);

    return Array.from({ length: TOTAL_DOCAS }, (_, i) => ({
        numero: i + 1,
        ocupada: false,
        regiao: "",
        motorista: "",
        placa: "",
        id: "",
        chegada: ""
    }));
}

function salvarDocas() {
    localStorage.setItem(DOCK_STORAGE, JSON.stringify(docas));
}

function obterDoca(numero) {
    return docas.find(d => d.numero === numero);
}

function receberCarreta(numero, dados) {

    const doca = obterDoca(numero);

    if (!doca) return false;

    if (doca.ocupada) {
        alert("Esta doca já está ocupada.");
        return false;
    }

    doca.ocupada = true;
    doca.regiao = dados.regiao;
    doca.motorista = dados.motorista;
    doca.id = dados.id;
    doca.placa = dados.placa;

    doca.chegada = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    salvarDocas();

    atualizarDashboardDocas();

    renderDocas();

    return true;
}

function liberarCarreta(numero) {

    const doca = obterDoca(numero);

    if (!doca || !doca.ocupada) return;

    const quantidade = Number(
        prompt(
            `Quantos paletes saíram do Stage de ${doca.regiao}?`,
            "0"
        )
    );

    if (isNaN(quantidade)) return;

    descontarStage(doca.regiao, quantidade);

    salvarHistorico({
        data: new Date().toLocaleDateString("pt-BR"),
        hora: new Date().toLocaleTimeString("pt-BR"),
        regiao: doca.regiao,
        motorista: doca.motorista,
        placa: doca.placa,
        id: doca.id,
        doca: doca.numero,
        quantidade
    });

    doca.ocupada = false;
    doca.regiao = "";
    doca.motorista = "";
    doca.id = "";
    doca.placa = "";
    doca.chegada = "";

    salvarDocas();

    atualizarDashboardDocas();

    renderDocas();
}

function atualizarDashboardDocas() {

    const ocupadas = docas.filter(d => d.ocupada).length;

    const livres = TOTAL_DOCAS - ocupadas;

    const ocupadasEl = document.getElementById("docasAtivas");

    if (ocupadasEl)
        ocupadasEl.textContent = ocupadas;

    const livresEl = document.getElementById("docasLivres");

    if (livresEl)
        livresEl.textContent = livres;
}

function renderDocas() {

    let painel = document.getElementById("painelDocas");

    if (!painel) {

        painel = document.createElement("section");

        painel.id = "painelDocas";

        document.body.appendChild(painel);
    }

    painel.innerHTML = "<h2>🚚 Docas</h2>";

    docas.forEach(doca => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>Doca ${doca.numero}</h3>

            <p><strong>Status:</strong> ${doca.ocupada ? "🟢 Ocupada" : "⚪ Livre"}</p>

            <p><strong>Destino:</strong> ${doca.regiao || "-"}</p>

            <p><strong>Motorista:</strong> ${doca.motorista || "-"}</p>

            <p><strong>ID:</strong> ${doca.id || "-"}</p>

            <p><strong>Placa:</strong> ${doca.placa || "-"}</p>

            <p><strong>Chegada:</strong> ${doca.chegada || "-"}</p>

            ${
                doca.ocupada
                    ? `<button class="menos" onclick="liberarCarreta(${doca.numero})">Liberar</button>`
                    : `<button class="mais" onclick="alert('Na próxima etapa vamos abrir o formulário direto no card.')">Receber</button>`
            }
        `;

        painel.appendChild(card);

    });

    atualizarDashboardDocas();
}

renderDocas();
renderDocas();

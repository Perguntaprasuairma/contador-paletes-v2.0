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

renderDocas();

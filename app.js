/* ==========================================
   LH CONTROL V4.2
   app.js
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
        "🚚 LH Control V4.2 iniciado"
    );



    iniciarStage();


    iniciarDocas();


    atualizarDashboard();



    console.log(
        "✅ Sistema pronto"
    );


});








function resetarTudo(){


    const confirmar =
    confirm(
    "Deseja apagar todos os dados do LH Control?"
    );



    if(!confirmar){

        return;

    }




    Storage.limparTudo();



    location.reload();



}},
{
nome:"Gravataí",
codigo:"RS",
cor:"#FDD835",
valor:0,
doca:false
},
{
nome:"Goiânia",
codigo:"GO02",
cor:"#FB8C00",
valor:0,
doca:false
}
];

// =============================
// Carrega LocalStorage
// =============================

const salvo = JSON.parse(localStorage.getItem("LHCONTROL"));

if(salvo){

for(let i=0;i<regioes.length;i++){

regioes[i].valor = salvo[i].valor;
regioes[i].doca = salvo[i].doca;

}

}

// =============================

function salvar(){

localStorage.setItem("LHCONTROL",JSON.stringify(regioes));

}

// =============================

function totalPaletes(){

let total=0;

regioes.forEach(r=>{

total += r.valor;

});

return total;

}

// =============================

function totalDocas(){

let total=0;

regioes.forEach(r=>{

if(r.doca)
total++;

});

return total;

}

// =============================

function alterar(indice,valor){

regioes[indice].valor += valor;

if(regioes[indice].valor<0)
regioes[indice].valor=0;

render();

}

// =============================

function toggleDoca(indice){

regioes[indice].doca=!regioes[indice].doca;

render();

}

// =============================

function render(){

salvar();
  
atualizarDashboard();

document.getElementById("totalPallets").innerHTML=totalPaletes();

document.getElementById("docasAtivas").innerHTML=totalDocas();

const div=document.getElementById("regions");

div.innerHTML="";

regioes.forEach((r,i)=>{

const card=document.createElement("div");

card.className=r.doca?"card emdoca":"card";

card.style.borderLeftColor=r.cor;

card.innerHTML=`

<div class="topo">

<div class="nome">

${r.nome} ${r.codigo!=""?"- "+r.codigo:""}

</div>

<div class="valor">

${r.valor}

</div>

</div>

<div class="botoes">

<button class="mais" onclick="alterar(${i},1)">+1</button>

<button class="mais" onclick="alterar(${i},5)">+5</button>

<button class="mais" onclick="alterar(${i},10)">+10</button>

<button class="menos" onclick="alterar(${i},-1)">-1</button>

<button class="menos" onclick="alterar(${i},-5)">-5</button>

<button class="menos" onclick="alterar(${i},-10)">-10</button>

</div>

<button
class="doca"
onclick="toggleDoca(${i})">

${r.doca?"🚛 EM DOCA":"⛔ FORA DA DOCA"}

</button>

`;

div.appendChild(card);

});

}// =====================================================
// LH CONTROL V4.0.0
// APP.JS - PARTE 2
// =====================================================


// =============================
// GERAR RELATÓRIO
// =============================

function gerarRelatorio(){

let texto="";

let total=0;

let emDoca=[];


regioes.forEach(r=>{

total += r.valor;


// Mantém todos os destinos no relatório

texto += `${r.nome}${r.codigo ? " – "+r.codigo : ""}: ${r.valor}\n`;


// Lista somente quem está em doca

if(r.doca){

emDoca.push(r.nome);

}

});


texto += `\nTotal de paletes: ${total}`;


if(emDoca.length>0){

texto += `\n\n🚚 Em doca: ${emDoca.join(", ")}`;

}


document.getElementById("relatorio").value = texto;


}


// =============================
// COPIAR RELATÓRIO
// =============================

function copiarRelatorio(){

const campo =
document.getElementById("relatorio");


campo.select();

campo.setSelectionRange(0,99999);


navigator.clipboard.writeText(campo.value);


alert("Relatório copiado!");

}


// =============================
// COMPARTILHAR WHATSAPP
// =============================

function compartilharWhatsapp(){

const texto =
document.getElementById("relatorio").value;


if(!texto){

alert("Gere o relatório primeiro.");

return;

}


const mensagem =
encodeURIComponent(texto);


window.open(
`https://wa.me/?text=${mensagem}`,
"_blank"
);


}


// =============================
// RESETAR SISTEMA
// =============================

function resetarTudo(){


const confirmar =
confirm(
"Deseja zerar todos os paletes?"
);


if(!confirmar)
return;


regioes.forEach(r=>{


r.valor=0;

r.doca=false;


});


document.getElementById("relatorio").value="";


render();


}
document.addEventListener(
"DOMContentLoaded",
()=>{

    iniciarStage();

});


// =============================
// INICIAR SISTEMA
// =============================

render();

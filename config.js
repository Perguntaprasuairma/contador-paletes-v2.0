/* ==========================================
   LH CONTROL V4.2
   CONFIG.JS
========================================== */


const APP = {

    nome:"LH Control",

    versao:"4.2.0",

    hub:"Londrina",

    totalDocas:6,

    limitePadraoCarreta:24,

    storage:{

        stage:"LH_STAGE",

        docas:"LH_DOCAS",

        historico:"LH_HISTORICO",

        configuracoes:"LH_CONFIG"

    }

};





const REGIOES = [


{
id:1,
nome:"Rio de Janeiro",
codigo:"RJ01",
cor:"#9E9E9E",
valor:0,
prioridade:false
},


{
id:2,
nome:"Santana",
codigo:"SP0",
cor:"#1976D2",
valor:0,
prioridade:false
},


{
id:3,
nome:"Simões Filho",
codigo:"BA",
cor:"#00BCD4",
valor:0,
prioridade:false
},


{
id:4,
nome:"Betim",
codigo:"MG",
cor:"#33691E",
valor:0,
prioridade:false
},


{
id:5,
nome:"Curitiba",
codigo:"PR",
cor:"#43A047",
valor:0,
prioridade:false
},


{
id:6,
nome:"Cravinhos",
codigo:"SP05",
cor:"#000000",
valor:0,
prioridade:true
},


{
id:7,
nome:"Jaboatão dos Guararapes",
codigo:"",
cor:"#8E24AA",
valor:0,
prioridade:false
},


{
id:8,
nome:"Louveira",
codigo:"SP07",
cor:"#795548",
valor:0,
prioridade:false
},


{
id:9,
nome:"Gravataí",
codigo:"RS",
cor:"#FDD835",
valor:0,
prioridade:false
},


{
id:10,
nome:"Goiânia",
codigo:"GO02",
cor:"#FB8C00",
valor:0,
prioridade:true
}


];






const DOCAS = [];


for(let i = 1; i <= APP.totalDocas; i++){


DOCAS.push({

numero:i,

ocupada:false,

regiao:null,

motorista:"",

placa:"",

id:"",

entrada:null,

paletes:0

});


}






const ESTATISTICAS = {


carretasHoje:0,


paletesExpedidos:0,


tempoMedio:0,


ultimaAtualizacao:null


};

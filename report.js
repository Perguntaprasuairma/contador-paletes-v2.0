/* ==========================================
   LH CONTROL V4.2
   reports.js
========================================== */


function gerarRelatorio(){


    const agora =
    new Date().toLocaleString("pt-BR");



    let texto = "";



    texto +=
`🚚 LH CONTROL - ${APP.hub}

📅 ${agora}

`;



    texto +=
`========================
📦 STATUS DO STAGE
========================

`;




    let total = 0;



    stage.forEach(regiao=>{


        if(regiao.valor > 0){


            texto +=
`${regiao.nome} - ${regiao.codigo}: ${regiao.valor}
`;


            total += regiao.valor;


        }


    });




    texto +=
`
TOTAL STAGE: ${total} paletes

`;





    texto +=
`========================
🚛 STATUS DAS DOCAS
========================

`;




    const docasAtivas =
    docas.filter(

        d=>d.ocupada

    );





    if(docasAtivas.length === 0){


        texto +=
        "Nenhuma carreta em doca\n";


    }
    else{



        docasAtivas.forEach(d=>{


            texto +=
`
Doca ${d.numero}

Destino: ${d.regiao}

Motorista: ${d.motorista}

Placa: ${d.placa}

Paletes: ${d.paletes}

`;



        });



    }







    texto +=
`
========================
🚨 PRIORIDADES
========================

`;





    const prioridades =
    stage.filter(

        r=>r.prioridade && r.valor > 0

    );





    if(prioridades.length === 0){


        texto +=
        "Sem prioridades\n";


    }
    else{


        prioridades.forEach(p=>{


            texto +=
`${p.nome}: ${p.valor} paletes

`;

        });


    }







    texto +=
`
========================
📌 OBSERVAÇÃO

`;



    texto +=
"Operação acompanhada pelo LH Control V4.2";




    document.getElementById(
        "relatorio"
    ).value = texto;



    return texto;



}









function copiarRelatorio(){



    const campo =
    document.getElementById(
        "relatorio"
    );



    if(!campo.value){


        gerarRelatorio();


    }





    navigator.clipboard.writeText(

        campo.value

    );



    alert(
    "Relatório copiado!"
    );



}









function compartilharWhatsapp(){



    const campo =
    document.getElementById(
        "relatorio"
    );




    if(!campo.value){


        gerarRelatorio();


    }





    const mensagem =
    encodeURIComponent(

        campo.value

    );





    window.open(

        "https://wa.me/?text=" + mensagem,

        "_blank"

    );



}

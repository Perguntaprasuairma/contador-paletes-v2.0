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


    mostrarHistorico();



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



}

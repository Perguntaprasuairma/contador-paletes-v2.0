/* ==========================================
   LH CONTROL V4.2
   app.js
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    iniciarStage();


    console.log(
        "✅ Sistema pronto"
    );


});





function resetarTudo(){


    const confirmar =
    confirm(
        "Deseja apagar todos os dados?"
    );



    if(!confirmar){

        return;

    }



    Storage.limparTudo();


    location.reload();


}

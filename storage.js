/* ==========================================
   LH CONTROL V4.2
   storage.js
========================================== */


const Storage = {


    carregarStage(){

        const dados = localStorage.getItem(
            APP.storage.stage
        );


        if(!dados){

            return JSON.parse(
                JSON.stringify(REGIOES)
            );

        }


        return JSON.parse(dados);

    },





    salvarStage(stage){

        localStorage.setItem(

            APP.storage.stage,

            JSON.stringify(stage)

        );

    },






    carregarDocas(){


        const dados = localStorage.getItem(

            APP.storage.docas

        );


        if(!dados){

            return JSON.parse(

                JSON.stringify(DOCAS)

            );

        }


        return JSON.parse(dados);


    },






    salvarDocas(docas){


        localStorage.setItem(

            APP.storage.docas,

            JSON.stringify(docas)

        );


    },







    carregarHistorico(){


        const dados = localStorage.getItem(

            APP.storage.historico

        );


        if(!dados){

            return [];

        }


        return JSON.parse(dados);


    },








    adicionarHistorico(registro){


        let historico = this.carregarHistorico();


        historico.unshift(registro);



        localStorage.setItem(

            APP.storage.historico,

            JSON.stringify(historico)

        );


    },








    salvarConfiguracoes(config){


        localStorage.setItem(

            APP.storage.configuracoes,

            JSON.stringify(config)

        );


    },








    carregarConfiguracoes(){


        const dados = localStorage.getItem(

            APP.storage.configuracoes

        );



        if(!dados){

            return {};

        }



        return JSON.parse(dados);



    },









    limparTudo(){


        localStorage.removeItem(

            APP.storage.stage

        );


        localStorage.removeItem(

            APP.storage.docas

        );


        localStorage.removeItem(

            APP.storage.historico

        );


        localStorage.removeItem(

            APP.storage.configuracoes

        );


    }



};

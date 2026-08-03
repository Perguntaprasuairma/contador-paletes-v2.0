const HISTORY_KEY = "LH_HISTORY";

function salvarHistorico(item){

    let lista =
    JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

    lista.unshift(item);

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(lista)
    );

}

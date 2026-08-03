
const STORAGE_KEY = "LHCONTROL_V4";

function carregarDados(){

    const dados = localStorage.getItem(STORAGE_KEY);

    return dados ? JSON.parse(dados) : [];

}

function salvarDados(dados){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dados)
    );

}

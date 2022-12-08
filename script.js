const jogador = document.querySelector(".jogador");

let selecionar;
let player = "X";

let posicao = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function init() {
    selecionar = [];

    jogador.innerHTML = `JOGADOR DA VEZ: ${player}`;

    document.querySelectorAll(".jogo button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selecionar[index] = player;

    setTimeout(() => {
        check();
    }, [100]);

    player = player === "X" ? "O" : "X";
    jogador.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
    let ultimaJogada = player === "X" ? "O" : "X";

    const items = selecionar
        .map((item, i) => [item, i])
        .filter((item) => item[0] === ultimaJogada)
        .map((item) => item[1]);
        
    for (pos of posicao) {
        if (pos.every((item) => items.includes(item))){
            alert("O JOGADOR ", ultimaJogada, "GANHOU!");
            init();
            return;
        }
    }

    if (selecionar.filter((item) => item).length === 9){
        alert("ESTE JOGO DEU VELHA!!");
        init();
        return;
    }
}
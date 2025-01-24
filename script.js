

function escolhaComputador() {
    const escolhas = ["pedra", "papel", "tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return escolhas[indiceAleatorio];
}

function verificarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return "Empate!";
    }
    if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        return "Você venceu!";
    } else {
        return "Você perdeu!";
    }
}

document.getElementById("pedra").addEventListener("click", function() {
    const escolhaUsuario = "pedra";
    const escolhaDoComputador = escolhaComputador();
    const resultado = verificarVencedor(escolhaUsuario, escolhaDoComputador);
    exibirResultado(escolhaUsuario, escolhaDoComputador, resultado);
});

document.getElementById("papel").addEventListener("click", function() {
    const escolhaUsuario = "papel";
    const escolhaDoComputador = escolhaComputador();
    const resultado = verificarVencedor(escolhaUsuario, escolhaDoComputador);
    exibirResultado(escolhaUsuario, escolhaDoComputador, resultado);
});

document.getElementById("tesoura").addEventListener("click", function() {
    const escolhaUsuario = "tesoura";
    const escolhaDoComputador = escolhaComputador();
    const resultado = verificarVencedor(escolhaUsuario, escolhaDoComputador);
    exibirResultado(escolhaUsuario, escolhaDoComputador, resultado);
});

function exibirResultado(escolhaUsuario, escolhaDoComputador, resultado) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Você escolheu: ${escolhaUsuario}<br>Computador escolheu: ${escolhaDoComputador}<br>Resultado: ${resultado}`;

    if (resultado === "Empate!") {
        resultadoElement.classList = "result empate";
    } else if (resultado === "Você venceu!") {
        resultadoElement.classList = "result vitoria";
    } else {
        resultadoElement.classList = "result derrota";
    }
}
// Função para calcular e exibir tabuadas
function calcularTabuada(operacao, numero) {
    const tabuada = document.querySelector(".tabuada");
    tabuada.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        //esse de baixo vai mostrar o resultado mas irei ultilizar Lcs que seria laf
        let laf;
        switch (operacao) {
            case 'multiplicar':
                laf = `${i} x ${numero} = ${i * Number(numero)}`;
                break;
            case 'somar':
                laf = `${i} + ${numero} = ${i + Number(numero)}`;
                break;
            case 'subtrair':
                laf = `${numero} - ${i} = ${Number(numero) - i}`;
                break;
            case 'dividir':
                laf = `${numero} / ${i} = ${Number(numero) / i}`;
                break;
            default:
                laf = "Operação inválida";
        }
        const resultadoElement = document.createElement("p");
        resultadoElement.innerText = laf;
        tabuada.appendChild(resultadoElement);
    }
}

// Event listener para os botões de operação
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const operacaoSelecionada = button.textContent.toLowerCase();
        const numero = document.querySelector("div.container input").value;
        if (operacaoSelecionada === 'calcular') {
            return; // Se for o botão 'Calcular', não faz nada
        }
        calcularTabuada(operacaoSelecionada, numero);
    });
});

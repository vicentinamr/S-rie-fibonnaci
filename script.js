function gerarFibonacci() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.textContent = "Por favor, insira um número válido maior que zero.";
        return;
    }

    let serie = [0, 1];
    for (let i = 2; i < quantidade; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    resultadoDiv.textContent = `Série de Fibonacci com ${quantidade} elementos: ${serie.slice(0, quantidade).join(', ')}`;
}
function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagemErro = document.getElementById('mensagemErro');

    if (isNaN(numero) || numero < 0) {
        mensagemErro.textContent = 'Por favor, digite um número inteiro positivo ou zero.';
        return;
    }

    mensagemErro.textContent = '';

    const tabuada = document.getElementById('tabuada');
    tabuada.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = `<tr><td>${numero} x ${i}</td><td>=</td><td>${resultado}</td></tr>`;

        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = linha;
        tabuada.appendChild(novaLinha);
    }
}

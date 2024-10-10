function iniciarContagem(elemento, alvo) {
    let numero = 0;
    const incremento = Math.ceil(alvo / 150); // Incremento para que o número chegue a 150

    const interval = setInterval(() => {
        numero += incremento * 2;
        if (numero >= alvo) {
            numero = alvo; // Garante que não ultrapasse
            clearInterval(interval); // Para o intervalo
        }
        elemento.textContent = numero + "+";
    }, 20); // A cada 20 milissegundos
}
const codigos = document.querySelectorAll(".codigo");

// Foca no primeiro input ao carregar
codigos[0].focus();

// Loop para cada input
codigos.forEach((codigo, idx) => {
    codigo.addEventListener("keydown", (e) => {
        // Se for número entre 0 e 9
        if (e.key >= 0 && e.key <= 9) {
            codigos[idx].value = "";
            // Avança para o próximo input
            setTimeout(() => codigos[idx + 1]?.focus(), 10);
        }
        // Se for backspace
        else if (e.key === "Backspace") {
            // Volta para o input anterior
            setTimeout(() => codigos[idx - 1]?.focus(), 10);
        }
    });
});

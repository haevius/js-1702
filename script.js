document.addEventListener("DOMContentLoaded", () => {
    let current = "", prev = "", op = "";
    const display = document.getElementById("display");

    // affiche correctement 
    const update = () => display.textContent = current "0";

    // pour écrire les chiffres
    document.querySelectorAll(".number").forEach(btn =>
        btn.onclick = () => (current += btn.textContent, update()));

    // pour les opérateurs
    document.querySelectorAll(".operator").forEach(btn =>
        btn.onclick = () => (prev = current, current = "", op = btn.textContent));

    // change le signe du nombre
    document.getElementById("toggle-sign").onclick = () =>
        (current = current ? -current + "" : "", update());

    // réinitialise la calculatrice / remets à 0 
    document.getElementById("clear").onclick = () =>
        (current = prev = op = "", update());

    // montre le résultat avec = 
    document.getElementById("equal").onclick = () => {
        if (prev && current && op) {
            current = eval(prev + op + current) + "";
            prev = op = "";
            update();
        }
    };
});

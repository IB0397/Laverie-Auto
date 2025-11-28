function startWashingMachine() {
    const machine = document.getElementById("machineSelect").value;
    const mode = document.getElementById("washMode").value;
    const payment = document.getElementById("paymentSelect").value;
    const result = document.getElementById("washResult");

    if (!machine || !mode || !payment) {
        result.innerHTML = "⚠️ Veuillez remplir toutes les options.";
        return;
    }

    let duration = 20;
    let price = 50000;

    if (mode === "rapide") duration = 15;
    if (mode === "normal") duration = 20;
    if (mode === "intensif") duration = 30;

    result.innerHTML =
        `✔ Machine lancée<br>🕒 Durée : ${duration} min<br💰 Prix : ${price} GNF<br>💳 Paiement : ${payment}`;
}

function startDryer() {
    const dryTime = document.getElementById("dryTime").value;
    const payment = document.getElementById("paymentDryer").value;
    const result = document.getElementById("dryerResult");

    if (!dryTime || !payment) {
        result.innerHTML = "⚠️ Veuillez remplir toutes les options.";
        return;
    }

    const price = 20000;

    result.innerHTML =
        `✔ Séchoir lancé<br>🔥 Temps : ${dryTime} min<br>💰 Prix : ${price} GNF<br>💳 Paiement : ${payment}`;
}

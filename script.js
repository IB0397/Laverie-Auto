function openWasherModal() {
    document.getElementById("washerModal").style.display = "flex";
}
function closeWasherModal() {
    document.getElementById("washerModal").style.display = "none";
}

function openDryerModal() {
    document.getElementById("dryerModal").style.display = "flex";
}
function closeDryerModal() {
    document.getElementById("dryerModal").style.display = "none";
}


// MACHINE À LAVER
function startWasher() {
    let mode = document.getElementById("washMode").value;
    let pay = document.getElementById("paymentWasher").value;

    let duration = mode === "rapide" ? 15 :
                   mode === "normal" ? 20 : 30;

    let status = document.getElementById("washerStatus");
    status.innerHTML = "⏳ Machine en cours…";

    startCountdown(duration, status);
}


// SÉCHOIR
function startDryer() {
    let dryTime = parseInt(document.getElementById("dryTime").value);
    let pay = document.getElementById("paymentDryer").value;

    let status = document.getElementById("dryerStatus");
    status.innerHTML = "🔥 Séchage en cours…";

    startCountdown(dryTime, status);
}


// COMPTE À REBOURS GLOBAL
function startCountdown(minutes, element) {
    let seconds = minutes * 60;

    let timer = setInterval(() => {

        let m = Math.floor(seconds / 60);
        let s = seconds % 60;

        element.innerHTML = `🕒 Temps restant : ${m} min ${s} s`;

        if (seconds <= 0) {
            clearInterval(timer);
            element.innerHTML = "✔ Terminé ! Vos vêtements sont prêts.";
        }

        seconds--;
    }, 1000);
}

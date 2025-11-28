let currentLaundry = "";

function changeLaundry() {
    const select = document.getElementById("laundrySelect");
    currentLaundry = select.value;
    const display = document.getElementById("currentLaundry");
    if(currentLaundry === "") {
        display.innerHTML = "Aucune laverie sélectionnée";
    } else {
        const text = select.options[select.selectedIndex].text;
        display.innerHTML = `💡 Laverie sélectionnée : ${text}`;
        speak(`Vous êtes maintenant dans la laverie ${text}`);
    }
}

function speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'fr-FR';
    speechSynthesis.speak(utter);
}

// Modal washer
function openWasherModal() { document.getElementById("washerModal").style.display="flex"; }
function closeWasherModal() { document.getElementById("washerModal").style.display="none"; }

// Modal dryer
function openDryerModal() { document.getElementById("dryerModal").style.display="flex"; }
function closeDryerModal() { document.getElementById("dryerModal").style.display="none"; }

// START WASHER
function startWasher() {
    if(!currentLaundry) { 
        document.getElementById("washerStatus").innerHTML="⚠️ Sélectionnez une laverie."; 
        return; 
    }
    const mode = document.getElementById("washMode").value;
    const pay = document.getElementById("paymentWasher").value;
    let duration = mode==="rapide"?15:mode==="normal"?20:30;
    let status = document.getElementById("washerStatus");
    status.innerHTML = `⏳ Lavage en cours à ${currentLaundry} — Mode ${mode} — Paiement : ${pay}`;
    startCountdown(duration, status);
}

// START DRYER
function startDryer() {
    if(!currentLaundry) { 
        document.getElementById("dryerStatus").innerHTML="⚠️ Sélectionnez une laverie."; 
        return; 
    }
    const dryTime = parseInt(document.getElementById("dryTime").value);
    const pay = document.getElementById("paymentDryer").value;
    let status = document.getElementById("dryerStatus");
    status.innerHTML = `🔥 Séchage en cours à ${currentLaundry} — Temps ${dryTime} min — Paiement : ${pay}`;
    startCountdown(dryTime, status);
}

// COMPTE À REBOURS
function startCountdown(minutes, element) {
    let seconds = minutes*60;
    let timer = setInterval(()=>{
        let m = Math.floor(seconds/60);
        let s = seconds%60;
        element.innerHTML=`🕒 Temps restant : ${m} min ${s} s`;
        if(seconds<=0){
            clearInterval(timer);
            element.innerHTML="✔ Cycle terminé ! Vos vêtements sont prêts.";
            speak("Cycle terminé !");
        }
        seconds--;
    },1000);
}

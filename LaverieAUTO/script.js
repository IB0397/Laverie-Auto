const machines = document.querySelectorAll('.machine');
let selectedMachine = null;

const selectedMachineSpan = document.getElementById('selected-machine');
const payButton = document.getElementById('pay-button');
const screen = document.getElementById('screen');

// Fonction de voix
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  speechSynthesis.speak(utterance);
}

// Accueil vocal
window.onload = () => {
  speak("Bienvenue dans votre laverie automatique interactive. Sélectionnez une machine pour commencer.");
};

// Sélection d'une machine
machines.forEach(m => {
  const btn = m.querySelector('.select-btn');
  const status = m.querySelector('.status');

  btn.addEventListener('click', () => {
    if(status.textContent !== "Prête") {
      screen.textContent = "Machine non disponible.";
      speak("Machine non disponible.");
      return;
    }
    selectedMachine = m;
    selectedMachineSpan.textContent = `${m.dataset.id} (${m.dataset.type})`;
    payButton.disabled = false;
    screen.textContent = `Machine ${m.dataset.id} sélectionnée. Veuillez payer pour lancer.`;
    speak(`Machine ${m.dataset.id} sélectionnée. Veuillez payer pour lancer.`);
  });
});

// Paiement & lancement
payButton.addEventListener('click', () => {
  if(!selectedMachine) return;

  const m = selectedMachine;
  const status = m.querySelector('.status');

  payButton.disabled = true;
  selectedMachine = null;
  selectedMachineSpan.textContent = "Aucune";

  status.textContent = "En cours";
  screen.textContent = `La machine ${m.dataset.id} démarre...`;
  speak(`Paiement reçu. La machine ${m.dataset.id} démarre.`);

  const duration = m.dataset.type === 'washer' ? 15000 : 10000;

  setTimeout(() => {
    status.textContent = "Prête";
    screen.textContent = `Cycle terminé pour la machine ${m.dataset.id}.`;
    speak(`Cycle terminé pour la machine ${m.dataset.id}.`);
  }, duration);
});

// Données simulées : plusieurs laveries avec machines
const laundries = [
  {
    id:'kankan', name:'Laverie Kankan', machines:[
      {id:'W1', type:'washer', price:50000, durationDefault:20, status:'ready', currentEnd:null},
      {id:'W2', type:'washer', price:50000, durationDefault:20, status:'ready', currentEnd:null},
      {id:'D1', type:'dryer', price:20000, durationDefault:10, status:'ready', currentEnd:null},
    ]
  },
  {
    id:'conakry', name:'Laverie Conakry', machines:[
      {id:'W1', type:'washer', price:50000, durationDefault:20, status:'ready', currentEnd:null},
      {id:'D1', type:'dryer', price:20000, durationDefault:15, status:'ready', currentEnd:null},
    ]
  }
];

const laundrySelect = document.getElementById('laundrySelect');
const machinesSection = document.getElementById('machinesSection');
const machinesList = document.getElementById('machinesList');
const controlPanel = document.getElementById('controlPanel');
const controlArea = document.getElementById('controlArea');

let currentLaundry = null;
let currentMachine = null;

// --- Initialisation ---
laundries.forEach(l => {
  const opt = document.createElement('option'); opt.value=l.id; opt.textContent=l.name;
  laundrySelect.appendChild(opt);
});

laundrySelect.onchange = () => {
  const selectedId = laundrySelect.value;
  currentLaundry = laundries.find(l => l.id===selectedId);
  displayMachines();
};

// --- Affiche les machines ---
function displayMachines(){
  if(!currentLaundry) return;
  machinesSection.style.display='block';
  machinesList.innerHTML='';
  currentLaundry.machines.forEach(m=>{
    const card = document.createElement('div'); card.className='machine-card';
    const img = document.createElement('img');
    img.src = m.type==='washer'?'assets/washer.png':'assets/dryer.png';
    card.appendChild(img);
    const title = document.createElement('div'); title.textContent=`${m.id} — ${m.type}`; card.appendChild(title);
    const status = document.createElement('div'); status.className=m.status==='ready'?'status-ready':'status-running';
    status.textContent = m.status==='ready'?'PRÊTE':'EN COURS'; card.appendChild(status);
    const btn = document.createElement('button'); btn.textContent='Sélectionner';
    btn.onclick = () => selectMachine(m);
    card.appendChild(btn);
    machinesList.appendChild(card);
  });
}

// --- Sélection machine ---
function selectMachine(m){
  currentMachine = m;
  controlPanel.style.display='block';
  controlArea.innerHTML='';

  const title = document.createElement('h3'); title.textContent=`Machine ${m.id} — ${m.type}`;
  controlArea.appendChild(title);

  // Mode de lavage
  if(m.type==='washer'){
    const label = document.createElement('label'); label.textContent='Mode de lavage :';
    const select = document.createElement('select'); select.id='washMode';
    select.innerHTML=`<option value="rapide">Rapide (15min)</option>
                      <option value="normal">Normal (20min)</option>
                      <option value="intensif">Intensif (30min)</option>`;
    controlArea.appendChild(label); controlArea.appendChild(select);
  }

  // Temps séchage
  if(m.type==='dryer'){
    const label = document.createElement('label'); label.textContent='Temps de séchage :';
    const select = document.createElement('select'); select.id='dryTime';
    select.innerHTML=`<option value="10">10 min</option><option value="15">15 min</option><option value="20">20 min</option>`;
    controlArea.appendChild(label); controlArea.appendChild(select);
  }

  // Paiement
  const labelPay = document.createElement('label'); labelPay.textContent='Moyen de paiement :';
  const paySelect = document.createElement('select'); paySelect.id='payment';
  paySelect.innerHTML=`<option value="orange">Orange Money</option>
                       <option value="mtn">MTN Money</option>
                       <option value="visa">Carte VISA</option>
                       <option value="cash">Espèces</option>`;
  controlArea.appendChild(labelPay); controlArea.appendChild(paySelect);

  const btnStart = document.createElement('button'); btnStart.textContent='Payer & Lancer';
  btnStart.onclick = startMachine; controlArea.appendChild(btnStart);

  const statusDiv = document.createElement('div'); statusDiv.id='machineTimer'; statusDiv.style.marginTop='10px';
  controlArea.appendChild(statusDiv);
}

// --- Lancer machine ---
function startMachine(){
  if(!currentMachine) return;
  const payment = document.getElementById('payment').value;
  if(!payment) return alert('Choisissez un moyen de paiement !');

  let duration = currentMachine.durationDefault;
  if(currentMachine.type==='washer'){
    const mode = document.getElementById('washMode').value;
    if(mode==='rapide') duration=15;
    if(mode==='normal') duration=20;
    if(mode==='intensif') duration=30;
  } else {
    const time = parseInt(document.getElementById('dryTime').value);
    if(time) duration=time;
  }

  alert(`Paiement simulé : ${currentMachine.price} GNF avec ${payment}. Machine lancée pour ${duration} min.`);

  currentMachine.status='running';
  displayMachines();
  startCountdown(duration, document.getElementById('machineTimer'), ()=>{
    currentMachine.status='ready';
    displayMachines();
  });
}

// --- Compte à rebours ---
function startCountdown(minutes, element, callback){
  let seconds=minutes*60;
  const interval=setInterval(()=>{
    const m=Math.floor(seconds/60), s=seconds%60;
    element.textContent=`🕒 Temps restant : ${m}m ${s}s`;
    if(seconds<=0){
      clearInterval(interval);
      element.textContent='✔ Terminé !';
      if(callback) callback();
    }
    seconds--;
  },1000);
}

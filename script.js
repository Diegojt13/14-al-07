const openBtn = document.getElementById('openBtn');
const letterBody = document.getElementById('letterBody');
const dayLabel = document.getElementById('dayLabel');
const dayMood = document.getElementById('dayMood');
const progressFill = document.getElementById('progressFill');
const special = document.getElementById('special');

const letters = [
  "Mi amor, hoy empiezo este detalle con mucha ilusión...",
  "Amor mío, hay algo en ti que me encanta y no siempre sé cómo explicarlo...",
  "Mi niña bonita, a veces apareces en mi mente sin avisar...",
  "Amor, contigo aprendí a querer de una forma más bonita...",
  "Mi cielo, me haces falta incluso cuando estás cerca...",
  "Mi amor hermoso, hay momentos contigo que se quedan grabados...",
  "Mi niña, quiero decirte algo que siento desde hace rato...",
  "Amor de mi vida, si alguna vez te has preguntado qué es lo que más valoro de ti...",
  "Mi corazón, hoy pensé en lo especial que se volvió mi rutina desde que estás...",
  "Amor bonito, es increíble cómo una sola persona puede cambiar tanto la manera en que uno siente...",
  "Mi princesa, quiero aprovechar esta carta para agradecerte...",
  "Mi amor, cada vez que pienso en ti, me doy cuenta de que te quiero de una forma muy bonita...",
  "Mi niña hermosa, ya casi llegamos al gran día...",
  "Hoy es nuestro gran día, y esta carta lleva todo lo que no siempre sé decir con palabras."
];

function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function getDayIndex() {
  const start = new Date(2026, 5, 24); // 24/06/2026
  const today = new Date();
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diff = Math.floor((current - start) / 86400000);
  return Math.max(0, Math.min(diff, 13));
}

function saveState() {
  localStorage.setItem('lastSeenDate', dateKey());
  localStorage.setItem('currentDay', String(currentDay));
}

function loadState() {
  const storedDate = localStorage.getItem('lastSeenDate');
  const storedDay = Number(localStorage.getItem('currentDay'));

  if (storedDate === dateKey() && !Number.isNaN(storedDay)) {
    return storedDay;
  }

  const nextDay = getDayIndex();
  localStorage.setItem('lastSeenDate', dateKey());
  localStorage.setItem('currentDay', String(nextDay));
  return nextDay;
}

function renderDay(index) {
  const day = index + 1;
  dayLabel.textContent = `Día ${day} de 14`;
  dayMood.textContent = index < 13 ? "Una carta más para acercarnos" : "Ya llegó el gran día";
  progressFill.style.width = `${(day / 14) * 100}%`;
  letterBody.innerHTML = `<p>${letters[index]}</p>`;
  if (index === 13) special.classList.add('show');
  else special.classList.remove('show');
}

let currentDay = loadState();

openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('open');
  if (openBtn.classList.contains('open')) {
    renderDay(currentDay);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentDay < 13) {
    currentDay++;
    saveState();
    renderDay(currentDay);
  }
  if (e.key === 'ArrowLeft' && currentDay > 0) {
    currentDay--;
    saveState();
    renderDay(currentDay);
  }
});

renderDay(currentDay);

const openBtn = document.getElementById('openBtn');
const letterBody = document.getElementById('letterBody');
const dayLabel = document.getElementById('dayLabel');
const dayMood = document.getElementById('dayMood');
const progressFill = document.getElementById('progressFill');
const special = document.getElementById('special');
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');
const hearts = document.getElementById('hearts');

const letters = [
  "Mi amor, hoy empiezo este detalle con mucha ilusión, porque no quería dejar pasar la oportunidad de recordarte lo importante que eres para mí. Eres una persona que me hace sentir tranquilo, feliz y afortunado, y cada día contigo confirma que lo bonito sí existe.",
  "Amor mío, hay algo en ti que me encanta y no siempre sé cómo explicarlo. No es solo tu belleza ni solo tu forma de hablar; es todo junto, porque tú tienes una magia que me atrapa sin que yo haga nada para evitarlo.",
  "Mi niña bonita, a veces apareces en mi mente sin avisar, y cuando eso pasa, casi siempre me sacas una sonrisa. Tienes esa forma tan especial de quedarte en los pensamientos de uno, como si fueras imposible de olvidar.",
  "Amor, contigo aprendí a querer de una forma más bonita. Antes de ti, muchas cosas eran normales; contigo, todo se volvió más especial, porque hasta los días comunes tienen algo diferente cuando sé que existes en mi vida.",
  "Mi cielo, me haces falta incluso cuando estás cerca, porque me acostumbro rapidísimo a tu presencia y a todo lo que me haces sentir. Eres de esas personas que se vuelven necesarias sin darse cuenta, y eso para mí es algo demasiado lindo.",
  "Mi amor hermoso, hay momentos contigo que se quedan grabados sin esfuerzo, como si el corazón mismo los guardara por su cuenta. Todo lo que vivimos, aunque sea pequeño, termina teniendo un valor enorme para mí.",
  "Mi niña, quiero decirte algo que siento desde hace rato: tú tienes una manera preciosa de hacer que todo valga más. Más bonito, más profundo, más real. Y aunque a veces me cueste ponerlo en palabras, mi corazón sí entiende perfectamente lo que siente por ti.",
  "Amor de mi vida, si alguna vez te has preguntado qué es lo que más valoro de ti, la respuesta es sencilla: tu manera de ser. Detrás de tu belleza hay algo todavía más valioso, y es esa forma tan tuya de transmitir ternura, seguridad y alegría.",
  "Mi corazón, hoy pensé en lo especial que se volvió mi rutina desde que estás. No porque todo tenga que ser perfecto, sino porque tú le das una chispa distinta a mis días. Todo se siente mejor cuando sé que formas parte de mi historia.",
  "Amor bonito, es increíble cómo una sola persona puede llegar a cambiar tanto la manera en que uno siente. Tú lo hiciste conmigo. Llegaste y sin hacer ruido te fuiste metiendo en mis pensamientos, en mis días y en mi corazón.",
  "Mi princesa, quiero aprovechar esta carta para agradecerte por todo lo bonito que has sido conmigo. Por tu paciencia, por tu ternura, por tus palabras y por tu forma de hacer sentir querido a alguien. Eso vale muchísimo, y yo no lo olvido.",
  "Mi amor, cada vez que pienso en ti, me doy cuenta de que te quiero de una forma muy bonita. No apresurada, no superficial, no cualquiera. Te quiero de verdad, con calma, con emoción y con una sinceridad que me nace del alma.",
  "Mi niña hermosa, ya casi llegamos al gran día, y no quería dejar pasar esta carta sin decirte que me emociona muchísimo todo lo que hemos construido. Estos días han sido una forma linda de acercarme más a ti con cada palabra.",
  "Hoy es nuestro gran día, y esta carta lleva todo lo que no siempre sé decir con palabras. Gracias por acompañarme en estos 14 días y por hacer tan bonito este tiempo juntos."
];

const START = new Date(2026, 5, 24); // 24/06/2026
const END = new Date(2026, 6, 7);    // 07/07/2026

function localDateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function dateOnly(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function todayIndex() {
  const now = dateOnly(new Date());
  const diff = Math.floor((now - START) / 86400000);
  return Math.max(0, Math.min(diff, 13));
}

function loadDay() {
  const savedDate = localStorage.getItem('love_date');
  const savedDay = Number(localStorage.getItem('love_day'));
  const key = localDateKey();

  if (savedDate === key && Number.isInteger(savedDay)) {
    return savedDay;
  }

  const day = todayIndex();
  localStorage.setItem('love_date', key);
  localStorage.setItem('love_day', String(day));
  return day;
}

function saveDay(day) {
  localStorage.setItem('love_date', localDateKey());
  localStorage.setItem('love_day', String(day));
}

let currentDay = loadDay();

function renderDay(index) {
  const day = index + 1;
  dayLabel.textContent = `Día ${day} de 14`;
  dayMood.textContent = index < 13 ? "Una carta más para acercarnos" : "Ya llegó el gran día";
  progressFill.style.width = `${(day / 14) * 100}%`;
  letterBody.innerHTML = `<p>${letters[index]}</p>`;
  special.classList.toggle('show', index === 13);
}

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '♥';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (12 + Math.random() * 18) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 7) + 's';
  heart.style.opacity = (0.12 + Math.random() * 0.28).toFixed(2);
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 14000);
}

openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('open');
  if (openBtn.classList.contains('open')) {
    currentDay = loadDay();
    renderDay(currentDay);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentDay < 13) {
    currentDay++;
    saveDay(currentDay);
    renderDay(currentDay);
  }
  if (e.key === 'ArrowLeft' && currentDay > 0) {
    currentDay--;
    saveDay(currentDay);
    renderDay(currentDay);
  }
});

musicBtn?.addEventListener('click', async () => {
  try {
    await music.play();
    musicBtn.textContent = 'Música sonando ♥';
  } catch {
    musicBtn.textContent = 'No se pudo reproducir';
  }
});

setInterval(createHeart, 320);
renderDay(currentDay);

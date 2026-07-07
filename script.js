const openBtn = document.getElementById('openBtn');
const letterBody = document.getElementById('letterBody');
const dayLabel = document.getElementById('dayLabel');
const dayMood = document.getElementById('dayMood');
const progressFill = document.getElementById('progressFill');
const special = document.getElementById('special');
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');
const hearts = document.getElementById('hearts');
const letterKicker = document.getElementById('letterKicker');
const letterTitle = document.getElementById('letterTitle');
const dayBadge = document.getElementById('dayBadge');
const letter = document.getElementById('letter');

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
  `Mi amor Nataly,
Desde la primera vez que miramos más allá del horario y las tareas del trabajo supe que había algo distinto entre nosotros. Aquella noche en que salimos a tomar, reímos, bailamos y yo te canté "Un perro enamorado", no fue solo diversión: fue el inicio de una conexión que llegó sin filtros, como si ya nos conociéramos de antes. Todo fluyó tan natural y tan rápido que todavía me asombra cómo dos almas se encontraron en medio de una noche cualquiera y comenzaron a encajar.

Recuerdo con claridad el 27 de febrero, cuando terminamos la velada buscando un lugar para descansar. Esa noche en el hotel, entre nervios y miradas sinceras, sentí que algo importante empezaba. No fue necesario apresurarnos; más bien, fue el respeto y la ternura lo que nos selló. Tú, con tu calma, me enseñaste que la cercanía no siempre se mide en prisa sino en confianza. Y eso me hizo quererte aún más.

Poco después, el viaje a la finca el 7 de marzo confirmó lo que intuíamos: bastaba estar juntos para que todo tuviera sentido. La piscina vacía para nosotros dos, el sol, las conversaciones que parecían no tener fin… en cada gesto se fortaleció esa complicidad que apareció tan rápido pero que se siente tan verdadero. Fue allí, en ese espacio sencillo y nuestro, que tomé la decisión de arriesgarme y pedirte que fueras mi novia. Tu “sí” selló una promesa íntima: que podríamos construir algo real sin prisa, con mucha entrega.

Desde entonces hemos vivido momentos que prueban lo único de nuestra conexión: la risa cuando la moto se nos varó, las charlas profundas, el primer “te amo” entre helado y lágrimas en el centro comercial. Esos instantes confirman que lo nuestro no fue casualidad; fue un encuentro entre dos personas que supieron reconocer en el otro compañía, respeto y la voluntad de caminar juntos.

Nataly, lo más hermoso es que esa conexión rápida no fue superficial; vino con compromiso y dulzura. Me haces sentir comprendido y libre al mismo tiempo. Tu mirada me da paz, tu cercanía me inspira y tu apoyo me transforma. Tú te volviste mi motor sin que planeáramos nada grandioso: simplemente nos dejamos sentir y eso nos unió de manera profunda.

Hoy, al celebrar cuatro meses, quiero agradecerte por aceptar esa chispa que encendimos desde el inicio. Gracias por cada risa compartida, por tu paciencia y por creer en el camino que hemos decidido andar. Prometo cuidar la sinceridad que nos trajo hasta aquí: escuchar más, respetar tus tiempos, y proteger esa conexión especial que apareció sin barreras.

Quiero seguir sorprendiéndote, seguir construyendo recuerdos que confirmen lo que sentimos, y seguir dejando que esta conexión nos guíe. Te amo por lo que eres y por lo que somos cuando estamos juntos: dos personas que se encontraron rápido y supieron quedarse.`
];

const START = new Date(2026, 5, 24);
const LAST_INDEX = letters.length - 1;
let currentDay = 0;

/* Fecha sin hora para comparar días */
function dateOnly(d = new Date()) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/* Clave simple para localStorage */
function localDateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/* Día actual del ciclo */
function todayIndex() {
  const now = dateOnly(new Date());
  const diff = Math.floor((now - START) / 86400000);
  return Math.max(0, Math.min(diff, LAST_INDEX));
}

/* Carga el día guardado o calcula uno nuevo */
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

/* Guarda el día actual */
function saveDay(day) {
  localStorage.setItem('love_date', localDateKey());
  localStorage.setItem('love_day', String(day));
}

/* Renderiza toda la información del día */
function renderDay(index) {
  const day = index + 1;

  dayLabel.textContent = `Día ${day} de ${letters.length}`;
  dayMood.textContent = index < LAST_INDEX ? 'Una carta más para acercarnos' : 'Ya llegó el gran día';
  progressFill.style.width = `${(day / letters.length) * 100}%`;
  letterKicker.textContent = index < LAST_INDEX ? 'Carta de hoy' : 'Carta final';
  letterTitle.textContent = index < LAST_INDEX ? 'Para ti' : 'Lo más bonito';
  dayBadge.textContent = String(day).padStart(2, '0');

  letterBody.innerHTML = `<p>${letters[index].replace(/\n/g, '<br>')}</p>`;
  special.classList.toggle('show', index === LAST_INDEX);
}

/* Corazones flotando */
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

/* Abre/cierra carta */
openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('open');
  if (openBtn.classList.contains('open')) {
    currentDay = loadDay();
    renderDay(currentDay);
  }
});

/* Flechas para navegar */
document.addEventListener('keydown', (e) => {
  if (!openBtn.classList.contains('open')) return;

  if (e.key === 'ArrowRight' && currentDay < LAST_INDEX) {
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

/* Música final */
musicBtn?.addEventListener('click', async () => {
  try {
    await music.play();
    musicBtn.textContent = 'Música sonando ♥';
  } catch {
    musicBtn.textContent = 'No se pudo reproducir';
  }
});

setInterval(createHeart, 320);
currentDay = loadDay();
renderDay(currentDay);

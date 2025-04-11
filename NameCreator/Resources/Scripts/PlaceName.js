// Arrays for word parts based on gender
const prefixes = {
  oneWord: [
    'Bran', 'Tor', 'Dre', 'Kai', 'Vor', 'Lyn', 'Zan', 'Mar', 'Sol', 'Ryn',
  'Thal', 'Jor', 'Quen', 'Val', 'Fen', 'Kra', 'Dar', 'Lor', 'Nox', 'Tarn',
  'Gav', 'Har', 'Brek', 'Sty', 'Mek', 'Rov', 'Den', 'Kel', 'Rad', 'Xan',
  'Kyn', 'Van', 'Rol', 'Tyv', 'Gar', 'Zen', 'Yor', 'Rok', 'Dav', 'Tar',
  'Hal', 'Jer', 'Mal', 'Zor', 'Oth', 'Cray', 'Fal', 'Ron', 'Ryl', 'Nav',
  'Dray', 'Vek', 'Sal', 'Jax', 'Grav', 'Ryl', 'Kov', 'Brox', 'Tex', 'Yun',
  'Kev', 'Dev', 'Mor', 'Ran', 'Nir', 'Stran', 'Laz', 'Vir', 'Torv', 'Grek',
  'Trek', 'Bol', 'Mak', 'Xyl', 'Thyr', 'Jol', 'Uth', 'Ras', 'Wen', 'Zev',
  'Cren', 'Garn', 'Darv', 'Oren', 'Per', 'Thom', 'Cal', 'Kor', 'Vin', 'Ral',
  'Noj', 'Tarn', 'Varn', 'Ril', 'Zan', 'Fray', 'Drel', 'Harn', 'Jorn', 'Nol'
  ],
  twoWords: [
    'Sha', 'Lyn', 'Ara', 'Mei', 'Sai', 'Zhu', 'Fae', 'Rae', 'Noa', 'Ela',
  'Chi', 'Ira', 'Aya', 'Rue', 'Zia', 'Uma', 'Tia', 'Lia', 'Yue', 'Nia',
  'Sae', 'Kya', 'Vae', 'Min', 'Sui', 'Ela', 'Mio', 'Sia', 'Rei', 'Lua',
  'Ka', 'Lea', 'Ji', 'Dea', 'Rhi', 'Nya', 'Ina', 'Mya', 'Loa', 'Bae',
  'Dae', 'Fia', 'Li', 'Gia', 'Hae', 'Eri', 'Mai', 'Soi', 'Jae', 'Niu',
  'Lue', 'Zui', 'Yae', 'Rae', 'Lai', 'Poe', 'Qin', 'Rui', 'Tae', 'Hui',
  'Zi', 'Wei', 'Yu', 'Hei', 'Ami', 'Mi', 'Xi', 'Vi', 'Ni', 'Zi',
  'Ona', 'Rae', 'Tui', 'Ena', 'Yae', 'Aoi', 'Mea', 'Dei', 'Zoi', 'Qia',
  'Bei', 'Fei', 'Fai', 'Rai', 'Oli', 'Soi', 'Sei', 'Yin', 'Mie', 'Koi',
  'Eve', 'Lei', 'Jin', 'Luo', 'Oni', 'Iya', 'Sue', 'Pia', 'Rin', 'Gia'
  ]
};
const bases = {
  oneWord: [
    'durn', 'voro', 'karven', 'stral', 'temor', 'basto', 'grell', 'rano', 'jovar', 'karnen',
  'revin', 'toran', 'mirel', 'donak', 'hadril', 'xanor', 'calen', 'zorin', 'lestor', 'falren',
  'verin', 'keldor', 'rovan', 'jasper', 'mauron', 'dorel', 'varkin', 'dralen', 'peros', 'grivan',
  'silven', 'morak', 'venlor', 'halmar', 'trevon', 'kaspar', 'norell', 'darvos', 'fynel', 'loran',
  'zenik', 'brodan', 'velmor', 'telrik', 'raskol', 'talven', 'valor', 'torek', 'vornel', 'monrik',
  'kerros', 'zelrik', 'sarnel', 'bryden', 'dramor', 'julven', 'carven', 'navik', 'solnar', 'kavrel',
  'zenlor', 'kurnel', 'zanrek', 'vextor', 'roven', 'jarlen', 'merdon', 'hanor', 'dralen', 'korlen',
  'thorek', 'vorlin', 'ravik', 'maldor', 'grithen', 'sarvek', 'felran', 'tarnel', 'vordel', 'jalor',
  'selven', 'xerlen', 'drekon', 'harnel', 'javor', 'berlen', 'raxor', 'garlan', 'jernor', 'myrol',
  'korsel', 'venric', 'zolar', 'thorak', 'parven', 'yarnel', 'ferrek', 'traven', 'quinel', 'malven'
  ],
  twoWords: [
    'lara', 'serin', 'nova', 'vena', 'mariel', 'eluna', 'lyna', 'tessa', 'orina', 'kaela',
  'fiore', 'sylia', 'miren', 'anika', 'vaira', 'meira', 'lorie', 'darna', 'felia', 'nalin',
  'sonel', 'vessa', 'celia', 'aluna', 'kiren', 'valen', 'selin', 'tyria', 'riona', 'sariel',
  'melia', 'jurea', 'zarea', 'kasia', 'linel', 'monia', 'elari', 'zenya', 'renea', 'salin',
  'jovia', 'karin', 'lurea', 'thira', 'pirea', 'tenia', 'zoriel', 'finia', 'shara', 'quena',
  'lyriel', 'revia', 'morla', 'corin', 'naela', 'xelia', 'joren', 'eiryn', 'danea', 'vesryn',
  'alina', 'tayna', 'mirel', 'janea', 'solin', 'yarna', 'korra', 'malia', 'rivon', 'tarian',
  'anaya', 'seira', 'valin', 'nyara', 'evira', 'sorey', 'kelya', 'thyra', 'wena', 'yulin',
  'belra', 'ceria', 'zayna', 'yelka', 'vianel', 'ashla', 'kaela', 'dreia', 'mavyn', 'lorien',
  'sarev', 'talira', 'virel', 'ferna', 'zirel', 'zenia', 'mirey', 'nirel', 'rolia', 'salyn'
  ]
};

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a fantasy name
function generateFantasyName() {
  return getRandomElement(prefixes) + getRandomElement(bases);
}

// Function to update the displayed name
function generateAndShowName() {
  document.getElementById("nameDisplay").textContent = generateFantasyName();
}

// Event listener for the button
document
  .getElementById("generateButton")
  .addEventListener("click", generateAndShowName);

// event listener to auto generate name on load  
document.addEventListener("DOMContentLoaded", generateAndShowName);

//Added Radio Buttons
// Generate based on selected categories
function generateFantasyName() {
  const selectedPrefixes = [];
  const selectedBases = [];

  if (document.getElementById('oneWord').checked) {
      selectedPrefixes.push(...prefixes.oneWord);
      selectedBases.push(...bases.oneWord);
  }
  if (document.getElementById('twoWords').checked) {
      selectedPrefixes.push(...prefixes.twoWords);
      selectedBases.push(...bases.twoWords);
  }
  if (document.getElementById('neutral').checked) {
      selectedPrefixes.push(...prefixes.neutral);
      selectedBases.push(...bases.neutral);
  }

  // Fallback: if nothing is selected, default to all
  if (selectedPrefixes.length === 0 || selectedBases.length === 0) {
      selectedPrefixes.push(...prefixes.oneWord, ...prefixes.twoWords, ...prefixes.neutral);
      selectedBases.push(...bases.oneWord, ...bases.twoWords, ...bases.neutral);
  }

  const name = getRandomElement(selectedPrefixes) + getRandomElement(selectedBases);
  return name;
}

function generateAndShowName() {
  document.getElementById('nameDisplay').textContent = generateFantasyName();
}

document.getElementById('generateButton').addEventListener('click', generateAndShowName);

// Auto-generate on page load
document.addEventListener('DOMContentLoaded', generateAndShowName);
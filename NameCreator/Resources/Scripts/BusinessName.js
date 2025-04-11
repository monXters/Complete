// Arrays for word parts based on gender
const prefixes = {
  male: [
    'Thal', 'Dorn', 'Bald', 'Krag', 'Gor', 'Eld', 'Ragn', 'Tor', 'Varn', 'Zor',
    'Kael', 'Mal', 'Rhogar', 'Drak', 'Fen', 'Vor', 'Ulth', 'Grim', 'Brak', 'Dur',
    'Kel', 'Morn', 'Sarn', 'Vok', 'Zarn', 'Barak', 'Tharn', 'Rok', 'Drok', 'Orn',
    'Kaz', 'Thrak', 'Ulgar', 'Grel', 'Bran', 'Torv', 'Karn', 'Vul', 'Thok', 'Brog',
    'Zoth', 'Kar', 'Vol', 'Jarn', 'Droth', 'Skarn', 'Ruld', 'Galor', 'Rav', 'Harn',
    'Vald', 'Grond', 'Rhaz', 'Narn', 'Garn', 'Tal', 'Baldur', 'Grak', 'Nor', 'Vorin',
    'Durm', 'Morv', 'Ruldak', 'Varok', 'Zorak', 'Dornak', 'Gald', 'Ralk', 'Kroll',
    'Thol', 'Thurg', 'Krusk', 'Gorak', 'Volth', 'Vrag', 'Orlak', 'Urv', 'Rhal', 'Zorv',
    'Thaz', 'Dral', 'Mork', 'Throg', 'Karg', 'Gorm', 'Brol', 'Krav', 'Narv', 'Drav',
    'Skor', 'Ravok', 'Varnak', 'Barl', 'Grol', 'Darn', 'Korv', 'Zhal', 'Ragnor', 'Brok'
  ],
  female: [
    'Ael', 'Lira', 'Syl', 'Mira', 'Nira', 'Vala', 'Zara', 'Ysa', 'Cela', 'Fael',
    'Elira', 'Sora', 'Thya', 'Kira', 'Nysa', 'Talia', 'Vira', 'Xara', 'Yena', 'Zyra',
    'Isil', 'Myra', 'Seri', 'Lyra', 'Aria', 'Alira', 'Nerra', 'Eira', 'Olya', 'Selene',
    'Rina', 'Fenya', 'Leira', 'Iria', 'Velia', 'Ilya', 'Asha', 'Lysa', 'Vanya', 'Tessa',
    'Ari', 'Zyna', 'Nyssa', 'Saph', 'Ora', 'Nella', 'Rhela', 'Ysra', 'Dalia', 'Avena',
    'Kaela', 'Ishara', 'Nyra', 'Isla', 'Maela', 'Thalia', 'Valya', 'Selya', 'Virel', 'Tysha',
    'Aven', 'Lunara', 'Ferra', 'Tirra', 'Mariel', 'Shaela', 'Ylva', 'Zirel', 'Elyra', 'Onera',
    'Kyra', 'Alara', 'Liora', 'Syra', 'Arlyn', 'Thyra', 'Merra', 'Vaela', 'Yelina', 'Soraya',
    'Luneth', 'Zerra', 'Calya', 'Avara', 'Delya', 'Avera', 'Renya', 'Isira', 'Alyra', 'Orlya',
    'Talya', 'Sanya', 'Myla', 'Anira', 'Feyra', 'Tiriel', 'Zenya', 'Esya', 'Ranya', 'Velya'
  ],
  neutral: [
    'Xan', 'Ash', 'Kael', 'Orin', 'Tari', 'Nym', 'Quen', 'Zae', 'Ith', 'Osha',
    'Vae', 'Eir', 'Ryn', 'Yel', 'Thae', 'Laz', 'Myth', 'Zin', 'Aen', 'Vyn',
    'Elun', 'Aryl', 'Sorin', 'Lior', 'Tahl', 'Shae', 'Oryn', 'Isen', 'Calen', 'Fyn',
    'Nael', 'Thir', 'Eris', 'Korin', 'Zel', 'Rale', 'Vorin', 'Khal', 'Saan', 'Evin',
    'Ira', 'Thel', 'Mirae', 'Jora', 'Tyel', 'Yen', 'Ren', 'Cire', 'Alon', 'Qira',
    'Lor', 'Vel', 'Orel', 'Nire', 'Zire', 'Vareth', 'Arlen', 'Daen', 'Zair', 'Riven',
    'Sari', 'Tenar', 'Irel', 'Elar', 'Nali', 'Orinor', 'Ilas', 'Vael', 'Shen', 'Rior',
    'Zerin', 'Enar', 'Thian', 'Kail', 'Asen', 'Telin', 'Lure', 'Farel', 'Isil', 'Ysol',
    'Valar', 'Neir', 'Thera', 'Kelan', 'Miren', 'Sil', 'Aven', 'Ori', 'Viren', 'Tyren',
    'Alir', 'Nyel', 'Zalas', 'Yven', 'Korinor', 'Serin', 'Elyn', 'Dorel', 'Myen', 'Yrah'
  ]
};
const bases = {
  male: [
    'drak', 'gorn', 'rath', 'thor', 'grim', 'vorn', 'keth', 'dral', 'zhar', 'dane',
    'bryn', 'gar', 'kor', 'varg', 'lok', 'bram', 'morn', 'zag', 'ron', 'barr',
    'vek', 'zorn', 'dag', 'skar', 'jal', 'rak', 'zoth', 'krol', 'gron', 'thol',
    'drok', 'grol', 'brak', 'karn', 'kraz', 'morr', 'krag', 'dren', 'volk', 'drog',
    'vok', 'thur', 'zan', 'deth', 'kran', 'throg', 'karv', 'darn', 'glok', 'trak',
    'brok', 'zarn', 'jorn', 'harn', 'darr', 'zrak', 'rhal', 'kuld', 'krolm', 'ralg',
    'zurk', 'grak', 'snor', 'burk', 'drav', 'skarn', 'krusk', 'vrog', 'norr', 'grimm',
    'dorl', 'borg', 'brorn', 'karz', 'vrak', 'narg', 'shok', 'zorv', 'vorl', 'larn',
    'durg', 'gul', 'murn', 'gorr', 'skorr', 'torg', 'thaz', 'droth', 'gorm', 'brath',
    'durl', 'kruth', 'rokh', 'narv', 'snarn', 'vorag', 'zanth', 'murg', 'zark', 'korth'
  ],
  female: [
    'wyn', 'mira', 'syl', 'lith', 'riel', 'shara', 'sera', 'nira', 'kyna', 'fira',
    'tala', 'mirae', 'nyra', 'sina', 'loris', 'dara', 'vara', 'nessa', 'elira', 'lyna',
    'vella', 'zana', 'sari', 'mellis', 'tyra', 'doria', 'faera', 'naela', 'sylis', 'lara',
    'anira', 'feyra', 'tira', 'nylia', 'oriel', 'verra', 'xira', 'zea', 'lenna', 'ayla',
    'lyri', 'myria', 'nalia', 'velis', 'sasha', 'isra', 'tylia', 'loriel', 'enara', 'olira',
    'delia', 'zalia', 'rhel', 'kaira', 'sirra', 'miriel', 'selis', 'ishya', 'linya', 'noira',
    'talin', 'relya', 'felya', 'tysha', 'aeris', 'selya', 'niara', 'orael', 'emyra', 'azira',
    'elyn', 'farya', 'meira', 'savra', 'naera', 'avari', 'cyra', 'sirya', 'nava', 'aelis',
    'telya', 'valis', 'dariel', 'sylla', 'zyna', 'orisa', 'evara', 'taris', 'raena', 'kyli',
    'zanira', 'virra', 'meril', 'ilira', 'noelis', 'delys', 'rilia', 'lilith', 'saria', 'venya'
  ],
  neutral: [
    'shade', 'solis', 'tarn', 'varis', 'dorin', 'zein', 'sorel', 'quix', 'fyr', 'xian',
    'nyx', 'calen', 'seris', 'loren', 'drae', 'orin', 'venn', 'thar', 'rael', 'zaris',
    'mythos', 'rynn', 'tiran', 'silas', 'cairn', 'avel', 'therin', 'faen', 'evar', 'soren',
    'nair', 'toval', 'dareth', 'voril', 'melar', 'caen', 'zaryn', 'selar', 'orien', 'thalor',
    'kalem', 'syris', 'voren', 'nylor', 'talos', 'sovar', 'enric', 'ferin', 'zelor', 'miran',
    'tanis', 'valis', 'caran', 'keris', 'ioris', 'taron', 'revan', 'lyric', 'zenis', 'varet',
    'sharis', 'kalen', 'fain', 'milos', 'valen', 'naris', 'syran', 'zarek', 'ioren', 'calor',
    'norin', 'lyen', 'revos', 'terin', 'thalos', 'aric', 'theros', 'rylor', 'kaelis', 'delor',
    'morin', 'lareth', 'sevin', 'corin', 'varen', 'serin', 'drale', 'halen', 'velas', 'kyren',
    'naros', 'zelin', 'dyric', 'mevon', 'saeris', 'niral', 'kareth', 'elion', 'virel', 'dalen'
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

  if (document.getElementById('male').checked) {
      selectedPrefixes.push(...prefixes.male);
      selectedBases.push(...bases.male);
  }
  if (document.getElementById('female').checked) {
      selectedPrefixes.push(...prefixes.female);
      selectedBases.push(...bases.female);
  }
  if (document.getElementById('neutral').checked) {
      selectedPrefixes.push(...prefixes.neutral);
      selectedBases.push(...bases.neutral);
  }

  // Fallback: if nothing is selected, default to all
  if (selectedPrefixes.length === 0 || selectedBases.length === 0) {
      selectedPrefixes.push(...prefixes.male, ...prefixes.female, ...prefixes.neutral);
      selectedBases.push(...bases.male, ...bases.female, ...bases.neutral);
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
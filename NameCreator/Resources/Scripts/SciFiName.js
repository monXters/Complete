// Arrays for word parts based on gender
const prefixes = {
  male: [
    'Zor', 'Tal', 'Xen', 'Mak', 'Kry', 'Vor', 'Tarn', 'Rax', 'Drev', 'Zan',
  'Kol', 'Jex', 'Bran', 'Nir', 'Vek', 'Sol', 'Grav', 'Lek', 'Tor', 'Zyr',
  'Krel', 'Dex', 'Var', 'Jor', 'Thal', 'Quar', 'Ry', 'Marn', 'Zel', 'Rok',
  'Thren', 'Kav', 'Brax', 'Jarn', 'Vorn', 'Ryl', 'Xal', 'Mek', 'Tarnak', 'Drav',
  'Grek', 'Kren', 'Zeth', 'Sar', 'Xan', 'Vel', 'Tur', 'Krax', 'Dorn', 'Ziv',
  'Jarnak', 'Kor', 'Ral', 'Gorn', 'Threx', 'Ruth', 'Zev', 'Vrak', 'Nol', 'Krelor',
  'Thon', 'Zent', 'Jav', 'Vorik', 'Krux', 'Marv', 'Xeth', 'Durn', 'Varn', 'Kel',
  'Raxil', 'Mor', 'Jax', 'Tov', 'Nar', 'Kyrex', 'Zenor', 'Garv', 'Drel', 'Syv',
  'Varnak', 'Jorn', 'Threxal', 'Nuv', 'Gorr', 'Xarn', 'Trel', 'Zyrak', 'Marnor', 'Varnor',
  'Dax', 'Torin', 'Zelkor', 'Quarn', 'Brel', 'Vex', 'Ronar', 'Thol', 'Nax', 'Jarek'
  ],
  female: [
    'Zira', 'Luna', 'Xela', 'Mira', 'Vexa', 'Tali', 'Nova', 'Kira', 'Sora', 'Nira',
  'Raya', 'Lira', 'Xana', 'Vela', 'Taya', 'Zina', 'Juna', 'Myra', 'Lyra', 'Syla',
  'Kaya', 'Fira', 'Astra', 'Thala', 'Seri', 'Xeni', 'Kaia', 'Ora', 'Rysa', 'Velu',
  'Nyra', 'Zali', 'Tiva', 'Meli', 'Sina', 'Liva', 'Cyra', 'Zyla', 'Reva', 'Luma',
  'Tirra', 'Kella', 'Meza', 'Shira', 'Dira', 'Nyla', 'Zirae', 'Kessa', 'Ralia', 'Jexa',
  'Lynae', 'Xira', 'Zyra', 'Kirae', 'Avara', 'Myrae', 'Selu', 'Thira', 'Yari', 'Nima',
  'Zynea', 'Alira', 'Mirel', 'Xolia', 'Jelra', 'Kaysa', 'Tovra', 'Velia', 'Rilsa', 'Quira',
  'Talyn', 'Kynae', 'Serla', 'Zovra', 'Melia', 'Avexa', 'Nyari', 'Lorel', 'Vesha', 'Zavri',
  'Thyra', 'Xyra', 'Jorla', 'Nissa', 'Verna', 'Zalyn', 'Ryssa', 'Lysha', 'Orana', 'Rivka',
  'Velra', 'Kyza', 'Miral', 'Syrla', 'Thalia', 'Vanya', 'Zalei', 'Rania', 'Selka', 'Tirza'
  ],
  neutral: [
    'Zy', 'Tov', 'Xen', 'Mar', 'Kai', 'Jin', 'Ril', 'Thal', 'Vel', 'Nex',
    'Sarn', 'Ori', 'Kren', 'Quen', 'Val', 'Jor', 'Nyl', 'Xel', 'Ryn', 'Laz',
    'Mav', 'Zin', 'Trel', 'Dax', 'Kyl', 'Rax', 'Zeph', 'Tarn', 'Yul', 'Sari',
    'Brax', 'Lior', 'Nyx', 'Kira', 'Dren', 'Zova', 'Sol', 'Ael', 'Zir', 'Xova',
    'Novi', 'Zuri', 'Tarnel', 'Galen', 'Xari', 'Oril', 'Rek', 'Yen', 'Vexi', 'Tavo',
    'Sira', 'Dari', 'Threx', 'Kyre', 'Lor', 'Zae', 'Mora', 'Thren', 'Koro', 'Zilu',
    'Toval', 'Xeri', 'Yrel', 'Ralo', 'Dova', 'Aven', 'Nova', 'Talen', 'Risa', 'Zaxa',
    'Varn', 'Loril', 'Nera', 'Kyrel', 'Zelin', 'Seru', 'Voxa', 'Zyn', 'Orel', 'Cira',
    'Tren', 'Novi', 'Xilo', 'Talor', 'Kiven', 'Zari', 'Moril', 'Zevi', 'Varil', 'Rone',
    'Lexi', 'Zov', 'Vera', 'Trex', 'Luvon', 'Kalen', 'Zyre', 'Navi', 'Yori', 'Zani'
  ]
};
const bases = {
  male: [
    'andros', 'vekron', 'darius', 'thalon', 'quoril', 'zenrax', 'kartho', 'valion', 'orvax', 'zeron',
  'keldor', 'vornak', 'trelos', 'jaxon', 'sarvek', 'mordek', 'tyvorn', 'zorath', 'relmar', 'darion',
  'traxil', 'keldor', 'ravien', 'narex', 'zoneth', 'vekros', 'damir', 'marnok', 'lorien', 'seroth',
  'haldor', 'tyrell', 'malric', 'zorvek', 'jureth', 'drakon', 'garvon', 'kaldor', 'zarion', 'morrek',
  'naxor', 'trazen', 'verdan', 'romak', 'kerion', 'sovren', 'drevik', 'raxion', 'zanthor', 'valrek',
  'korien', 'theron', 'draven', 'gavrik', 'xerion', 'zorion', 'karvek', 'morien', 'zephyr', 'solvek',
  'voren', 'mirax', 'ranek', 'jarnik', 'korran', 'ralven', 'xalven', 'varkon', 'gorrin', 'jaxir',
  'mireth', 'zanrek', 'karnor', 'raxnor', 'tolien', 'virex', 'zarnok', 'nalvik', 'vorian', 'dexrel',
  'kervek', 'tarnak', 'kalvek', 'draxon', 'jurek', 'malvek', 'roxar', 'temril', 'sareth', 'kazor',
  'lorvek', 'nireth', 'verlok', 'gavren', 'zuren', 'thorek', 'radorn', 'dalvek', 'xerath', 'yavron'
  ],
  female: [
   'elira', 'sirel', 'valara', 'nireth', 'lorana', 'zenira', 'kalyra', 'morina', 'thelia', 'zavira',
  'cereth', 'mirena', 'soreth', 'rylina', 'lavira', 'selene', 'velora', 'nivara', 'zorina', 'xireth',
  'mariel', 'joreth', 'tariel', 'zelina', 'alvaya', 'seraya', 'nylira', 'malira', 'kireth', 'lunara',
  'melira', 'taryne', 'shyra', 'elvaya', 'calira', 'verena', 'kavira', 'karina', 'thelyn', 'doreth',
  'sariel', 'jenira', 'zoraya', 'rixana', 'elveth', 'lyvona', 'vireya', 'xerina', 'xelira', 'nayeth',
  'varina', 'selyne', 'korina', 'lireth', 'jelira', 'mirana', 'ralira', 'savira', 'tavira', 'zelyra',
  'nayira', 'talira', 'naraya', 'xelara', 'soreya', 'velina', 'mirisa', 'jorela', 'tylira', 'kalyra',
  'verala', 'doraya', 'shylin', 'mirela', 'zireth', 'senira', 'linara', 'nireya', 'selira', 'kalira',
  'evyra', 'laveth', 'serina', 'melaya', 'nolira', 'rayira', 'velora', 'koraya', 'alveth', 'shaira',
  'valira', 'zoriel', 'zelira', 'maraya', 'loraya', 'xerela', 'zalina', 'seriel', 'camira', 'sorela'
  ],
  neutral: [
   'orion', 'zenith', 'talor', 'revan', 'lyrix', 'xelar', 'maren', 'solen', 'valen', 'zarek',
  'jareth', 'moril', 'trivan', 'elion', 'kaelar', 'dovra', 'therin', 'ralen', 'norix', 'virel',
  'zoren', 'kelyn', 'xorin', 'yaren', 'zalan', 'tovek', 'xiren', 'navir', 'serel', 'kelor',
  'syral', 'nirel', 'verik', 'elvan', 'lorik', 'kalor', 'melor', 'dorin', 'varen', 'lyron',
  'novar', 'savik', 'zovin', 'elrik', 'kaevan', 'relor', 'xirel', 'thavin', 'nylor', 'tevrin',
  'morin', 'salan', 'velor', 'jorin', 'zelor', 'delan', 'rorik', 'neval', 'syron', 'yoren',
  'calor', 'feran', 'galen', 'norik', 'larek', 'xivar', 'velan', 'kamir', 'sirel', 'tyvek',
  'javin', 'davor', 'yelan', 'narin', 'rovan', 'zayel', 'xeril', 'kenor', 'dravik', 'zavin',
  'tavar', 'melin', 'savon', 'loren', 'venor', 'avrel', 'drorin', 'xenir', 'rylor', 'jayen',
  'dorik', 'solan', 'zanek', 'kavon', 'xeran', 'belor', 'thelin', 'relik', 'meran', 'zevan'
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
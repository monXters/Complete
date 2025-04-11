// Arrays for word parts based on gender
const prefixes = {
  oneWord: [
    'Ar', 'Bel', 'Cor', 'Dex', 'Fer', 'Gla', 'Hal', 'Ith', 'Jor', 'Kel',
  'Lor', 'Mor', 'Nel', 'Or', 'Pra', 'Quin', 'Rex', 'Sol', 'Tor', 'Ul',
  'Ven', 'Wex', 'Xan', 'Yul', 'Zor', 'Aq', 'Bri', 'Cal', 'Dax', 'El',
  'Fal', 'Gar', 'Har', 'Il', 'Jan', 'Kas', 'Lin', 'Mal', 'Nor', 'On',
  'Per', 'Qua', 'Ran', 'Sel', 'Tan', 'Ur', 'Val', 'Wyn', 'Xel', 'Yar',
  'Zan', 'Al', 'Bor', 'Cer', 'Dal', 'En', 'Fin', 'Gil', 'Hor', 'Is',
  'Jar', 'Kam', 'Lan', 'Mir', 'Nox', 'Oth', 'Pal', 'Qui', 'Ral', 'Sim',
  'Tal', 'Uth', 'Vor', 'Wel', 'Xil', 'Yer', 'Zel', 'As', 'Bro', 'Cid',
  'Dom', 'Eph', 'Fur', 'Gal', 'Hel', 'Ign', 'Jer', 'Kor', 'Lux', 'Met',
  'Nir', 'Osc', 'Prae', 'Ril', 'Sil', 'Tul', 'Un', 'Vir', 'Wor', 'Zin'
  ],
  twoWords: [
    'Feral ', 'Neon ', 'Crimson ', 'Blazing ', 'Raging ', 'Velvet ', 'Broken ', 'Frozen ', 'Wild ', 'Silent ',
  'Turbo ', 'Wicked ', 'Atomic ', 'Cobalt ', 'Fuzzy ', 'Rogue ', 'Rapid ', 'Chrome ', 'Slick ', 'Sable ',
  'Golden ', 'Fallen ', 'Shadow ', 'Black ', 'Grim ', 'Electric ', 'Static ', 'Rusted ', 'Lucid ', 'Haunted ',
  'Twisted ', 'Lunar ', 'Savage ', 'Molten ', 'Gravel ', 'Dusty ', 'Cosmic ', 'Magic ', 'Solar ', 'Urban ',
  'Bloody ', 'Hollow ', 'Electric ', 'Fiery ', 'Burning ', 'Cursed ', 'Iron ', 'Ghost ', 'Heavy ', 'Light ',
  'Amber ', 'Ivory ', 'Shaky ', 'Tragic ', 'Phantom ', 'Venomous ', 'Cracked ', 'Silent ', 'Mad ', 'Noble ',
  'Obsidian ', 'Arcane ', 'Mystic ', 'Lost ', 'Fire ', 'Cold ', 'Starry ', 'Drunken ', 'Lonely ', 'Jagged ',
  'Blue ', 'Deadly ', 'Glowing ', 'Infernal ', 'Flaming ', 'Crazy ', 'Noisy ', 'Screaming ', 'Twilight ', 'Sinful ',
  'Rotten ', 'Lucky ', 'Psycho ', 'Voodoo ', 'Burnt ', 'Toxic ', 'Greedy ', 'Feathered ', 'Sharp ', 'Wasted ',
  'Proud ', 'Ancient ', 'Whirling ', 'Stormy ', 'Stray ', 'Frightened ', 'Mercury ', 'Drifting ', 'Eerie ', 'Lethal '
  ]
};
const bases = {
  oneWord: [
    'machine', 'hunter', 'driver', 'reign', 'echoes', 'venom', 'raven', 'riot', 'dagger', 'demon',
  'razor', 'curse', 'engine', 'phantom', 'thrill', 'bullet', 'vandal', 'savior', 'fever', 'signal',
  'static', 'howler', 'damage', 'legend', 'havoc', 'ember', 'storm', 'clutch', 'blaze', 'chrome',
  'shiver', 'flare', 'terror', 'frenzy', 'ripper', 'doom', 'chaos', 'fable', 'plague', 'rush',
  'embers', 'shock', 'charge', 'gutter', 'driven', 'whip', 'torque', 'grinder', 'spike', 'bones',
  'pulse', 'bender', 'shroud', 'wreck', 'scar', 'thorn', 'hazard', 'stain', 'drone', 'neon',
  'glitch', 'striker', 'chasm', 'crisis', 'vortex', 'quake', 'slammer', 'twitch', 'scream', 'blast',
  'nova', 'snarl', 'spark', 'ashes', 'whisper', 'snare', 'wreckage', 'claw', 'void', 'wrecks',
  'panic', 'depth', 'dagger', 'scorn', 'grip', 'sling', 'relic', 'fury', 'drench', 'smoke',
  'sorrow', 'grudge', 'coil', 'knot', 'rift', 'rage', 'grind', 'burnout', 'tundra', 'gravel'
  ],
  twoWords: [
    'Engines', 'Rebels', 'Raiders', 'Echoes', 'Demons', 'Fangs', 'Vultures', 'Howlers', 'Knives', 'Drifters',
  'Sinners', 'Outlaws', 'Rangers', 'Cyclones', 'Serpents', 'Hounds', 'Warriors', 'Ghosts', 'Pirates', 'Phantoms',
  'Stormers', 'Slayers', 'Grinders', 'Hunters', 'Rockets', 'Riders', 'Shadows', 'Crushers', 'Rockers', 'Freaks',
  'Giants', 'Titans', 'Banshees', 'Wolves', 'Thieves', 'Dragons', 'Beasts', 'Zombies', 'Sirens', 'Devils',
  'Blazers', 'Wreckers', 'Snakes', 'Strangers', 'Bandits', 'Reapers', 'Nomads', 'Gliders', 'Switches', 'Brawlers',
  'Temples', 'Bolts', 'Jets', 'Flares', 'Chasers', 'Scorchers', 'Grifters', 'Bolsters', 'Torches', 'Drones',
  'Tremors', 'Flickers', 'Engagers', 'Creepers', 'Revolvers', 'Skulls', 'Axes', 'Miners', 'Sparks', 'Dealers',
  'Flames', 'Sleds', 'Igniters', 'Boomers', 'Outsiders', 'Roamers', 'Scouts', 'Claws', 'Rattlers', 'Choppers',
  'Daggers', 'Loaders', 'Punks', 'Crows', 'Smokers', 'Jets', 'Burners', 'Riffs', 'Spirits', 'Bikers',
  'Shakers', 'Slicers', 'Grinders', 'Rockets', 'Dwellers', 'Engagers', 'Loaders', 'Snatchers', 'Shockers', 'Cogs'
  ],
};

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a fantasy name
function generateBandName() {
  return getRandomElement(prefixes) + getRandomElement(bases);
}

// Function to update the displayed name
function generateAndShowName() {
  document.getElementById("nameDisplay").textContent = generateBandName();
}

// Event listener for the button
document
  .getElementById("generateButton")
  .addEventListener("click", generateAndShowName);

// event listener to auto generate name on load
document.addEventListener("DOMContentLoaded", generateAndShowName);

//Added Radio Buttons
// Generate based on selected categories
function generateBandName() {
  const selectedPrefixes = [];
  const selectedBases = [];

  if (document.getElementById("single").checked) {
    selectedPrefixes.push(...prefixes.oneWord);
    selectedBases.push(...bases.oneWord);
  }
  if (document.getElementById("double").checked) {
    selectedPrefixes.push(...prefixes.twoWords);
    selectedBases.push(...bases.twoWords);
  }

  // Fallback: if nothing is selected, default to all
  if (selectedPrefixes.length === 0 || selectedBases.length === 0) {
    selectedPrefixes.push(...prefixes.oneWord, ...prefixes.twoWords);
    selectedBases.push(...bases.oneWord, ...bases.twoWords);
  }

  const name =
    getRandomElement(selectedPrefixes) + getRandomElement(selectedBases);
  return name;
}

function generateAndShowName() {
  document.getElementById("nameDisplay").textContent = generateBandName();
}

document
  .getElementById("generateButton")
  .addEventListener("click", generateAndShowName);

// Auto-generate on page load
document.addEventListener("DOMContentLoaded", generateAndShowName);

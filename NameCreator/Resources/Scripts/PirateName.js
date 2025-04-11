// Arrays for word parts based on gender
const prefixes = {
  male: [
      'Jack ', 'Bart ', 'Ned ', 'Drake ', 'Will ', 'Black ', 'Jett ', 'Thorn ', 'Red ', 'Brick ',
      'Skull ', 'Hank ', 'Rex ', 'Toby ', 'Gabe ', 'Jolly ', 'Mick ', 'Flint ', 'Grimm ', 'Patch ',
      'Bones ', 'Crow ', 'Knox ', 'Slick ', 'Boone ', 'Sykes ', 'Riggs ', 'Jeb ', 'Hawk ', 'Zeke ',
      'Rafe ', 'Buck ', 'Finn ', 'Dash ', 'Mateo ', 'Trace ', 'Storm ', 'Brine ', 'Ruddy ', 'Wade ',
      'Slate ', 'Crag ', 'Ash ', 'Marv ', 'Talon ', 'Sly ', 'Jargo ', 'Wren ', 'Duke ', 'Vick ',
      'Grit ', 'Brett ', 'Bray ', 'Fitch ', 'Orry ', 'Stark ', 'Drumm ', 'Frost ', 'Leif ', 'Mills ',
      'Bram ', 'Steel ', 'Ronny ', 'Ridge ', 'Scrap ', 'Fangs ', 'Brock ', 'Gunner ', 'Heath ', 'Quinn ',
      'Rowe ', 'Spike ', 'Tracey ', 'Wolfe ', 'Jace ', 'Jory ', 'Axel ', 'Dirk ', 'Trey ', 'Holt ',
      'Saul ', 'Hugh ', 'Brack ', 'Trent ', 'Moss ', 'Nash ', 'Beau ', 'Rocco ', 'Cade ', 'Rook ',
      'Rigby ', 'Dusty ', 'Grady ', 'Stroud ', 'Banks ', 'Judd ', 'Scorn ', 'Crane ', 'Ward ', 'Rigs '
  ],
  female: [
    'Anne ', 'Grace ', 'Bonny ', 'Rosa ', 'Nell ', 'Bella ', 'Tess ', 'Ivy ', 'Dixie ', 'Lola ',
    'Pearl ', 'Faye ', 'Willa ', 'Sable ', 'Zara ', 'Esme ', 'Nora ', 'Vera ', 'Nixie ', 'Clio ',
    'Tilda ', 'Greta ', 'Vixen ', 'Poppy ', 'Roxy ', 'Della ', 'Skye ', 'Hazel ', 'Storm ', 'Lyra ',
    'Ruby ', 'Lark ', 'Triss ', 'Nova ', 'Mina ', 'Briar ', 'Kira ', 'Flora ', 'Lacey ', 'Jewel ',
    'Misty ', 'Cyra ', 'Bea ', 'Queenie ', 'Zadie ', 'Rina ', 'Jinx ', 'Margo ', 'Daisy ', 'Sloan ',
    'Wren ', 'Flick ', 'Cleo ', 'Lilith ', 'Sunny ', 'Jessa ', 'Elva ', 'Shira ', 'Luna ', 'Sorrel ',
    'Maple ', 'Oona ', 'Yara ', 'Delta ', 'Merry ', 'Petra ', 'Indie ', 'Moira ', 'Calla ', 'Vita ',
    'Ember ', 'Trixie ', 'Nessa ', 'Gwen ', 'Jada ', 'Rhea ', 'Midge ', 'Nelly ', 'Tansy ', 'Fina ',
    'Nia ', 'Bess ', 'Dorie ', 'Clover ', 'Thora ', 'Frita ', 'Zella ', 'Isla ', 'Kelda ', 'Darya ',
    'Nyla ', 'Orla ', 'Etta ', 'Marnie ', 'Lina ', 'Bayla ', 'Vada ', 'Lotta ', 'Ines ', 'Wynne '
  ],
  neutral: [
    'Rowe ', 'Ash ', 'Finn ', 'Joss ', 'Kit ', 'Rory ', 'Sage ', 'Tory ', 'Sky ', 'Bly ',
  'Drew ', 'Jules ', 'Lane ', 'Reed ', 'Oak ', 'Wynn ', 'Kai ', 'Pax ', 'Quinn ', 'Ray ',
  'Scout ', 'Jody ', 'Noel ', 'Vale ', 'Ren ', 'Toni ', 'Lou ', 'Bryn ', 'Remy ', 'Gray ',
  'Ezra ', 'Indy ', 'Storm ', 'Mica ', 'Tally ', 'Bliss ', 'Harley ', 'Sasha ', 'Onyx ', 'Echo ',
  'Tobi ', 'Clem ', 'Milo ', 'Arden ', 'Bay ', 'Jett ', 'Dove ', 'Riven ', 'Beau ', 'Skye ',
  'Zeal ', 'Clove ', 'Dray ', 'Emory ', 'Freddy ', 'Jess ', 'Nico ', 'Sal ', 'Moss ', 'Hale ',
  'Kye ', 'Ari ', 'Rumi ', 'Cory ', 'Gale ', 'Elan ', 'Nuri ', 'Lark ', 'Bo ', 'Kris ',
  'Rafe ', 'Lex ', 'Taz ', 'Lux ', 'Izzy ', 'Aven ', 'Dell ', 'Rex ', 'Nox ', 'Sol ',
  'Rory ', 'Blair ', 'Perry ', 'Zuri ', 'Pip ', 'Ariya ', 'Basil ', 'Stormy ', 'True ', 'Yule ',
  'Cove ', 'Fable ', 'Joey ', 'Paz ', 'Winter ', 'Gentry ', 'Zephy ', 'Azzy ', 'Renny ', 'Cal '
  ]
};
const bases = {
  male: [
    'Ironhook', 'Blackfin', 'Stormjaw', 'Goldfang', 'Saltbeard', 'Grimscar', 'Waveburn', 'Fanghelm', 'Hardtide', 'Graysail',
  'Croweye', 'Redmark', 'Strongfin', 'Marroway', 'Onefang', 'Barnacle', 'Hawkwing', 'Darkreef', 'Nailbone', 'Brassgut',
  'Hookshot', 'Stoutfin', 'Gallows', 'Ironmaw', 'Stormgut', 'Blackjaw', 'Craghelm', 'Bloodfin', 'Sharktoe', 'Tideburn',
  'Deepwake', 'Coldscar', 'Bittertide', 'Rookscar', 'Windhook', 'Bleakeye', 'Redgut', 'Stormbay', 'Hardhook', 'Saltscar',
  'Longscar', 'Steeljaw', 'Greyhook', 'Wavetooth', 'Scarbane', 'Quickfin', 'Sharpbeard', 'Roughgut', 'Seahelm', 'Bluewake',
  'Crabscar', 'Foulhook', 'Dirkfang', 'Oceangrip', 'Rocksail', 'Swiftgut', 'Ironfang', 'Blackhelm', 'Nailhook', 'Sharpgut',
  'Windhelm', 'Sharkhook', 'Redscar', 'Bonehelm', 'Scartide', 'Grimtide', 'Wavejaw', 'Fistbeard', 'Seafoam', 'Marrowgut',
  'Greygut', 'Sharkjaw', 'Scowlsail', 'Darkgill', 'Stormeye', 'Grimjaw', 'Deephelm', 'Ashwake', 'Sharkgut', 'Stormscar',
  'Stonesail', 'Bonehook', 'Seafang', 'Saltjaw', 'Oceanhelm', 'Bloodhook', 'Bitterjaw', 'Stormhook', 'Driftgut', 'Steelgut',
  'Seaeye', 'Darkjaw', 'Gulfgut', 'Ironwake', 'Greyfang', 'Gloomjaw', 'Saltgut', 'Tidehelm', 'Bonefin', 'Wavehelm'
  ],
  female: [
    'Redfin', 'Mistsail', 'Blackrose', 'Goldreef', 'Stormbay', 'Ironleaf', 'Deepfin', 'Swiftwake', 'Moonhook', 'Grayswan',
  'Crowmist', 'Wavekiss', 'Saltrose', 'Nightbay', 'Sablejaw', 'Dawnbite', 'Starwake', 'Coralfin', 'Pearlhelm', 'Duskrise',
  'Silkbeard', 'Sharkray', 'Brightgut', 'Windwave', 'Cloudhook', 'Sunray', 'Seabite', 'Frostjaw', 'Swiftfang', 'Softwake',
  'Sunhelm', 'Quickhook', 'Seamist', 'Glowwake', 'Tidebluff', 'Redrose', 'Starsea', 'Mirthhook', 'Seawisp', 'Windcurl',
  'Duskwake', 'Lilyscar', 'Bluegut', 'Goldhook', 'Driftrose', 'Nightsail', 'Pearljaw', 'Glowhelm', 'Dewscar', 'Thornhook',
  'Rainjaw', 'Silktide', 'Bluesail', 'Moonhelm', 'Whitetide', 'Glimwave', 'Seawind', 'Fairhook', 'Foamjaw', 'Silverfin',
  'Pinkwake', 'Softtide', 'Gracefin', 'Coralhelm', 'Duskeye', 'Warmhook', 'Brighthelm', 'Seafoam', 'Lunafang', 'Shorefin',
  'Rainhelm', 'Skytide', 'Sunbluff', 'Windkiss', 'Swiftjaw', 'Stargut', 'Bloomhook', 'Crescent', 'Nightrose', 'Glintwake',
  'Pearlfin', 'Rosejaw', 'Gleamwake', 'Tidecurl', 'Crysthook', 'Opalhelm', 'Glowgut', 'Lightray', 'Redhelm', 'Sunwave',
  'Moontide', 'Silverscar', 'Wavemist', 'Snowhook', 'Cindergut', 'Moonfin', 'Fawnhook', 'Starlace', 'Wavesong', 'Oceanrose'
  ],
  neutral: [
    'Wavecrest', 'Stormfin', 'Saltwind', 'Graywake', 'Oceansky', 'Quicktide', 'Seabluff', 'Ironreef', 'Nightgut', 'Windscar',
  'Moonrake', 'Blackbay', 'Brightbay', 'Stonefin', 'Driftsky', 'Seaflame', 'Tidehelm', 'Starfall', 'Cloudwake', 'Ashsail',
  'Riversky', 'Duskwave', 'Redhook', 'Seafoam', 'Sunwake', 'Wavetide', 'Moorcrest', 'Shorehelm', 'Grimsky', 'Seastone',
  'Softjaw', 'Cragwake', 'Windtide', 'Flamehook', 'Lowtide', 'Snowcrest', 'Holloway', 'Stormcrest', 'Rockhelm', 'Wavestone',
  'Sunleaf', 'Deepbay', 'Silverbay', 'Lowwake', 'Galehook', 'Moonwind', 'Driftjaw', 'Seahook', 'Darkwake', 'Tidecurl',
  'Wavemist', 'Skyhelm', 'Frostwake', 'Cloudhook', 'Opalscar', 'Rainwake', 'Windcrest', 'Havenbay', 'Graystone', 'Stormsky',
  'Seaflare', 'Starhelm', 'Nightfin', 'Tideflow', 'Mistjaw', 'Wavebluff', 'Raincrest', 'Seacliff', 'Darkfoam', 'Sunstone',
  'Brightsea', 'Driftsail', 'Rockscar', 'Galesky', 'Mistrise', 'Foamwind', 'Skyrake', 'Shorebay', 'Glarehook', 'Duskrise',
  'Saltcrest', 'Wavesky', 'Skytide', 'Suncrest', 'Dawnhelm', 'Graywind', 'Windhelm', 'Stormfall', 'Cloudjaw', 'Glowhelm',
  'Moonhelm', 'Wispwake', 'Lushwake', 'Seawhale', 'Cragscar', 'Oceancrest', 'Stonebay', 'Moonflare', 'Bluewake', 'Oceanmist'
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

//Radio Buttons
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
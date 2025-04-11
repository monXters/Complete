// Arrays for word parts based on gender
const prefixes = {
  oneWord: [
        "Lil", "Big", "Yung", "MC", "Dr", "DJ", "OG", "King", "T", "Slim",
        "Fresh", "Ice", "Kid", "J", "Boi", "G", "Trill", "Flex", "Ace", "Z",
        "Fly", "Max", "Trap", "Raw", "Lo", "Real", "Low", "K", "Hot", "Doe",
        "Cool", "D", "X", "Hood", "Cash", "Q", "Jay", "Sav", "Rich", "Dark",
        "Vibe", "Fast", "Lil'", "EZ", "N", "Cray", "Y", "Cap", "Wild", "Slick",
        "Dope", "Jet", "Boss", "Wave", "True", "Bang", "Gold", "King'", "Stacks", "Flame",
        "Shot", "Blac", "Ghost", "Dice", "Chop", "Pop", "Dub", "Red", "Fresh'", "Zip",
        "Buck", "Hype", "Grime", "Tone", "Fro", "Zay", "Wavy", "Glitch", "Drip", "Mob",
        "Beast", "Hunnid", "Drop", "Spin", "Trap'", "Bigg", "Icey", "Piff", "Lux", "Main",
        "Bangz", "Skrrt", "Chill", "Glo", "Roc", "Snub", "Blaq", "Reck", "Quick", "Lilx"
      
  ],
  twoWords: [
    "Lil ", "Big ", "Young ", "DJ ", "MC ", "King ", "Slim ", "Fresh ", "Ice ", "Trap ",
  "Flex ", "OG ", "Yung ", "Lo ", "Cash ", "Blac ", "Gold ", "Drip ", "Real ", "Low ",
  "Doe ", "Red ", "Sav ", "Ghost ", "Fly ", "True ", "Shot ", "Boss ", "Bang ", "Fast ",
  "Tone ", "Cool ", "G ", "D ", "X ", "Cap ", "Zay ", "Hot ", "Jet ", "Chop ",
  "Mob ", "Skrrt ", "Roc ", "Dice ", "Cray ", "Wavy ", "Dark ", "Quick ", "Dr ", "Pop ",
  "Beast ", "Buck ", "Snub ", "Trap' ", "EZ ", "Main ", "Stacks ", "Flame ", "Wild ", "Zip ",
  "Piff ", "Slick ", "Wave ", "Reck ", "Chill ", "Glitch ", "Lurk ", "Spin ", "Loop ", "Fro ",
  "Vibe ", "Boi ", "Jay ", "Q ", "Tone ", "Bangz ", "Glow ", "Lowz ", "Heat ", "Kick ",
  "Tazz ", "Wreck ", "Zoom ", "Fizz ", "Drop ", "Hype ", "Twist ", "Grime ", "Scope ", "Thump ",
  "Snare ", "Gnash ", "Fury ", "Loot ", "Stackz ", "Loopz ", "Peep ", "Wrekz ", "Fizzl ", "Yack "
  ],
};
const bases = {
  oneWord: [
   " Jam", " Chill", " Rock", " Flash", " Master", " Funk", " Ice", " Tone", " Groove", " Jazzy",
  " DMC", " Mix", " Cool", " G", " T", " Fresh", " MC", " Slick", " Kid", " Spin",
  " Dazz", " Rhyme", " Ace", " Flow", " Sugar", " Magic", " Boogie", " Doc", " Force", " Bash",
  " Rocka", " Jamz", " Show", " Jive", " Beat", " Tricky", " Juice", " Break", " Style", " Funky",
  " Pop", " Wiz", " Snap", " Tre", " Disco", " Cuts", " Chrome", " Scratch", " Rebel", " Phase",
  " Trick", " Bop", " Max", " Vibe", " Fox", " Chuck", " Fly", " Scoob", " Glow", " Crew",
  " Groove", " D", " Zapp", " Tonez", " Chillz", " Jaz", " Freshie", " Krush", " Shady", " Flip",
  " Blaze", " Mello", " Spinny", " Sharp", " Rockwell", " Raze", " Deck", " Twin", " Bashy", " Steeze",
  " Prime", " Beatbox", " Tracks", " Icey", " Sharp", " Hype", " Diggy", " Blaze", " Jamm", " Cypha",
  " Riff", " Tricks", " Kixx", " Zoom", " Coolz", " Slam", " Tips", " Jet", " Bling", " Rewind"
  ],
  twoWords: [
   "Flex", "Dre", "Tone", "Sav", "Crux", "Jett", "Maze", "Flip", "Vee", "Doe",
  "Kidd", "Fro", "Snap", "Blaze", "Trap", "Quon", "Zay", "Dart", "Nino", "Riq",
  "Prez", "Buzz", "Scope", "Twist", "Wrek", "Ghost", "Rock", "Fizz", "Mobb", "Snipe",
  "Clap", "Zone", "Vibe", "Flick", "Drip", "Hush", "Tazz", "Bankz", "Cray", "Roll",
  "Doom", "Crib", "Loop", "Grit", "Tekk", "Shott", "Zeno", "Swerve", "Grip", "Rage",
  "Boom", "Stacks", "Chief", "Laze", "Brik", "Zoom", "Trix", "Gnash", "Clout", "Reign",
  "Kickz", "Rell", "Pryme", "Lux", "Yak", "Rox", "Bando", "Fury", "Lex", "Trapz",
  "Dice", "Fash", "Clip", "Snare", "Skitz", "Heat", "Lowz", "Lurk", "Goat", "Rocc",
  "Breez", "Peep", "Loopz", "Quake", "Zonez", "Vex", "Zerk", "Slime", "Thump", "Loot",
  "Gunz", "Snipez", "Fizzl", "Blaq", "Stackz", "Wreck", "Boomz", "Tonez", "Cashh", "Zipz"
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

// Arrays for word parts based on gender
const prefixes = {
  oneWord: [
    "Zan",
    "Fray",
    "Drel",
    "Harn",
    "Jorn",
    "Nol",
  ],
  twoWords: [
    "Oni",
    "Iya",
    "Sue",
    "Pia",
    "Rin",
    "Gia",
  ],
};
const bases = {
  oneWord: [
    "garlan",
    "jernor",
    "myrol",
    "korsel",
    "venric",
    "zolar",
    "thorak",
    "parven",
    "yarnel",
    "ferrek",
    "traven",
    "quinel",
    "malven",
  ],
  twoWords: [
    "zenia",
    "mirey",
    "nirel",
    "rolia",
    "salyn",
  ],
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

  if (document.getElementById("oneWord").checked) {
    selectedPrefixes.push(...prefixes.oneWord);
    selectedBases.push(...bases.oneWord);
  }
  if (document.getElementById("twoWords").checked) {
    selectedPrefixes.push(...prefixes.twoWords);
    selectedBases.push(...bases.twoWords);
  }
  if (document.getElementById("neutral").checked) {
    selectedPrefixes.push(...prefixes.neutral);
    selectedBases.push(...bases.neutral);
  }

  // Fallback: if nothing is selected, default to all
  if (selectedPrefixes.length === 0 || selectedBases.length === 0) {
    selectedPrefixes.push(
      ...prefixes.oneWord,
      ...prefixes.twoWords,
      ...prefixes.neutral
    );
    selectedBases.push(...bases.oneWord, ...bases.twoWords, ...bases.neutral);
  }

  const name =
    getRandomElement(selectedPrefixes) + getRandomElement(selectedBases);
  return name;
}

function generateAndShowName() {
  document.getElementById("nameDisplay").textContent = generateFantasyName();
}

document
  .getElementById("generateButton")
  .addEventListener("click", generateAndShowName);

// Auto-generate on page load
document.addEventListener("DOMContentLoaded", generateAndShowName);

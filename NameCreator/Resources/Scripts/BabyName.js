// Arrays for word parts based on gender
const prefixes = {
  male: [
      'Noah', 'Liam', 'Oliver', 'Elijah', 'James', 'William', 'Benjamin', 'Lucas', 'Henry', 'Alexander',
      'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob', 'Logan', 'Jackson', 'Levi', 'Sebastian', 'Mateo',
      'Jack', 'Owen', 'Theodore', 'Aiden', 'Samuel', 'Joseph', 'John', 'David', 'Wyatt', 'Matthew',
      'Luke', 'Asher', 'Carter', 'Julian', 'Grayson', 'Leo', 'Jayden', 'Gabriel', 'Isaac', 'Lincoln',
      'Anthony', 'Hudson', 'Dylan', 'Ezra', 'Thomas', 'Charles', 'Christopher', 'Jaxon', 'Maverick', 'Josiah',
      'Isaiah', 'Andrew', 'Elias', 'Joshua', 'Nathan', 'Caleb', 'Ryan', 'Adrian', 'Miles', 'Eli',
      'Nolan', 'Christian', 'Aaron', 'Cameron', 'Ezekiel', 'Colton', 'Luca', 'Landon', 'Hunter', 'Jonathan',
      'Santiago', 'Axel', 'Easton', 'Cooper', 'Jeremiah', 'Angel', 'Roman', 'Connor', 'Jameson', 'Robert',
      'Greyson', 'Jordan', 'Ian', 'Carson', 'Jaxson', 'Leonardo', 'Nicholas', 'Dominic', 'Austin', 'Everett',
      'Brooks', 'Xavier', 'Kai', 'Jose', 'Parker', 'Adam', 'Jace', 'Wesley', 'Kayden', 'Silas',
      'Bennett', 'Declan', 'Waylon', 'Weston', 'Evan', 'Emmett', 'Micah', 'Ryder', 'Beau', 'Damian',
      'Brayden', 'Gael', 'Rowan', 'Harrison', 'Bryson', 'Sawyer', 'Amir', 'Kingston', 'Jason', 'Giovanni',
      'Vincent', 'Ayden', 'Chase', 'Myles', 'Diego', 'Nathaniel', 'Legend', 'Jonah', 'River', 'Tyler',
      'Cole', 'Braxton', 'George', 'Milo', 'Zachary', 'Ashton', 'Luis', 'Jasper', 'Kaiden', 'Adriel',
      'Gavin', 'Bentley', 'Calvin', 'Zion', 'Juan', 'Maxwell', 'Max', 'Ryker', 'Carlos', 'Emmanuel',
      'Jayce', 'Lorenzo', 'Ivan', 'Jude', 'August', 'Kevin', 'Malachi', 'Elliott', 'Rhett', 'Archer',
      'Karter', 'Arthur', 'Lukas', 'Beckett', 'Avery', 'Elliot', 'Israel', 'Jameson', 'Xander', 'Timothy',
      'Emiliano', 'Finn', 'Omari', 'Emilio', 'Knox', 'Matteo', 'Rafael', 'Zane', 'Thiago', 'Adonis',
      'Remington', 'Jake', 'Andres', 'Maximus', 'Amari', 'Zander', 'Kyrie', 'Griffin', 'Caden', 'Atticus',
      'Kaden', 'Malakai', 'Gideon', 'Stephen', 'Francisco', 'Zayden', 'Jensen', 'Kash', 'Tristan', 'Cyrus',
      'Ricardo', 'Adan', 'Erick', 'Fernando', 'Hector', 'Martin', 'Javier', 'Theo', 'Jonas', 'Reid',
      'Joaquin', 'Anderson', 'Gunner', 'Desmond', 'Killian', 'Romeo', 'Dallas', 'Rory', 'Felix', 'Jett',
      'Alexis', 'Ronin', 'Tobias', 'Brady', 'Cruz', 'Omar', 'Bruce', 'Louis', 'Derek', 'Kairo',
      'Dante', 'Julius', 'Callum', 'Kane', 'Wade', 'Muhammad', 'Iker', 'Jaylen', 'Crew', 'Enzo',
      'Milan', 'Dennis', 'Cash', 'Kayson', 'Nico', 'Emanuel', 'Colt', 'Rylan', 'Forrest', 'Kobe',
      'Bowen', 'Aidan', 'Drew', 'Gage', 'Abel', 'Nash', 'Phoenix', 'Kyler', 'Kyson', 'Braylon',
      'Barrett', 'Walker', 'Grant', 'Leon', 'Kameron', 'Damon', 'Corbin', 'Devin', 'Tanner', 'Jared',
      'Ryland', 'Travis', 'Holden', 'Paxton', 'Franklin', 'Clark', 'Hendrix', 'Quinn', 'Grady', 'Raiden',
      'Seth', 'Saul', 'Shane', 'Malik', 'Jeffrey', 'Ismael', 'Marshall', 'Marco', 'Emerson', 'Ruben',
      'Simon', 'Joaquin', 'Bodhi', 'Colson', 'Zayne', 'Leland', 'Malcolm', 'Derrick', 'Tate', 'Jay',
      'Kendrick', 'Kason', 'Braylen', 'Reed', 'Kian', 'Kobe', 'Reece', 'Kieran', 'Lawson', 'Davis',
      'Asa', 'Gunnar', 'Kade', 'Muhammad', 'Jensen', 'Cade', 'Darius', 'Sullivan', 'Donovan', 'Jaiden',
      'Ali', 'Kamari', 'Rocco', 'Kade', 'Chandler', 'Matias', 'Ezequiel', 'Moses', 'Jayson', 'Raul',
      'Roman', 'Armani', 'Dakota', 'Warren', 'Kian', 'Keegan', 'Troy', 'Zion', 'Luka', 'Cohen'
    ],
    
    female: [
      "Olivia", "Emma", "Charlotte", "Amelia", "Sophia", "Mia", "Isabella", "Ava", "Evelyn", "Luna",
      "Harper", "Sofia", "Camila", "Eleanor", "Elizabeth", "Violet", "Scarlett", "Emily", "Hazel", "Lily",
      "Gianna", "Aurora", "Penelope", "Aria", "Nora", "Chloe", "Ellie", "Mila", "Avery", "Layla",
      "Abigail", "Ella", "Ivy", "Grace", "Lucy", "Willow", "Emilia", "Riley", "Naomi", "Victoria",
      "Stella", "Elena", "Hannah", "Zoey", "Leah", "Madison", "Addison", "Aubrey", "Lillian", "Natalie",
      "Zoe", "Leilani", "Savannah", "Brooklyn", "Claire", "Audrey", "Aaliyah", "Kinsley", "Anna", "Delilah",
      "Serenity", "Caroline", "Valentina", "Ruby", "Sophie", "Alice", "Gabriella", "Sadie", "Ariana", "Allison",
      "Hailey", "Autumn", "Kennedy", "Genesis", "Peyton", "Josephine", "Bella", "Nevaeh", "Cora", "Melanie",
      "Maya", "Skylar", "Isla", "Jade", "Madeline", "Brielle", "Reagan", "Clara", "Eden", "Eliana",
      "Charlie", "Ayla", "Valeria", "Andrea", "Piper", "Lydia", "Alexa", "Faith", "Rose", "Arianna",
      "Aliyah", "Lilly", "Emery", "Mackenzie", "Margaret", "Brianna", "Raelynn", "Sienna", "Adeline", "Vivian",
      "Rylee", "Samantha", "Liliana", "Eloise", "Jasmine", "Athena", "Maria", "Quinn", "Iris", "Everly",
      "Kaylee", "Lyla", "Isabel", "Juliana", "Taylor", "Hadley", "Katherine", "Camille", "Arya", "Georgia",
      "Nova", "Emerson", "Adalynn", "Eliza", "Ximena", "Kayla", "Amara", "Isabelle", "Laila", "Anastasia",
      "Hayden", "Malia", "Makayla", "Rebecca", "Alina", "Bailey", "Paige", "Lyric", "Ruth", "Alaina",
      "Aspen", "Journee", "Ember", "Sawyer", "Adelyn", "Lila", "Leila", "Miriam", "Angela", "Dakota",
      "Myla", "Ana", "Amaya", "Catalina", "Daisy", "Sage", "Alivia", "Cecilia", "Alayna", "Esther",
      "Olive", "Charlee", "Brynlee", "Finley", "Maddison", "June", "Blakely", "Callie", "Juliette", "Sloane",
      "Lola", "Selena", "Tessa", "Mabel", "Kamila", "Nyla", "Delaney", "Gracie", "Rosalie", "Millie",
      "Blake", "Adriana", "Lena", "Kehlani", "River", "Kate", "Marley", "Payton", "Teagan", "Harmony",
      "Georgia", "Alana", "Freya", "Adelaide", "Briella", "Summer", "Sabrina", "Giselle", "Annie", "Olivia",
      "Phoebe", "Gemma", "Norah", "Amira", "Mckenna", "Ariella", "Makenzie", "Evangeline", "Harlow", "Rachel",
      "Gracelyn", "Zara", "Mikayla", "Annalise", "Miranda", "Haley", "Harley", "Danielle", "Ainsley", "Paris",
      "Kaitlyn", "Angelina", "Rylie", "Kiara", "Megan", "Lilliana", "Brynn", "Sierra", "Alicia", "Alessandra",
      "Fiona", "Diana", "Lana", "Carmen", "Adrianna", "Hope", "Leighton", "Nina", "Kali", "Gwendolyn",
      "Thea", "Maci", "Vivienne", "Elianna", "Alexandra", "Evelynn", "Madeleine", "Leia", "Gabrielle", "Talia",
      "Jane", "Melissa", "Camilla", "Lucia", "Skyler", "Bianca", "Mikayla", "Fatima", "Amari", "Ariel",
      "Elise", "Alexis", "Kendra", "Kelsey", "Mariana", "Shelby", "Carly", "Alondra", "Julianna", "Tatum"
    ],
  
  neutral: [
      "Riley", "Avery", "Jordan", "Peyton", "Taylor", "Hayden", "Quinn", "Emerson", "Rowan", "Parker",
      "Sawyer", "Logan", "Cameron", "Charlie", "Finley", "Elliot", "Dakota", "Reese", "Alex", "Casey",
      "Morgan", "Skyler", "Jesse", "Blake", "Jamie", "Kendall", "Drew", "Harper", "Spencer", "Sam",
      "Ryan", "Micah", "Phoenix", "River", "Shawn", "Tatum", "Dallas", "Devin", "Ellis", "Ariel",
      "Lennon", "Marley", "Remy", "Sage", "Toby", "Austen", "Blair", "Cory", "Dylan", "Frankie",
      "Gray", "Hollis", "Jaden", "Kyrie", "Lane", "Milan", "Noel", "Oakley", "Payton", "Reagan",
      "Shiloh", "Teagan", "Wren", "Zion", "Adrian", "Angel", "Arden", "Ashton", "August", "Bailey",
      "Baylor", "Blaine", "Briar", "Brook", "Campbell", "Carson", "Chandler", "Channing", "Chris", "Cody",
      "Colby", "Corey", "Darian", "Darian", "Dawson", "Denver", "Dorian", "Easton", "Eden", "Elliott",
      "Emery", "Everett", "Everly", "Ezra", "Fallon", "Flynn", "Gale", "Glenn", "Greer", "Haven",
      "Hunter", "Indiana", "Jackie", "Jaime", "Jay", "Jayden", "Jean", "Jody", "Jordan", "Jules",
      "Justice", "Kasey", "Keegan", "Kelly", "Kerry", "Kim", "Kit", "Kyle", "Landry", "Leighton",
      "Linden", "Loren", "Lou", "Lyric", "Mackenzie", "Madison", "Marion", "Marlowe", "Mason", "Max",
      "Merritt", "Monroe", "Murphy", "Nico", "Noah", "Nova", "Oakley", "Ocean", "Parker", "Perry",
      "Presley", "Quincy", "Reed", "Reese", "Rene", "Riley", "Robin", "Rory", "Rowan", "Ryan",
      "Sacha", "Sandy", "Shane", "Shannon", "Shaun", "Shawn", "Shelby", "Sidney", "Sky", "Skylar",
      "Sterling", "Storm", "Sydney", "Tanner", "Tate", "Terry", "Toby", "Tracy", "Tyler", "Val",
      "Valentine", "West", "Winter", "Yael", "Zephyr", "Zion", "Addison", "Ainsley", "Alva", "Arlo",
      "Ash", "Aspen", "Aubrey", "Bennett", "Bobby", "Bowie", "Brighton", "Carter", "Chase", "Clarke",
      "Collins", "Courtney", "Cruz", "Dakota", "Dale", "Dani", "Daryl", "Devon", "Dominique", "Drew",
      "Emerson", "Emery", "Ever", "Finley", "Gentry", "Harley", "Hollis", "Indigo", "Jaden", "Jalen",
      "Jaylin", "Jody", "Karter", "Kelsey", "Kendall", "Kennedy", "Kieran", "Kingsley", "Lennox", "London",
      "Lyric", "Marley", "Micah", "Misha", "Montana", "Nikita", "Oakley", "Onyx", "Paris", "Phoenix",
      "Quinn", "Reagan", "Reese", "Remi", "Rory", "Sage", "Sasha", "Shiloh", "Skyler", "Storm",
      "Tatum", "Toby", "Tristan", "True", "Vega", "Wren", "Zion", "Zuri", "Auden", "Bellamy",
      "Blaise", "Brady", "Camden", "Cleo", "Darcy", "Ellery", "Ellington", "Ellis", "Emory", "Fable",
      "Harlow", "Haven", "Hero", "Hollis", "Jules", "Justice", "Kai", "Kyrie", "Lake", "Lior",
      "Luca", "Marlo", "Merritt", "Nova", "Pax", "Peyton", "Piper", "Rio", "Sailor", "Scout",
      "Shia", "Sky", "Sloan", "Story", "Taj", "Tate", "Tobin", "Vesper", "Wynn", "Zephyr"    
  ]
};

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate based on selected categories
function generateBabyName() {
  const selectedPrefixes = [];

  if (document.getElementById('male').checked) {
    selectedPrefixes.push(...prefixes.male);
  }
  if (document.getElementById('female').checked) {
    selectedPrefixes.push(...prefixes.female);
  }
  if (document.getElementById('neutral').checked) {
    selectedPrefixes.push(...prefixes.neutral);
  }

  // Fallback: if nothing is selected, use all
  if (selectedPrefixes.length === 0) {
    selectedPrefixes.push(...prefixes.male, ...prefixes.female, ...prefixes.neutral);
  }

  return getRandomElement(selectedPrefixes);
}

// Function to update the displayed name
function generateAndShowName() {
  document.getElementById("nameDisplay").textContent = generateBabyName();
}

// Add event listener to button
document.getElementById("generateButton").addEventListener("click", generateAndShowName);

// Generate a name automatically when page loads
document.addEventListener("DOMContentLoaded", generateAndShowName);
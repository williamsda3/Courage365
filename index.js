// index.js

// Import the file and store its contents in an array
// index.js

// Import the file and store its contents in an array
fetch("BulletVerseT.txt")
  .then(response => response.text())
  .then(text => {
    let lines = text.split("\n");

    // Continue with the rest of your code here...
  


// Get a reference to the button and output elements
let button = document.getElementById("output-button");
let outputButton = document.getElementById("output");
let favoriteButton = document.getElementById("favorite-button");
let favoritesList = document.getElementById("favorites-list");

// Set the initial line index to 0
let lineIndex = 1;

// Define the function that will be called when the button is clicked
function outputNextLine() {
  // Output the next line from the array

  output.innerHTML = lines[lineIndex];

  // Increment the line index
  lineIndex++;

  // If the index is past the last line, reset it to 0
  if (lineIndex >= lines.length) {
    lineIndex = 0;
  }
  localStorage.setItem('verses', output.innerHTML);
}


let favorites = {};

function favoriteCurrentLine() {
  // Get the current output line
  let line = output.innerHTML;

  // Add the line to the favorites object, using the line itself as the key
  favorites[line] = true;

  // Update the favorites list
  updateFavoritesList();
  
}

// Define a function that updates the favorites list
function updateFavoritesList() {
  // Clear the current contents of the favorites list
  favoritesList.innerHTML = "";

  // Loop through the keys of the favorites object
  for (let line in favorites) {
    // Create a new list item for the current line
    let listItem = document.createElement("p");
    listItem.innerHTML = line;

    // Add the list item to the favorites list
    favoritesList.appendChild(listItem);
    
  }
  localStorage.setItem('favorites', favoritesList.innerHTML);
}

// Attach the output and favorite functions to the button's onclick events
outputButton.onclick = outputNextLine;
favoriteButton.onclick = favoriteCurrentLine;
// Attach the function to the button's onclick event
button.onclick = outputNextLine;

let saved = localStorage.getItem('favorites');
let vsaved = localStorage.getItem('verses');
if(saved && vsaved) {
  favoritesList.innerHTML = saved;
  output.innerHTML = vsaved;
}
// add a way to store data also edit favorites //
});




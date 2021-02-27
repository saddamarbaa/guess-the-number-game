// Guess The Number Game(Author: Saddam Arbaa)

// Call functions When the page is loaded
window.onload = () => {
  // button to play the game(call playGame() function)
  document.getElementById("number-submit").addEventListener("click", playGame);

  // button to Restart the game(call playGame() initGame)
  document.getElementById("restart-game").addEventListener("click", initGame);
};

//Return a random number between 1 and 100
const getRandomNumber = () => {
  /**
   * Math.random returns a number between 0 and 1,
   * and that's why we multiply it by 100
   * and add 1 to include 100
   */
  return Math.floor(Math.random() * 100 + 1);
};

// Variable to store the list of guesses
let guesses = [];

// Variable to store the correct random number
// call getRandomNumber()  function
let correctNumber = getRandomNumber();

// Functionality for playing the whole game
const playGame = () => {
  // Get user value from input and save it to variable numberGuess
  let numberGuess = document.getElementById("number-guess").value;
  if (numberGuess) {
    // call displayResult() function
    displayResult(numberGuess);

    // call saveGuessHistory() function
    saveGuessHistory(numberGuess);

    // call displayHistory() function
    displayHistory();
  }
};

// Function Display the result in HTML
// Show the result for if the guess it too high, too low, or correct
const displayResult = (numberGuess) => {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
};

// Initialize a new game by resetting all values and content on the page
const initGame = () => {
  // Reset the correctNumber
  correctNumber = getRandomNumber();

  // Reset the guesses array
  guesses = [];

  // Reset the result display (call resetResultContent() function)
  // document.getElementById("result").innerHTML = "";
  resetResultContent();

  // Reset the guess History display
  displayHistory();
};

// Reset the HTML content for guess history
const resetResultContent = () => {
  document.getElementById("result").innerHTML = "";
};

// Save guess history(the user guess entered from the input)
// Append new guess to the guesses array
const saveGuessHistory = (guess) => guesses.unshift(guess);

// Display guess history to user in HTML
const displayHistory = () => {
  // create a list of guesses
  let list = `<ul class="list-group">`;
  for (guess of guesses) {
    // string concatentation to list of guesses
    list += `<li class="list-group-item">
				You guessed : ${guess}
				</li>
				`;
  }

  list += `</ul>`;

  // add the list to html div with ID history
  document.getElementById("history").innerHTML = list;
};

// Retrieve the dialog based on if the guess is wrong or correct
const getDialog = (dialogType, text) => {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
};

const showYouWon = () => {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
};

const showNumberAbove = () => {
  const text = "Your guess is too high!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
};

const showNumberBelow = () => {
  const text = "Your guess is too low!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
};

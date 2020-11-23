/**
 * Guess The Number Game
 */

/**
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 


// Variable for store the correct random number
// call getRandomNumber()  function
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

    // blow for testing
    // showNumberBelow();
    // showNumberAbove();
    // showYouWon();
}


/**
 * Functionality for playing the whole game
 */
function playGame() {
    // Get user value from input and save it to variable numberGuess
    let numberGuess = document.getElementById("number-guess").value;
    // console.log(numberGuess); // for testing
    // call displayResult() function
    displayResult(numberGuess);
}

/**  Display the result in HTML
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
        // call showNumberAbove() function
        showNumberAbove();
    } else if (numberGuess < correctNumber) {
        // call showNumberBelow() function
        showNumberBelow();
    } else {
        // call showYouWon() function
        showYouWon();
    }
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
    // *CODE GOES BELOW HERE *
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber() {
    /**
     * Math.random returns a number between 0 and 1,
     * and that's why we multiply it by 100 
     * and add 1 to include 100
     */
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
    // *CODE GOES BELOW HERE *
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
    let index; // TODO
    let list = "<ul class='list-group'>";
    // *CODE GOES BELOW HERE *
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'won' and text parameters 
     */
    let dialog = getDialog("won", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!";
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}
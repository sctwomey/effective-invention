// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "1234567890";
var symbolCharacters = "!@#$%&*()+={}[]/';:";


function generatePassword() {

  // var passwordLength = Number(prompt("How many characters do you want for your password? Please choose a value between 8 and 128."));
  var passwordLength = Number(prompt("How many characters do you want for your password? Please choose a value between 8 and 128."));

  if (!passwordLength) {
    // If the user presses cancel, immediately ends function.
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    // Checks for correct user input, and informs user if it is incorrect.
    passwordLength = prompt("Please enter a valid number!");
  };

  // Validates whether a user wants numbers.
  var hasNumbers = confirm("Do you want numbers in your password? If so, click OK! If not, click Cancel!");

  // Validates whether a user wants lowercase letters.
  var hasLowerCaseLetters = confirm("Do you want lowercase letters in your password? If so, click OK! If not, click Cancel!")

  // Validates whether a user wants uppercase letters.
  var hasUpperCaseLetters = confirm("Do you want uppercase letters in your password? If so, click OK! If not, click Cancel!");

  // Validates whether a user wants symbols.
  var hasSymbolCharacters = confirm("Do you want any symbols in your password? If so, click OK! If not, click Cancel!");

  // Placeholder for the user choice based on responses from the prompts and confirms.
  var userSelection;

  // Conditionals for combining user choices based on prompt selections.
  if (hasNumbers && hasLowerCaseLetters && hasUpperCaseLetters && hasSymbolCharacters) {
    userSelection = numberCharacters.concat(lowerCharacters, upperCharacters, symbolCharacters);

  } else if (hasNumbers && hasLowerCaseLetters && hasUpperCaseLetters) {
    userSelection = numberCharacters.concat(lowerCharacters, upperCharacters);

  } else if (hasNumbers && hasLowerCaseLetters && hasSymbolCharacters) {
    userSelection = numberCharacters.concat(lowerCharacters, symbolCharacters);

  } else if (hasNumbers && hasUpperCaseLetters && hasSymbolCharacters) {
    userSelection = numberCharacters.concat(upperCharacters, symbolCharacters);

  } else if (hasNumbers && hasLowerCaseLetters) {
    userSelection = numberCharacters.concat(lowerCharacters);

  } else if (hasNumbers && hasUpperCaseLetters) {
    userSelection = numberCharacters.concat(upperCharacters);

  } else if (hasNumbers && hasSymbolCharacters) {
    userSelection = numberCharacters.concat(symbolCharacters);

  } else if (hasLowerCaseLetters && hasUpperCaseLetters && hasSymbolCharacters) {
    userSelection = lowerCharacters.concat(upperCharacters, symbolCharacters);

  } else if (hasLowerCaseLetters && hasUpperCaseLetters) {
    userSelection = lowerCharacters.concat(upperCharacters);

  } else if (hasLowerCaseLetters && hasSymbolCharacters) {
    userSelection = lowerCharacters.concat(hasSymbolCharacters);

  } else if (hasUpperCaseLetters && hasSymbolCharacters) {
    userSelection = upperCharacters.concat(symbolCharacters);

  } else if (hasLowerCaseLetters) {
    userSelection = lowerCharacters;

  } else if (hasUpperCaseLetters) {
    userSelection = upperCharacters;

  } else if (hasSymbolCharacters) {
    userSelection = symbolCharacters;

  } else if (hasNumbers) {
    userSelection = numberCharacters;
  };

  // Placeholder for the user password.
  var userPassword = "";

  // Iterates over the elements in the strings, randomly selecting elements from each string. Then, pushing those elements into the userPassword variable as a new string.
  for (var i = 0; i < passwordLength; i++) {
    var selection = userSelection[Math.floor(Math.random() * userSelection.length)];
    userPassword += selection;
  }

  return userPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Copy password to clipboard (w3schools.com).
function copyPassword() {
  var copyText = document.querySelector("#password");
  copyText.select();

  navigator.clipboard.writeText(copyText.value);

  alert("Copied Password: " + copyText.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

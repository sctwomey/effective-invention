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

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

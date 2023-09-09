// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordOptions {
  var passwordLength = prompt("How many characters do you want for your password?")
  var hasLowerCaseLetters = prompt("Do you want lowercase letters in your password?")
  var hasUpperCaseLetters = prompt("Do you want uppercase letters in your password?")
  var hasSpecialCharacters = prompt("Do you want any special characters in your password?")
}

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

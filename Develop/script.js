// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //prompt user for password characteristics
  var numCharacters      = prompt("How many characters would you like your password to be?")
  var doesUseLowerCase   = confirm("Would you like lower case letters in your password?")
  var doesUseUpperCase   = confirm("Would you like upper case letters in your password?")
  var doesUseNumbers     = confirm("Would you like to use numbers in your password?")
  var doesUseSpecialChar = confirm("Would you like to use special characters in your password?")

  //assign arrays to variables
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers          = "0123456789";
  var specCharacters   = "!@#$%&";

  // add users selction together to fit the users choice of characters
  

}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = generatePassword(); //the main part of the code will live in this generatePassword() function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


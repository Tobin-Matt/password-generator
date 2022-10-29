// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //prompt user for password characteristics
  var numCharacters = prompt("How many number of characters would you like your password to be?")
  
  if (numCharacters <= 8 || numCharacters >= 128) {
    alert("Please input a number between 8 and 128!")
    return;
  }

  var useLowerCase   = confirm("Would you like lower case letters in your password?")
  var useUpperCase   = confirm("Would you like upper case letters in your password?")
  var useNumbers     = confirm("Would you like to use numbers in your password?")
  var useSpecialChar = confirm("Would you like to use special characters in your password?")

  //assign arrays to variables
  var lowerCase   = "abcdefghijklmnopqrstuvwxyz";
  var upperCase   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers     = "0123456789";
  var specialChar = "!@#$%&";

  // add users selction together to fit the users choice of characters
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


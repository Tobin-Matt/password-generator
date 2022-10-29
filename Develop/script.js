// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //prompt user for password characteristics
  
  //alerts user if character selection does not meet criteria before moving to next prompt.
  while (true) {
    var numCharacters  = prompt("Choose a number between 8 and 128 for the amount of characters to use in your password.")

    //condition if user Cancels the prompt
    if(numCharacters === null) {
      return "Canceled password generation";
    }

    if(isNaN(numCharacters)) {
      alert(numCharacters + " is not a number!")
    } else if(numCharacters < 8 || numCharacters > 128) {
      alert("Please input a number between 8 and 128!")
    } else {
      break;
    }
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

  // I want an array that is filled with the user's choices
  var userCombination = [lowerCase];
  
    if(useUpperCase) {
      userCombination.push(upperCase)
    }
    if(useNumbers) {
      userCombination.push(numbers)
    }
    if(useSpecialChar) {
      userCombination.push(specialChar)
    }
    
  var securePassword = " ";
  //loop to generate one random character at a time until filled the users number choice
  for(var i = 0; i < numCharacters; i++) {
    //create variable to randomly select one of the arrays in userCombination
    var selectCharacterIndex = Math.floor(Math.random() * userCombination.length)
    //store the randomly selected array and its index in securePassword
    var storedIndex = userCombination[selectCharacterIndex]
    //randomly select a character from the character array and add that to the length of the generated password
    securePassword += storedIndex[Math.floor(Math.random() * storedIndex.length)]
  }

  return generatePassword = securePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


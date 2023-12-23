// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '\\', '|'];

var characterSet = [];



var password = '';



function generatePassword() {
  password = '';
  var passwordLength = +prompt('Please provide a password length');
  var passwordText = +prompt('confirm whether or not to include lowercase, uppercase, numeric, and/or special characters');
  var wantsLowercase = true;
  var wantsUppercase = true;
  var wantsNumbers = true;
  var wantsSpecialCharacters = false;

  console.log(passwordLength);
  console.log(passwordText);

    if(wantsLowercase) {
        characterSet = characterSet.concat(lowercase);
    }
    if(wantsUppercase) {
        characterSet = characterSet.concat(uppercase);
    }
    
    if(wantsNumbers) {
        characterSet = characterSet.concat(numbers);
    }
    
    if(wantsSpecialCharacters) {
        characterSet = characterSet.concat(specialCharacters);
    }

    if(!wantsLowercase && !wantsUppercase && !wantsNumbers && !wantsSpecialCharacters) {
      alert('Please select at least one character type.');
      return '';
    }
    
    for (var count = 0; count < passwordLength; count++) {
        var ranIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[ranIndex];
    }

    return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

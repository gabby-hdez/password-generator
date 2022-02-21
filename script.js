let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = lowercase.join(" ").toUpperCase().split(" ");
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
let number = [1234567890];

function generatePassword() {
  let passwordStr;


  return passwordStr;

}

function getLength() {
  let passwordLength = window.prompt("The password length must be a minimum of 8 characters and a maximum of 128 characters!");
  if(passwordLength.length >= 8 && passwordLength.length <=128) {
    return true;
  }
  else {
    window.alert("The password must be bewtween 8 to 128 characters!");
    return getLength();
  }

}

function getCharacterOptions() {
  let getLower = confirm("Press OK to have Lowercase characters in password!");
  let getUpper = confirm("Press OK to have Uppercase characters in password!");
  let getSpecial = confirm("Press OK to have Special characters in password!")
  let getNumbers = confirm("Press OK to have Number characters in password!");

  if (!(getLower || getUpper || getSpecial || getNumbers)) {
    let tryAgain = confirm("You must select one type of character from the options given. \nPress Ok to try again, or cancel to Quit.");

    if (tryAgain) {
      getCharacterOptions()
    }
  }
  return {
    getLower:getLower,
    getUpper:getUpper,
    getSpecial:getSpecial,
    getNumbers:getNumbers
  }

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


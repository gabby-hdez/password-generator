let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = lowercase.map((x) => x.toUpperCase());
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function generatePassword() {
  let lengthOfpassword = prompt("The password length must be between 8 to 128 characters. Enter how many characters you want to use.");

  if (!lengthOfpassword) {
    alert("Please input a number value!");
  }
  else if (lengthOfpassword < 8 || lengthOfpassword > 128) {
    lengthOfpassword = prompt("Choose between 8 to 128!");
  }
  else {
  var getLower = confirm("Press OK to have Lowercase characters in password!");
  var getUpper = confirm("Press OK to have Uppercase characters in password!");
  var getSpecial = confirm("Press OK to have Special characters in password!");
  var getNumbers = confirm("Press OK to have Number characters in password!");
  };

  if (!(getLower && getUpper && getSpecial && getNumbers)) {
    var options = alert("You must select one type of character from the options given. \nPress Ok to try again, or cancel to Quit.");

  }

  else if (getLower && getUpper && getSpecial && getNumbers) {
    options = lowercase.concat(uppercase, specialChar, number);
  }

else if (getLower && getUpper && getSpecial) {
  options = lowercase.concat(uppercase, specialChar);

}
else if (getLower && getUpper && getNumbers) {
  options = lowercase.concat(uppercase, number);

}
else if (getLower && getNumbers && getSpecial) {
  options = lowercase.concat(number, specialChar);
}
else if (getUpper && getSpecial && getNumbers) {
  options= uppercase.concat(specialChar, number);
}
else if (getUpper && getLower) {
  options = lowercase.concat(uppercase);
}
else if (getLower && getSpecial) {
  options = lowercase.concat(specialChar); 
}
else if (getLower && getNumbers) {
  options = lowercase.concat(number); 
}
else if (getUpper && getSpecial) {
  options = uppercase.concat(specialChar);
}
else if (getUpper && getNumbers) {
  options = uppercase.concat(number);
}
else if (getSpecial && getNumbers) {
  options = specialChar.concat(number);
}
else if (getLower) {
  options = lowercase;
}
else if (getUpper) {
  options = uppercase;
}
else if (getSpecial) {
  options = specialChar;
}
else if (getNumbers) {
  options = number;
};

var password = [];

for (var i = 0; i < lengthOfpassword; i++) {
  let randomOptions = options[Math.floor(Math.random() * options.length)];
  password.push(randomOptions);
}

var passwordStr = password.join("");

return passwordStr
}


function writePassword(passwordStr) {
  document.getElementById("password").textContent = passwordStr
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


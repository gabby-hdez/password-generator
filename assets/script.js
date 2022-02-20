//GLOBAL VARIABLES
//=================
//STEP1=======
//Create special character set using an array
//Create numeric character set using an array
//Create upper case character set using array 
//Create lower case character set using array



function generatePassword(){

  //STEP 2=========
//Create a variable to store the length of the password
//Create variables to store users choice for special characters, numbers, upper and lower cases
//Create a variable to store password chharacters chosen from the array pool


//STEP 3==========
//Collect user input for password length using window prompt
//Collect user options for upper case, special characters, numbers, lowercase using window confrm

//STEP 4 ==========
//Create a pool containing all characters in the chosen character sets 
//Create for loop with iterated with length input by user
/*
For each iteration ... 
create a random index from the array pool
Append the character chosen with the random index from the array pool to the password result varibale

*/

//STEP 5
//Check to make sure we incule all the characters from the character sets user choice to include in the 

//STEP 6======
//
var passwordStr;

return passwordStr;
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

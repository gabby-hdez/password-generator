##PASSWORD GENERATOR

For Week 3 we were introduced to Java Script. For this homework assignemtn we were given starter code which included the Index.HTML, Style.CSS and part of the Script.JS. Our main focus was to complete the Java Script portion of the code.

For this assignemtn we needed to use JavaScript to create a random password generator. There were certain requirements that we had to meet in order for the application to be successful which included:
    ## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
To complete the accepted Criteria we had to follow certain steps in order to be successful.

    1. Review the HTML code to see what terms you need to use to link your HTML and JS.
    2. Once you are done reviewing HTML, you move on to your JS.
    3. In your JS, first you set up your global variables for the lowercase, uppercase, numbers and special characters.
    4. Then you create your window prompts and window confirms for the criteria you want your password to contain.
    5. After that you create a n array pool that contains all the characters in the chosen character sets.
    6. Then you create an array variable for password and initialize it to an empty array.
    7. Next you create a For loop for the length of the password and in each iteration you create an random index from the array pool in Step 5.
    8. Then you check to make sure we include at least one character from the charater type (set) the user chose to inclue in the password.
    9. The last thing to do is to convert the password array to a password string and return the password string to the caller.
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

//-------------------------------------

//Determine variables into strings
var alphabet = ['abcdefghijklmnopqrstuvwxyz'];
var number = ['1234567890'];
var other = ['!@#$%^&*'];

var randomString = [''];
var yourString = [''];

//---

//Generate password function
function generatePassword() {

  //determine length
  var keyLength = prompt("How long should the password be? (MAX 50)");

  if (keyLength <= 50) {
    //determine characters to use
    var isAlphabet = confirm("Use lowercase letters?");
    var isUppercase = confirm("Use uppercase letters?");
    var isNumber = confirm("Use numbers?");
    var isOther = confirm("Use special characters?");
  
    //call to create the string and return the value
    createString();
    randomizeString();
    return yourString;
  }
  else {
  //
  alert("That is not a valid input.");
  return;
  }

}

  //function to create the desired strings values
  function createString (keyLength, isAlphabet, isUppercase, isNumber, isOther){


    if (isAlphabet === true) {
      randomString = randomString + alphabet;
    } 
else {}

    if (isUppercase === true) {
      randomString += alphabet.toUppercase();
    }
else{}

    if (isNumbers === true){
      randomString += number;
    }
else{}

    if (isOther === true){
      randomString += other;
    }
else{}

    if (isAphabet === false && isUppercase === false && isNumbers === false && isOther === false){
      return null;
    }
else{}

return;

  }

  //iterate a new string of the desired values to the desired length
  function randomizeString(randomString){

    var maxLength = randomString.length;

    for (var i = 0; i < keyLength; i++) {
      yourString += randomString.charAt(Math.floor(Math.random() * maxLength));
    }

    return;

}




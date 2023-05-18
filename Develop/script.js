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
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVYXYZ']
var number = ['1234567890'];
var other = ['!@#$%^&*'];

var randomString = [''];
var yourString = [''];

//---

//Generate password function
function generatePassword(randomString, keyLength) {

  //determine length
  var keyLength = prompt("How long should the password be? (MAX 50)");
  console.log(keyLength);

  if (keyLength <= 50) {

    //determine characters to use
    createString(randomString, keyLength);

    //randomize the string
    randomizeString(randomString, keyLength);

    return yourString;
  }
  else {
  //
  alert("That is not a valid input.");
  return;
  }

}

  //function to create the desired strings values
  function createString (keyLength, randomString){

    var randomString = [''];

    if (confirm("Use lowercase letters?") == true) {
      randomString = randomString.concat(alphabet);
    } 

    if (confirm("Use uppercase letters?") == true) {
      randomString = randomString.concat(uppercase);
    }

    if (confirm("Use numbers?") == true){
      randomString = randomString.concat(number);
    }

    if (confirm("Use special characters?") == true){
      randomString = randomString.concat(other);
    }

    if (randomString === " ") {
      alert("String empty");
    }

    console.log(randomString);

    randomString = randomString.join('');
    console.log(randomString);

    console.log(keyLength);

    randomizeString(randomString, keyLength);

  return;

  }

  //iterate a new string of the desired values to the desired length
  function randomizeString(randomString, keyLength){

    var maxLength = randomString.length;
    console.log(maxLength);
    console.log(keyLength);

    for (var i = 0; i < keyLength; i++) {
      yourString += randomString.charAt(Math.floor(Math.random() * maxLength));
    }

    console.log(yourString);
    return;

}




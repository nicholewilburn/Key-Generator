// Assignment Code
var generateBtn = document.querySelector("#generate");

//---

//Determine variables into strings
var alphabet = ['abcdefghijklmnopqrstuvwxyz'];
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVYXYZ']
var number = ['1234567890'];
var other = ['!@#$%^&*'];

//---

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//-------------------------------------

//Generate password function
function generatePassword() {

  //determine length
  var keyLength = prompt("How long should the password be? (MAX 50)");
  console.log(keyLength);

  if (keyLength <= 50) {

    //determine characters to use
    createString(keyLength);

    return; 

  }
  else {
  //
  alert("That is not a valid input.");
  return;
  }


}

  //function to create the desired strings values
  function createString (keyLength){

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

        //randomize the string
        var yourString = randomizeString(randomString, keyLength);

  return yourString;

  }

  //iterate a new string of the desired values to the desired length
  function randomizeString(randomString, keyLength){

    var yourString = [''];

    var maxLength = randomString.length;
    console.log(maxLength);

    for (var i = 0; i < keyLength; i++) {
      yourString += randomString.charAt(Math.floor(Math.random() * maxLength));
    }

    console.log(yourString);

    password = yourString;

    return yourString;

}




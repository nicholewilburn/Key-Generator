// Assignment Code
var generateBtn = document.querySelector("#generate");

//---

//Determine variables into strings
var alphabet = ['abcdefghijklmnopqrstuvwxyz'];
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVYXYZ'];
var number = ['1234567890'];
var other = ['!@#$%^&*'];

//---

// Write password to the #password input
//writePassword's only function now is to attach to the button to invoke generatePassword
//it was overwriting the string from line 101 as undefined for some reason
function writePassword() {

  generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//-------------------------------------

//Generate password function
function generatePassword() {

  //determine length
  var keyLength = prompt("How long should the password be? (8-128 characters)");
  console.log(keyLength);

  if (keyLength >= 8 && keyLength <= 128) {

    //determine characters to use
    createString(keyLength);

  }
  else {
  //
  alert("That is not a valid number.");
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

    if (randomString == '') {
      console.log(randomString);
      alert("You did not select any characters.");
      return;
    }

    console.log(randomString);

    randomString = randomString.join('');
    console.log(randomString);

        //randomize the string
        var yourString = randomizeString(randomString, keyLength);

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

    password.textContent = yourString;

    console.log(password);

}




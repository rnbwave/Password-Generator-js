function generatePassword(){
  //TODO: your code goes here
  var length = 0;
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "1234567890";
  var spe = "!@#$%^&*()`~-_=+[]{}\|;:,./<>?";
  var word = "";
  var choo = "";
  var password = "";
  
  length = prompt("Please choose a length of at least 8 characters and no more than 128 characters");
  
  if ( length < 8 || length > 128 ) {
    alert("Please choose between 8 to 128.");
    return "Please generate again.";
  }

  var incLow = confirm("Include lowercase characters?");
  var incUpp = confirm("Include uppercase characters?");
  var incNum = confirm("Include numeric characters?");
  var incSpe = confirm("Include special characters?");

  if (incLow) {
    word = word + lower;
    choo = choo + " lowercase";
  }
  if (incUpp) {
    word = word + upper;
    choo = choo + " uppercase";
  }
  if (incNum) {
    word = word + num;
    choo = choo + " numeric";
  }
  if (incSpe) {
    word = word + spe;
    choo = choo + " special";
  }

  alert("You choose" + choo + " characters.");

  for (var i=0; i<length; i++) {
    password = password + word.charAt(Math.floor(Math.random() * word.length));
  }

  return password;
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

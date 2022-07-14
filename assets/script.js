// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "qwertyuiopasdfghjklzxcvbnm";
var numerals = "1234567890"
var special = "!@#$%^&*()?-=+[];:<>_"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var characterSet = '';
  let lengthReq = lengthPrompt();
  if(!lengthReq){
    return;
  }
  if(confirm('The password will include lowercase letters.')){
    characterSet = characterSet + letters;
  }
  if(confirm('The password will include uppercase letters.')){
    characterSet = characterSet + letters.toUpperCase();
  }

  if(confirm('The password will include digits.')){
    characterSet = characterSet + numerals;
  }
  
  if(confirm('The password will include special characters.')){
    characterSet = characterSet + special;
  }
  
}

function lengthPrompt() {
  let ans = prompt('Enter desired password length. (Number 8-128').trim();
  if (ans == null) {
    return false;
  }
  else if (ans.match(/[^0-9]/)) {
    alert('Invalid input!\nInput must only contain numbers.');
    lengthPrompt();
  }
  else if (Number(ans) < 8 || Number(ans) > 128) {
    alert('Invalid input!\nInput must be a number between 8 and 128.');
    lengthPrompt();
  }
  else {
    return Number(ans);
  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  let lengthReq = lengthPrompt();

  //ask if lowercase

  //ask if uppercase

  //ask if numeric

  //ask if special
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

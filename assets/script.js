// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "qwertyuiopasdfghjklzxcvbnm";
var numerals = "1234567890"
var special = "!@#\$%\^\&*\)\(+=._-"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var characterGroups = [];
  var characterSet = '';
  var pass = '';
  let lengthReq = lengthPrompt();
  if (!lengthReq) {
    return;
  }
  if (confirm('The password will include lowercase letters.')) {
    characterGroups.push(letters);
  }
  if (confirm('The password will include uppercase letters.')) {
    characterGroups.push(letters.toUpperCase());
  }

  if (confirm('The password will include digits.')) {
    characterGroups.push(numerals);
  }

  if (confirm('The password will include special characters.')) {
    characterGroups.push(special);
  }

  if (characterGroups.length == 0) {
    alert('Error!\nNo characters selected for password generation.\nPlease try again.');
    return;
  }

  characterSet = characterGroups.join('');

  while (true) {
    let verified = true;
    for (i = 0; i <= lengthReq; i++) {
      pass += characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    for (i = 0; i <= characterGroups.length; i++) {
      if (!pass.match(RegExp(`[${characterGroups[i]}]`))) {
        verified = false;
        break;
      }
    }
    if (verified) {
      break;
    }
  }
  return pass;
}

function lengthPrompt() {
  let ans = prompt('Enter desired password length.(Number 8-128)');
  if (ans == null) {
    return false;
  }
  else {
    ans = ans.trim();
  }

  if (ans.match(/[^0-9]/)) {
    alert('Invalid input!\nInput must only contain numbers.');
    return lengthPrompt();
  }
  else if (Number(ans) < 8 || Number(ans) > 128) {
    alert('Invalid input!\nInput must be a number between 8 and 128.');
    return lengthPrompt();
  }
  else {
    return Number(ans);
  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

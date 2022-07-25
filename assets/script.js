// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "qwertyuiopasdfghjklzxcvbnm";
var numerals = "1234567890"
var special = "!@#\$%\^\&*\)\(+=._-"

// Write password to the #password input element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var characterGroups = [];
  var characterSet = '';
  var pass = '';
  //Run the function to prompt the user for the length of the password
  let lengthReq = lengthPrompt();
  if (!lengthReq) {
    //Exit generate password function if the length prompt was cancelled
    return;
  }
  if (confirm('The password will include lowercase letters.')) {
    //Add lowercase letters to the character groups array
    characterGroups.push(letters);
  }
  if (confirm('The password will include uppercase letters.')) {
    //Add uppercase letters to the character groups array
    characterGroups.push(letters.toUpperCase());
  }

  if (confirm('The password will include digits.')) {
    //Add digits to the character groups array
    characterGroups.push(numerals);
  }

  if (confirm('The password will include special characters.')) {
    //Add special characters to the character groups array
    characterGroups.push(special);
  }

  if (characterGroups.length == 0) {
    alert('Error!\nNo characters selected for password generation.\nPlease try again.');
    //Exit generate password function if the character groups array is empty
    return;
  }

  //Merge the items in the character groups array into a single string
  characterSet = characterGroups.join('');

  while (true) {
    let verified = true;
    pass = '';
    for (i = 0; i < lengthReq; i++) {
      //Add a random character from the character set string to the password
      pass += characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    for (i = 0; i < characterGroups.length; i++) {
      //If the password does not include a character from the character group
      if (!pass.match(RegExp(`[${characterGroups[i]}]`))) {
        verified = false;
        //Exit the for loop
        break;
      }
    }
    //If the verified bool is equal to True
    if (verified) {
      //Exit the while loop
      break;
    }
  }
  return pass;
}

function lengthPrompt() {
  let ans = prompt('Enter desired password length.(Number 8-128)');
  if (ans == null) {//If the user selected cancel
    return false;
  }
  else {
    //Remove whitespace from user input
    ans = ans.trim();
  }


  if (ans.match(/[^0-9]/)) {//If the user input includes and non-digit character
    alert('Invalid input!\nInput must only contain numbers.');
    return lengthPrompt();
  }
  else if (Number(ans) < 8 || Number(ans) > 128) {//If the user input is not a number between 8 and 128
    alert('Invalid input!\nInput must be a number between 8 and 128.');
    return lengthPrompt();
  }
  else {
    return Number(ans);
  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

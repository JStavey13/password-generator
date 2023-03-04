// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = lowerCase.map(element => {
  return element.toUpperCase();
});
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spclChar = ["!", "#", "$", "^", "&"];
var includeLowerCase;
var includeUppercase;
var includeNumbers;
var includeSpclChar;


var megaArray = []
var ensuredChars = []

function userChoices() {
  includeLowerCase = confirm("click ok if you want lowercase characters.")
  console.log(includeLowerCase);

  includeUppercase = confirm("click ok if you want uppercase characters.")
  
  includeNumbers = confirm("Click ok if you want numbers.")
  
  includeSpclChar = confirm("Click ok if you want Special Characters.")

if (includeLowerCase || includeUppercase || includeNumbers || includeSpclChar) {
  return
}
else {
alert("Please select one of the options")
userChoices()
}
}

function generatePassword() {
const passwordLength = prompt("How long would you like your password?")

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please select a number between 8 and 128")
  generatePassword()
}

userChoices()


// include a confirm variable for each array ^




if (includeLowerCase === true) {
 var index =  Math.floor(Math.random() * megaArray.length)
 ensuredChars.push(lowerCase[index]);
  megaArray = megaArray + lowerCase
}

if (includeUppercase === true) {
 
megaArray = megaArray + upperCase + ensuredChars

}

if (includeNumbers === true) {
  
megaArray = megaArray + numbers + ensuredChars
  
}

if (includeSpclChar === true) {
  megaArray = megaArray + spclChar + ensuredChars
 
}

 for (var i = 0; i < passwordLength; i++) {


var index = Math.floor(Math.random() * megaArray.length)
var password = ''
console.log(password)
for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * megaArray.length);
  password += megaArray[index];
}
return password;
}
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






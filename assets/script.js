// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // length prompt 
  let passwordLength = prompt("How many characters generated? Please state number between 10 and 64")
    // Using an if statements to remind user of length requirements 
  if (passwordLength < 10) {
    alert("Password must be at least 10 characters");
  }
  else if (passwordLength > 64) { 
    alert("password must not exceed 64 characters");
  }
}


// Checking for different character types 
  //Include lowercase 
  let LowCase = confirm("Include lower case?");

  //Include uppercase 
  let UpCase = confirm("Include upper case?");

  //Include numbers
  let passNum = confirm("Include numbers?");

  // Include special characters
  let SpecChar = confirm("Include special characters?");

  //prompt if no character type included. 
  if (Lowcase === false && passupcase === false && passnum === false && passspecchar === false) { 
    alert("Must include at least one character type")
  }

 // Store password options in object. 
let userPassOptions = { 
  length: passwordLength,
  lowercase: LowCase,
  uppercase: UpCase,
  numbers: passNum,
  specialCharacters: SpecChar,
}

// Link password options to variable character arrays listed at top of document to create an array of the users choice. 
if (userPasswordOptions.specialCharacters === true) {
  UserPassArray = UserPassArray.concat(specialCharacters);
}
if (userPasswordOptions.containsNumbers === true) {
  UserPassArray = UserPassArray.concat(numericCharacters);
}
if (userPasswordOptions.lowercase === true) {
  UserPassArray = UserPassArray.concat(lowerCasedCharacters);
}
if (userPasswordOptions.uppercase === true) {
  UserPassArray = UserPassArray.concat(upperCasedCharacters);
}
console.log(UserPassArray);


// Function for getting a random element from an array
function getRandom(arr) {

}
  // Using a for loop math random to generate an array from the password options. 
  var randompass = Math.floor(Math.random() * UserPassArray.length)

console.log(randompass) 
// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
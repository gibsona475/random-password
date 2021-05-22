// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  //Prompt user for password length
  var length = prompt("How Many Charaters Do You Want?");

  while (length < 8 || length > 128) {
    alert("Please Enter Password Between 8-128 Characters");
    //updating the value of the same variable 
    length = prompt("How Many Charaters Do You Want?");
  }

  var confirmLowerCase = confirm("Would You Like To Include Lowercase Letters?");
  var confirmUpperCase = confirm("Would You Like To Include Uppercase Letters?");
  var confirmNumeric = confirm("Would You Like To Include Number?");
  var confirmSpecial = confirm("Would You Like To Include Special Charaters?");

  // console.log("Include lowerCase", confirmLowerCase);
  // console.log("Include upperCase", confirmUpperCase);

  let retVal = "",
    charset = "";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric = "0123456789"
  const special = "!@#$%^&*()"
  console.log(length);
  if (confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecial === false) {
    alert("Must Select One Charater Type");
  } else {
  

    //In case if confirmLowerCase is true then add characters to my charset variable 
    if (confirmLowerCase === true) {
      charset = charset + lowerCaseChars;
    }

    if (confirmUpperCase === true) {
      charset = charset + upperCaseChars;
    }
    if (confirmNumeric === true) {
      charset = charset + numeric;
    }
    // console.log(charset);
    if (confirmSpecial === true) {
      charset = charset + special;
    }
    console.log(charset);

    //loop until password length 
    for(var i = 0; i<length; i++){
      //generating RANDOM NUMBER based on the CHARSET  
      var randomIndex = Math.floor(Math.random() * charset.length); 

      console.log("Random Letter", charset.charAt(randomIndex));
      //Adding the final outcome to the retVAl variable 
      retVal = retVal + charset.charAt(randomIndex);
      console.log("Ret Val", retVal);
    }
  }

  //returns password 
  return retVal; 

}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

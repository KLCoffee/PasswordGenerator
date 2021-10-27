// PASSWORD GENERATOR

// Character Generator Functions

// Function that accepts a string value as an arugument and returns a random index number from the string
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}
randomIndex();

// Function that returns a random lowercase letter
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
// Returning a random letter using a random index in the "letters" string 
    return letters[randomIndex(letters)];
}

// Function that returns a random uppercase letter
function getRandomUpper(){
// Running the "getRandomLower" function to create a random letter and setting that value to the letter variable
    const letter = getRandomLower();
    // changing the random letter to uppercase and returning it from the function

    return letter.toUpperCase();
}

// Function that retrun a random number as Random Number as a string value)
function getRandomNumber(){
    const numbers = `0123456789`;
    // Returning a random number using a random index in the "numbers" string
    return numbers[randomIndex(numbers)];
}

// Function that retrun a random symbol 
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
// Returning a random symbol using a random index in the "letters" string
    return symbols[randomIndex(symbols)];
}

// Object to store all the character generator functions

const randomFunctions = {
    lower: getRandomLower,
    lower: getRandomUpper,
    lower: getRandomNumber,
    lower: getRandomSymbol
};

// Selecting the DOM Elements
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

// Function that accepts true or false values as well as a number as arguments
// NOTE: The checkbox inputs and number/length input will determine the value/arguments entered into this function
function generatePassword(lower, upper, number, symbol, length){
 
    console.log(lower, upper, number, symbol, length);
// 1. CREATE THE PASSWORD VARIABLE
let generatedPassword = ``;
// 2. FILTER OUT UNCHECKED OPTIONS
// True and false values can be added together (True is 1 and false is 0)
// NOTE: The value set to typesCount will be used when building the password
const typesCount = lower + upper + number + symbol;

// If user has not selected any of the four options, then display alert and return an empty string from the function so the password displayed will just be an empty string ending the function.
if (typesCount === 0){
    alert(`Please select at least one option.`);
    // Return keyword stops/ends the execution of a function (does not run any of the code on the lines that follow the return in the function)
    return ``;
}

// Creating an array of arrays.  The first item in each nested array holds the value of a string that will be used to access a function in the randomFunctions object.  The second item in each nested array is one of the values passed into this generatePassword function.
let typesArray = [
    [`lower`, lower],
    [`upper`, upper],
    [`number`, number],
    [`symbol`, symbol]
];

// The filter method creates a new array with all the items that "pass the test" implemented by the provided function (All the items that cause the function to return a boolean value of ture when function is run using the item as an arguement for the item parameter in this exmaple)
// Checking if the value for each item in the array is true or false.  Removes the item from the array if it is false.
typesArray = typesArray.filter(item => {
    console.log(item[1]);
    return item[1];
});
// 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
// Building password with a for loop
// The value of "Length" is the value selected for the length number input
for (i =0; i<length; i += typesCount){
//    One of the items in the updated/filtered version of the typesArray will be the value/argument passed into the type parameter each time the anonymous arrow function is run/executed
    typesArray.forEach(type => {
        const funcName = type[0];
        console.log(funcName);
        // Accessing and running/executing a function in the randomFunctions object.  Adding/concatenating the value returned from the accessed function to the generatedPassword string variable
        generatedPassword += randomFunctions[funcName]();
        console.log(generatedPassword);
    });
}

// 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION
// Removing extra characters if necessary (the above loop will create a password that may not match the length selected if that length is not a multiple of the number of options/checkboxes selected.)
const finalPassword = generatedPassword.slice(0, length);
console.log(finalPassword);
return finalPassword;
}

generatePassword(true,true,true,true,10);
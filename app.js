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




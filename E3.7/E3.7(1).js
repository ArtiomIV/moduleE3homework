let number1 = Number(prompt("Enter the firts number: "));
let number2 = Number(prompt("Enter the second number: "));
let numCounter = number1;

function displayNumber(num1, num2){
    if (numCounter <= num2){
        console.log(numCounter)
        numCounter += 1;
    }
}

const intervalId = setInterval(displayNumber, 1000, number1, number2)
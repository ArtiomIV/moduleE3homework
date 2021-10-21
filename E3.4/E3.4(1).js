let numb = Number(prompt("Enter the nubmer: "))

function isPrime(num) {
    if (num <= 1000) {
        for(i = 2, s = Math.sqrt(num); i < s; i++) {
            if (num % i == 0){
                return false
            } else {
                return true
            }
        }
        return num > 1
    } else {
        return("Invalid number should be <= 1000")
    }
}

console.log(isPrime(numb))
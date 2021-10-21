let arr = [1, null, 4, 6, 7, 8, 9]
let odd = 0
let even = 0
let zero = 0
let notNumber = 0

function getParity(arr, odd, even, zero, notNumber) {
    for (i = 0; i < 6; i++){
        if (typeof(arr[i]) == "number") {
            if (arr[i] % 2 == 0){
                even += 1
            } else if (arr[i] % 2 != 0) {
                odd += 1
            } else if (arr[i] == 0) {
                zero += 1
            }
        } else {
            notNumber += 1
        }
    }
    console.log(`Array contains ${even} even elements`)
    console.log(`Array contains ${odd} odd elements`)
    console.log(`Array contains ${zero} elements equal to 0`)
    console.log(`Array contains ${notNumber} not number elements`)
}

getParity(arr, odd, even, zero, notNumber);
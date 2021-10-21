let numb = Number(prompt("Enter the nubmer: "))

function getNumb(num){
    return num
}

function getSum(func, num){
    return (func + num)
}

const resultFunc = getSum(getNumb(numb), numb);

console.log(resultFunc)
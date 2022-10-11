const sumAll = function(numOne, numTwo) {
    if (typeof numOne != "number" || typeof numTwo != "number") {
        return "ERROR"
    }
    if (numOne < 0 || numTwo < 0) {
        return "ERROR"
    }
    let answer = 0
    if (numOne > numTwo) {
        let temp = numOne
        numOne = numTwo
        numTwo = temp
    }

    for (let i = numOne; i <= numTwo; i++) {
        answer += i;
    }

    return answer
};

//create a loop setting i to numOne and looping til numTwo
//add each loop to the sum of answer
//in the loop, we need to take numOne and add numOne+1 to numOne
//1+ (1+1) + (1+2) + (1+3) for sumAll(1,4)

// Do not edit below this line
module.exports = sumAll;

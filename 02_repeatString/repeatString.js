const repeatString = function(word, n) {
    let answer =""
    if (n < 0) {
        return "ERROR"
    }
    for (let i = 0; i < n; i++) {
        answer += word
    }
    return answer
};

// Do not edit below this line
module.exports = repeatString;